const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { Post, User, Comment } = require('../models');

// This gets all the posts and loads the homepage
router.get('/', (req, res) => {
  Post.findAll({
    attributes: ['id', 'title', 'content', 'created_at'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbPostData) => {
      // pass a single post object into the homepage template
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// This gets a single post and loads the single post page
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'title', 'content', 'created_at'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      // serialize the data
      const post = dbPostData.get({ plain: true });

      // pass data to the template
      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// This gets a comment and loads the comment update/delete form
router.get('/comment/:id', withAuth, (req, res) => {
  console.log(req.params.id);
  Comment.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    include: {
      model: User,
      attributes: ['username'],
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      // serialize the data
      const comment = dbPostData.get({ plain: true });
      console.log(comment);
      // pass data to the template
      res.render('comment', {
        comment,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// All this does is load the form to add a new post
router.get('/new', (req, res) => {
  res.render('new-post');
});

module.exports = router;
