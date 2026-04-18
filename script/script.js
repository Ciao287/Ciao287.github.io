const formattedTime = new Date().toLocaleTimeString(undefined, {hour: '2-digit', minute: '2-digit'});
document.getElementById('hour').textContent = `Today at ${formattedTime}`;