$(function () {
  if (window.location.hash === "#ar") {
    document.body.classList.remove("english");
    document.body.classList.add("arabic");
    button.textContent = "English";
  } else if (window.location.hash === "#eng") {
    document.body.classList.remove("arabic");
    document.body.classList.add("english");
    button.textContent = "Arabic";
  }

  $("#sidebar").mCustomScrollbar({
    theme: "minimal",
  });

  $("#sidebarCollapse").on("click", function () {
    // open or close navbar
    if ($("#sidebar").hasClass("minimize") && $(document).width() > 768) {
      $("#sidebar").removeClass("minimize");
    } else {
      $("#sidebar").toggleClass("active");
    }
    $(this).toggleClass("active");
  });

  $("#dismiss").on("click", function () {
    // hide sidebar
    $("#sidebar").addClass("minimize");
    $("#sidebar").removeClass("active");
    $("#sidebarCollapse").removeClass("active");
  });

  $(".dropdown-anchor").on("click", function () {
    $(this).next(".slide-menu").slideToggle();
    $(this).find(".arrow").toggleClass("rotate");
  });

  $("#basic").on("click", function () {
    $(this).addClass("active");
    $(this).next().removeClass("active");
    $(".form2").fadeOut(400, function () {
      $(".form1").fadeIn();
    });
  });
  $("#items").on("click", function () {
    $(this).addClass("active");
    $(this).prev().removeClass("active");
    $(".form1").fadeOut(400, function () {
      $(".form2").fadeIn();
    });
  });
});

let button = document.querySelector(".lang");
button.addEventListener("click", () => {
  if (button.textContent === "Arabic") {
    button.textContent = "English";
    document.body.classList.remove("english");
    document.body.classList.add("arabic");
    button.setAttribute("href", "#ar");
    setTimeout(function () {
      location.reload(true);
    }, 100);
  } else if (button.textContent === "English") {
    button.textContent = "Arabic";
    button.setAttribute("href", "#eng");
    document.body.classList.remove("arabic");
    document.body.classList.add("english");
    setTimeout(function () {
      location.reload(true);
    }, 100);
  }
});
