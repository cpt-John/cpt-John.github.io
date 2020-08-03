let current = 0;

$(function () {
  let temp = $("template");
  let displayWindow = $("#main-window");
  displayWindow.append(temp[0].content.cloneNode(true));

  $(".bubble").on(
    "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
    function () {
      $(".bubble").removeClass("bubble-animate");
    }
  );
  //   initialized

  $(".nav-item").on("click", function () {
    $(".nav-item").removeClass("nav-item-selected");
    $(this).addClass("nav-item-selected");
    let id = $(".nav-item").index(this);
    if (current === id) return;

    $(".bubble").addClass("bubble-animate");

    $(".bubble").on(
      "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
      function () {
        $(".bubble").removeClass("bubble-animate");
      }
    );

    $("#main-window .row").fadeOut("slow", function () {
      current = id;
      let clon = temp[id].content.cloneNode(true);
      displayWindow.html("");
      displayWindow.append(clon);
      if (current == temp.length - 1) socialIconListners();
    });
  });
});

function showAllProj() {
  $(".proj").show();
}
function showFS() {
  $(".proj").hide();
  $(".fs").show();
}
function showFE() {
  $(".proj").hide();
  $(".fe").show();
}
function showOT() {
  $(".proj").hide();
  $(".ot").show();
}
function showAnd() {
  $(".proj").hide();
  $(".and").show();
}
function clickProjBtn() {
  $("#proj-btn").click();
}

function socialIconListners() {
  //social icons
  $("#fb-profile").on("click", function (event) {
    event.preventDefault();
    window.open("https://www.facebook.com/johnfrancispullikotil", "facebook");
  });
  $("#ig-profile").on("click", function (event) {
    event.preventDefault();
    window.open("https://www.instagram.com/munchkin_.man/", "instagram");
  });
  $("#github-profile").on("click", function (event) {
    event.preventDefault();
    window.open("https://github.com/cpt-John", "github");
  });
  $("#linkedin-profile").on("click", function (event) {
    event.preventDefault();
    window.open(
      "https://www.linkedin.com/in/john-francis-526999148/",
      "linkedin"
    );
  });
  $("#gmail-send").on("click", function (event) {
    event.preventDefault();
    window.open(
      "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=johnfrancis95815@gmail.com&tf=1",
      "gmail"
    );
  });
}
