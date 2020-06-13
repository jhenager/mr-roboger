// Business Logic


let rogerArray = []

function threeDetector (strNum) {for (let i=0; i < strNum.length; i++) {
      if (strNum.charAt(i) === "3") {
      rogerArray.push("Won't you be my neighbor?");
      break;}

        else {twoDetector(strNum)
        ;}
      }
      
      }

function twoDetector (strNum) {for (let i=0; i < strNum.length; i++) {
      if (strNum.charAt(i) === "2") {
      rogerArray.push("Boop!");
      break;}
    
      else {oneDetector(strNum)
        ;}
        }
      }

function oneDetector (strNum) {for (let i=0; i < strNum.length; i++) {
      if (strNum.charAt(i) === "1") {
      rogerArray.push("Beep!");
      break;}
  
      else {rogerArray.push(strNum)
        ;}
      }
        
     }







// User Interface Logic

$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    let strNum = $("input#change-number").val();
    // let arrayCheck = strNum.split("")
    threeDetector(strNum);
    // arrayCheck.forEach(function(string){
    //   // for (let i=0; i < strNum.length; i ++) {
    //       if (string.charAt() === "3") {
    //       roboArray.push("Won't you be my neighbor");
    //       break;
    //       } else if (string.charAt() === "2") {
    //       roboArray.push("Boop!");
    //       break;
    //       } else if (string.charAt() === "1") {
    //       roboArray.push("Beep!")
    //       break;
    //       }
    //       else {roboArray.push(strNum)}
    //     });
    //   roboArray.join("");
    
    console.log(rogerArray);
    $("#translation").text(rogerArray);
  });
});