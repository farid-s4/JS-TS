document.addEventListener('DOMContentLoaded', (event) => {
    let slider = document.querySelector('.slider');
    let sliderValue = document.querySelector('.value');
    slider.addEventListener('input', (e) => {
        sliderValue.textContent = slider.value;
        document.body.style.fontSize = slider.value + "px";
    })
})