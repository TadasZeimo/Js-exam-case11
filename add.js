const BASE_URL = "https://melon-potent-period.glitch.me";

async function sendDate(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
      window.location.href = "./index.html";
    }
  } catch (error) {
    console.log(error);
  }
}

document.getElementById("data_input").addEventListener("submit", (event) => {
  event.preventDefault();
  const inputSkill = document.getElementById("input_box").value;
  const regex = /[a-zA-Z]/;
  if (inputSkill.match(regex)) {
    const data = {
      skill: inputSkill,
    };
    sendDate(BASE_URL + "/skills", data);
    alert("data was written successfully");
  } else {
    alert("data write error");
  }
});
