document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.getElementById("signUpForm");
    const profileImage = document.getElementById("profileImage");
    const profileImagePreview = document.getElementById("profileImagePreview");

    // Function to handle image selection and preview
    profileImage.addEventListener("change", function () {
        const selectedImage = profileImage.files[0];
        if (selectedImage) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profileImagePreview.src = e.target.result;
            };
            reader.readAsDataURL(selectedImage);
        }
    });

    signUpForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const phone_number = document.getElementById("phone_number").value;
        const password = document.getElementById("password").value;
        const re_password = document.getElementById("re_password").value;
        const passwordError = document.getElementById("password-error");
        const phoneNumberError = document.getElementById("phone_number-error");

        if (phone_number.length !== 11) {
            phoneNumberError.style.display = 'inline-block';
            phoneNumberError.textContent = "شماره وارد شده معتبر نیست";
            return;
        }
        else {
            phoneNumberError.style.display = 'none';
        }

        if (password !== re_password) {
            passwordError.style.display = 'inline-block';
            passwordError.textContent = "گذرواژه‌ها باید یکسان باشند";
            return;
        }
        else {
            passwordError.style.display = 'none';
        }

        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("phone_number", phone_number);
        formData.append("password", password);
        if (profileImage.files[0]) {
            formData.append("image_profile", profileImage.files[0]);
        }

        try {
            let response = await fetch(AUTH_API + "/signup/", {
                method: "POST",
                body: formData,
            });
            let data = await response.json();
            if (response.status === 201) {
                localStorage.setItem('login_token', data.login_token);
                Swal.fire({
                    icon: "success",
                    title: "خوش آمدید!",
                    text: "ثبت نام شما با موفقیت انجام شد.",
                    showConfirmButton: !1,
                    timer: 1500
                }).then(function () {
                    window.location.href = '../index.html';
                })
            }
            else if (response.status === 400) {
                Swal.fire({
                    icon: "error",
                    title: 'مشکلی رخ داده است',
                    text: data.errors.email,
                    showConfirmButton: !1,
                    timer: 2000
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: 'مشکلی رخ داده است',
                text: error,
                showConfirmButton: !1,
                timer: 2000
            });
        }
    });
});
