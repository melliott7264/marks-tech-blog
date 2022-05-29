const router = require('express').Router();
const sequelize = require('../config/connection');
// withAuth makes sure that someone is logged it to access the dashboard - not necessarily the owner of the post
const withAuth = require('../utils/auth');
const { Post, User, Comment } = require('../models');

// This route is used just for the dashboard page - Could have put this in home-routes as '/dashboard'
router.get('/', withAuth, (req, res) => {
  Post.findAll({
    where: {
      // use user id from the session
      user_id: req.session.user_id,
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
      // pass a single post object into the homepage template
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render('dashboard', {
        posts,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
