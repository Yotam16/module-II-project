
import { ActTypes, Act, Actlist /* ,funcs */ } from "dist/foos.js";


function playClickSound() {

    const audio = new Audio("chime.wav");
    audio.play();
}


function submitForm() {

    playClickSound();

    const activitySelect = document.getElementById('activity');
    const dateInput = document.getElementById('date');
    const startTimeInput = document.getElementById('startTime');
    const endTimeInput = document.getElementById('endTime');
    const intensity = document.getElementById('intensity');

    const activityObject = {
        typ: activitySelect,
        startTime: startTimeInput,
        endTime: endTimeInput,
        date: dateInput,
        intensity: intensity
    };

    return activityObject;
}



