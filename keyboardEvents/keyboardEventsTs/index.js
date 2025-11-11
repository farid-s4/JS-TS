document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".myButton");
    if (!button)
        return;
    button.addEventListener("mouseover", function () {
        button.style.color = "red";
    });
    button.addEventListener("mouseout", function () {
        button.style.color = "black";
    });
    var myT = document.querySelectorAll(".myTableRow");
    myT.forEach(function (i) {
        i.addEventListener("mouseover", function () {
            i.style.background = "red";
        });
        i.addEventListener("mouseout", function () {
            i.style.background = "white";
        });
    });
    var lnkEl = document.querySelector(".myTooltip");
    if (lnkEl) {
        lnkEl.addEventListener("mouseover", function () {
            var tooltip = lnkEl.querySelector(".tooltip");
            if (tooltip) {
                tooltip.style.visibility = "visible";
                tooltip.style.opacity = "1";
            }
        });
        lnkEl.addEventListener("mouseout", function () {
            var tooltip = lnkEl.querySelector(".tooltip");
            if (tooltip) {
                tooltip.style.visibility = "hidden";
                tooltip.style.opacity = "0";
            }
        });
    }
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        var menu = document.querySelector('.myContextMenu');
        if (menu) {
            var menuStyle = menu.style;
            menuStyle.display = "block";
            menuStyle.top = "".concat(e.pageY, "px");
            menuStyle.left = "".concat(e.pageX, "px");
        }
    });
    window.addEventListener("click", function () {
        var menu = document.querySelector(".myContextMenu");
        if (menu) {
            menu.style.display = "none";
        }
    });
});
