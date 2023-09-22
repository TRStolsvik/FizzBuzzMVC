(function (app) {
    'use strict';

    app.fizzBuzz = function () {
        const submitButton = document.getElementById('btnSubmit');
        submitButton.addEventListener('click', captureValues);
    };

    // Capture values from the user
    function captureValues() {
        // Capture values from user
        let fizzValue = document.getElementById('fizzValue').value;
        let buzzValue = document.getElementById('buzzValue').value;

        // Parse values to integers
        fizzValue = parseInt(fizzValue);
        buzzValue = parseInt(buzzValue);

        // Test if the values are integers
        // Only if both values are integers, call the test fizz buzz function
        if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
            const dbArray = testFizzBuzz(fizzValue, buzzValue);

            // Display Double Bubble
            displayFizzBuzz(dbArray);
        }
    }

    // Test Fizz Buzz
    function testFizzBuzz(fizzValue, buzzValue) {
        let dbArray = [];

        // For-loop over a range of 0-100
        for (let i = 1; i <= 100; i++) {
            // Check if the number at i is multiple of both values, consider switch statement
            switch (true) {
                // If it is add "FizzBuzz" to the array.
                case i % fizzValue == 0 && i % buzzValue == 0:
                    dbArray.push('FizzBuzz');
                    break;

                // Else if it is a multiple of buzz value add "Buzz" to the array.
                case i % buzzValue == 0:
                    dbArray.push('Buzz');
                    break;

                // Else if it is a multiple of fizz value add "Fizz" to the array.
                case i % fizzValue == 0:
                    dbArray.push('Fizz');
                    break;

                default:
                    // Else if it's not multiple of either, add the number to the array.
                    dbArray.push(i);
                    break;
            }
        }

        // Finally, return the array.
        return dbArray;
    }

    function displayFizzBuzz(dbArray) {
        // Get the body and row from the page
        let tableBody = document.getElementById('results');
        let templateRow = document.getElementById('dbTemplate');

        // Make sure the table is clear
        tableBody.innerHTML = '';

        // For-loop through the array
        for (let i = 0; i < dbArray.length; i += 5) {
            let tableRow = document.importNode(templateRow.content, true);
            let rowCols = tableRow.querySelectorAll('td');

            rowCols[0].classList.add(dbArray[i]);
            rowCols[0].textContent = dbArray[i];

            rowCols[1].classList.add(dbArray[i + 1]);
            rowCols[1].textContent = dbArray[i + 1];

            rowCols[2].classList.add(dbArray[i + 2]);
            rowCols[2].textContent = dbArray[i + 2];

            rowCols[3].classList.add(dbArray[i + 3]);
            rowCols[3].textContent = dbArray[i + 3];

            rowCols[4].classList.add(dbArray[i + 4]);
            rowCols[4].textContent = dbArray[i + 4];

            tableBody.appendChild(tableRow);
        }
    }
})((window.app = window.app || {}));
