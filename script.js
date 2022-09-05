var display = "0";
var num = [];
var math = [];
var ans = 0.0;
var clickedSymbol=false;
var advance=false;
var darkTheme=true;
var radian=true;

function keyboard(id) {
    //see if want to remmove this boundary if advance is turned on
    if(display.length<19){
        clickedSymbol=false;
        if((display==""||display=="0")&&(id=="pi"||id=="e")){
            if(id=="pi"){
                display=Math.PI;
            }
            if(id=="e"){
                display=Math.E;
            }
        } else{
            if(display.charAt(0)=="0"){
                if(id=="()"){
                    display="(";
                } else{
                    display=id;
                }
            } else{
                if(display.includes(".")&&id=="."){
                    display=display;
                } else{
                    if(id!="pi"&&id!="e"){
                        if(id=="()"&&display.includes("(")){
                            display+=")";
                        } else{
                            display += id;
                        }
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

document.getElementById("advancedButton").addEventListener("mouseover",function(){
    if(advance){
        if(darkTheme){
            document.getElementById("advancedButton").style.backgroundColor="rgb(2, 104, 2)";
        } else{
            document.getElementById("advancedButton").style.backgroundColor="skyblue";
        }
    } else{
        document.getElementById("advancedButton").style.backgroundColor="rgb(46, 46, 46)";
    }
});
document.getElementById("advancedButton").addEventListener("mouseleave",function(){
    if(advance){
        if(darkTheme){
            document.getElementById("advancedButton").style.backgroundColor="rgb(26, 63, 26)";
        } else{
            document.getElementById("advancedButton").style.backgroundColor="rgb(57, 101, 188)";
        }
    } else{
        document.getElementById("advancedButton").style.backgroundColor="black";
    }
});

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
        case "KeyA":
            advanced();
            break;
        case "KeyP":
            percentage();
            break;
        default:
            break;
    }
});

function advanced(){
    if(advance){
        document.getElementById("advancedButton").style.backgroundColor="black";
        document.getElementById("display").style.width="465px";
        for(var i=0;i<document.getElementsByClassName("advanceCalc").length;i++){
            document.getElementsByClassName("advanceCalc")[i].style.visibility="collapse";
        }
        advance=false;
    } else{
        if(darkTheme){
            document.getElementById("advancedButton").style.backgroundColor="rgb(26, 63, 26)";
        } else{
            document.getElementById("advancedButton").style.backgroundColor="rgb(57, 101, 188)";
        }
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

function factorial(){
    let factorialAns=1;
    if(parseFloat(display)>=0&&!display.includes(".")){
        if(parseFloat(display)==0){
            display=1;
        } else{
            for(let i=1;i<=parseFloat(display);i++){
                factorialAns*=i;
            }
            display=factorialAns;
        }
        equal();
    }
}

function logFunction(){
    if(parseFloat(display)>=0){
        display=Math.log10(parseFloat(display));
        equal();
    }
}

function lnFunction(){
    if(parseFloat(display)>=0){
        display=Math.log(parseFloat(display));
        equal();
    }
}

function degree(){
    radian=false;
    if(darkTheme){
        document.getElementById("degree").style.color="green";
    } else{
        document.getElementById("degree").style.color="skyblue";
    }
    document.getElementById("radian").style.color="white";
}

function rad(){
    radian=true;
    if(darkTheme){
        document.getElementById("radian").style.color="green";
    } else{
        document.getElementById("radian").style.color="skyblue";
    }
    document.getElementById("degree").style.color="white";
}

function sin(){
    if(radian){
        display=Math.sin(parseFloat(display));
    } else{
        display=parseFloat(display)*(Math.PI/180);
        display=Math.sin(parseFloat(display));
    }
    equal();
}

function cos(){
    if(radian){
        display=Math.cos(parseFloat(display));
    } else{
        display=parseFloat(display)*(Math.PI/180);
        display=Math.cos(parseFloat(display));
    }
    equal();
}

function tan(){
    if(radian){
        display=Math.tan(parseFloat(display));
    } else{
        display=parseFloat(display)*(Math.PI/180);
        display=Math.tan(parseFloat(display));
    }
    equal();
}

function inverseSin(){
    if(radian){
        display=Math.asin(parseFloat(display));
    } else{
        display=Math.asin(parseFloat(display));
        display=parseFloat(display)*(180/Math.PI);
    }
    equal();
}

function inverseCos(){
    if(radian){
        display=Math.acos(parseFloat(display));
    } else{
        display=Math.acos(parseFloat(display));
        display=parseFloat(display)*(180/Math.PI);
    }
    equal();
}

function inverseTan(){
    if(radian){
        display=Math.atan(parseFloat(display));
    } else{
        display=Math.atan(parseFloat(display));
        display=parseFloat(display)*(180/Math.PI);
    }
    equal();
}

function changeTheme(theme){
    if(theme=="sun"){
        darkTheme=false;
        document.getElementById("sun").style.color="skyblue";
        document.getElementById("moon").style.color="white";
        document.getElementById("case").style.backgroundColor="rgb(199, 216, 250)";
        document.getElementById("display").style.backgroundColor="rgb(57, 101, 188)";
        document.getElementById("advancedButton").style.backgroundColor="rgb(57, 101, 188)";
        if(radian){
            if(darkTheme){
                document.getElementById("radian").style.color="green";
            } else{
                document.getElementById("radian").style.color="skyblue";
            }
        } else{
            if(darkTheme){
                document.getElementById("degree").style.color="green";
            } else{
                document.getElementById("degree").style.color="skyblue";
            }
        }
    } else{
        darkTheme=true;
        document.getElementById("moon").style.color="green";
        document.getElementById("sun").style.color="white";
        document.getElementById("case").style.backgroundColor="rgb(98, 98, 100)";
        document.getElementById("display").style.backgroundColor="rgb(26, 63, 26)";
        document.getElementById("advancedButton").style.backgroundColor="rgb(26, 63, 26)";
        if(radian){
            if(darkTheme){
                document.getElementById("radian").style.color="green";
            } else{
                document.getElementById("radian").style.color="skyblue";
            }
        } else{
            if(darkTheme){
                document.getElementById("degree").style.color="green";
            } else{
                document.getElementById("degree").style.color="skyblue";
            }
        }
    }
}/*
var squareobj=document.getElementById("square");
var ySpeed=0;
var gravity=0.6;

document.addEventListener("keyup",function(key){
    if(key.code=="Space"){
        ySpeed=-10;
    }
});*/

setInterval(function() {
    /*
    ySpeed+=gravity;
    squareobj.style.top=squareobj.offsetTop+ySpeed+"px";
    if(squareobj.offsetTop+squareobj.offsetHeight>=window.innerHeight){
        squareobj.style.top=window.innerHeight-squareobj.offsetHeight+"px";
        ySpeed=0;
    }*/
    if(!clickedSymbol&&(display==""||display=="-")){
        display="0";
    }
    document.getElementById("display").innerHTML = display;
    /*
    if(document.getElementById("square").offsetLeft>window.innerWidth){
        document.getElementById("square").style.left="0px";
    }
    document.getElementById("square").style.left=document.getElementById("square").offsetLeft+1+"px";*/
}/*,20*/);
