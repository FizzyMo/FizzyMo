// showing local time onload
window.onload = function () {
    DisplayCurrentTime();
};
// how to show time
function DisplayCurrentTime() {
    var date = new Date();
    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var am_pm = date.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours;
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    time = hours + ":" + minutes + am_pm;
    var lblTime = document.getElementById("lblTime");
    lblTime.innerHTML = time;
};
// turning off and on button
function disableBtn() {
    document.getElementById("myBtn").disabled = true;
  }
  
  function undisableBtn() {
    document.getElementById("myBtn").disabled = false;
  }