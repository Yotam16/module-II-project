"use strict";
var _a, _b;
exports.__esModule = true;
var obj = {};
var objs = {};
var complex_obj = {};
function playClickSound() {
    var audio = new Audio("chime.wav");
    audio.play();
}
(_a = document.getElementById('addObject')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    playClickSound();
});
(_b = document.getElementById('removeObject')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    playClickSound();
});
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
