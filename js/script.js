// Copyright (c) 2023 Noah Smith All rights reserved
//
// Created by: Noah Smith
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";

/**
 * This function displays an addition table adding the user's number with every number between the min and max inclusive
 */
function DisplaySum() {
  // initialize the numbers as an empty string
  let numbers = "";

  // Get the user's number
  let userNumber = parseInt(document.getElementById("user-number").value);
  
  // get the user's min
  let userMin = parseInt(document.getElementById("user-min").value);

  // get the user's max
  let userMax = parseInt(document.getElementById("user-max").value);

  let counter = userMin;

  // if min is bigger than max
  if (userMax < userMin) {
    numbers = "Please make your min smaller than your max";
  } else {
    // use a while loop to display all the sums
    while (counter <= userMax) {
      // build the string of numbers with a line break each time
      numbers += userNumber + " + " + counter + " = " + (userNumber + counter) + "<br>";
      // Increment the counter
      counter++;
    }
  }

  // display the results back to the user
  document.getElementById("result").innerHTML = numbers;
}