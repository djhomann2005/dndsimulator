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
    let diceSum = 0;
    // keep track of dice rolls individually
    let diceRolls = [];
    const diceContainer = document.getElementById("dice-container");
    const rollContainer = document.getElementById("roll-container");

    Array.from(diceContainer.children).forEach(child => {
        // Remove previous roll display (if exists)
        let oldRollDisplay = child.querySelector(".roll-result");
        if (oldRollDisplay) {
            oldRollDisplay.remove();
        }
        
        // get dieType (maximum) for each die 
        const diceMaxValues = {
            d4: 4,
            d6: 6,
            d8: 8,
            d10: 10,
            d12: 12,
            d20: 20,
            d100: 100
        };
        let selectElement = child.querySelector("select");
        let maxRoll = diceMaxValues[selectElement.value] || null;

        // simulate the die roll
        let dieRoll = Math.floor(Math.random() * maxRoll + 1);
        // record roll
        diceRolls.push(dieRoll);
        // add roll to total
        diceSum += dieRoll;

        // display each roll in the box with the select
        const rollDisplay = document.createElement("p");
        rollDisplay.className = "roll-result";
        rollDisplay.innerHTML = `Roll: ${dieRoll}`;
        rollDisplay.style.flexBasis = "100%";
        child.appendChild(rollDisplay);
    });

    const elementToRemove = document.getElementById("display-total");
    if (elementToRemove) {
        rollContainer.removeChild(elementToRemove);
    }

    const displaySum = document.createElement("p");
    displaySum.id = "display-total";
    displaySum.innerHTML = `Total: ${diceSum}`;
    rollContainer.appendChild(displaySum);
}