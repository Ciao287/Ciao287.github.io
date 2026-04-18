if (new Date().getMonth() === 11) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/style/style-winter.css';
    const style = document.getElementById('style');
    if (style) {
        style.parentNode.insertBefore(link, style);
    } else {
        document.head.appendChild(link);
    };
};