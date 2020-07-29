let current = 0;

$(function () {
  let temp = $("template");
  let displayWindow = $("#main-window");
  displayWindow.append(temp[0].content.cloneNode(true));

  //   initialized

  $(".nav-item").on("click", function () {
    $(".nav-item").removeClass("nav-item-selected");
    $(this).addClass("nav-item-selected");
    let id = $(".nav-item").index(this);
    if (current === id) return;

    $("#main-window .row").fadeOut("slow", function () {
      current = id;
      let clon = temp[id].content.cloneNode(true);
      displayWindow.html("");
      displayWindow.append(clon);
    });
  });
});

function showAllProj() {
  $(".proj").show();
}
function showFS() {
  $(".fe,.ot").hide();
  $(".fs").show();
}
function showFE() {
  $(".fs,.ot").hide();
  $(".fe").show();
}
function clickProjBtn() {
  $("#proj-btn").click();
}
