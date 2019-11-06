class Composer {
    constructor(id) {
        this.id = id;
        this.childs = [];
    }

    add(rows) {
        this.childs.push(rows);
        return this;
    }

    render(parent) {
        let e = parent ? parent : document.getElementById(this.id);
        e.innerHTML = this.childs.map(e=>e.skel()).join("\n");//add nodes into DOM
        this.childs.forEach(r => r.render()); //render each node
    }

    setLayout(num) {
        this.childs.forEach(r => r.setLayout(num));
    }

    skel() {
        return "<div id=\"" + this.id + "\"></div>"
    }
}

class Vkeyboard extends Composer {
    constructor(id) {
        super(id);
        this.caps = false;
        this.layout = 0;
    }

    switchLayout() {
        vk.layout = (vk.layout + 1) % 2;
        vk.setLayout(vk.layout);
    }

    switchCaps() {
        vk.caps=!vk.caps;
    }

    skel() {
        return "<div class=\"vkeyboard\" id=\"" + this.id + "\"></div>"
    }
}

class Vkrow extends Composer {
    constructor(id) {
        super(id);
    }

    skel() {
        return "<div class=\"vkrow\" id=\"" + this.id + "\"></div>"
    }
}

class Vkey extends Composer {
    constructor(id, charset, upharset, caption) {
        super(id);
        this.charset = charset;
        this.upcharset = upharset;
        this.caption = caption; //control key signature
        this.layout = 0;
    }

    //override
    setLayout(layout) {
        this.layout = layout;
        this.render(); //redraw element;
    }

    getChar(uppercase) {
        let ch=uppercase ? this.upcharset[this.layout] : this.charset[this.layout];
        return ch===undefined?null:ch;
    }

    keyUp() {
        let val = document.getElementById(this.id).className;
        val = val.replace(/\bhold\b/g, "").trim() + " free";
        document.getElementById(this.id).className=val;
    }

    keyPress() {
        let char=this.getChar(vk.caps);
        if (char!==null) {
            screen.value+=char;
        }
    }

    keyDown() {
        let val = document.getElementById(this.id).className;
        val = val.replace(/\bfree\b/g, "").trim() + " hold";
        document.getElementById(this.id).className=val;
    }

    //override
    render() {
        let e = document.getElementById(this.id);
        if (this.caption) { //render control key
            e.getElementsByTagName("char")[0].innerHTML = this.caption;
            e.getElementsByTagName("upchar")[0].innerHTML = "";
        }
        else {
            e.getElementsByTagName("char")[0].innerHTML = this.charset[this.layout];
            //do not render upper case letters or chars wits same upchar
            if (this.charset[this.layout].toUpperCase() !== this.upcharset[this.layout]) {
                e.getElementsByTagName("upchar")[0].innerHTML = this.upcharset[this.layout];
            }
        }
        //custom width
        if (this.w) {
            document.getElementById(this.id).setAttribute("style", "width: " + this.w + "px;");
        }
        this.bindEvents(e);
    }

    setWidth(w) {
        this.w = w;
        return this;
    }

    //support custom keypress events
    setKeyPressHandler(fun) {
        this.keyPress=fun;
        return this;
    }

    //override
    skel() {
        return "<div class=\"vkey\" id=\"" + this.id + "\">\n" +
            "    <char></char>\n" +
            "    <upchar></upchar>\n" +
            "</div>"
    }

    bindEvents(element){
        let o=this;
        element.onclick=function () {
            o.keyPress();
        };
        element.onmouseleave=function () {
            o.keyUp();
        };
        element.onmousedown=function () {
            o.keyDown();
        };
        element.onmouseup=function () {
            o.keyUp();
        };
    }
}

