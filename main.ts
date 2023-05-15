radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
    basic.showNumber(receivedNumber)
})
radio.setGroup(43)
