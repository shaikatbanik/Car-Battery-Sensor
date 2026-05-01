function getBatteryData() {
    return {
        temperature: Math.floor(Math.random() * 50),
        voltage: (300 + Math.random() * 50).toFixed(2),
        current: (Math.random() * 120).toFixed(2),
        cycles: Math.floor(Math.random() * 1200)
    };
}

function calculateSOH(temp, cycles) {
    let health = 100;

    if (temp > 40) health -= 25;
    else if (temp > 30) health -= 10;

    health -= cycles * 0.015;

    return Math.max(0, health.toFixed(1));
}

function getStatus(value, type) {
    if (type === "temp") {
        if (value > 45) return ["High Risk", "danger"];
        if (value > 35) return ["Warm", "warning"];
        return ["Normal", "good"];
    }

    if (type === "soh") {
        if (value < 40) return ["Poor", "danger"];
        if (value < 70) return ["Degrading", "warning"];
        return ["Healthy", "good"];
    }

    return ["Normal", "good"];
}

function updateDashboard() {
    const data = getBatteryData();
    const soh = calculateSOH(data.temperature, data.cycles);

    // Update values
    document.getElementById("temp").innerText = data.temperature + " °C";
    document.getElementById("voltage").innerText = data.voltage + " V";
    document.getElementById("current").innerText = data.current + " A";
    document.getElementById("cycles").innerText = data.cycles;
    document.getElementById("soh").innerText = soh + " %";

    // Status updates
    const [tempText, tempClass] = getStatus(data.temperature, "temp");
    const [sohText, sohClass] = getStatus(soh, "soh");

    const tempStatus = document.getElementById("tempStatus");
    tempStatus.innerText = tempText;
    tempStatus.className = "status " + tempClass;

    const sohStatus = document.getElementById("sohStatus");
    sohStatus.innerText = sohText;
    sohStatus.className = "status " + sohClass;

    // Progress bar
    document.getElementById("sohBar").style.width = soh + "%";

    // Alert logic
    const alertBox = document.getElementById("alert");

    if (data.temperature > 45) {
        alertBox.style.display = "block";
        alertBox.className = "alert danger";
        alertBox.innerText = " Critical Temperature! Immediate action required!";
    } 
    else if (soh < 40) {
        alertBox.style.display = "block";
        alertBox.className = "alert warning";
        alertBox.innerText = " Battery health is very low!";
    } 
    else {
        alertBox.style.display = "block";
        alertBox.className = "alert good";
        alertBox.innerText = " System operating normally";
    }
}

setInterval(updateDashboard, 2000);
updateDashboard();