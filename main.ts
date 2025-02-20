let strip: neopixel.Strip = null
function The_Force () {
    for (let index = 0; index < 300; index++) {
        strip.showRainbow(1, 360)
        basic.pause(200)
        strip.rotate(5)
        strip.show()
        basic.pause(200)
    }
}
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
    strip.setBrigthness(100)
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
    if (input.isGesture(Gesture.Shake)) {
        The_Force()
    }
    if (input.buttonIsPressed(Button.A)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(5000)
    }
    if (input.buttonIsPressed(Button.B)) {
        strip.showRainbow(1, 360)
        basic.pause(5000)
    }
})
