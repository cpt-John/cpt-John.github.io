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

  populateComments();
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

    $("#main-window .row").fadeOut("slow");
    $("#main-window .row")
      .promise()
      .done(function () {
        current = id;
        let clon = temp[id].content.cloneNode(true);
        displayWindow.html("");
        displayWindow.append(clon);

        $("html").scrollTop(0);

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

let appUrl = "https://john-node-backend.herokuapp.com/";

function populateComments() {
  function populate(name, comment, active) {
    let commentBlock = `<div class="carousel-item text-center ${
      active ? "active" : ""
    }">
                <h3>${name} says,</h3>
                <p>
                  ${comment}
                </p>
              </div>`;
    $("#comments").append(commentBlock);
  }

  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      let result = JSON.parse(xhr.responseText)["result"];
      result.forEach(function (c, i) {
        let active = i == 0 ? true : false;
        populate(c.name, c.comment, active);
      });
      $("#comments-carousel").addClass("slide");
      $(".carousel").carousel({
        interval: 2000,
      });
    }
  };
  xhr.open("GET", appUrl + "getComments", true);
  xhr.send();
}

function addComment() {
  let name = $("#comment-name").val();
  let comment = $("#comment-content").val();
  if (!name || !comment) return;
  $("#comment-name").val("");
  $("#comment-content").val("");
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      $("#comments").html("");
      $("#comments-carousel").removeClass("slide");
      populateComments();
    }
  };
  xhr.open("POST", appUrl + "setComment", true);
  let body = { name, comment };
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify(body));
}
