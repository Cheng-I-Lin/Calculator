var display = "";
var num = [];
var math = [];
var ans = 0.0;

function keyboard(id) {
  display += id;
}

function addition() {
  num.push(display);
  math.push("+");
  display = "";
}

function subtraction() {
  num.push(display);
  math.push("-");
  display = "";
}

function multiplication() {
  num.push(display);
  math.push("*");
  display = "";
}

function division() {
  num.push(display);
  math.push("\/");
  display = "";

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

function deleteKey(){
    display=display.slice(0,display.length-1);
}

function clearDisplay(){
    display="";
    num=[];
    math=[];
}

setInterval(function(){
    document.getElementById("display").innerHTML = display;
});
