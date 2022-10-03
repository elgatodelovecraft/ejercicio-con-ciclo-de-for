for (let index = 0; index < 4; index++) {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(x, y)
            music.playTone(131, music.beat(BeatFraction.Sixteenth))
            basic.pause(200)
            basic.clearScreen()
        }
    }
}
