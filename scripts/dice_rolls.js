/* 
user will select a number of dice > 1 and hit the 'select' button
    -input for this has a minimum of 1, so input should never be less than 1
add an element to dice container for each dice that needs to be rolled
    -should contain a drop-down for die type
add a 'roll' button to the bottom of the container
    -before allowing roll, check that each die has a die type
when 'roll' button is clicked, calculate random rolls based on maximum for each die
display the roll for each die
display the total for the dice
*/

function captureNumDiceInput() {
    return document.getElementById("number-dice").value;
}

function renderDiceSelector(inputNumber) {

}

function numDiceSelect() {
    const input = captureNumDiceInput();
}