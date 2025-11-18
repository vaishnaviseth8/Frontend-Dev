let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

let access = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
console.log(access ? "Secure" : "Unsafe");

isDoorLocked = false;
isWindowClosed = true;
isAlarmOn = true;
isOwnerInside = true;

access = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
console.log(access ? "Secure" : "Unsafe");

isDoorLocked = true;
isWindowClosed = false;
isAlarmOn = true;
isOwnerInside = false;

access = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
console.log(access ? "Secure" : "Unsafe");
