const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.getElementsByClassName('#email-login')
  const password = document.getElementsByClassName('#password-login')

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.getElementsByClassName('#name-signup').value.trim();
  const email = document.getElementsByClassName('#email-signup').value.trim();
  const password = document.getElementsByClassName('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};
if (document.location.pathname === "/login"){
  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
}else if (document.location.pathname ==="/signup"){
  // document
  // .querySelector('.signup-form')
  // .addEventListener('submit', signupFormHandler);

}



