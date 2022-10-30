const BASE_URL = "https://melon-potent-period.glitch.me";

const linkToAdd = document.getElementById("toAdd_Link");
linkToAdd.addEventListener('submit', (event) =>{
    event.preventDefault()
    window.location.href = "./add.html";
});

async function getDataFromUrl(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
async function deleteItem(url) {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    alert(response.ok ? "data deleted successfully" : "error");
    window.location.reload();
  } catch (error) {
    alert(error);
    return null;
  }
}

async function drawTbody(url) {
  const data = await getDataFromUrl(url);
  createTbodyElements(data);
}

function createTbodyElements(data) {
  const output = document.getElementById("data_tbody");
  output.innerHTML = "";
  data.forEach((dataItem) => {
    const bodytr = document.createElement("tr");

    const urlId = document.createElement("th");
    urlId.textContent = dataItem.id;

    const urlSkill = document.createElement("th");
    urlSkill.textContent = dataItem.skill;

    const deleteLink = document.createElement("a");
    deleteLink.textContent = "delete";
    deleteLink.href = "#";
    deleteLink.classList.add("delete_skill");

    deleteLink.addEventListener("click", () => {
      deleteItem(BASE_URL + "/skill/" + dataItem.id);
    });

    bodytr.append(urlId, urlSkill, deleteLink);
    output.append(bodytr);
  });
}
drawTbody(BASE_URL + "/skills");
