const button = document.getElementById('showMessage');
const message = document.getElementById('message');

button.addEventListener('click', function() {
    if (message.style.display === 'none') {
        message.style.display = 'block';
        button.textContent = 'Verberg bericht';
    } else {
        message.style.display = 'none';
        button.textContent = 'Klik hier!';
    }
});
