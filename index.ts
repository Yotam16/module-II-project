import { Act } from "./foos";


function init() {
    const existingActivitiesJSON = localStorage.getItem('activities');
    const existingActivities: Act[] = existingActivitiesJSON ? JSON.parse(existingActivitiesJSON) : [];
    console.log("init value: ",existingActivitiesJSON);
}


function playClickSound() {

    const audio = new Audio("chime.wav");
    audio.play();
}

console.log("02");

function submitForm(event) {
    console.log("submitForm");
    console.log(event);
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
    // local storage stuff


}



