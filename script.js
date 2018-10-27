async function showYesNoGif() {
    var yesNoResponseJson = await fetchYesNoDecision();
    showYesNoResult(yesNoResponseJson);
}

async function fetchYesNoDecision() {
    var apiEndpoint = "https://yesno.wtf/api";
    const response = await fetch(apiEndpoint);
    const parsedPromise = await response.json();
    console.log("Response has been parsed: [" + parsedPromise + "] from response [" + response + "]");
    return parsedPromise;
}

function showYesNoResult(yesNoResult) {
    var yesNoImage = document.getElementById("yesNoImage");
    console.log("Showing " + yesNoResult["image"]);
    yesNoImage.src = yesNoResult["image"];
}