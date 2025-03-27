
function updateTime() {
    const now = new Date();
    document.getElementById('datetime').innerText = now.toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            document.getElementById('location').innerText = `Lat: ${latitude}, Lon: ${longitude}`;
        }, () => {
            document.getElementById('location').innerText = "No se pudo obtener la ubicación.";
        });
    } else {
        document.getElementById('location').innerText = "Geolocalización no soportada.";
    }
}
getLocation();
