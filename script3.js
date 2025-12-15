const lamp = document.getElementById('lamp');
let isOn = false;

lamp.addEventListener('click', () => {
    if (!isOn) {
        // Acende a lâmpada
        lamp.src = 'assets/lamp_on.png';
        document.body.style.background = 'radial-gradient(circle, yellow 1%, black 100%)';
        isOn = true;
    } else {
        // Apaga a lâmpada
        lamp.src = 'assets/lamp_off.png';
        document.body.style.background = 'radial-gradient(circle, white 1%, black 100%)';
        isOn = false;
    }
    
});


