"use strict";
exports.__esModule = true;
function submitForm() {
    var activitySelect = document.getElementById('activity');
    var dateInput = document.getElementById('date');
    var startTimeInput = document.getElementById('startTime');
    var endTimeInput = document.getElementById('endTime');
    var intensity = document.getElementById('intensity');
    var activityObject = {
        typ: activitySelect,
        startTime: startTimeInput,
        endTime: endTimeInput,
        date: dateInput,
        intensity: intensity
    };
    return activityObject;
}
