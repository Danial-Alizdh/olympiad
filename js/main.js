async function updateUI() {
    const signinButton = document.querySelector('.signin-button');
    const signupButton = document.querySelector('.signup-button');
    const usernameElement = document.querySelector('.username');

    try {
        let formData = new FormData();
        formData.append('login_token', localStorage.getItem('login_token'));
        let response = await fetch(AUTH_API + "/main_page/", {
            method: 'POST',
            body: formData,
        });
        let data = await response.json();
        if (response.status === 200) {
            signinButton.style.display = 'none';
            signupButton.style.display = 'none';
            usernameElement.style.display = 'inline-block';

            usernameElement.textContent = data.username;
            usernameElement.addEventListener('click', () => {
                if (data.admin) {
                    window.location.href = '../admin'
                }
                else {
                    window.location.href = '../profile';
                }
            });

        } else {
            signinButton.style.display = 'inline-block';
            signupButton.style.display = 'inline-block';
            usernameElement.style.display = 'none';
            Swal.fire({
                icon: "info",
                title: data.message,
                showConfirmButton: !1,
                timer: 2000,
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
}

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const destination = button.getAttribute('data-destination');
            if (destination) {
                window.location.href = destination;
            }
        });
    });
});

updateUI();