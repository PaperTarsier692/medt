function toggle_dark_mode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var button = document.getElementById('darkModeButton')
  button.classList.toggle('dark-mode');
  button.classList.toggle('light-mode');
}
