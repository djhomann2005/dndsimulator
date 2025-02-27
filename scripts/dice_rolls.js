
/* dice_rolls.js Roadmap

1. Accept Input in Dice Notation
    -function should take in a string such as "2d6+3"
    -it needs to parse this notation to extract
        -number of dice
        -dice type
        -optional modifier

2. Parse the Dice Notation
    -identify and extract the numbers from the input
        -if 'd' is present, split on it (2d6 -> 2 dice, d6)
        -if a modifier exists, extract and store it
    -if input is just "d20", assume 1d20

3. Roll the Dice
    -generate random numbers between 1 and the max for that die
    -store the individual rolls in an array for reference
    -if a situation exists where multiple rolls can be chosen from, choose the appropriate result

4. Apply Modifiers
    -if a modifier is present, add/subtract from total

5. Return Results
    -return total roll result
    -return array of individual dice rolls

*/