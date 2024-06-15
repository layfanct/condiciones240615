document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('foto');

    image.addEventListener('click', function() {
        image.classList.toggle('borde');
    });
});
