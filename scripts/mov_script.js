function submitReview() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const comment = document.getElementById("comment").value.trim();
    const reviewError = document.getElementById("review-error");

    reviewError.textContent = "";

    const nameRegex = /^[\u0600-\u06FF\s]+$/; // فقط حروف فارسی و فاصله
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // فرمت ایمیل

    if (!name || !nameRegex.test(name)) {
        reviewError.textContent = "نام را به درستی وارد کنید (فقط حروف و فاصله).";
        return;
    }

    if (!email || !emailRegex.test(email)) {
        reviewError.textContent = "ایمیل معتبر وارد کنید.";
        return;
    }

    if (!comment) {
        reviewError.textContent = "لطفاً نظر خود را وارد کنید.";
        return;
    }

    alert("کامنت شما ارسال شد!");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";
}

function submitRating() {
    const rating = document.getElementById("rating").value.trim();
    const ratingError = document.getElementById("rating-error");

    ratingError.textContent = "";

    if (!rating || isNaN(rating) || rating < 1 || rating > 10) {
        ratingError.textContent = "لطفاً امتیازی بین ۱ تا ۱۰ وارد کنید.";
        return;
    }

    alert(`امتیاز شما (${rating}) ثبت شد!`);
    document.getElementById("rating").value = "";
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