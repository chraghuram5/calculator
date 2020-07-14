"use strict"
var buttons = document.getElementsByClassName('button');
var displayData = document.getElementsByClassName('display');

var answer = "";
var second = "";
var operand = "";
var previous = "";
var currentData = "";
var flag = true;
var i = 0;
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var data = this.innerText;
        if (data == '*' || data == '+' || data == '-' || data == '/' || data == '%') {
            if (flag) {
                if (currentData != "") {
                    answer = currentData;
                    operand = data;
                    flag = false;
                    displayData[0].innerText = "";
                }
            }
            else {
                if (currentData == "")
                    operand = data;
                else {
                    answer = parseFloat(answer);
                    second = parseFloat(currentData);
                    answer = eval(answer + " " + operand + " " + second);
                    operand = data;
                    displayData[0].innerText = answer;
                }

            }
            currentData = "";
        }
        else if (data == '=') {
            if (currentData != "") {
                answer = parseFloat(answer);
                second = parseFloat(currentData);
                answer = eval(answer + " " + operand + " " + second);
                displayData[0].innerText = answer;
                currentData = "";
                operand = "";
            }
        }
        else if (data == '+/-') {
            if (currentData != "") {
                if (answer != "") {
                    answer = 0 - parseFloat(answer);
                    displayData[0].innerText = answer;
                }
                else {
                    currentData = 0 - parseFloat(currentData);
                    displayData[0].innerText = currentData;
                }
            }
        }
        else if (data == 'AC') {
            answer = "";
            second = "";
            operand = "";
            flag = true;
            displayData[0].innerText = "";
            currentData = "";
        }
        else {
            currentData = currentData + data;
            displayData[0].innerText = currentData;
        }
        event.stopPropagation();
    });
};