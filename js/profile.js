document.addEventListener("DOMContentLoaded", async function () {
    const emailInput = document.getElementById("email");
    const usernameInput = document.getElementById("username");
    const phoneNumberInput = document.getElementById("phone_number");
    const bio = document.getElementById("bio");
    const role = document.getElementById("role");
    const profileImage = document.getElementById("profileImage");
    const profileImagePreview = document.getElementById("profileImagePreview");
    const changeRole = document.getElementById('changeRole');
    const saveButton = document.getElementById("saveButton");
    const inputs = document.querySelectorAll(".info-label input");
    let imageFlag = false;
    let selectFlag = false;
    const logoutButton = document.getElementById("logoutButton");
    const backButton = document.getElementById("backButton");
    const process = document.getElementById("process");
    let originData;

    function addGymManagerElements(data) {
        let container = document.getElementById('additionalFieldsContainer');
        container.innerHTML = '';

        let gymNameDiv = document.createElement("div");
        gymNameDiv.className = "info-label";
        container.appendChild(gymNameDiv);

        let gymNameLabel = document.createElement("label");
        gymNameLabel.textContent = "نام باشگاه :";
        gymNameDiv.appendChild(gymNameLabel);

        let gymNameInput = document.createElement("input");
        gymNameInput.type = "text";
        gymNameInput.id = "gym_name";
        gymNameInput.value = data.name;
        gymNameInput.addEventListener("input", function () {
            // saveData.append('name', gymNameInput.value);
            originData['name'] = gymNameInput.value;
            updateHasChanges();
        });
        gymNameDiv.appendChild(gymNameInput);

        let possibleDiv = document.createElement("div");
        possibleDiv.className = "info-label";
        container.appendChild(possibleDiv);

        let possibleLabel = document.createElement("label");
        possibleLabel.textContent = "امکانات :";
        possibleDiv.appendChild(possibleLabel);

        let possibleTextarea = document.createElement("textarea");
        possibleTextarea.id = "possible";
        possibleTextarea.value = data.possibilities;
        possibleTextarea.addEventListener("input", function () {
            // saveData.append('possibilities', possibleTextarea.value);
            originData['possibilities'] = possibleTextarea.value;
            updateHasChanges();
        });
        possibleTextarea.className = "custom-textarea";
        possibleTextarea.style.fontSize = "16px";
        possibleDiv.appendChild(possibleTextarea);

        let locationDiv = document.createElement("div");
        locationDiv.className = "info-label";
        container.appendChild(locationDiv);

        let locationLabel = document.createElement("label");
        locationLabel.textContent = "آدرس باشگاه :";
        locationDiv.appendChild(locationLabel);

        let locationInput = document.createElement("input");
        locationInput.type = "text";
        locationInput.id = "location";
        locationInput.value = data.location;
        locationInput.addEventListener("input", function () {
            // saveData.append('location', locationInput.value);
            originData['location'] = locationInput.value;
            updateHasChanges();
        });
        locationDiv.appendChild(locationInput);

        let locationLinkDiv = document.createElement("div");
        locationLinkDiv.className = "info-label";
        container.appendChild(locationLinkDiv);

        let locationLinkLabel = document.createElement("label");
        locationLinkLabel.textContent = "لینک آدرس :";
        locationLinkDiv.appendChild(locationLinkLabel);

        let locationLinkInput = document.createElement("input");
        locationLinkInput.type = "text";
        locationLinkInput.id = "location_link";
        locationLinkInput.value = data.location_link;
        locationLinkInput.addEventListener("input", function () {
            // saveData.append('location_link', locationLinkInput.value);
            originData['location_link'] = locationLinkInput.value;
            updateHasChanges();
        });
        locationLinkDiv.appendChild(locationLinkInput);

        let imageInput = document.createElement("input");
        imageInput.type = "file";
        imageInput.id = "imageInput";
        imageInput.style.display = "none";
        container.appendChild(imageInput);

        let uploadImageBtn = document.createElement("button");
        uploadImageBtn.className = "upload_pics";
        uploadImageBtn.id = "upload_image";
        uploadImageBtn.textContent = "آپلود تصویر سالن ورزشی";
        uploadImageBtn.onclick = () => {imageInput.click()};
        imageInput.addEventListener("change", function () {
            const selectedImage = imageInput.files[0];
            if (selectedImage) {
                // saveData.append('image', imageInput.files[0]);
                originData['image'] = imageInput.files[0];
                selectedImageName.textContent = 'جهت آپلود تصویر، "ذخیره اطلاعات" را فشار دهید';
                imageFlag = true;
                updateHasChanges();
            }
        });
        container.appendChild(uploadImageBtn);

        let selectedImageName = document.createElement("p");
        selectedImageName.id = "selectedImageName";
        selectedImageName.textContent = data.image !== null ? "تصویر آپلود شده است" : "";
        container.appendChild(selectedImageName);

        let licenseInput = document.createElement("input");
        licenseInput.type = "file";
        licenseInput.id = "licenseInput";
        licenseInput.style.display = "none";
        container.appendChild(licenseInput);

        let uploadLicenseBtn = document.createElement("button");
        uploadLicenseBtn.className = "upload_pics";
        uploadLicenseBtn.id = "upload_license";
        uploadLicenseBtn.textContent = "آپلود تصویر پروانه سالن ورزشی";
        uploadLicenseBtn.onclick = () => {licenseInput.click()};
        licenseInput.addEventListener("change", function () {
            const selectedImage = licenseInput.files[0];
            if (selectedImage) {
                // saveData.append('document_image', licenseInput.files[0]);
                originData['document_image'] = licenseInput.files[0];
                selectedLicenseName.textContent = 'جهت آپلود تصویر، "ذخیره اطلاعات" را فشار دهید';
                imageFlag = true;
                updateHasChanges();
            }
        });
        container.appendChild(uploadLicenseBtn);

        let selectedLicenseName = document.createElement("p");
        selectedLicenseName.id = "selectedLicenseName";
        selectedLicenseName.textContent = data.document_image !== null ? "تصویر آپلود شده است" : "";
        container.appendChild(selectedLicenseName);

        let h3Element = document.createElement("h3");
        h3Element.textContent = "مربی‌ها";
        container.appendChild(h3Element);

        let valuesContainer = document.createElement("div");
        valuesContainer.className = "values-container";
        if (data.coaches && data.coaches !== null) {
            data.coaches.forEach(function (user, index) {
                let userDiv = document.createElement('div');
                userDiv.className = 'value';
                valuesContainer.appendChild(userDiv);

                let userBoxDiv = document.createElement('div');
                userBoxDiv.className = 'user-box';
                userDiv.appendChild(userBoxDiv);

                let userAvatarDiv = document.createElement('div');
                userAvatarDiv.className = 'user-avatar';
                userBoxDiv.appendChild(userAvatarDiv);

                let userAvatarImg = document.createElement('img');
                userAvatarImg.src = user.image_profile === null ? '../images/no_pic.png' : (AUTH_API + user.image_profile); // Use the actual avatar URL or a default image
                userAvatarImg.alt = 'User ' + (index + 1) + ' Avatar';
                userAvatarDiv.appendChild(userAvatarImg);

                let userDetailsDiv = document.createElement('div');
                userDetailsDiv.className = 'user-details';
                userBoxDiv.appendChild(userDetailsDiv);

                let usernameP = document.createElement('p');
                usernameP.textContent = 'نام کاربری : ' + user.username;
                userDetailsDiv.appendChild(usernameP);

                let scoreP = document.createElement('p');
                scoreP.textContent = 'امتیاز : ' + user.rate;
                userDetailsDiv.appendChild(scoreP);
            });
        }
        container.appendChild(valuesContainer);
    }

    async function addCoachElements(data) {
        let container = document.getElementById('additionalFieldsContainer');
        container.innerHTML = '';

        let educationDiv = document.createElement("div");
        educationDiv.className = "info-label";
        container.appendChild(educationDiv);

        let educationLabel = document.createElement("label");
        educationLabel.textContent = "تحصیلات :";
        educationDiv.appendChild(educationLabel);

        let educationInput = document.createElement("input");
        educationInput.type = "text";
        educationInput.id = "education";
        educationInput.value = data.education;
        educationInput.addEventListener("input", function () {
            // saveData.append('education', educationInput.value);
            originData['education'] = educationInput.value;
            updateHasChanges();
        });
        educationDiv.appendChild(educationInput);

        let fieldDiv = document.createElement("div");
        fieldDiv.className = "info-label";
        container.appendChild(fieldDiv);

        let fieldLabel = document.createElement("label");
        fieldLabel.textContent = "حوزه تخصص :";
        fieldDiv.appendChild(fieldLabel);

        let fieldInput = document.createElement("input");
        fieldInput.type = "text";
        fieldInput.id = "field";
        fieldInput.value = data.field;
        fieldInput.addEventListener("input", function () {
            // saveData.append('field', fieldInput.value);
            originData['field'] = fieldInput.value;
            updateHasChanges();
        });
        fieldDiv.appendChild(fieldInput);

        let licenseInput = document.createElement("input");
        licenseInput.type = "file";
        licenseInput.id = "licenseInput";
        licenseInput.style.display = "none";
        container.appendChild(licenseInput);

        let uploadLicenseBtn = document.createElement("button");
        uploadLicenseBtn.className = "upload_pics";
        uploadLicenseBtn.id = "upload_license";
        uploadLicenseBtn.textContent = "آپلود تصویر کارت مربی‌گری";
        uploadLicenseBtn.onclick = () => {licenseInput.click()};
        licenseInput.addEventListener("change", function () {
            const selectedImage = licenseInput.files[0];
            if (selectedImage) {
                // saveData.append('document_image', licenseInput.files[0]);
                originData['document_image'] = licenseInput.files[0];
                selectedLicenseName.textContent = 'جهت آپلود تصویر، "ذخیره اطلاعات" را فشار دهید';
                imageFlag = true;
                updateHasChanges();
            }
        });
        container.appendChild(uploadLicenseBtn);

        let selectedLicenseName = document.createElement("p");
        selectedLicenseName.id = "selectedLicenseName";
        selectedLicenseName.textContent = data.document_image !== null ? "تصویر آپلود شده است" : "";
        container.appendChild(selectedLicenseName);

        let selectContainer = document.createElement("div");
        selectContainer.style.display = "flex";
        selectContainer.style.alignItems = "center";
        container.appendChild(selectContainer);

        let selectLabel = document.createElement("label");
        selectLabel.style.marginRight = "10px";
        selectLabel.textContent = "انتخاب سالن :";
        selectContainer.appendChild(selectLabel);

        let selectElement = document.createElement("select");
        selectElement.style.marginRight = "10px";
        selectElement.style.marginTop = "-5px";
        selectElement.style.border = "1px solid #ccc";
        selectElement.style.color = "#2c2c2c";
        selectElement.style.fontFamily = "B Nazanin, sans-serif";
        selectElement.style.fontSize = "16px";
        selectElement.style.padding = "5px";
        selectElement.style.borderRadius = "5px";
        selectElement.id = "gymSelect";
        selectElement.name = "gym";
        selectElement.addEventListener("click", function () {
            // saveData.append('gym', selectElement.value);
            originData['gym'] = selectElement.value;
            selectFlag = true;
            updateHasChanges();
        });
        selectContainer.appendChild(selectElement);

        try {
            let formData = new FormData();
            formData.append('login_token', localStorage.getItem('login_token'));
            formData.append('role', 'gym_manager');
            let response = await fetch(AUTH_API + "/get_users_by_role/", {
                method: 'POST',
                body: formData,
            });
            let gyms = await response.json();
            if (response.status === 200) {
                if (gyms.data !== undefined) {
                    gyms.data.forEach(function (optionData) {
                        let optionElement = document.createElement("option");
                        optionElement.value = optionData.email;
                        optionElement.textContent = optionData.name;
                        selectElement.appendChild(optionElement);
                    });
                }
            } else {
                Swal.fire({
                    icon: "error",
                    title: 'مشکلی رخ داده است',
                    text: gyms.errors.message,
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

    function addActorElements(data) {
        let container = document.getElementById('additionalFieldsContainer');
        container.innerHTML = '';

        let fieldDiv = document.createElement("div");
        fieldDiv.className = "info-label";
        container.appendChild(fieldDiv);

        let fieldLabel = document.createElement("label");
        fieldLabel.textContent = "حوزه تخصص :";
        fieldDiv.appendChild(fieldLabel);

        let fieldInput = document.createElement("input");
        fieldInput.type = "text";
        fieldInput.id = "field";
        fieldInput.value = data.field;
        fieldDiv.appendChild(fieldInput);

        fieldInput.addEventListener("input", function () {
            // saveData.append('field', fieldInput.value);
            originData['field'] = fieldInput.value;
            updateHasChanges();
        });

        let licenseInput = document.createElement("input");
        licenseInput.type = "file";
        licenseInput.id = "licenseInput";
        licenseInput.style.display = "none";
        container.appendChild(licenseInput);

        let uploadLicenseBtn = document.createElement("button");
        uploadLicenseBtn.className = "upload_pics";
        uploadLicenseBtn.id = "upload_license";
        uploadLicenseBtn.textContent = "آپلود تصویر حکم قهرمانی";
        uploadLicenseBtn.onclick = () => {licenseInput.click()};
        licenseInput.addEventListener("change", function () {
            const selectedImage = licenseInput.files[0];
            if (selectedImage) {
                // saveData.append('document_image', licenseInput.files[0]);
                originData['document_image'] = licenseInput.files[0];
                selectedLicenseName.textContent = 'جهت آپلود تصویر، "ذخیره اطلاعات" را فشار دهید';
                imageFlag = true;
                updateHasChanges();
            }
        });
        container.appendChild(uploadLicenseBtn);

        let selectedLicenseName = document.createElement("p");
        selectedLicenseName.id = "selectedLicenseName";
        selectedLicenseName.textContent = data.document_image !== null ? "تصویر آپلود شده است" : "";
        container.appendChild(selectedLicenseName);
    }

    function addOfficeElements(data) {
        let container = document.getElementById('additionalFieldsContainer');
        container.innerHTML = '';

        let nameDiv = document.createElement("div");
        nameDiv.className = "info-label";
        container.appendChild(nameDiv);

        let nameLabel = document.createElement("label");
        nameLabel.textContent = "نام :";
        nameDiv.appendChild(nameLabel);

        let nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.id = "name";
        nameInput.value = data.name;
        nameDiv.appendChild(nameInput);

        nameInput.addEventListener("input", function () {
            // saveData.append('name', nameInput.value);
            originData['name'] = nameInput.value;
            updateHasChanges();
        });

        let locationDiv = document.createElement("div");
        locationDiv.className = "info-label";
        container.appendChild(locationDiv);

        let locationLabel = document.createElement("label");
        locationLabel.textContent = "آدرس :";
        locationDiv.appendChild(locationLabel);

        let locationInput = document.createElement("input");
        locationInput.type = "text";
        locationInput.id = "location";
        locationInput.value = data.location;
        locationDiv.appendChild(locationInput);

        locationInput.addEventListener("input", function () {
            // saveData.append('location', locationInput.value);
            originData['location'] = locationInput.value;
            updateHasChanges();
        });

        let h3ExpertElement = document.createElement("h3");
        h3ExpertElement.textContent = "کارشناس‌ها";
        container.appendChild(h3ExpertElement);

        let expertContainer = document.createElement("div");
        expertContainer.className = "values-container";
        if (data.expert) {
            data.expert.forEach(function (user, index) {
                let userDiv = document.createElement('div');
                userDiv.className = 'value';
                expertContainer.appendChild(userDiv);

                let userBoxDiv = document.createElement('div');
                userBoxDiv.className = 'user-box';
                userDiv.appendChild(userBoxDiv);

                let userAvatarDiv = document.createElement('div');
                userAvatarDiv.className = 'user-avatar';
                userBoxDiv.appendChild(userAvatarDiv);

                let userAvatarImg = document.createElement('img');
                userAvatarImg.src = user.image_profile === null ? '../images/no_pic.png' : (AUTH_API + user.image_profile); // Use the actual avatar URL or a default image
                userAvatarImg.alt = 'User ' + (index + 1) + ' Avatar';
                userAvatarDiv.appendChild(userAvatarImg);

                let userDetailsDiv = document.createElement('div');
                userDetailsDiv.className = 'user-details';
                userBoxDiv.appendChild(userDetailsDiv);

                let usernameP = document.createElement('p');
                usernameP.textContent = 'نام کاربری : ' + user.username;
                userDetailsDiv.appendChild(usernameP);

                let scoreP = document.createElement('p');
                scoreP.textContent = 'امتیاز : ' + user.rate;
                userDetailsDiv.appendChild(scoreP);

                let acceptIcon = document.createElement('i');
                acceptIcon.className = 'fa fa-check-circle';
                acceptIcon.style.color = 'green'; // Change the color as needed
                acceptIcon.style.marginRight = '10px'; // Adjust the spacing as needed
                acceptIcon.title = 'Accept Request'; // Tooltip for the icon
                userDetailsDiv.appendChild(acceptIcon);

                acceptIcon.addEventListener('click', async function() {
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
                            acceptIcon.disabled = true;
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

                let rejectIcon = document.createElement('i');
                rejectIcon.className = 'fa fa-times-circle';
                rejectIcon.style.color = '#961717'; // Change the color as needed
                rejectIcon.style.marginRight = '10px'; // Adjust the spacing as needed
                rejectIcon.title = 'Reject Request'; // Tooltip for the icon
                userDetailsDiv.appendChild(rejectIcon);

                rejectIcon.addEventListener('click', async function() {
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
                            rejectIcon.disabled = true;
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
            });
        }
        container.appendChild(expertContainer);

        let h3ManagerElement = document.createElement("h3");
        h3ManagerElement.textContent = "مدیرها";
        container.appendChild(h3ManagerElement);

        let managerContainer = document.createElement("div");
        managerContainer.className = "values-container";
        if (data.manager) {
            data.manager.forEach(function (user, index) {
                let userDiv = document.createElement('div');
                userDiv.className = 'value';
                managerContainer.appendChild(userDiv);

                let userBoxDiv = document.createElement('div');
                userBoxDiv.className = 'user-box';
                userDiv.appendChild(userBoxDiv);

                let userAvatarDiv = document.createElement('div');
                userAvatarDiv.className = 'user-avatar';
                userBoxDiv.appendChild(userAvatarDiv);

                let userAvatarImg = document.createElement('img');
                userAvatarImg.src = user.image_profile === null ? '../images/no_pic.png' : (AUTH_API + user.image_profile); // Use the actual avatar URL or a default image
                userAvatarImg.alt = 'User ' + (index + 1) + ' Avatar';
                userAvatarDiv.appendChild(userAvatarImg);

                let userDetailsDiv = document.createElement('div');
                userDetailsDiv.className = 'user-details';
                userBoxDiv.appendChild(userDetailsDiv);

                let usernameP = document.createElement('p');
                usernameP.textContent = 'نام کاربری : ' + user.username;
                userDetailsDiv.appendChild(usernameP);

                let scoreP = document.createElement('p');
                scoreP.textContent = 'امتیاز : ' + user.rate;
                userDetailsDiv.appendChild(scoreP);

                let acceptIcon = document.createElement('i');
                acceptIcon.className = 'fa fa-check-circle';
                acceptIcon.style.color = 'green'; // Change the color as needed
                acceptIcon.style.marginRight = '10px'; // Adjust the spacing as needed
                acceptIcon.title = 'Accept Request'; // Tooltip for the icon
                userDetailsDiv.appendChild(acceptIcon);

                acceptIcon.addEventListener('click', async function() {
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
                            acceptIcon.disabled = true;
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

                let rejectIcon = document.createElement('i');
                rejectIcon.className = 'fa fa-times-circle';
                rejectIcon.style.color = '#961717'; // Change the color as needed
                rejectIcon.style.marginRight = '10px'; // Adjust the spacing as needed
                rejectIcon.title = 'Reject Request'; // Tooltip for the icon
                userDetailsDiv.appendChild(rejectIcon);

                rejectIcon.addEventListener('click', async function() {
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
                            rejectIcon.disabled = true;
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
            });
        }
        container.appendChild(managerContainer);
    }

    function addBoardElements(data) {
        let container = document.getElementById('additionalFieldsContainer');
        container.innerHTML = '';

        let nameDiv = document.createElement("div");
        nameDiv.className = "info-label";
        container.appendChild(nameDiv);

        let nameLabel = document.createElement("label");
        nameLabel.textContent = "نام :";
        nameDiv.appendChild(nameLabel);

        let nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.id = "name";
        nameInput.value = data.name;
        nameDiv.appendChild(nameInput);

        nameInput.addEventListener("input", function () {
            // saveData.append('name', nameInput.value);
            originData['name'] = nameInput.value;
            updateHasChanges();
        });

        let goalDiv = document.createElement("div");
        goalDiv.className = "info-label";
        container.appendChild(goalDiv);

        let goalLabel = document.createElement("label");
        goalLabel.textContent = "اهداف :";
        goalDiv.appendChild(goalLabel);

        let goalInput = document.createElement("input");
        goalInput.type = "text";
        goalInput.id = "goal";
        goalInput.value = data.goal;
        goalDiv.appendChild(goalInput);

        goalInput.addEventListener("input", function () {
            // saveData.append('goal', goalInput.value);
            originData['goal'] = goalInput.value;
            updateHasChanges();
        });

        let locationDiv = document.createElement("div");
        locationDiv.className = "info-label";
        container.appendChild(locationDiv);

        let locationLabel = document.createElement("label");
        locationLabel.textContent = "آدرس :";
        locationDiv.appendChild(locationLabel);

        let locationInput = document.createElement("input");
        locationInput.type = "text";
        locationInput.id = "location";
        locationInput.value = data.location;
        locationDiv.appendChild(locationInput);

        locationInput.addEventListener("input", function () {
            // saveData.append('location', locationInput.value);
            originData['location'] = locationInput.value;
            updateHasChanges();
        });

        let h3Element = document.createElement("h3");
        h3Element.textContent = "مسئول‌ها";
        container.appendChild(h3Element);

        let valuesContainer = document.createElement("div");
        valuesContainer.className = "values-container";
        if (data.auth) {
            data.auth.forEach(function (user, index) {
                let userDiv = document.createElement('div');
                userDiv.className = 'value';
                valuesContainer.appendChild(userDiv);

                let userBoxDiv = document.createElement('div');
                userBoxDiv.className = 'user-box';
                userDiv.appendChild(userBoxDiv);

                let userAvatarDiv = document.createElement('div');
                userAvatarDiv.className = 'user-avatar';
                userBoxDiv.appendChild(userAvatarDiv);

                let userAvatarImg = document.createElement('img');
                userAvatarImg.src = user.image_profile === null ? '../images/no_pic.png' : (AUTH_API + user.image_profile); // Use the actual avatar URL or a default image
                userAvatarImg.alt = 'User ' + (index + 1) + ' Avatar';
                userAvatarDiv.appendChild(userAvatarImg);

                let userDetailsDiv = document.createElement('div');
                userDetailsDiv.className = 'user-details';
                userBoxDiv.appendChild(userDetailsDiv);

                let usernameP = document.createElement('p');
                usernameP.textContent = 'نام کاربری : ' + user.username;
                userDetailsDiv.appendChild(usernameP);

                let scoreP = document.createElement('p');
                scoreP.textContent = 'امتیاز : ' + user.rate;
                userDetailsDiv.appendChild(scoreP);

                let acceptIcon = document.createElement('i');
                acceptIcon.className = 'fa fa-check-circle';
                acceptIcon.style.color = 'green'; // Change the color as needed
                acceptIcon.style.marginRight = '10px'; // Adjust the spacing as needed
                acceptIcon.title = 'Accept Request'; // Tooltip for the icon
                userDetailsDiv.appendChild(acceptIcon);

                acceptIcon.addEventListener('click', async function() {
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
                            acceptIcon.disabled = true;
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

                let rejectIcon = document.createElement('i');
                rejectIcon.className = 'fa fa-times-circle';
                rejectIcon.style.color = '#961717'; // Change the color as needed
                rejectIcon.style.marginRight = '10px'; // Adjust the spacing as needed
                rejectIcon.title = 'Reject Request'; // Tooltip for the icon
                userDetailsDiv.appendChild(rejectIcon);

                rejectIcon.addEventListener('click', async function() {
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
                            rejectIcon.disabled = true;
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
            });
        }
        container.appendChild(valuesContainer);

        let h3StudentElement = document.createElement("h3");
        h3StudentElement.textContent = "افراد ثبت‌نام کرده در کلاس‌ها";
        container.appendChild(h3StudentElement);

        let studentContainer = document.createElement("div");
        studentContainer.className = "values-container";
        if (data.classroom) {
            data.classroom.forEach(function (user, index) {
                let userDiv = document.createElement('div');
                userDiv.className = 'value';
                studentContainer.appendChild(userDiv);

                let userBoxDiv = document.createElement('div');
                userBoxDiv.className = 'user-box';
                userDiv.appendChild(userBoxDiv);

                let userDetailsDiv = document.createElement('div');
                userDetailsDiv.className = 'user-details';
                userBoxDiv.appendChild(userDetailsDiv);

                let fullNameP = document.createElement('p');
                fullNameP.textContent = 'نام کامل : ' + user.full_name
                userDetailsDiv.appendChild(fullNameP);

                let fatherNameP = document.createElement('p');
                fatherNameP.textContent = 'نام پدر : ' + user.father_name
                userDetailsDiv.appendChild(fatherNameP);

                let nationalCodeP = document.createElement('p');
                nationalCodeP.textContent = 'کدملی : ' + user.national_code
                userDetailsDiv.appendChild(nationalCodeP);

                let passportNumberP = document.createElement('p');
                passportNumberP.textContent = 'شماره شناسنامه : ' + user.passport_number
                userDetailsDiv.appendChild(passportNumberP);

                let phoneNumberP = document.createElement('p');
                phoneNumberP.textContent = 'شماره همراه : ' + user.phone_number
                userDetailsDiv.appendChild(phoneNumberP);

                let telephoneNumberP = document.createElement('p');
                telephoneNumberP.textContent = 'شماره ثابت : ' + user.telephone_number
                userDetailsDiv.appendChild(telephoneNumberP);

                let locationP = document.createElement('p');
                locationP.textContent = 'آدرس : ' + user.location
                userDetailsDiv.appendChild(locationP);

                let locationCodeP = document.createElement('p');
                locationCodeP.textContent = 'کدپستی : ' + user.location_code
                userDetailsDiv.appendChild(locationCodeP);

                let acceptedP = document.createElement('p');
                acceptedP.textContent = 'وضعیت : ' + (user.accepted === true ? 'تایید شده' : user.rejected === true ? 'رد شده' : 'بررسی نشده')
                userDetailsDiv.appendChild(acceptedP);


                let acceptIcon = document.createElement('i');
                acceptIcon.className = 'fa fa-check-circle';
                acceptIcon.style.color = 'green'; // Change the color as needed
                acceptIcon.style.marginRight = '10px'; // Adjust the spacing as needed
                acceptIcon.title = 'Accept Request'; // Tooltip for the icon
                userDetailsDiv.appendChild(acceptIcon);
                acceptIcon.addEventListener('click', async function() {
                    try {
                        let formData = new FormData();
                        formData.append('login_token', localStorage.getItem('login_token'));
                        formData.append('email', user.user_email);
                        formData.append('accepted', true);
                        let response = await fetch(AUTH_API + "/accept_for_classroom/", {
                            method: 'POST',
                            body: formData,
                        });
                        const data = await response.json();

                        if (response.status === 200) {
                            acceptIcon.disabled = true;
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

                let rejectIcon = document.createElement('i');
                rejectIcon.className = 'fa fa-times-circle';
                rejectIcon.style.color = '#961717'; // Change the color as needed
                rejectIcon.style.marginRight = '10px'; // Adjust the spacing as needed
                rejectIcon.title = 'Reject Request'; // Tooltip for the icon
                userDetailsDiv.appendChild(rejectIcon);

                rejectIcon.addEventListener('click', async function() {
                    try {
                        let formData = new FormData();
                        formData.append('login_token', localStorage.getItem('login_token'));
                        formData.append('email', user.user_email);
                        formData.append('accepted', false);
                        let response = await fetch(AUTH_API + "/accept_for_classroom/", {
                            method: 'POST',
                            body: formData,
                        });
                        const data = await response.json();

                        if (response.status === 200) {
                            rejectIcon.disabled = true;
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
            });
        }
        container.appendChild(studentContainer);
    }

    async function addAuthElements(data) {
        let container = document.getElementById('additionalFieldsContainer');
        container.innerHTML = '';

        let selectContainer = document.createElement("div");
        selectContainer.style.display = "flex";
        selectContainer.style.alignItems = "center";
        container.appendChild(selectContainer);

        let selectLabel = document.createElement("label");
        selectLabel.style.marginRight = "10px";
        selectLabel.textContent = data.role === 'office_manager' ? 'انتخاب اداره : ' : data.role === 'office_expert' ? 'انتخاب اداره : ' : data.role === 'board_authorities' ? 'انتخاب هیئت : ' : '';
        selectContainer.appendChild(selectLabel);

        let selectElement = document.createElement("select");
        selectElement.style.marginRight = "10px";
        selectElement.style.marginTop = "-5px";
        selectElement.style.border = "1px solid #ccc";
        selectElement.style.color = "#2c2c2c";
        selectElement.style.fontFamily = "B Nazanin, sans-serif";
        selectElement.style.fontSize = "16px";
        selectElement.style.padding = "5px";
        selectElement.style.borderRadius = "5px";
        selectElement.id = "placeSelect";
        selectElement.name = "place";
        selectElement.addEventListener("click", function () {
            // saveData.append('gym', selectElement.value);
            if (data.role === 'office_manager' || data.role === 'office_expert') {
                originData['office'] = selectElement.value;
            }
            else if (data.role === 'board_authorities') {
                originData['board'] = selectElement.value;
            }
            selectFlag = true;
            updateHasChanges();
        });
        selectContainer.appendChild(selectElement);

        try {
            let formData = new FormData();
            formData.append('login_token', localStorage.getItem('login_token'));
            formData.append('role', data.role === 'office_manager' ? 'office_admin' : data.role === 'office_expert' ? 'office_admin' : data.role === 'board_authorities' ? 'board_admin' : '');
            let response = await fetch(AUTH_API + "/get_users_by_role/", {
                method: 'POST',
                body: formData,
            });
            let place = await response.json();
            if (response.status === 200) {
                if (place.data !== undefined) {
                    place.data.forEach(function (optionData) {
                        let optionElement = document.createElement("option");
                        optionElement.value = optionData.email;
                        optionElement.textContent = optionData.name;
                        selectElement.appendChild(optionElement);
                    });
                }
            } else {
                Swal.fire({
                    icon: "error",
                    title: 'مشکلی رخ داده است',
                    text: place.errors.message,
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

    function pre_process(data) {
        const changeRole = document.getElementById('changeRole');
        const process = document.getElementById("process");
        const number_rate = document.getElementById("number_rate");
        const starRatingDiv = document.querySelector('.rate');
        const stars = starRatingDiv.querySelectorAll('.star');
        if (data.role && data.role !== 'simple_user') {
            changeRole.style.display = 'none';
            if (!data.accepted && !data.rejected) {
                process.style.display = 'inline-block';
            }
            else if (data.rejected) {
                process.style.display = 'inline-block';
                changeRole.style.display = 'inline-bloc';
                process.textContent = 'درخواست شما توسط ادمین رد شد';
                process.style.color = '#e01616';
            }
            else if (data.accepted) {
                starRatingDiv.style.display = 'inline-block';
                number_rate.textContent = data.rate;
                const numberOfFilledStars = Math.round(data.rate * 2) / 2;
                for (let i = 0; i < stars.length; i++) {
                    if (i < numberOfFilledStars) {
                        stars[i].className = 'star-rating';
                    } else {
                        stars[i].className = 'star';
                    }
                }
            }
        }

        if (data.role === 'coach') {
            addCoachElements(data);
        } else if (data.role === 'gym_manager') {
            addGymManagerElements(data);
        } else if (data.role === 'actor') {
            addActorElements(data);
        } else if (data.role === 'board_admin') {
            addBoardElements(data);
        } else if (data.role === 'office_admin') {
            addOfficeElements(data);
        } else if (data.role === 'office_manager' || data.role === 'office_expert' || data.role === 'board_authorities') {
            addAuthElements(data)
        }
    }


    try {
        let formData = new FormData();
        formData.append('login_token', localStorage.getItem('login_token'));
        let response = await fetch(AUTH_API + "/profile/", {
            method: 'POST',
            body: formData,
        });
        originData = await response.json();
        if (response.status === 200) {
            emailInput.value = originData.email;
            usernameInput.value = originData.username;
            phoneNumberInput.value = originData.phone_number;
            profileImagePreview.src = originData.image_profile === null ? '../images/no_pic.png' : (AUTH_API + originData.image_profile);
            bio.value = originData.bio;
            role.textContent = originData.role === 'simple_user' ? 'کاربر عادی' : (originData.role === 'coach' ? 'مربی' : (originData.role === 'gym_manager' ? 'سالن‌دار' : (originData.role === 'actor' ? 'قهرمان' : (originData.role === 'office_admin' ? 'ادمین اداره' : (originData.role === 'office_manager' ? 'مدیر اداره' : (originData.role === 'office_expert' ? 'کارشناس اداره' : (originData.role === 'board_admin' ? 'ادمین هیئت' : (originData.role === 'board_authorities' ? 'مسئول هیئت' : 'نقش کاربر تعریف نشده است'))))))));
            pre_process(originData);
        } else {
            Swal.fire({
                icon: "error",
                title: 'مشکلی رخ داده است',
                text: originData.message,
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

    profileImage.addEventListener("change", function () {
        const selectedImage = profileImage.files[0];
        if (selectedImage) {
            imageFlag = true;
            const reader = new FileReader();
            reader.onload = function (e) {
                profileImagePreview.src = e.target.result;
            };
            reader.readAsDataURL(selectedImage);
            updateHasChanges()
        }
    });

    function checkInputChanges() {
        let inputChanges = false;
        inputs.forEach((input) => {
            if (input.value !== input.defaultValue) {
                inputChanges = true;
            }
        });

        if (bio.value !== bio.defaultValue) {
            inputChanges = true;
        }
        return inputChanges;
    }

    function updateHasChanges() {
        const inputChanges = checkInputChanges();
        saveButton.disabled = !(inputChanges || imageFlag || selectFlag);
    }

    inputs.forEach((input) => {
        input.addEventListener("input", updateHasChanges);
    });

    bio.addEventListener("input", function () {
        updateHasChanges();
    });

    saveButton.addEventListener("click", async function () {
        // saveData.append('login_token', localStorage.getItem('login_token'));
        // saveData.append('email', emailInput.value);
        // saveData.append('username', usernameInput.value);
        // saveData.append('bio', bio.value);
        // if (profileImage.files[0]) {
        //     saveData.append("image_profile", profileImage.files[0]);
        // }

        originData['login_token'] = localStorage.getItem('login_token');
        originData['email'] = emailInput.value;
        originData['username'] = usernameInput.value;
        originData['phone_number'] = phoneNumberInput.value;
        originData['bio'] = bio.value;
        if (profileImage.files[0]) {
            originData['image_profile'] = profileImage.files[0];
        }

        const formData = new FormData();
        for (const key in originData) {
            if (originData.hasOwnProperty(key)) {
                formData.append(key, originData[key]);
            }
        }
        try {
            let response = await fetch(AUTH_API + "/update_profile/", {
                method: 'POST',
                body: formData,
            });
            let data = await response.json();
            if (response.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: data.username + '، اطلاعات شما با موفقیت ویرایش گردید.',
                    showConfirmButton: !1,
                    timer: 1500
                }).then(() => window.location.reload());
                saveButton.disabled = true;
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

    changeRole.addEventListener('click', function (event) {
        const options = ['مربی‌گری', 'سالن‌دار', 'قهرمان', 'مدیر اداره', 'کارشناس اداره', 'مسئول هیئت', 'ادمین اداره', 'ادمین هیئت'];
        const radioButtons = options
            .map((option, index) => {
                return `
      <label>
        <input type="radio" name="swal-options" value="${index}">
        ${option}
      </label>
    `;
            })
            .join('');
        const htmlContent = `
  <div>
    <h3>لطفا یک نقش را انتخاب کنید</h3>
    ${radioButtons}
  </div>
`;
        Swal.fire({
            html: htmlContent,
            confirmButtonText: 'انتخاب',
            preConfirm: () => {
                const selectedOption = document.querySelector('input[name="swal-options"]:checked');
                if (!selectedOption) {
                    Swal.showValidationMessage('لطفا یک مورد را انتخاب کنید');
                } else {
                    return options[selectedOption.value];
                }
            },
        }).then((result) => {
            if (result.isConfirmed) {
                // saveData.append('role', result.value === 'مربی‌گری‌' ? 'coach' : result.value === 'سالن‌دار' ? 'gym_manager' : result.value === 'قهرمان' ? 'actor' : 'simple_user');
                originData['role'] = result.value === 'مربی‌گری' ? 'coach' : result.value === 'سالن‌دار' ? 'gym_manager' : result.value === 'قهرمان' ? 'actor' : result.value === 'ادمین اداره' ? 'office_admin' : result.value === 'ادمین هیئت' ? 'board_admin' : result.value === 'مدیر اداره' ? 'office_manager' : result.value === 'کارشناس اداره' ? 'office_expert' : result.value === 'مسئول هیئت' ? 'board_authorities' : 'simple_user';
                role.textContent = result.value;
                if (result.value === 'مربی‌گری') {
                    addCoachElements({'document_image': null,
                        'rate': null,
                        'education': null,
                        'field': null,
                        'gym': null});
                } else if (result.value === 'سالن‌دار') {
                    addGymManagerElements({'name': null,
                        'image': null,
                        'document_image': null,
                        'rate': null,
                        'possibilities': null,
                        'location': null,
                        'location_link': null,
                        'coaches': null});
                } else if (result.value === 'قهرمان') {
                    addActorElements({
                        'field': null,
                        'document_image': null});
                } else if (result.value === 'ادمین هیئت') {
                    addBoardElements({
                        'name': null,
                        'goal': null,
                        'location': null,
                        'auth': null,
                    });
                } else if (result.value === 'ادمین اداره') {
                    addOfficeElements({
                        'name': null,
                        'location': null,
                        'auth': null,
                        'manager': null,
                    })
                } else if (result.value === 'مدیر اداره' || result.value === 'کارشناس اداره' || result.value === 'مسئول هیئت') {
                    addAuthElements({
                        'role': originData['role'],
                        'place': null
                    })
                }
                process.style.display = 'inline-block'
            }
        });

    });

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

    backButton.addEventListener("click", function (event) {
        window.location.href = '../';
    });

});

