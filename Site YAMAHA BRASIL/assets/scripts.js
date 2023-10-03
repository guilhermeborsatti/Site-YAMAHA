var joyX;
var joyY;
function moveJoystick(e){
joyX = e.clientX;
joyY = e.clientY;
  document.getElementById("test").textContent = joyX;
}