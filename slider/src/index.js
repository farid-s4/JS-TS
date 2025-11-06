document.addEventListener('DOMContentLoaded', function (event) {
    var slider = document.querySelector('.slider');
    var sliderValue = document.querySelector('.value');
    if (sliderValue && slider != null) {
        slider.addEventListener('input', function (e) {
            if (slider) {
                sliderValue.textContent = slider.value;
                document.body.style.fontSize = slider.value + "px";
            }
        });
    }
});
