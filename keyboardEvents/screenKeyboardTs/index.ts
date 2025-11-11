document.addEventListener('DOMContentLoaded', (event: Event) => {
    const input: HTMLInputElement | null = document.querySelector('.inputText');
    const keys: NodeListOf<HTMLElement> = document.querySelectorAll('.key');
    let caps: boolean = false;

    document.addEventListener('keydown', (e: KeyboardEvent) => {
        keys.forEach((key: HTMLElement) => {
            if (e.key.toLowerCase() === key.textContent?.toLowerCase()) {
                key.style.background = "#555";
            }
        });
    });

    document.addEventListener('keyup', (e: KeyboardEvent) => {
        keys.forEach((key: HTMLElement) => {
            if (e.key.toLowerCase() === key.textContent?.toLowerCase()) {
                key.style.background = "#2d2d2d";
            }
        });
    });

    keys.forEach((key: HTMLElement) => {
        key.addEventListener('mousedown', (e: MouseEvent) => {
            key.style.background = "#555";
        });
    });

    keys.forEach((key: HTMLElement) => {
        key.addEventListener('mouseup', (e: MouseEvent) => {
            key.style.background = "#2d2d2d";
        });
    });

    keys.forEach((key: HTMLElement) => {
        key.addEventListener('click', (event: MouseEvent) => {
            const inp: string | null = key.textContent;

            if (!input) return;

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
                        } else {
                            input.value += inp;
                        }
                    }
                    break;
                }
            }
        });
    });
});