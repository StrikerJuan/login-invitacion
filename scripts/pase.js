document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);

    const header = urlParams.get('header');
    const body = urlParams.get('body');
    const cantidad = urlParams.get('cantidad');
    const footer = urlParams.get('footer');

    document.getElementById('body-head').textContent = header;
    document.getElementById('body-body').textContent = body;
    document.getElementById('body-cant').textContent = cantidad;
    document.getElementById('body-foot').textContent = footer;
});