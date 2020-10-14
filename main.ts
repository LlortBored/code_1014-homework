let X = 0
let Y = 0
basic.forever(function () {
    X = 4
    Y = 4
    for (let index = 0; index < 5; index++) {
        led.plot(X, Y)
        basic.pause(200)
        Y += -1
    }
    X += -1
    for (let index = 0; index < 6; index++) {
        led.plot(X, Y)
        basic.pause(200)
        Y += 1
    }
    X += -1
    for (let index = 0; index < 6; index++) {
        led.plot(X, Y)
        basic.pause(200)
        Y += -1
    }
    X += -1
    for (let index = 0; index < 6; index++) {
        led.plot(X, Y)
        basic.pause(200)
        Y += 1
    }
    X += -1
    for (let index = 0; index < 6; index++) {
        led.plot(X, Y)
        basic.pause(200)
        Y += -1
    }
    basic.clearScreen()
})
