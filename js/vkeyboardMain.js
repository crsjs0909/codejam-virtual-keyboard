var vk;
var screen;
main();

function initKeyboard() {
    vk = new Vkeyboard("i_am_da_one");
    let row0 = new Vkrow("r_0");
    row0.add(new Vkey("192_0", ["`", "ё"], ["~", "Ё"]))
        .add(new Vkey("49_0", ["1", "1"], ["!", "!"]))
        .add(new Vkey("50_0", ["2", "2"], ["@", "\""]))
        .add(new Vkey("51_0", ["3", "3"], ["#", "№"]))
        .add(new Vkey("52_0", ["4", "4"], ["$", ";"]))
        .add(new Vkey("53_0", ["5", "5"], ["%", "%"]))
        .add(new Vkey("54_0", ["6", "6"], ["^", ":"]))
        .add(new Vkey("55_0", ["7", "7"], ["&", "?"]))
        .add(new Vkey("56_0", ["8", "8"], ["*", "*"]))
        .add(new Vkey("57_0", ["9", "9"], ["(", "("]))
        .add(new Vkey("48_0", ["0", "0"], [")", ")"]))
        .add(new Vkey("189_0", ["-", "-"], ["_", "_"]))
        .add(new Vkey("187_0", ["=", "="], ["+", "+"]))
        .add(new Vkey("8_0", [], [], "BACKSPACE").setWidth(145)
            .setKeyPressHandler(function () {
            screen.value=screen.value.substr(0, screen.value.length-1);
        }));


    let row1 = new Vkrow("r_1");
    row1.add(new Vkey("9_0", [], [], "tab").setWidth(70))
        .add(new Vkey("81_0", ["q", "й"], ["Q", "Й"]))
        .add(new Vkey("87_0", ["w", "ц"], ["W", "Ц"]))
        .add(new Vkey("69_0", ["e", "у"], ["E", "У"]))
        .add(new Vkey("82_0", ["r", "к"], ["R", "К"]))
        .add(new Vkey("84_0", ["t", "е"], ["T", "Е"]))
        .add(new Vkey("89_0", ["y", "н"], ["Y", "Н"]))
        .add(new Vkey("85_0", ["u", "г"], ["U", "Г"]))
        .add(new Vkey("73_0", ["i", "ш"], ["I", "Ш"]))
        .add(new Vkey("79_0", ["o", "щ"], ["O", "Щ"]))
        .add(new Vkey("80_0", ["p", "з"], ["P", "З"]))
        .add(new Vkey("219_0", ["[", "х"], ["[", "Х"]))
        .add(new Vkey("221_0", ["]", "ъ"], ["]", "Ъ"]))
        .add(new Vkey("220_0", ["\\", "\\"], ["|", "/"]))
        .add(new Vkey("46_0", [], [], "del").setWidth(70)
            .setKeyPressHandler(function () {
                screen.value=screen.value.substr(1, screen.value.length-1);
        }));

    let row2 = new Vkrow("r_2");
    row2.add(new Vkey("20_0", [], [], "caps").setWidth(125)
        .setKeyPressHandler(function () {  //caps on/off indicator
            let id="20_0_on";
        vk.switchCaps();
        if(vk.caps){
            let on = document.createElement('div');
            on.setAttribute("class", "caps-on");
            on.setAttribute("id", id);
            document.getElementById("20_0").appendChild(on);
        }
        else {
            let on=document.getElementById(id);
            if (on) {
                document.getElementById("20_0").removeChild(on);
            }
        }
    }))
        .add(new Vkey("65_0", ["a", "ф"], ["A", "Ф"]))
        .add(new Vkey("83_0", ["s", "ы"], ["S", "Ы"]))
        .add(new Vkey("68_0", ["d", "в"], ["D", "В"]))
        .add(new Vkey("70_0", ["f", "а"], ["F", "А"]))
        .add(new Vkey("71_0", ["g", "п"], ["G", "П"]))
        .add(new Vkey("72_0", ["h", "р"], ["H", "Р"]))
        .add(new Vkey("74_0", ["j", "о"], ["J", "О"]))
        .add(new Vkey("75_0", ["k", "л"], ["K", "Л"]))
        .add(new Vkey("76_0", ["l", "д"], ["L", "Д"]))
        .add(new Vkey("186_0", [";", "ж"], [":", "Ж"]))
        .add(new Vkey("222_0", ["'", "э"], ["\"", "Э"]))
        .add(new Vkey("13_0", ["\n", "\n"], ["\n", "\n"], "enter").setWidth(125));

    let row3 = new Vkrow("r_3");
    row3.add(new Vkey("16_1", [], [], "shift").setWidth(125))
        .add(new Vkey("90_0", ["z", "я"], ["Z", "Я"]))
        .add(new Vkey("88_0", ["x", "ч"], ["X", "Ч"]))
        .add(new Vkey("67_0", ["c", "с"], ["C", "С"]))
        .add(new Vkey("86_0", ["v", "м"], ["V", "М"]))
        .add(new Vkey("66_0", ["b", "и"], ["B", "И"]))
        .add(new Vkey("78_0", ["n", "т"], ["N", "Т"]))
        .add(new Vkey("77_0", ["m", "ь"], ["M", "Ь"]))
        .add(new Vkey("188_0", [",", "б"], ["<", "Б"]))
        .add(new Vkey("190_0", [".", "ю"], [">", "Ю"]))
        .add(new Vkey("191_0", ["/", "."], ["?", ","]))
        .add(new Vkey("38_0", [], [], "↑"))
        .add(new Vkey("16_2", [], [], "shift").setWidth(125));

    let row4 = new Vkrow("r_4");
    row4.add(new Vkey("17_1", [], [], "ctrl").setWidth(80))
        .add(new Vkey("91_1", [], [], "win").setWidth(70))
        .add(new Vkey("18_1", [], [], "alt").setWidth(70))
        .add(new Vkey("32_0", [" ", " "], [" ", " "]).setWidth(225))
        .add(new Vkey("18_2", [], [], "alt").setWidth(70))
        .add(new Vkey("17_2", [], [], "ctrl").setWidth(80))
        .add(new Vkey("37_0", [], [], "←"))
        .add(new Vkey("40_0", [], [], "↓"))
        .add(new Vkey("39_0", [], [], "→"))
        .add(new Vkey("45_0", [], [], "ins").setWidth(70));

    vk.add(row0)
        .add(row1)
        .add(row2)
        .add(row3)
        .add(row4);
}

