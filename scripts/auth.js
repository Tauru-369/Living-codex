document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user === 'Tauru' && pass === '369Ru') {
    alert('Access Granted. Codex Unlocked.');
  } else {
    alert('Access Denied. You shall not pass.');
  }
});
