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

  console.log("width: " + $(document).width());

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

  $("#create").on("click", function () {
    window.open("../pages/create.html");
  });

  function getRepos() {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        // console.log(this.responseText);
        // console.log(JSON.parse(this.responseText));
      }
      let myJsonObject = JSON.parse(myRequest.responseText),
        id = "",
        first = "",
        last = "",
        number = "";
      let myTable = $("#content table tbody");
      let editIcon = `<a><i class="far fa-edit"></i></a>`;
      let deleteIcon = `<a><i class="far fa-trash-alt"></i></a>`;

      for (let i = 0; i < myJsonObject.length; i++) {
        id = myJsonObject[i].id;
        first = myJsonObject[i].first;
        last = myJsonObject[i].last;
        number = myJsonObject[i].number;
        myTable.append(`
            <tr>
            <th scope="row">${id}</th>
            <td>${first}</td>
            <td>${last}</td>
            <td>${number}</td>
            <td>${editIcon}</td>
            <td>${deleteIcon}</td>
            </tr>
            `);
      }
    };
    myRequest.open("GET", "../customers.json", true);
    myRequest.send();
  }
  getRepos();
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