function handleKeyDown(event) {
    if (vk.off)
        return;
    let id = event.keyCode + "_" + event.location;
    let val = document.getElementById(id).className;
    val = val.replace(/\bdefault\b/g, "").trim() + " pressed";
    document.getElementById(id).className = val;
}

function handleKeyUp(event) {
    if (vk.off)
        return;
    let id = event.keyCode + "_" + event.location;
    let val = document.getElementById(id).className;
    val = val.replace(/\bpressed\b/g, "").trim() + " default";
    document.getElementById(id).className = val;
}

function bindArea() {
    screen.addEventListener("keyup", handleKeyUp);
    screen.addEventListener("keydown", handleKeyDown);
    vk.off=false;
}

function unBindArea() {
    screen.removeEventListener("keyup", handleKeyUp);
    screen.removeEventListener("keydown", handleKeyDown);
    vk.off=true;
    //preserve from 'key sticking' on focus lost
    vk.render(document.getElementById("here"));
}

function main() {
    document.body.innerHTML="<div class='wrapper'>\n" +
        "    <textarea id=\"console\"></textarea>\n" +
        "    <div id=\"here\"></div>\n" +
        "</div>";

    screen=document.getElementById("console");
    initKeyboard();
    screen.addEventListener("blur", unBindArea);
    screen.addEventListener("focus", bindArea);
    vk.render(document.getElementById("here"));

    let oldLayout=window.sessionStorage.getItem("vk_layout");
    console.log(oldLayout);
    if (oldLayout===undefined || oldLayout===null){
        oldLayout=0;
    }
    vk.setLayout(oldLayout);

    document.addEventListener('keydown', function (event) {
        if (event.altKey && event.shiftKey) {
            vk.switchLayout();
            window.sessionStorage.setItem("vk_layout", vk.layout);
        }
    });
}
