// Form Validation
const loginForm = document.querySelector('form');
// تصحيح: ضفنا # لأنهم ID
const inputText = document.querySelector('#phonNumber'); 
const inputPassword = document.querySelector('#password');
const togglePass = document.querySelector('#togglePassword');

loginForm.addEventListener('submit', function(event) {
    const inputs = [inputText, inputPassword];
    let hasError = false;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            hasError = true;
            
            input.style.border = "2px solid #ff4d4d";
            
            input.classList.add('error-shake');
            
            setTimeout(() => {
                input.classList.remove('error-shake');
            }, 500);

        } else {
            input.style.border = "1px solid var(--text-muted)";
        }
    });

    if (hasError) {
        event.preventDefault(); // بيمنع إرسال البيانات لو فيه خانة فاضية
    }
});

// Toggle Password

togglePass.addEventListener('click', function (e){
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
});