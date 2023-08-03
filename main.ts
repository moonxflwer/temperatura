basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() > 27) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Happy)
        music.play(music.stringPlayable("B A G A C F E G ", 120), music.PlaybackMode.UntilDone)
    }
    basic.showNumber(input.temperature())
    while (input.temperature() < 25) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Sad)
        music.play(music.stringPlayable("E C C D E F G E ", 120), music.PlaybackMode.UntilDone)
    }
})
