// Handles signup form input

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();

  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    //check response status
    if (response.ok) {
      console.log('success');
      document.location.reload();
      // autoLogout();
    } else {
      alert(response.statusText);
    }
  }
}

// Waits for submit(click/enter) on signup form
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

// Handles login form input

async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('api/users/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

// Waits for submit(click/enter) on login form
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
