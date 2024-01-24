let current = 0;
let comments = null;
$(async function () {
  await appendComponents();
  updateViews();
  $(".background").removeClass("placeholder");
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

    $("#main-window .row").fadeOut("slow");
    $("#main-window .row")
      .promise()
      .done(function () {
        current = id;
        let clone = temp[id].content.cloneNode(true);
        displayWindow.html("");
        displayWindow.append(clone);

        $("html").scrollTop(0);
      });
  });
});

function showAllProj() {
  $(".proj").show();
}
function showDS() {
  $(".proj").hide();
  $(".ds").show();
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
function clickSkillsBtn() {
  $("#skills-btn").click();
}
function clickInterestsBtn() {
  $("#interests-btn").click();
}

function socialIconListners() {
  //social icons
  $("#fb-profile").on("click", function (event) {
    event.preventDefault();
    window.open("https://www.facebook.com/johnfrancispullikotil", "facebook");
  });
  $("#ig-profile").on("click", function (event) {
    event.preventDefault();
    window.open("https://www.instagram.com/hai_zuhn_buhg/", "instagram");
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

let appUrl = "https://john-portfolio-gsoc.onrender.com/";

function populateComments() {
  if (comments) {
    populate(comments);
    return;
  }
  function populate(comments) {
    $("#comments").empty();
    comments.forEach(function (c, i) {
      let commentBlock = `<div class="carousel-item text-center ${
        i == 0 ? "active" : ""
      }">
                <h3>${c.name} says,</h3>
                <p>
                  ${c.comment}
                </p>
              </div>`;
      $("#comments").append(commentBlock);
    });
    $("#comments-carousel").addClass("slide");
    $(".carousel").carousel({
      interval: 2000,
    });
  }

  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      comments = JSON.parse(xhr.responseText)["result"];
      populate(comments);
    }
  };
  xhr.open("GET", appUrl + "comment", true);
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
      comments = null;
      populateComments();
    }
  };
  xhr.open("POST", appUrl + "comment", true);
  let body = { name, comment };
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify(body));
}

async function appendComponents() {
  const template_files = [
    "about",
    "projects",
    "skills",
    "experience",
    "education",
    "awards",
    "interests",
    "contact",
  ];
  async function loadPage(url, parent) {
    await $.ajax({
      url,
      dataType: "text",
      success: function (data) {
        $(parent).append(data);
      },
    });
  }
  for (const file_name_ of template_files) {
    const file_name = `./components/${file_name_}.html`;
    await loadPage(file_name, "body");
  }
}

const certificates = {
  "https://credentials.databricks.com/602bd997-f2dd-4711-8e3a-d325b03674b1#gs.3hnhbp":0,
  "https://www.kaggle.com/learn/certification/johnfrancis1995/data-cleaning":1,
  "https://www.freecodecamp.org/certification/fcc7b4d9420-b76f-43cd-9da6-03efd9d1641d/data-analysis-with-python-v7":2,
  "https://www.freecodecamp.org/certification/fcc7b4d9420-b76f-43cd-9da6-03efd9d1641d/scientific-computing-with-python-v7":3,
  "https://www.guvi.in/verify-certificate?id=457RQ9I416w3vY381P":4,
  "https://www.coursera.org/account/accomplishments/verify/79LWEGZ8SL9E":5,
  "https://www.coursera.org/account/accomplishments/verify/UBPRY2J433Z9":6,
  "https://www.coursera.org/account/accomplishments/verify/QZNGHBVH3Z5P":7,
  "https://www.coursera.org/account/accomplishments/verify/9MHRRQAHYK5E":8,
  "https://www.guvi.in/verify-certificate?id=I1629k8s6d436F1Zg6":9,
  "https://www.guvi.in/verify-certificate?id=iGH1lV8B281573h570":10,
  "https://www.guvi.in/verify-certificate?id=4618Km09Z79F16D4sk":11,
  "https://www.kaggle.com/learn/certification/johnfrancis1995/data-visualization":12,
  "https://www.guvi.in/verify-certificate?id=16MC4A1734Q71k794X&course=data_visualization_in_python_english":13,
  "https://www.guvi.in/verify-certificate?id=4v6146RE447Tb12i2C&course=matplotlibEng":14,
  "https://www.kaggle.com/learn/certification/johnfrancis1995/feature-engineering":15,
  "https://www.kaggle.com/learn/certification/johnfrancis1995/intermediate-machine-learning":16,
  "https://www.kaggle.com/learn/certification/johnfrancis1995/intro-to-machine-learning":17,
  "https://www.guvi.in/verify-certificate?id=x778J31o9050qB65s4&course=introduction_to_data_engineering_and_bigdata_english":18,
  "https://www.guvi.in/verify-certificate?id=6743152M3e4t5r9TF8":19,
  "https://www.guvi.in/verify-certificate?id=11fue6H769q3089K4A&course=introduction-to-ml":20,
  "https://www.guvi.in/verify-certificate?id=L858v19455S3a81Bmq":21,
  "https://www.guvi.in/verify-certificate?id=v64p514I5l57Q78Dm2":22,
  "https://www.kaggle.com/learn/certification/johnfrancis1995/pandas":23,
  "https://www.kaggle.com/learn/certification/johnfrancis1995/python":24,
  "https://www.guvi.in/verify-certificate?id=d79y18ip53G3E82wA2":25,
};

function populateCertificates() {
  Object.entries(certificates).forEach(([key, value], index) => {
    const certificate_html = `<div class="placeholder_1 carousel-item text-center image-container ${
      value==0 ? "active" : ""
    }">
    <img
      style="max-width: 27em; height: 17em;"
      src="./resources/certificate/${value}.png"
      alt="Loading..."
    />
    <div class="image-text-block tag">
    <a href=${key}
      class = "btn light-cl"
      style = "padding:0;"
      target="_blank"
    > <i class="fa fa-link" style="margin-right: 15px;"></i> Verify</a>
    </div>
    <h5>${index + 1}/${Object.keys(certificates).length}</h5>
    </div>`;
    $("#certificates").append(certificate_html);
  });
}

// Chart js

function createChart(data) {
  const ctxL = document.getElementById("lineChart").getContext("2d");
  const trafficChart = new Chart(ctxL, {
    type: "line",
    data: {
      labels: data["labels"],
      datasets: [
        {
          data: data["counts"],
          backgroundColor: ["rgba(105, 0, 132, .2)"],
          borderColor: ["rgba(200, 99, 132, .7)"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      elements: {
        line: {
          tension: 0,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

function getViews() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      views = JSON.parse(xhr.responseText)["result"];
      data = { labels: [], counts: [] };
      data["labels"] = views.map((e) => e["date"]).reverse();
      data["counts"] = views.map((e) => e["counter"]).reverse();
      $("#lineChart_loading").remove();
      createChart(data);
    }
  };
  xhr.open("GET", appUrl + "view?days=20", true);
  xhr.send();
}

function updateViews() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      const response = JSON.parse(xhr.responseText);
    }
  };
  xhr.open("Post", appUrl + "view", true);
  xhr.send();
}
