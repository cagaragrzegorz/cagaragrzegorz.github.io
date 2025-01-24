import $ from "jquery";
// add underlines to menu items while on specific section
$(window).on("scroll", function () {
  var position = $(this).scrollTop()! + 100; //position scrolled so far

  $(".navSection").each(function () {
    //chcecks for every element with .navSection class
    var target = $(this).offset()!.top; //each element position from top
    var targetBot = target + $(this).height()!; // + its height

    var id = $(this).attr("id");
    $(".nav-link[data-id=" + id + "]").removeClass("active"); //clear all
    if (position >= target && targetBot >= position) {
      $(".nav-link[data-id=" + id + "]").addClass("active"); //activate menu item of section I am scrolling over
    }
  });
});

// make scroll up box visible
$(window).on("scroll", function () {
  var position = $(this).scrollTop(); //position scrolled so far

  if (position! > 100) {
    $(".dmtop").addClass("show");
  } else {
    $(".dmtop").removeClass("show");
  }
});

