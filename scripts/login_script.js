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