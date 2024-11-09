// Open booking modal
function openBooking() {
    document.getElementById("booking-modal").style.display = "block";
}

// Close booking modal
function closeBooking() {
    document.getElementById("booking-modal").style.display = "none";
}

// Open a new registration page when "Book Now" is clicked
// function bookRoom(roomName, price) {
//     // Pass the room details to the registration page
//     const queryString = `?roomName=${encodeURIComponent(roomName)}&price=${encodeURIComponent(price)}`;
//     window.location.href = `registration.html${queryString}`; // Redirect to registration page
// }

function bookRoom(roomName, price) {
    localStorage.setItem('roomName', roomName);
    localStorage.setItem('roomPrice', price);
    window.location.href = 'registration.html';  // Redirect to registration page
}


// Close loyalty modal
function closeLoyalty() {
    document.getElementById("loyalty-modal").style.display = "none";
}

// Toggle dark/light mode
document.getElementById("mode-toggle").onclick = function() {
    document.body.classList.toggle("dark-mode");
    this.textContent = document.body.classList.contains("dark-mode") ? "Switch to Light Mode" : "Switch to Dark Mode";
};

// Close modal when clicking outside of it
window.onclick = function(event) {
    const bookingModal = document.getElementById("booking-modal");
    const loyaltyModal = document.getElementById("loyalty-modal");
    if (event.target === bookingModal) {
        closeBooking();
    }
    if (event.target === loyaltyModal) {
        closeLoyalty();
    }
};
