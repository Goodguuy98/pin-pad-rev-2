/**
 * Variables
 */
// Displays & regulates counter
function Counter_09 () {
    basic.showNumber(Counter)
    // Ensures number stays between 0 and 9
    if (Counter > 9) {
        Counter = 0
    }
    if (Counter < 0) {
        Counter = 9
    }
}
// Subtracts one from input counter
input.onButtonPressed(Button.A, function () {
    if (0 < Input && Input < 5) {
        Counter += -1
    }
})
function Boot () {
    radio.setGroup(1)
    dig1 = -1
    dig2 = -1
    dig32 = -1
    dig42 = -1
    basic.showString("Input")
    Input = 1
}
// Confirm your input
input.onButtonPressed(Button.AB, function () {
    if (Input == 1) {
        dig1 = Counter
    }
    if (Input == 2) {
        dig2 = Counter
    }
    if (Input == 3) {
        dig32 = Counter
    }
    if (Input == 4) {
        dig42 = Counter
    }
    if (Input == 5) {
        basic.clearScreen()
        radio.sendString(PIN)
        basic.showString("Sent!")
        Input = 6
    }
})
// Outputs message recived via radio
radio.onReceivedString(function (receivedString) {
    // Will only display if input = 6
    if (Input == 6) {
        for (let index = 0; index < 2; index++) {
            basic.showString(receivedString)
        }
    }
    Input = 7
})
// Adds one to input counter
input.onButtonPressed(Button.B, function () {
    if (0 < Input && Input < 5) {
        Counter += 1
    }
})
// Displays and sets the digit
function Set_Code (Digit: number) {
    if (dig1 == Digit) {
        for (let index = 0; index < 2; index++) {
            basic.clearScreen()
            basic.pause(250)
            basic.showNumber(dig1)
        }
    } else if (dig2 == Digit) {
        for (let index = 0; index < 2; index++) {
            basic.clearScreen()
            basic.pause(250)
            basic.showNumber(dig2)
        }
    } else if (dig32 == Digit) {
        for (let index = 0; index < 2; index++) {
            basic.clearScreen()
            basic.pause(250)
            basic.showNumber(dig32)
        }
    } else if (dig42 == Digit) {
        for (let index = 0; index < 2; index++) {
            basic.clearScreen()
            basic.pause(250)
            basic.showNumber(dig42)
        }
    }
}
// Resets Counter, updates stage of input
function Intermission () {
    basic.clearScreen()
    Input = Input + 1
    Counter = 0
}
let Input = 0
let PIN = ""
let dig42 = 0
let dig32 = 0
let dig2 = 0
let Counter = 0
let dig1 = 0
Boot()
// Input Digit 1
while (dig1 == -1) {
    Counter_09()
}
Set_Code(Counter)
Intermission()
// Input Digit 2
while (dig2 == -1) {
    Counter_09()
}
Set_Code(Counter)
Intermission()
// Input Digit 3
while (dig32 == -1) {
    Counter_09()
}
Set_Code(Counter)
Intermission()
// Input Digit 4
while (dig42 == -1) {
    Counter_09()
}
Set_Code(Counter)
// Combines Digits into a single string
PIN = "" + dig1 + dig2 + dig32 + dig42
Input = 5
basic.clearScreen()
while (Input == 5) {
    basic.showString("Code:" + PIN)
}
basic.forever(function () {
    if (Input == 7) {
        dig1 = 0
        dig2 = 0
        dig32 = 0
        dig42 = 0
    }
})
