const text = document.querySelector(".text");
const button = document.querySelector(".advice");
const textID = document.querySelector(".adviceID");

function renderAdvice(adviceText, adviceID) {
  text.textContent = adviceText;
  textID.textContent = adviceID;
}

async function getAdvice() {
  const url = "https://api.adviceslip.com/advice";

  let adviceText = "";
  let adviceID = "";

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.slip.id) {
      adviceText = `"${data.slip.advice}"`;
      adviceID = `ADVICE #${data.slip.id}`;
    } else {
      adviceText = "none";
    }
  } catch (e) {
    console.log(e);
  }

  renderAdvice(adviceText, adviceID);
}

button.addEventListener("click", getAdvice);
