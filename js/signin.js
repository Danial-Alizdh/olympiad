document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.getElementById("signInForm");

    signInForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const username = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const formData = new FormData();
        formData.append("email", username);
        formData.append("password", password);

        try {
            let response = await fetch(AUTH_API + "/login/", {
                method: "POST",
                body: formData,
            });
            let data = await response.json();
            if (response.status === 200) {
                localStorage.setItem('login_token', data.login_token);
                Swal.fire({
                    icon: "success",
                    title: data.username + '، خوش آمدی!',
                    showConfirmButton: !1,
                    timer: 1500
                }).then(function () {
                    window.location.href = '../index.html';
                })
            } else {
                Swal.fire({
                    icon: "error",
                    title: 'مشکلی رخ داده است',
                    text: data.message,
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
