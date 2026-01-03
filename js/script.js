function checkWater() {
    let area = document.getElementById("area").value;
    if (area === "") {
        document.getElementById("result").innerHTML = "Please enter an area.";
    } else {
        document.getElementById("result").innerHTML =
            "Status for " + area + ": Safe for Drinking";
    }
}

function showAlert() {
    let area = document.getElementById("alertArea").value.toLowerCase();
    let box = document.getElementById("alertBox");

    if (area === "") {
        box.innerHTML = "Please enter your area.";
        box.style.background = "#ffeeba";
    } else if (area === "kannur" || area === "payyannur") {
        box.innerHTML = "⚠ Alert: Water contamination reported in " + area + ". Avoid drinking tap water.";
        box.style.background = "#f8d7da";
    } else {
        box.innerHTML = "✅ Water in " + area + " is safe for drinking.";
        box.style.background = "#d4edda";
    }
}

function submitReport(e) {
    e.preventDefault();
    alert("Your water issue has been reported successfully!");
}
