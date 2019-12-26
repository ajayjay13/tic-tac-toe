
var symbol = "O";
var count = 0;


var myInterval;
var seconds = 0;
var minutes = 0;
var hours = 0;
var spaceData = {
  "pushed": "1"
}

function start(x) {
  spaceData.pushed = x;
  if (spaceData.pushed == 1) {
   // clearInterval(myInterval);
    console.log("y");
    document.getElementById('hrs').innerHTML =hours<10?'0'+hours:hours;;
    document.getElementById('mins').innerHTML = minutes<10?'0'+minutes:minutes;
    document.getElementById('secs').innerHTML = seconds<10?'0'+seconds:seconds;
    clearInterval(myInterval);
  } else {

    
    myInterval = setInterval(function() {
      

      if (seconds ==60) {
        seconds = 0;
        ++minutes;
        document.getElementById('secs').innerHTML = seconds<10?'0'+seconds:seconds;
         document.getElementById('mins').innerHTML =minutes<10?'0'+minutes:minutes;
        if (minutes == 60) {
          minutes = 0;
          hours++;
          document.getElementById('hrs').innerHTML =hours<10?'0'+hours:hours;
        }
      }else{
        document.getElementById('secs').innerHTML = seconds<10?'0'+seconds:seconds;
      console.log(seconds);      
      }
      seconds++;
    }, 1000);

  }
  
}

function reset(){
  counter=0;
  clearInterval(myInterval);
  seconds=0;
  minutes=0;
  hours=0;
    document.getElementById('hrs').innerHTML = '00';
    document.getElementById('mins').innerHTML = '00';
    document.getElementById('secs').innerHTML = '00';
}





  

function set() {
    var b1 = document.getElementById("1");
    var b2 = document.getElementById("2");
    var b3 = document.getElementById("3");
    var b4 = document.getElementById("4");
    var b5 = document.getElementById("5");
    var b6 = document.getElementById("6");
    var b7 = document.getElementById("7");
    var b8 = document.getElementById("8");
    var b9 = document.getElementById("9");
    
    b1.value="";
    b2.value="";
    b3.value="";
    b4.value="";
    b5.value="";
    b6.value="";
    b7.value="";
    b8.value="";
    b9.value="";
    b1.disabled=false;
    b2.disabled=false;
    b3.disabled=false;
    b4.disabled=false;
    b5.disabled=false;
    b6.disabled=false;
    b7.disabled=false;
    b8.disabled=false;
    b9.disabled=false;
    
   document.getElementById("popup").style.visibility = "hidden";
   reset();
}

function disable() {
    var b1 = document.getElementById("1");
    var b2 = document.getElementById("2");
    var b3 = document.getElementById("3");
    var b4 = document.getElementById("4");
    var b5 = document.getElementById("5");
    var b6 = document.getElementById("6");
    var b7 = document.getElementById("7");
    var b8 = document.getElementById("8");
    var b9 = document.getElementById("9");
    
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;

}

function displaywinner(winner) {
      disable();
    
      document.getElementById("winner").innerHTML = "Player "+winner + " wins.";
      count = 0;
      start(1);
    
      var pop = document.getElementById("popup");
      pop.style.visibility = "visible";
      
}

function checkwinner() {
    var b1 = document.getElementById("1").value;
    var b2 = document.getElementById("2").value;
    var b3 = document.getElementById("3").value;
    var b4 = document.getElementById("4").value;
    var b5 = document.getElementById("5").value;
    var b6 = document.getElementById("6").value;
    var b7 = document.getElementById("7").value;
    var b8 = document.getElementById("8").value;
    var b9 = document.getElementById("9").value;
    
    if (((b1=="X") || (b1=="O")) && ((b1 == b2) && (b2 == b3))) {
        displaywinner(b1);
    }
    else if (((b1=="X") || (b1=="O")) && ((b1 == b4) && (b4 == b7))){
        displaywinner(b1);
    }
    else if (((b9=="X") || (b9=="O")) && ((b9 == b8) && (b8 == b7))){
        displaywinner(b9);
    }
    else if (((b9=="X") || (b9=="O")) && ((b9 == b6) && (b6 == b3))){
      displaywinner(b9);
    }
    else if (((b4=="X") || (b4=="O")) && ((b4 == b5) && (b5 == b6))){
      displaywinner(b4);
    }
    else if (((b2=="X") || (b2=="O")) && ((b2 == b5) && (b5 == b8))){
      displaywinner(b2);
    }
    else if (((b1=="X") || (b1=="O")) && ((b1 == b5) && (b5== b9))){
      displaywinner(b1);
    }
    else if (((b7=="X") || (b7=="O")) && ((b7 == b5) && (b5 == b3))){
      displaywinner(b7);
    }
     else if (count == 9) {
     disable();
    
      document.getElementById("winner").innerHTML = "No one wins";
      count = 0;
      start(1);
       var pop = document.getElementById("popup");
      pop.style.visibility = "visible";
    }
    }

  
  
  
function assign(x, symbol) {
     if (x==1) {
     var button = document.getElementById("1");
     button.value = symbol;
     button.disabled=true;
     }
     else if (x==2) {
     var button = document.getElementById("2");
     button.value = symbol;
     button.disabled=true;
     }
     else if (x==3) {
     var button = document.getElementById("3");
     button.value = symbol;
     button.disabled=true;
     }
     else if (x==4) {
     var button = document.getElementById("4");
     button.value = symbol;
     button.disabled=true;
     }
     else if (x==5) {
     var button = document.getElementById("5");
     button.value = symbol;
     button.disabled=true;
     }
     else if (x==6) {
     var button = document.getElementById("6");
     button.value = symbol;
     button.disabled=true;
     }
     else if (x==7) {
     var button = document.getElementById("7");
     button.value = symbol;
     button.disabled=true;
     }
     else if (x==8) {
     var button = document.getElementById("8");
     button.value = symbol;
     button.disabled=true;
     }
     else if (x==9) {
     var button = document.getElementById("9");
     button.value = symbol;
     button.disabled=true;
     }
     checkwinner();
     }
  
function first(button) {
        document.getElementById("player").innerHTML = "Next Player : "+symbol;
        count++;
        if(count==1){
            start(0);
        }
    if (symbol=="X") {
    symbol="O";
    assign(button, symbol);
    }
    else if (symbol=="O") {
    symbol="X";
    assign(button, symbol);
    }
    }