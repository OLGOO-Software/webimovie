let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");
    });
    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function currentSlide(index) {
    slideIndex = index - 1;
    showSlide(slideIndex);
}

// Initialize slideshow
showSlide(slideIndex);
setInterval(nextSlide, 5000);

function toggleAnswer(button) {
    const answer = button.nextElementSibling;

    // نمایش یا پنهان کردن پاسخ
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}

// گرفتن دکمه تغییر حالت
const themeToggleButton = document.getElementById("theme-toggle");

// بررسی وضعیت ذخیره‌شده در localStorage
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
}

// تغییر حالت با کلیک
themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // ذخیره وضعیت در localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});