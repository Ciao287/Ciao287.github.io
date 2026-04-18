const formattedTime = new Date().toLocaleTimeString(undefined, {hour: '2-digit', minute: '2-digit'});
document.getElementById('hour').textContent = `Today at ${formattedTime}`;
console.log('test')
if (new Date().getMonth() === 11) {
    const styleLink = document.querySelector('.style');
    console.log('found:', styleLink);
    if (styleLink) {
        styleLink.href = '/style/style-winter.css';
    }
};