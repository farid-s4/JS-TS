document.addEventListener('DOMContentLoaded', (event) => {
    let slider : HTMLInputElement  | null = document.querySelector('.slider');
    let sliderValue : HTMLElement  | null = document.querySelector('.value');
    if (sliderValue && slider != null) {
        slider.addEventListener('input', (e) => {
            if (slider){
                sliderValue.textContent = slider.value;
                document.body.style.fontSize = slider.value + "px";
            }
        });
    }
});

