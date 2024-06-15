document.addEventListener('DOMContentLoaded', function() {
    const stickerInputs = document.querySelectorAll('.sticker input');
    const mensajeTotal = document.getElementById('mensajeTotal');
    const verifyButton = document.getElementById('verificar');

    verifyButton.addEventListener('click', updateTotal);

    function updateTotal() {
        let total = 0;
        stickerInputs.forEach(input => {
            total += parseInt(input.value) || 0;
        });

        if (total > 10) {
            mensajeTotal.textContent = "Llevas demasiados stickers";
        } else {
            mensajeTotal.textContent = `Llevas ${total} stickers`;
        }
    }
});
