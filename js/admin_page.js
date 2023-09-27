// JavaScript for toggling full-screen license image
function toggleFullScreen(img) {
    if (!img.classList.contains("full-screen")) {
        // Show the license image in full-screen mode
        img.classList.add("full-screen");

        // Create a full-screen container
        const fullScreenContainer = document.createElement("div");
        fullScreenContainer.classList.add("license-full-screen");

        // Clone the license image and add it to the full-screen container
        const licenseImage = img.cloneNode();
        fullScreenContainer.appendChild(licenseImage);

        // Append the full-screen container to the body
        document.body.appendChild(fullScreenContainer);

        // Close the full-screen view when clicking on the full-screen container
        fullScreenContainer.addEventListener("click", () => {
            img.classList.remove("full-screen");
            document.body.removeChild(fullScreenContainer);
        });
    } else {
        // Remove the full-screen mode
        img.classList.remove("full-screen");
    }
}

// Function to display user data
function displayUsers(users) {
    const usersContainer = document.getElementById("usersInformation");

    users.forEach((user, index) => {
        const userDiv = document.createElement("div");
        userDiv.classList.add("user-info");

        // Create a div for the user's avatar
        const userAvatarDiv = document.createElement("div");
        userAvatarDiv.classList.add("user-avatar");

        // Create an image element for the user's profile picture
        const profileImage = document.createElement("img");
        profileImage.src = user.image_profile === null ? '../images/no_pic.png' : (AUTH_API + user.image_profile);
        profileImage.alt = `User ${index + 1} Avatar`;
        userAvatarDiv.appendChild(profileImage);

        userDiv.appendChild(userAvatarDiv);

        // Create a div for the user's details
        const userDetailsDiv = document.createElement("div");
        userDetailsDiv.classList.add("user-details");

        // // Add user information to the user details div

        const email = document.createElement("p");
        email.textContent = `ایمیل : ${user.email}`;
        userDetailsDiv.appendChild(email);

        const username = document.createElement("p");
        username.textContent = `نام کاربری : ${user.username}`;
        userDetailsDiv.appendChild(username);

        const new_role = document.createElement("p");
        new_role.textContent = `درخواست برای : ${
            user.role === 'simple_user' ? 'کاربر عادی' : (user.role === 'coach' ? 'مربی' : (user.role === 'gym_manager' ? 'سالن‌دار' : (user.role === 'actor' ? 'قهرمان' : (user.role === 'office_admin' ? 'ادمین اداره' : (user.role === 'board_admin' ? 'ادمین هیئت' : 'نقش کاربر تعریف نشده است')))))        
        }`;
        userDetailsDiv.appendChild(new_role);

        userDiv.appendChild(userDetailsDiv);

        if (user.role !== 'office_admin' && user.role !== 'board_admin') {
            // Create a div for the user's license picture
            const licensePicDiv = document.createElement("div");
            licensePicDiv.classList.add("license-pic");

            // Create an image element for the user's license picture
            const licenseImage = document.createElement("img");
            licenseImage.src = user.document_image === null ? '../images/no_image.jpg' : (AUTH_API + user.document_image);
            licenseImage.alt = `License ${index + 1}`;
            licenseImage.classList.add("license-image");
            licenseImage.addEventListener("click", function () {
                toggleFullScreen(this);
            });
            licensePicDiv.appendChild(licenseImage);

            userDiv.appendChild(licensePicDiv);
        }

        // Create a button for confirming the license
        const confirmButton = document.createElement("button");
        confirmButton.classList.add("confirm-button");
        if (!user.accepted) {
            confirmButton.textContent = "تایید مدرک";
        }
        else {
            confirmButton.textContent = "مدرک تایید شده است";
            confirmButton.disabled = true;
        }
        // Add a click listener to the confirmButton
        confirmButton.addEventListener("click", async function () {
            try {
                let formData = new FormData();
                formData.append('login_token', localStorage.getItem('login_token'));
                formData.append('user_email', user.email);
                formData.append('accepted', true);
                let response = await fetch(AUTH_API + "/accept_role/", {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();

                if (response.status === 200) {
                    confirmButton.textContent = "مدرک تایید شده است";
                    confirmButton.disabled = true;
                    window.location.reload();
                } else {
                    Swal.fire({
                        icon: "error",
                        title: 'مشکلی رخ داده است',
                        text: data.errors.message,
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
        userDiv.appendChild(confirmButton);

        const rejectButton = document.createElement("button");
        rejectButton.classList.add("reject-button");
        if (!user.rejected) {
            rejectButton.textContent = "رد کردن مدرک";
        }
        else {
            rejectButton.textContent = "مدرک رد شده است";
            rejectButton.disabled = true;
        }
        rejectButton.addEventListener("click", async function () {
            try {
                let formData = new FormData();
                formData.append('login_token', localStorage.getItem('login_token'));
                formData.append('user_email', user.email);
                formData.append('accepted', false);
                let response = await fetch(AUTH_API + "/accept_role/", {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();

                if (response.status === 200) {
                    rejectButton.textContent = "مدرک رد شده است";
                    rejectButton.disabled = true;
                    window.location.reload();
                } else {
                    Swal.fire({
                        icon: "error",
                        title: 'مشکلی رخ داده است',
                        text: data.errors.message,
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

        userDiv.appendChild(rejectButton);

        usersContainer.appendChild(userDiv);
    });
}

async function fetchUsers(role) {
    try {
        let formData = new FormData();
        formData.append('login_token', localStorage.getItem('login_token'));
        formData.append('role', role);
        let response = await fetch(AUTH_API + "/get_users_by_role/", {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();

        if (response.status === 200) {
            if (data.data !== undefined) {
                displayUsers(data.data);
            }
        } else {
            Swal.fire({
                icon: "error",
                title: 'مشکلی رخ داده است',
                text: data.errors.message,
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
}

fetchUsers('coach');
fetchUsers('gym_manager');
fetchUsers('actor');
fetchUsers('office_admin');
fetchUsers('board_admin');

document.addEventListener("DOMContentLoaded",  function () {
    const logoutButton = document.getElementById("logoutButton");
    const backButton = document.getElementById("backButton");

    logoutButton.addEventListener("click", async function (event) {
        try {
            let response = await fetch(AUTH_API + "/logout/", {
                method: 'GET',
                headers: new Headers({'Authorization': localStorage.getItem('login_token')}),
            });
            if (response.status === 200) {
                localStorage.removeItem('login_token');
                window.location.href = '../index.html';
            } else {
                Swal.fire({
                    icon: "error",
                    title: 'مشکلی رخ داده است',
                    text: data.errors.message,
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

    backButton.addEventListener("click", function (event) {
        window.location.href = '../';
    });
});