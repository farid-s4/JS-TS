class CssObject {
    private selector : string;
    private styles : {[key: string]: string };
    constructor(selector : string) {
        this.selector = selector;
        this.styles = {};
    }
    setSelector(selector :string) : void {
        this.selector = selector;
    }
    setStyles(prop : string, value : string) : void {
        this.styles[prop] = value;
    }
    removeStyles(styleName : string) : void {
        delete this.styles[styleName];
    }
    getCss(){
        let result = "";
        result += "." + this.selector;
        result += "{"
        for (let i in this.styles) {
            result += `${i}: ${this.styles[i]}; `;
        }
        result += "}";
        return result;
    }
}

class HTMLObj{
    private selector: string;
    private autoClose: boolean;
    public text: string;
    private attributes: { [key: string]: string };
    private children: HTMLObj[];
    private styles: CssObject;
    constructor(selector : string, autoClose : boolean = false, text : string = "") {
        this.selector = selector;
        this.autoClose = autoClose;
        this.text = text;
        this.attributes = {};
        this.children = [];
        this.styles = new CssObject("");
    }
    setAttributes(prop: string, value :string) : void {
        this.attributes[prop] = value;
    }
    addToEndChildren(children : HTMLObj) : void {
        this.children.push(children);
    }
    addChildrenToStart(children : HTMLObj) : void {
        this.children.unshift(children);
    }

    getStyles(){
        let s = "";
        let styles = this.styles.getCss();
        if (styles){
            s += "<style>"
            s += styles;
            s += "</style>";
        }
        return s;
    }

    getHTML(){
        let result = "";
        let attributes = "";
        for (let i in this.attributes) {
            attributes += ` ${i} = "${this.attributes[i]}" `;
        }

        let html = `<${this.selector}${attributes}`;
        if (this.autoClose) {
            html += " />";
            return html;
        } else {
            html += ">";
        }
        if (this.text) {
            html += this.text;
        }
        for (const i of this.children) {
            html += i.getHTML();
        }
        html += `</${this.selector}>`;
        return html;
    }
}

const wrapStyle = new CssObject("wrap");
wrapStyle.setStyles("display", "flex");

const blockStyle = new CssObject("block");
blockStyle.setStyles("width", "300px");
blockStyle.setStyles("margin", "10px");

const imgStyle = new CssObject("img");
imgStyle.setStyles("width", "100%");

const textStyle = new CssObject("text");
textStyle.setStyles("text-align", "justify");

const wrapper = new HTMLObj("div");
wrapper.setAttributes("id", "wrapper");
wrapper.setAttributes("class", "wrap");

const block1 = new HTMLObj("div");
block1.setAttributes("class", "block");

const h3_1 = new HTMLObj("h3", false, "What is Lorem Ipsum?");

const img1 = new HTMLObj("img", true);
img1.setAttributes("class", "img");
img1.setAttributes("src", "lipsum.jpg");
img1.setAttributes("alt", "Lorem Ipsum");

const p1 = new HTMLObj("p");
p1.setAttributes("class", "text");
p1.text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const link1 = new HTMLObj("a", false, "More...");
link1.setAttributes("href", "https://www.lipsum.com/");
link1.setAttributes("target", "_blank");

p1.addToEndChildren(link1);
block1.addToEndChildren(h3_1);
block1.addToEndChildren(img1);
block1.addToEndChildren(p1);

const block2 = new HTMLObj("div");
block2.setAttributes("class", "block");

const h3_2 = new HTMLObj("h3", false, "What is Lorem Ipsum?");

const img2 = new HTMLObj("img", true);
img2.setAttributes("class", "img");
img2.setAttributes("src", "lipsum.jpg");
img2.setAttributes("alt", "Lorem Ipsum");

const p2 = new HTMLObj("p");
p2.setAttributes("class", "text");
p2.text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const link2 = new HTMLObj("a", false, "More...");
link2.setAttributes("href", "https://www.lipsum.com/");
link2.setAttributes("target", "_blank");

p2.addToEndChildren(link2);
block2.addToEndChildren(h3_2);
block2.addToEndChildren(img2);
block2.addToEndChildren(p2);

wrapper.addToEndChildren(block1);
wrapper.addToEndChildren(block2);

let styles = "<style>"
styles += wrapStyle.getCss() + blockStyle.getCss() + textStyle.getCss() + imgStyle.getCss() + "</style>";
console.log(styles);
console.log(wrapper.getHTML());

document.addEventListener("DOMContentLoaded", () => {
    document.write(styles);
    document.write(`${wrapper.getHTML()}\n`);
})