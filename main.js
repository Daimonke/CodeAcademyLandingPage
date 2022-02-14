const modeButton = document.querySelector('.modeButton');
modeButton.addEventListener('click', () => {
modeButton.classList.toggle('enabled')
document.querySelectorAll('*').forEach(item => {
    item.classList.toggle('light')
    })
if(modeButton.classList.contains('enabled')){
    modeButton.textContent = 'Dark mode';
} else {
    modeButton.textContent = 'Light mode';
}
  })