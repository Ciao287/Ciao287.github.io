const formattedTime = new Date().toLocaleTimeString(undefined, {hour: '2-digit', minute: '2-digit'});
document.getElementById('hour').textContent = `Today at ${formattedTime}`;

if (new Date().getMonth() === 11) {
    document.querySelector('link.style').href = '/style/style-winter.css';
};