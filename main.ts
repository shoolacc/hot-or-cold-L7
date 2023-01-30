input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.lightLevel())
})
basic.forever(function () {
    if (input.temperature() < 18) {
        basic.showString("Too cold!")
    }
    if (input.temperature() >= 18 && input.temperature() <= 24) {
        basic.showString("Just right!")
    }
    if (input.temperature() > 24) {
        basic.showString("Too hot!")
    }
})
