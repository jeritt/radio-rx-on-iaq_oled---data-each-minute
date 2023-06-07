// on-demand call for sensor data
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
// call for sensor data every minute
timeanddate.onMinuteChanged(function () {
    radio.sendNumber(0)
})
radio.onReceivedValue(function (name, value) {
    kitronik_air_quality.show(timeanddate.dateTime(), 1, kitronik_air_quality.ShowAlign.Right)
    if (name == "T") {
        serial.writeValue("Temp", value)
        kitronik_air_quality.show("Temp: " + value + "°C", 2, kitronik_air_quality.ShowAlign.Left)
    } else if (name == "RH") {
        kitronik_air_quality.show("RH: " + value + "%", 3, kitronik_air_quality.ShowAlign.Left)
    } else if (name == "DP") {
        kitronik_air_quality.show("Dewpoint:" + value + "°C", 4, kitronik_air_quality.ShowAlign.Left)
    } else if (name == "PRESSURE") {
        kitronik_air_quality.show("Pressure" + value + "hPa", 5, kitronik_air_quality.ShowAlign.Left)
    }
})
radio.setGroup(1)
timeanddate.setDate(6, 7, 2023)
timeanddate.set24HourTime(9, 13, 0)
