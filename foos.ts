type ActTypes = "running" | "cycling" | "swimming" | "yoga" | "weightlifting" | "hiking" | "undefined";


type Act = {
    typ: ActTypes;
    startTime: Date;
    endTime: Date;
    date: Date;
    intensity: number;  // 1-5, with 0 serving as undefined
};

type Actlist = Act[];


function initActivities() {
    const existingActivitiesJSON = localStorage.getItem('activities');
    const existingActivities: Act[] = existingActivitiesJSON ? JSON.parse(existingActivitiesJSON) : [];
    console.log("init value: ",existingActivitiesJSON);
}


function playClickSound() {

    const audio = new Audio("chime.wav");
    audio.play();
}

function saveActivities(activities: Act[]) {
    const activitiesJSON = JSON.stringify(activities);
    localStorage.setItem('activities', activitiesJSON);
}




export  { ActTypes, Act, Actlist,initActivities, playClickSound, saveActivities };