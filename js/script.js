function checkWater() {
    let area = document.getElementById("area").value;

    if (area === "") {
        document.getElementById("result").innerHTML = "Please enter an area.";
    } else {
        document.getElementById("result").innerHTML =
            "Status for <b>" + area + "</b>: <span style='color:green'>Safe for Drinking</span>";
    }
}

function submitReport(event) {
    event.preventDefault();
    alert("Your water issue has been reported successfully!");
}
