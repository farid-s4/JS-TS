var CssObject = /** @class */ (function () {
    function CssObject(selector) {
        this.selector = selector;
        this.styles = {};
    }
    CssObject.prototype.setSelector = function (selector) {
        this.selector = selector;
    };
    CssObject.prototype.setStyles = function (prop, value) {
        this.styles[prop] = value;
    };
    CssObject.prototype.removeStyles = function (styleName) {
        delete this.styles[styleName];
    };
    CssObject.prototype.getCss = function () {
        var result = "";
        result += "." + this.selector;
        result += "{";
        for (var i in this.styles) {
            result += "".concat(i, ": ").concat(this.styles[i], "; ");
        }
        result += "}";
        return result;
    };
    return CssObject;
}());
var HTMLObj = /** @class */ (function () {
    function HTMLObj(selector, autoClose, text) {
        if (autoClose === void 0) { autoClose = false; }
        if (text === void 0) { text = ""; }
        this.selector = selector;
        this.autoClose = autoClose;
        this.text = text;
        this.attributes = {};
        this.children = [];
        this.styles = new CssObject("");
    }
    HTMLObj.prototype.setAttributes = function (prop, value) {
        this.attributes[prop] = value;
    };
    HTMLObj.prototype.addToEndChildren = function (children) {
        this.children.push(children);
    };
    HTMLObj.prototype.addChildrenToStart = function (children) {
        this.children.unshift(children);
    };
    HTMLObj.prototype.getStyles = function () {
        var s = "";
        var styles = this.styles.getCss();
        if (styles) {
            s += "<style>";
            s += styles;
            s += "</style>";
        }
        return s;
    };
    HTMLObj.prototype.getHTML = function () {
        var result = "";
        var attributes = "";
        for (var i in this.attributes) {
            attributes += " ".concat(i, " = \"").concat(this.attributes[i], "\" ");
        }
        var html = "<".concat(this.selector).concat(attributes);
        if (this.autoClose) {
            html += " />";
            return html;
        }
        else {
            html += ">";
        }
        if (this.text) {
            html += this.text;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var i = _a[_i];
            html += i.getHTML();
        }
        html += "</".concat(this.selector, ">");
        return html;
    };
    return HTMLObj;
}());
var wrapStyle = new CssObject("wrap");
wrapStyle.setStyles("display", "flex");
var blockStyle = new CssObject("block");
blockStyle.setStyles("width", "300px");
blockStyle.setStyles("margin", "10px");
var imgStyle = new CssObject("img");
imgStyle.setStyles("width", "100%");
var textStyle = new CssObject("text");
textStyle.setStyles("text-align", "justify");
var wrapper = new HTMLObj("div");
wrapper.setAttributes("id", "wrapper");
wrapper.setAttributes("class", "wrap");
var block1 = new HTMLObj("div");
block1.setAttributes("class", "block");
var h3_1 = new HTMLObj("h3", false, "What is Lorem Ipsum?");
var img1 = new HTMLObj("img", true);
img1.setAttributes("class", "img");
img1.setAttributes("src", "lipsum.jpg");
img1.setAttributes("alt", "Lorem Ipsum");
var p1 = new HTMLObj("p");
p1.setAttributes("class", "text");
p1.text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
var link1 = new HTMLObj("a", false, "More...");
link1.setAttributes("href", "https://www.lipsum.com/");
link1.setAttributes("target", "_blank");
p1.addToEndChildren(link1);
block1.addToEndChildren(h3_1);
block1.addToEndChildren(img1);
block1.addToEndChildren(p1);
var block2 = new HTMLObj("div");
block2.setAttributes("class", "block");
var h3_2 = new HTMLObj("h3", false, "What is Lorem Ipsum?");
var img2 = new HTMLObj("img", true);
img2.setAttributes("class", "img");
img2.setAttributes("src", "lipsum.jpg");
img2.setAttributes("alt", "Lorem Ipsum");
var p2 = new HTMLObj("p");
p2.setAttributes("class", "text");
p2.text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
var link2 = new HTMLObj("a", false, "More...");
link2.setAttributes("href", "https://www.lipsum.com/");
link2.setAttributes("target", "_blank");
p2.addToEndChildren(link2);
block2.addToEndChildren(h3_2);
block2.addToEndChildren(img2);
block2.addToEndChildren(p2);
wrapper.addToEndChildren(block1);
wrapper.addToEndChildren(block2);
var styles = "<style>";
styles += wrapStyle.getCss() + blockStyle.getCss() + textStyle.getCss() + imgStyle.getCss() + "</style>";
console.log(styles);
console.log(wrapper.getHTML());
document.addEventListener("DOMContentLoaded", function () {
    document.write(styles);
    document.write("".concat(wrapper.getHTML(), "\n"));
});
