type ActTypes = "running" | "cycling" | "swimming" | "yoga" | "weightlifting" | "hiking" | "undefined";


type Act = {
    typ: ActTypes;
    startTime: Date;
    endTime: Date;
    date: Date;
    intensity: number;  // 1-5, with 0 serving as undefined
};

type Actlist = Act[];


function submitForm() {

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

export  { ActTypes, Act, Actlist };