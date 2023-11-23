function initActivities() {
    const existingActivitiesJSON = localStorage.getItem('activities');
    const existingActivities = existingActivitiesJSON ? JSON.parse(existingActivitiesJSON) : [];
    console.log("init value: ", existingActivitiesJSON);
}
function playClickSound() {
    const audio = new Audio("chime.wav");
    audio.play();
}
function saveActivities(activities) {
    const activitiesJSON = JSON.stringify(activities);
    localStorage.setItem('activities', activitiesJSON);
}
export { initActivities, playClickSound, saveActivities };
