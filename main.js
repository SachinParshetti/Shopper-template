document.addEventListener("DOMContentLoaded",function(){
    function TimeLoad() {
        const now = new Date();
        const startDate = new Date('2025-05-07T19:35:00'); // Set to current date/time (07:35 PM IST, May 07, 2025)
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 310); // 310 days from start
        endDate.setHours(startDate.getHours() + 7, startDate.getMinutes() + 24, startDate.getSeconds() + 42); // Adjust to match image

        const diff = endDate - now;

        if (diff <= 0) {
            document.getElementById("days").textContent = "0";
            document.getElementById("hours").textContent = "0";
            document.getElementById("minutes").textContent = "0";
            document.getElementById("seconds").textContent = "0";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
    }
    TimeLoad(); // Initial call to set the timer
    setInterval(TimeLoad, 1000);
});