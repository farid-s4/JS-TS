document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.querySelector('.inputText');
    let keys = document.querySelectorAll('.key');
    let caps = false;
    document.addEventListener('keydown', (e) => {
        keys.forEach((key) => {
            if (e.key.toLowerCase() === key.textContent.toLowerCase()) {
                key.style.background = "#555";
            }
        })
    })
    document.addEventListener('keyup', (e) => {
        keys.forEach((key) => {
            if (e.key.toLowerCase() === key.textContent.toLowerCase()) {
                key.style.background = "#2d2d2d";
            }
        })
    })

    keys.forEach(key => {
        key.addEventListener('mousedown', (e) => {
            key.style.background = "#555";
        });
    });
    keys.forEach(key => {
        key.addEventListener('mouseup', (e) => {
            key.style.background = "#2d2d2d";
        });
    });

    keys.forEach(key => {
        key.addEventListener('click', (event) => {
            let inp = key.textContent;
            switch (inp) {
                case 'Backspace':{
                    input.value = input.value.slice(0, -1);
                    break;
                }
                case 'Enter':{
                    input.value += '\n';
                    break;
                }
                case 'Tab':{
                    input.value += '\t';
                    break;
                }
                case 'Space':{
                    input.value += ' ';
                    break;
                }
                case 'Caps':{
                    caps = !caps;
                    key.classList.toggle('active', caps);
                    break;
                }
                case 'Shift':{
                    document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Shift' }));
                    break;
                }
                case 'Alt':{
                    document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Alt', 'code': 'AltLeft', 'altKey': true }));
                    break;
                }
                case 'Ctrl':{
                    document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Ctrl' }));
                    break;
                }
                default: {
                    if (!caps){
                        input.value += inp.toLowerCase()
                    }
                    else{
                        input.value += inp;
                    }
                    break;
                }
            }

        })
    })
})