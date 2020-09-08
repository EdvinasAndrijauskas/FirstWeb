function moveBike() {
  $("#bike").animate({ left: "58%" }, "slow", function () {
    bikeMovement(this);
  });
  disappearingBike();
  timedPopUp();
}

function timedPopUp() {
  setTimeout(function () {
    $(function () {
      $("#PopUp").dialog();
    });
  }, 650);
}

function disappearingBike() {
  setTimeout(function () {
    $(document).ready(function () {
      $("#bike").fadeOut();
    });
  }, 2000);
}
