const btnForEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "2hxODtQm4yX/vvduGr2pCA==7oxFuEDIf9UcY0De";

const option = {
  method: "Get",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnForEl.disabled = true;
    btnForEl.innerText = "Loading...";

    const response = await fetch(apiUrl, option);
    const data = await response.json();

    btnForEl.disabled = false;
    btnForEl.innerText = "Tell me a joke";

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerHTML = "An error happernrd, try again later";
    console.log("error");
  }
}

btnForEl.addEventListener("click", getJoke);
