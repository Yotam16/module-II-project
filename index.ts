import { Act , initActivities, playClickSound, saveActivities  } from "./foos.js";



console.log("02");

initActivities();

function submitForm(event : any) {
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

export { submitForm }


