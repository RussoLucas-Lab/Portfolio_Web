const btnContactMe = document.getElementById("contactMeBtn");
const btnPortfolio = document.getElementById("portfolio");
const btnPortfolioBack = document.getElementById("portfolioBack");
const contentColumn = document.getElementById("contentColumn");
const profile = document.getElementById("profile");
const portfolio = document.getElementById("portfolio");
const landingContainer = document.getElementById("landingContainer");
const main = document.getElementById("main");

const aboutBackBtn = document.getElementById("aboutBack");

function portfolioShow() {
  contentColumn.classList.toggle("invisitble");
  contentColumn.classList.toggle("visible");
}

aboutBackBtn.addEventListener("click", aboutBack);

function aboutBack() {
  contentColumn.classList.toggle("invisible");
  contentColumn.classList.toggle("visible");
}

//PDF Resume
document.getElementById("resume").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "./resources/Lucas_Russo_CV.pdf";
  link.download = "Lucas_Russo_CV.pdf";
  link.click();
});

//Formulario
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form__contact");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm(
      "service_2q0pl8n",
      "template_99mn6ye",
      form
    )
    .then(() => {
      alert("Mensaje enviado correctamente!");
      form.reset();
    })
    .catch((error) => {
      console.error("Error al enviar:", error);
      alert("Error al enviar el mensaje");
    });
  });
});


// Contact Me & Portfolio auto-scroll

const mediaQuery = window.matchMedia("(max-width: 680px)");

function setPortfolioAction(e) {
  if (e.matches) {
    btnPortfolio.onclick = () => {
      document.getElementById("portfolio").scrollIntoView({
        behavior: "smooth",
      });
    };
  } else {
    btnPortfolio.addEventListener("click", portfolioShow);
    btnPortfolioBack.addEventListener("click", portfolioShow);
  }
}

function setContactMeAction(e) {
  if (e.matches) {
    btnContactMe.onclick = () => {
      document.getElementById("form").scrollIntoView({
        behavior: "smooth",
      });
    };
  } else {
    btnContactMe.addEventListener("click", () => {
      contentColumn.classList.toggle("invisible");
      contentColumn.classList.toggle("visible");
    });
  }
}

setPortfolioAction(mediaQuery);
setContactMeAction(mediaQuery);

mediaQuery.addEventListener("change", setPortfolioAction);
mediaQuery.addEventListener("change", setContactMeAction);
