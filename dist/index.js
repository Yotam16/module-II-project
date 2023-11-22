// import { ActTypes, Act, Actlist } from "/dist/foos.js";
function playClickSound() {
    var audio = new Audio("chime.wav");
    audio.play();
}
console.log("02");
function submitForm(event) {
    console.log("submitForm");
    console.log(event);
    event === null || event === void 0 ? void 0 : event.preventDefault();
    playClickSound();
    var activitySelect = document.getElementById('activity').value;
    var dateInput = document.getElementById('date').value;
    var startTimeInput = document.getElementById('startTime').value;
    var endTimeInput = document.getElementById('endTime').value;
    var intensity = document.getElementById('intensity').value;
    var activityObject = {
        typ: activitySelect,
        startTime: startTimeInput,
        endTime: endTimeInput,
        date: dateInput,
        intensity: intensity
    };
    console.log(activityObject);
    return activityObject;
}
