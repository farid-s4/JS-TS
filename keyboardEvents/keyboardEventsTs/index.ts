document.addEventListener("DOMContentLoaded", (): void => {
    const button: HTMLElement | null = document.querySelector(".myButton");

    if (!button) return;

    button.addEventListener("mouseover", (): void => {
        button.style.color = "red";
    });

    button.addEventListener("mouseout", (): void => {
        button.style.color = "black";
    });

    const myT: NodeListOf<HTMLElement> = document.querySelectorAll(".myTableRow");


    myT.forEach((i: HTMLElement): void => {
        i.addEventListener("mouseover", (): void => {
            i.style.background = "red";
        });

        i.addEventListener("mouseout", (): void => {
            i.style.background = "white";
        });
    });

    const lnkEl: HTMLElement | null = document.querySelector(".myTooltip");

    if (lnkEl) {
        lnkEl.addEventListener("mouseover", (): void => {
            const tooltip: HTMLElement | null = lnkEl.querySelector(".tooltip");
            if (tooltip) {
                tooltip.style.visibility = "visible";
                tooltip.style.opacity = "1";
            }
        });

        lnkEl.addEventListener("mouseout", (): void => {
            const tooltip: HTMLElement | null = lnkEl.querySelector(".tooltip");
            if (tooltip) {
                tooltip.style.visibility = "hidden";
                tooltip.style.opacity = "0";
            }
        });
    }

    document.addEventListener('contextmenu', (e: MouseEvent): void => {
        e.preventDefault();
        const menu: HTMLElement | null = document.querySelector('.myContextMenu');

        if (menu) {
            const menuStyle: CSSStyleDeclaration = menu.style;
            menuStyle.display = "block";
            menuStyle.top = `${e.pageY}px`;
            menuStyle.left = `${e.pageX}px`;
        }
    });

    window.addEventListener("click", (): void => {
        const menu: HTMLElement | null = document.querySelector(".myContextMenu");
        if (menu) {
            menu.style.display = "none";
        }
    });
});