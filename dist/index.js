import { initActivities, playClickSound } from "./foos.js";
console.log("02");
initActivities();
function submitForm(event) {
    console.log("submitForm");
    console.log(event);
    event?.preventDefault();
    playClickSound();
    const activitySelect = document.getElementById('activity').value;
    const dateInput = document.getElementById('date').value;
    const startTimeInput = document.getElementById('startTime').value;
    const endTimeInput = document.getElementById('endTime').value;
    const intensity = document.getElementById('intensity').value;
    const activityObject = {
        typ: activitySelect,
        startTime: startTimeInput,
        endTime: endTimeInput,
        date: dateInput,
        intensity: intensity
    };
    console.log(activityObject);
    // local storage stuff
}
