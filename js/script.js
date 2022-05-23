/* Created by: Venika Sem
 * Created on: May 2022
 * This file contains the JS functions for index.html 
*/

'use strict'

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-07-HTML/sw.js", {
    scope: "/ICS2O-Unit5-07-HTML/",
  })
}

/**
 * This function calculates using loop.
 */
function calculate() {
  // input
  var userInput = document.getElementById("user-input").value

  // process and output
  var answer = 0
  var userInputAsInt = parseInt(userInput)
  
  if (userInputAsInt <= 0) {
    document.getElementById("answer").innerHTML = "Please input a positive whole number!"
  } else {
    for (let counter = 1; counter <= userInputAsInt; counter++) {
      answer += counter
    }
    document.getElementById("answer").innerHTML = "The value is " + (answer)
  }
}