const signupErrEl = document.querySelector('#signup-err');
const signupFormHandler = async (event) => {
  try {
    event.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    if (!username || !email || !password) {
      Promise.resolve()
      .then(
        () => {
          signupErrEl.classList.remove('hide-before-error');
          signupErrEl.classList.add('show-after-error');
        }
      ).then(
        () => {
          setTimeout(
            () => {
              signupErrEl.classList.remove('show-after-error');
              signupErrEl.classList.add('hide-before-error');
            }, 3000
          );
        }
      )
      .catch(err => {
        console.log(err);
      });
    }
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(
        {
          username: username,
          email: email,
          password: password
        }
      ),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {

      document.location.reload(); 
    } else {
      console.log("There was an error."); 
      console.log(response.statusText);
      response.json().then(json => console.log(json)); 
    }
  } catch (error) {
    console.log(error);
  }
};
document.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);

const loginErrEl = document.querySelector('#login-err');
const loginFormHandler = async (event) => {
  try {
    event.preventDefault();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    if (!email || !password) {
      Promise.resolve()
      .then(
        () => {
          loginErrEl.classList.remove('hide-before-error');
          loginErrEl.classList.add('show-after-error');
        }
      ).then(
        () => {
          setTimeout(
            () => {
              loginErrEl.classList.remove('show-after-error');
              loginErrEl.classList.add('hide-before-error');
            }, 3000
          );
        }
      )
      .catch(err => {
        console.log(err);
      });
    }
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify(
        {
          email: email,
          password: password
        }
      ),
      headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
      document.location.replace('/')
    } else {
      console.log("There was an error");
    } 
  } catch (error) {
    console.log(error);
  }
};
document.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);