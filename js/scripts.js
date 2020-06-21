// Business Logic


let rogerArray = []

function numberPrinter (strNum) {
  for (let i=0; i<= strNum; i ++) {
    rogerArray.push(" "+ i);
  }
}

// function threeDetector (strNum) {
//   for (let i=0; i < strNum.length; i++) {
//       if (strNum.charAt(i) === "3") {
//         rogerStr = " Won't you be my neighbor?";
//         break;
//       } else {
//         twoDetector(strNum);
//         }
//       }
//     }

// function twoDetector (strNum) {
//   for (let i=0; i < strNum.length; i++) {
//       if (strNum.charAt(i) === "2") {
//       rogerStr = " Boop!";
//       break;
//     } else {
//       oneDetector(strNum);
//       }
//     }
//   }

// function oneDetector (strNum) {
//   for (let i=0; i < strNum.length; i++) {
//       if (strNum.charAt(i) === "1") {
//       rogerStr = " Beep!";
//       break;
//     } else {
//       rogerStr=strNum;
//       }
//     }
//   }







// User Interface Logic

$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    let strNum = $("input#change-number").val();
    // let arrayCheck = strNum.split("")
    // threeDetector(strNum);
    // rogerArray.push(rogerStr);
    numberPrinter(strNum);
    
    console.log(rogerArray);
    $("#translation").text(rogerArray);
  });
});