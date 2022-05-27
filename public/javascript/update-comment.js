async function commentUpdateFormHandler(event) {
  event.preventDefault();

  const comment_text = document
    .querySelector('#update-comment-text')
    .value.trim();

  const comment_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (comment_text) {
    const response = await fetch(`/api/comments/${comment_id}`, {
      method: 'PUT',
      body: JSON.stringify({
        comment_text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

async function commentDeleteFormHandler(event) {
  event.preventDefault();

  const comment_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/comments/${comment_id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.update-comment-form')
  .addEventListener('submit', commentUpdateFormHandler);

document
  .querySelector('.delete-comment-btn')
  .addEventListener('click', commentDeleteFormHandler);
