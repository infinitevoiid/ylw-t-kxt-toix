function updateTime() {
    const now = new Date();
    const futureDate = new Date(now.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 days from now

    // Format the time as "05:29:34 PM" with leading zeros
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const currentTime = now.toLocaleTimeString('en-US', options);

    // Format the date as "Monday, Jul 15, 2024"
    const optionsDate = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const currentDate = now.toLocaleDateString('en-US', optionsDate);

    document.getElementById('current-time').innerText = currentTime;
    document.getElementById('current-date').innerText = currentDate;

    // Calculate remaining time
    const remainingTime = futureDate - now;
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Update countdown elements
    document.getElementById('countdown-days').innerText = days.toString().padStart(2, '0');
    document.getElementById('countdown-hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('countdown-minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('countdown-seconds').innerText = seconds.toString().padStart(2, '0');
}

// Update time initially and every second
setInterval(updateTime, 1000);
updateTime();
