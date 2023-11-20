
// import { ActTypes, Act, Actlist } from "/dist/foos.js";


function playClickSound() {

    const audio = new Audio("chime.wav");
    audio.play();
}
function submitForm(event) {
    event?.preventDefault();
    playClickSound();

    const activitySelect = (document.getElementById('activity') as HTMLSelectElement).value;
    const dateInput = (document.getElementById('date') as HTMLInputElement).value;
    const startTimeInput = (document.getElementById('startTime') as HTMLInputElement).value;
    const endTimeInput = (document.getElementById('endTime') as HTMLInputElement).value;
    const intensity = (document.getElementById('intensity') as HTMLInputElement).value;

    const activityObject = {
        typ: activitySelect,
        startTime: startTimeInput,
        endTime: endTimeInput,
        date: dateInput,
        intensity: intensity
    };

    console.log(activityObject);

    return activityObject;
}



