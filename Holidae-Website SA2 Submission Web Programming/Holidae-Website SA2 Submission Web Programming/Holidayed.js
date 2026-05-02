function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
}

function scrollToPackages() {
    document.getElementById("packages").scrollIntoView({ behavior: "smooth" });
}

function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function submitBooking() {
    alert("Booking submitted successfully");
    closePopup();
}