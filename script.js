//your JS code here. If required.
const loginForm = document.getElementById('loginForm');
const existingButton = document.getElementById('existing');
// Load existing user details if available
window.onload = () => {
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    existingButton.style.display = 'block';
  }
};

// Handle form submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const rememberMe = document.getElementById('checkbox').checked;

  if (rememberMe) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  alert(`Logged in as ${username}`);
  existingButton.style.display = rememberMe ? 'block' : 'none';
});

// Handle existing user login
existingButton.addEventListener('click', () => {
  const savedUsername = localStorage.getItem('username');
  alert(`Logged in as ${savedUsername}`);
});