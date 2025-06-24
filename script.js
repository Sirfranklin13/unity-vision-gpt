
async function askRomero() {
    const question = document.getElementById("question").value;
    const responseElem = document.getElementById("response");

    const response = await fetch("/.netlify/functions/ask-romero", {
        method: "POST",
        body: JSON.stringify({ prompt: question })
    });

    const data = await response.json();
    responseElem.innerText = data.answer || "No response from ROMERO.";
}
