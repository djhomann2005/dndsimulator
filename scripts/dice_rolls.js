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
    // variable to point to html element these new elements will be added to
    const rollButton = document.getElementById("roll-button");
    const diceContainer = document.getElementById("dice-container");
    diceContainer.innerHTML = "";

    for (let i = inputNumber; i > 0; i--) {
        // create the necessary number of new divs
        const newDiceDiv = document.createElement("div");
        newDiceDiv.className = 'dice';
        diceContainer.appendChild(newDiceDiv);
        
        // in each div, create a label "Dice Type"
        const newLabel = document.createElement("label");
        newLabel.htmlFor = `dieType${i}`;
        newLabel.className = "label almendra-regular";
        newLabel.innerHTML = "Die Type: ";
        newDiceDiv.appendChild(newLabel);

        // in each div, create a dropdown with dice type selections
        const newDropDown = document.createElement('select');
        newDropDown.id = `dieType${i}`;
        newDropDown.className = "dieType";
        newDropDown.required = true; // make each input required
        newDiceDiv.appendChild(newDropDown);
        
        // Dice type options
        const diceTypes = ["d4", "d6", "d8", "d10", "d12", "d20", "d100"];

        // Populate dropdown with dice options
        diceTypes.forEach(type => {
            const option = document.createElement("option");
            option.value = type;
            option.textContent = type;
            newDropDown.appendChild(option);
        });
    }
    

    // change display of 'Roll Dice' button so it shows
    rollButton.style.display = "flex";
}

function numDiceSelect() {
    const input = captureNumDiceInput();
    renderDiceSelector(input);
}

function rollDice() {
    // keep a running total of dice rolls
    // keep track of dice rolls individually
    // get dieType (maximum) for each die 
        // simulate the die roll
            // record roll
            // add roll to total
}