type ActTypes = "running" | "cycling" | "swimming" | "yoga" | "weightlifting" | "hiking" | "undefined";


type Act = {
    typ: ActTypes;
    str_time: Date;
    end_time: Date;
    intensity: number;  // 1-5, with 0 serving as undefined
};

type Actlist = Act[];




function init() {}



function addObj() {} // submit event listener
function isObjThere() {}


export  { ActTypes, Act, Actlist /* ,funcs */ };