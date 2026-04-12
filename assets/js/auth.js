// /* Form Elements */
const loginForm = document.querySelector('form');
const inputPassword = document.querySelector('#password1');
const inputConfirmPassword = document.querySelector('#password2');
const togglePass = document.querySelectorAll('.toggle-btn');

// Form Validation
loginForm.addEventListener('submit', function(event) {
    let hasError = false;
    const inputs = event.target.querySelectorAll('input');

    inputs.forEach(input => {
    
        if (input.type !== 'radio' && input.value.trim() === "") {
            hasError = true;
            input.style.border = "2px solid #ff4d4d";
            input.classList.add('error-shake');
            
            setTimeout(() => {
                input.classList.remove('error-shake');
            }, 500);
        } else if (input.type !== 'radio') {
            input.style.border = "1px solid var(--text-muted)";
        }
    });

    if (inputPassword && inputConfirmPassword && inputPassword.value !== "" && inputConfirmPassword.value !== "") {
        if (inputPassword.value !== inputConfirmPassword.value) {
            hasError = true;
            
            [inputPassword, inputConfirmPassword].forEach(el => {
                el.classList.add('error-shake');
                el.style.border = "2px solid #ff4d4d";
                setTimeout(() => el.classList.remove('error-shake'), 500);
            });

            alert("كلمة المرور غير متطابقة");
        }
    }

    if (hasError) {
        event.preventDefault(); 
    }
});

// Toggle Password
togglePass.forEach(function(btn) {
    btn.addEventListener('click', function() {
        // بنمسك الـ input اللي جوه نفس الصندوق مع الزرار
        const myInput = btn.parentElement.querySelector('input');
        const type = myInput.getAttribute('type') === 'password' ? 'text' : 'password';
        myInput.setAttribute('type', type);
        
        const icon = btn.querySelector('i');
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    });
});