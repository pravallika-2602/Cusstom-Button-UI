const btn = document.getElementById('customBtn');

btn.addEventListener('click', () => {
  btn.classList.toggle('toggled');

  if (btn.classList.contains('toggled')) {
    btn.textContent = "Toggled On";
  } else {
    btn.textContent = "Click Me";
  }
});
