var display = "0";
var num = [];
var math = [];
var ans = 0.0;
var clickedSymbol=false;
var advance=false;

function keyboard(id) {
    if(display.length<19){
        clickedSymbol=false;
        if((display==""||display=="0")&&id=="pi"){
            display="3.14";
        } else{
            if(display.charAt(0)=="0"){
                display=id;
            } else{
                if(display.includes(".")&&id=="."){
                    display=display;
                } else{
                    if(id!="pi"){
                        display += id;
                    }
                }
            }
        }
    }
}

function addition() {
    if(!clickedSymbol){
        num.push(display);
        math.push("+");
        display = "";
        clickedSymbol=true;
    }
}

function subtraction() {
    if(!clickedSymbol){
        num.push(display);
        math.push("-");
        display = "";
        clickedSymbol=true;
    }
}

function multiplication() {
    if(!clickedSymbol){
        num.push(display);
        math.push("*");
        display = "";
        clickedSymbol=true;
    }
}

function division() {
    if(!clickedSymbol){
        num.push(display);
        math.push("\/");
        display = "";
        clickedSymbol=true;
    }
}

function equal() {
    if(display==""){
        num.push("0");
    } else{
        num.push(display);
    }
  ans = parseFloat(num[0]);
  for (var i = 0; i <= num.length-1; i++) {
    if (math[i] == "+") {
      ans = ans+ parseFloat(num[i + 1]);
      console.log(ans);
    } else if (math[i] == "-") {
      ans -= parseFloat(num[i + 1]);
    } else if (math[i] == "*") {
      ans *= parseFloat(num[i + 1]);
    } else if(math[i]=="/"){
      ans /= parseFloat(num[i + 1]);
    }
  }
  display = String(ans);
  num=[];
  math=[];
}

function roundAns(){
    if(display.includes(".")){
        display=display.slice(0,display.indexOf("."));
    }
}

function deleteKey(){
    display=display.slice(0,display.length-1);
}

function clearDisplay(){
    display="0";
    num=[];
    math=[];
}

document.addEventListener("keydown",function(key){
    switch(key.code){
        case "Digit0":
            keyboard("0");
            break;
        case "Digit1":
            keyboard("1");
            break;
        case "Digit2":
            keyboard("2");
            break;
        case "Digit3":
            keyboard("3");
            break;
        case "Digit4":
            keyboard("4");
            break;
        case "Digit5":
            keyboard("5");
            break;
        case "Digit6":
            keyboard("6");
            break;
        case "Digit7":
            keyboard("7");
            break;
        case "Digit8":
            keyboard("8");
            break;
        case "Digit9":
            keyboard("9");
            break;
        case "Period":
            keyboard(".");
            break;
        case "Backspace":
            deleteKey();
            break;
        case "NumpadAdd":
            addition();
            break;
        case "Minus":
            subtraction();
            break;
        case "NumpadMultiply":
            multiplication();
            break;
        case "Slash":
            division();
            break;
        case "Equal":
            equal();
            break;
        case "Enter":
            equal();
            break;
        case "KeyR":
            roundAns();
            break;
        default:
            break;
    }
});

function advanced(){
    if(advance){
        document.getElementById("display").style.width="465px";
        for(var i=0;i<document.getElementsByClassName("advanceCalc").length;i++){
            document.getElementsByClassName("advanceCalc")[i].style.visibility="collapse";
        }
        advance=false;
    } else{
        document.getElementById("display").style.width="965px";
        for(var i=0;i<document.getElementsByClassName("advanceCalc").length;i++){
            document.getElementsByClassName("advanceCalc")[i].style.visibility="visible";
        }
        advance=true;
    }
}

function percentage(){
    display=parseFloat(display)/100;
    equal();
}

function square(){
    display=parseFloat(display)*parseFloat(display);
    equal();
}

function squareRoot(){
    if(!display.includes("-")){
        display=Math.sqrt(parseFloat(display));
        equal();
    }
}

setInterval(function() {
    if(!clickedSymbol&&(display==""||display=="-")){
        display="0";
    }
    document.getElementById("display").innerHTML = display;
});
