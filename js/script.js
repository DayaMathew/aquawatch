function checkWater() {
    let area = document.getElementById("area").value;

    if (area === "") {
        document.getElementById("result").innerHTML =
            "<span style='color:red'>Please enter an area.</span>";
    } else {
        document.getElementById("result").innerHTML =
            "Status for <b>" + area + "</b>: <span style='color:green'>Safe for Drinking</span>";
    }
}

function showAlert() {
    document.getElementById("alertBox").innerHTML =
        "⚠ Alert: Water contamination reported in nearby areas. Please boil water before use.";
}

function submitReport(event) {
    event.preventDefault();
    alert("Your water issue has been reported successfully!");
}
