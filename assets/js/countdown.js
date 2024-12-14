// Set the date we're counting down to (Event start time)
var countDownDate = new Date("Jan 27, 2025 00:00:00").getTime();  // Change this to your target date

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();
  
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the result in the element with ID "clock"
  document.getElementById("clock").innerHTML = `
    <div class="time-entry">
      <span>${days}</span> <span>Days</span>
    </div>
    <div class="time-entry">
      <span>${hours}</span> <span>Hours</span>
    </div>
    <div class="time-entry">
      <span>${minutes}</span> <span>Minutes</span>
    </div>
    <div class="time-entry">
      <span>${seconds}</span> <span>Seconds</span>
    </div>
  `;
  
  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "Event Started!";
  }
}, 1000);
