const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector(".name");
const $b = document.querySelector(".blog"); //cambio de # a .
const $l = document.querySelector(".location");


//Try y catch a asyn function
async function displayUser(username) {
  try {
    $n.textContent = "cargando...";
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    console.log(data);
    $n.textContent = data.name;
    $b.textContent = data.blog;
    $l.textContent = data.location;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log("OH NO!");
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser("stolinski");
