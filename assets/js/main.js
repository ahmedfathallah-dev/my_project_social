let subMenu = document.getElementById("subMenu");
const darkModeToggle = document.getElementById("darkModeToggle");
const themeText = document.getElementById("theme-text");
const userIcon = document.getElementById("userIcon");

// --- 1. جزء القائمة الجانبية (Sub Menu) ---
function toggleMenu() {
    subMenu.classList.toggle("open-menu");
    const gerIcon = document.querySelector("#userIcon");
    gerIcon.classList.toggle("spin-gear");
}

if (userIcon) {
    userIcon.onclick = function (e) {
        e.stopPropagation(); 
        toggleMenu();
    };
}

document.onclick = function (e) {
    // لو المنيو مفتوحة ودست بره، اقفلها
    if (subMenu.classList.contains("open-menu") && !subMenu.contains(e.target) && e.target !== userIcon) {
        subMenu.classList.remove("open-menu");
    }
};

// --- 2. جزء الدارك مود (الاحترافي) ---

// أولاً: فحص التفضيل المحفوظ أول ما الصفحة تفتح
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    if (themeText) themeText.innerText = " الوضع النهاري";
    const icon = darkModeToggle.querySelector('i');
    if(icon) { icon.classList.replace('fa-moon', 'fa-sun'); }
}

// ثانياً: كود التبديل عند الضغط
if (darkModeToggle) {
    darkModeToggle.addEventListener("click", (e) => {
        e.preventDefault();

        let theme = document.documentElement.getAttribute("data-theme");
        const icon = darkModeToggle.querySelector('i');

        if (theme === "dark") {
            // العودة للوضع الفاتح
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("theme", "light");
            if (themeText) themeText.innerText = " الوضع الليلي";
            if(icon) icon.classList.replace('fa-sun', 'fa-moon');
        } else {
            // التبديل للوضع المظلم
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            if (themeText) themeText.innerText = " الوضع النهاري";
            if(icon) icon.classList.replace('fa-moon', 'fa-sun');
        }
    });
}