var intervalId;

var stopwatch = {
  clockRunning:false,
  time: 10,
  start: function() {
      if (!stopwatch.clockRunning) {
      intervalId = setInterval(stopwatch.count, 1000);
      stopwatch.clockRunning = true;

      };
},
  stop: function() {
        stopwatch.clockRunning = false;
        clearInterval(intervalId);
        $('#resultModal').modal('show');





  },

pause: function() {
  stopwatch.clockRunning = false;
  clearInterval(intervalId);

},

  count: function() {
      if (stopwatch.time <= 5){
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'assets/sound/beep.mp3');
        audioElement.play();
        audioElement.remove();
      }
      stopwatch.time--;
      $('#clock').html(stopwatch.time);
      if (stopwatch.time <= 0){
        // stopwatch.stop();
        next_Q();

    }
  },

};