// Configuración de la fecha de la celebración
const eventDate = new Date("September 21, 2024 18:00:00").getTime();

// Actualizar la cuenta regresiva cada segundo
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Cálculo de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar resultados
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Detener el contador cuando llegue a 0
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "¡La fiesta ha comenzado!";
    }
}, 1000);
