document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector(".myButton");
    let color = button.getAttribute("color");
    button.addEventListener("mouseover", function() {
        button.style.color = "red";
    })
    button.addEventListener("mouseout", function() {
        button.style.color = color;
    })

    let myT = document.querySelectorAll(".myTableRow");

    for (let i of myT ){
        i.addEventListener("mouseover", function() {
            i.style.background = "red";
        })
        i.addEventListener("mouseout", function() {
            i.style.background = color;
        })
    }

    let lnkEl = document.querySelector(".myTooltip");
    lnkEl.addEventListener("mouseover", function() {
        lnkEl.querySelector(".tooltip").style.visibility = "visible";
        lnkEl.querySelector(".tooltip").style.opacity = "1";
    })
    lnkEl.addEventListener("mouseout", function() {
        lnkEl.querySelector(".tooltip").style.visibility = "hidden";
        lnkEl.querySelector(".tooltip").style.opacity = "1";
    })

    document.addEventListener('contextmenu', e => {
        e.preventDefault();
        const menu = document.querySelector('.myContextMenu').style;
        menu.display = "block";
        menu.top = `${e.pageY}px`;
        menu.left = `${e.pageX}px`;
    });
    window.addEventListener("click", () => {
        document.querySelector(".myContextMenu").style.display = "none";
    });
})