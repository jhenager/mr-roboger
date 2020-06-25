// Business Logic

function numberPrinter (strNum) {
  let rogerArray = [];
  for (let i=0; i<= strNum; i ++) {
    rogerArray.push(" "+ i);
  }
  return rogerArray;
}

function threeDetector (rogerArray) {
  let displayArray= [];
  for (let i=0; i <= rogerArray.length-1; i++) {
    if (rogerArray[i].includes("3")) {
      displayArray.push(" Won't you be my neighbor")
    } else if (rogerArray[i].includes("2")) {
      displayArray.push(" Boop!")
    } else if (rogerArray[i].includes("1")) {
      displayArray.push(" Beep!")
    } else  {
      displayArray.push(rogerArray[i])
    }
  } 
  return displayArray;
};

// User Interface Logic

$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    let strNum = $("input#change-number").val();
    const rogerArray = numberPrinter(strNum);
    const displayArray = threeDetector(rogerArray);
    $("#translation").text(displayArray);
  });
});