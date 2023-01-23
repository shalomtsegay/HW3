let origArray = [2, 3, 4];

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("squared").value = origArray[0];
  document.getElementById("cubed").value = origArray[1];
  document.getElementById("fourthed").value = origArray[2];

  // Event listener for Button 1 ONCLICK
  document.getElementById("button1").onclick = function() {
    let squaredArray = origArray.map(function(num) {
      return num * num;
    });

    document.getElementById("squared").value = squaredArray[0];
    document.getElementById("cubed").value = squaredArray[1];
    document.getElementById("fourthed").value = squaredArray[2];
  };

  // Event listener for Button 2 ANONYMOUS FUNCTION
  document.getElementById("button2").addEventListener("click", function() {
    let cubedArray = origArray.map(function(num) {
      return num * num * num;
    });

    document.getElementById("squared").value = cubedArray[0];
    document.getElementById("cubed").value = cubedArray[1];
    document.getElementById("fourthed").value = cubedArray[2];
  });

  // Event listener for Button 3 NAMED FUNCTION
  document.getElementById("button3").addEventListener("click", fourthfunction);
});

function fourthfunction(){
    let fourthPowerArray = origArray.map(function(num) {
        return num * num * num * num;
      });
  
      document.getElementById("squared").value = fourthPowerArray[0];
      document.getElementById("cubed").value = fourthPowerArray[1];
      document.getElementById("fourthed").value = fourthPowerArray[2];
    }
