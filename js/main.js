window.onload = function () {
  if (window.location.hash === "#ar") {
    document.body.classList.remove("english");
    document.body.classList.add("arabic");
    button.textContent = "English";
  } else if (window.location.hash === "#eng") {
    document.body.classList.remove("arabic");
    document.body.classList.add("english");
    button.textContent = "Arabic";
  }
  if (window.location.hash) {
    let lang;
    if (window.location.hash === "#ar") {
      lang = "ar";
    } else {
      lang = "eng";
    }
    document.getElementById("gym").textContent = data[lang].gym;
    document.getElementById("information").textContent = data[lang].information;
    document.getElementById("login-title").textContent = data[lang].loginTitle;
    document.querySelector(`label[for="exampleInputEmail1"]`).textContent =
      data[lang].email;
    document.getElementById("emailHelp").textContent = data[lang].emailHint;
    document.querySelector(`label[for="exampleInputPassword1"]`).textContent =
      data[lang].password;
    document.querySelector(`label[for="exampleCheck1"]`).textContent =
      data[lang].remember;
    document.querySelector(`button[type="submit"]`).textContent =
      data[lang].submit;
  }
};
let data = {
  eng: {
    gym: "Gym Management",
    information:
      "Attribution is appreciated and allows contributors to gain exposure",
    loginTitle: "LOGIN",
    email: "Email address",
    emailHint: "We'll never share your email with anyone else.",
    password: "Password",
    remember: "Remember Me",
    submit: "Login",
  },
  ar: {
    gym: "إدارة كمال الأجسام",
    information: "يُقدَّر الإسناد ويسمح للمساهمين باكتساب التعرض",
    loginTitle: "التسجيل",
    email: "الحساب الإلكترونى",
    emailHint: "لن نشارك بريدك الإلكتروني مع أي شخص آخر.",
    password: "كلمة المرور",
    remember: "تذكرنى",
    submit: "دخول",
  },
};

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

$(`#login`).on("click", function (e) {
  e.preventDefault();
  let email = document.querySelector(`input[type="email"]`);
  let password = document.querySelector(`input[type="password"]`);
  if (email.value.toLowerCase() === "muhammed" && password.value === "123") {
    alert("Welcome " + email.value);
    window.location = this.href;
    // window.open("../pages/dashboard.html");
  } else {
    alert("Wrong !\nEmail is : ' Muhammed '\nAnd Password is : ' 123 '");
  }
});
