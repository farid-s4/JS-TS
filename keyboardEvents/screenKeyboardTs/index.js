document.addEventListener('DOMContentLoaded', function (event) {
    var input = document.querySelector('.inputText');
    var keys = document.querySelectorAll('.key');
    var caps = false;
    document.addEventListener('keydown', function (e) {
        keys.forEach(function (key) {
            var _a;
            if (e.key.toLowerCase() === ((_a = key.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase())) {
                key.style.background = "#555";
            }
        });
    });
    document.addEventListener('keyup', function (e) {
        keys.forEach(function (key) {
            var _a;
            if (e.key.toLowerCase() === ((_a = key.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase())) {
                key.style.background = "#2d2d2d";
            }
        });
    });
    keys.forEach(function (key) {
        key.addEventListener('mousedown', function (e) {
            key.style.background = "#555";
        });
    });
    keys.forEach(function (key) {
        key.addEventListener('mouseup', function (e) {
            key.style.background = "#2d2d2d";
        });
    });
    keys.forEach(function (key) {
        key.addEventListener('click', function (event) {
            var inp = key.textContent;
            if (!input)
                return;
            switch (inp) {
                case 'Backspace': {
                    input.value = input.value.slice(0, -1);
                    break;
                }
                case 'Enter': {
                    input.value += '\n';
                    break;
                }
                case 'Tab': {
                    input.value += '\t';
                    break;
                }
                case 'Space': {
                    input.value += ' ';
                    break;
                }
                case 'Caps': {
                    caps = !caps;
                    key.classList.toggle('active', caps);
                    break;
                }
                case 'Shift': {
                    document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Shift' }));
                    break;
                }
                case 'Alt': {
                    document.dispatchEvent(new KeyboardEvent('keydown', {
                        'key': 'Alt',
                        'code': 'AltLeft',
                        'altKey': true
                    }));
                    break;
                }
                case 'Ctrl': {
                    document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Control' }));
                    break;
                }
                default: {
                    if (inp) {
                        if (!caps) {
                            input.value += inp.toLowerCase();
                        }
                        else {
                            input.value += inp;
                        }
                    }
                    break;
                }
            }
        });
    });
});
