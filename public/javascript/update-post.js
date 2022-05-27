async function postUpdateFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('#update-post-title').value.trim();
  const content = document.querySelector('#update-post-content').value.trim();
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  console.log(title);
  console.log(content);
  console.log(post_id);

  if (title && content) {
    const response = await fetch(`/api/posts/${post_id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        content,
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

async function postDeleteFormHandler(event) {
  event.preventDefault();

  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  console.log(post_id);

  const response = await fetch(`/api/posts/${post_id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.update-post-form')
  .addEventListener('submit', postUpdateFormHandler);

document
  .querySelector('.delete-post-btn')
  .addEventListener('click', postDeleteFormHandler);
