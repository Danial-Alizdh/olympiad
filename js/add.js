function showFields(type) {
    if (type === 'news') {
        // Create an h1 element
        const h1 = document.createElement('h1');
        h1.textContent = 'افزودن خبر';

// Create a form element
        const form = document.createElement('form');
        form.id = 'newsForm';
        form.enctype = 'multipart/form-data';

// Create a function to simplify creating form groups
        function createFormGroup(labelText, inputType, inputName, inputAccept, required = true) {
            const formGroup = document.createElement('div');
            formGroup.className = 'form-group';

            const label = document.createElement('label');
            label.textContent = labelText;
            label.setAttribute('for', inputName);

            if (inputType === 'textarea') {
                const textarea = document.createElement('textarea');
                textarea.id = inputName;
                textarea.name = inputName;
                textarea.required = required;

                formGroup.appendChild(label);
                formGroup.appendChild(textarea);
            }
            else {
                const input = document.createElement('input');
                input.type = inputType;
                input.id = inputName;
                input.name = inputName;
                input.required = required;

                if (inputAccept) {
                    input.accept = inputAccept;
                }

                formGroup.appendChild(label);
                formGroup.appendChild(input);
            }

            return formGroup;
        }

// Create form groups for title, date, description, and image
        const titleFormGroup = createFormGroup('عنوان:', 'text', 'title', null);
        const dateFormGroup = createFormGroup('تاریخ:', 'text', 'date', null);
        const descriptionFormGroup = createFormGroup('توضیحات:', 'textarea', 'description', null, true);
        const imageFormGroup = createFormGroup('آپلود تصویر:', 'file', 'image', 'image/*');

// Create a submit button
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'ذخیره';

        submitButton.addEventListener('click', async function (event) {
            event.preventDefault(); // Prevent the default form submission behavior

            const formData = new FormData(form);
            formData.append('type', 'news');
            formData.append('login_token', localStorage.getItem('login_token'));

            try {
                const response = await fetch(AUTH_API + "/add_element/", {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();
                if (!response.ok) {
                    Swal.fire({
                        icon: "error",
                        title: 'مشکلی رخ داده است',
                        text: data,
                        showConfirmButton: !1,
                        timer: 2000
                    });
                } else {
                    Swal.fire({
                        icon: "success",
                        title: 'اضافه گردید',
                        showConfirmButton: !1,
                        timer: 1500
                    }).then(() => window.location.reload());
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

// Append all elements to the document
        const container = document.getElementById('container'); // Replace 'container' with the ID of the element where you want to add the form
        container.appendChild(h1);
        form.appendChild(titleFormGroup);
        form.appendChild(dateFormGroup);
        form.appendChild(descriptionFormGroup);
        form.appendChild(imageFormGroup);
        form.appendChild(submitButton);
        container.appendChild(form);

    }
    else if (type === 'game') {
        // Create an h1 element
        const h1 = document.createElement('h1');
        h1.textContent = 'افزودن مسابقه';

// Create a form element
        const form = document.createElement('form');
        form.id = 'competitionForm';
        form.enctype = 'multipart/form-data';

// Create a function to simplify creating form groups
        function createFormGroup(labelText, inputType, inputName, inputAccept, required = true) {
            const formGroup = document.createElement('div');
            formGroup.className = 'form-group';

            const label = document.createElement('label');
            label.textContent = labelText;
            label.setAttribute('for', inputName);

            const input = document.createElement('input');
            input.type = inputType;
            input.id = inputName;
            input.name = inputName;
            input.required = required;

            if (inputAccept) {
                input.accept = inputAccept;
            }

            formGroup.appendChild(label);
            formGroup.appendChild(input);

            return formGroup;
        }

// Create form groups for name, date, time, location, and image
        const nameFormGroup = createFormGroup('نام:', 'text', 'name', null);
        const dateFormGroup = createFormGroup('تاریخ:', 'text', 'date', null);
        const timeFormGroup = createFormGroup('ساعت:', 'text', 'time', null);
        const locationFormGroup = createFormGroup('محل برگزاری:', 'text', 'location', null, true);
        const imageFormGroup = createFormGroup('آپلود تصویر:', 'file', 'image', 'image/*');

// Create a submit button
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'ذخیره';

// Add a click event listener to the submit button
        submitButton.addEventListener('click', async function (event) {
            event.preventDefault(); // Prevent the default form submission behavior

            const formData = new FormData(form);
            formData.append('type', 'game');
            formData.append('login_token', localStorage.getItem('login_token'));

            try {
                const response = await fetch(AUTH_API + "/add_element/", {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();
                if (!response.ok) {
                    Swal.fire({
                        icon: "error",
                        title: 'مشکلی رخ داده است',
                        text: data,
                        showConfirmButton: !1,
                        timer: 2000
                    });
                } else {
                    Swal.fire({
                        icon: "success",
                        title: 'اضافه گردید',
                        showConfirmButton: !1,
                        timer: 1500
                    }).then(() => window.location.reload());
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

// Append all elements to the document
        const container = document.getElementById('container'); // Replace 'container' with the ID of the element where you want to add the form
        container.appendChild(h1);
        form.appendChild(nameFormGroup);
        form.appendChild(dateFormGroup);
        form.appendChild(timeFormGroup);
        form.appendChild(locationFormGroup);
        form.appendChild(imageFormGroup);
        form.appendChild(submitButton);
        container.appendChild(form);

    }
    else if (type === 'classroom') {
        // Create an h1 element
        const h1 = document.createElement('h1');
        h1.textContent = 'افزودن کلاس';

// Create a form element
        const form = document.createElement('form');
        form.id = 'classForm';
        form.enctype = 'multipart/form-data';

// Create a function to simplify creating form groups
        function createFormGroup(labelText, inputType, inputName, required = true) {
            const formGroup = document.createElement('div');
            formGroup.className = 'form-group';

            const label = document.createElement('label');
            label.textContent = labelText;
            label.setAttribute('for', inputName);

            const input = document.createElement('input');
            input.type = inputType;
            input.id = inputName;
            input.name = inputName;
            input.required = required;

            formGroup.appendChild(label);
            formGroup.appendChild(input);

            return formGroup;
        }

// Create form groups for name, date, time, location, link, and capacity
        const nameFormGroup = createFormGroup('نام:', 'text', 'name', true);
        const dateFormGroup = createFormGroup('تاریخ:', 'text', 'date', true);
        const timeFormGroup = createFormGroup('ساعت:', 'text', 'time', true);
        const locationFormGroup = createFormGroup('محل برگزاری:', 'text', 'location', true);
        const linkFormGroup = createFormGroup('لینک کلاس:', 'text', 'link', true);
        const capacityFormGroup = createFormGroup('ظرفیت:', 'text', 'capacity', true);

// Create a submit button
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'ذخیره';

// Add a click event listener to the submit button
        submitButton.addEventListener('click', async function (event) {
            event.preventDefault(); // Prevent the default form submission behavior

            const formData = new FormData(form);
            formData.append('type', 'classroom');
            formData.append('login_token', localStorage.getItem('login_token'));

            try {
                const response = await fetch(AUTH_API + "/add_element/", {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();
                if (!response.ok) {
                    Swal.fire({
                        icon: "error",
                        title: 'مشکلی رخ داده است',
                        text: data,
                        showConfirmButton: !1,
                        timer: 2000
                    });
                } else {
                    Swal.fire({
                        icon: "success",
                        title: 'اضافه گردید',
                        showConfirmButton: !1,
                        timer: 1500
                    }).then(() => window.location.reload());
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

// Append all elements to the document
        const container = document.getElementById('container'); // Replace 'container' with the actual ID of the element where you want to add the form
        container.appendChild(h1);
        form.appendChild(nameFormGroup);
        form.appendChild(dateFormGroup);
        form.appendChild(timeFormGroup);
        form.appendChild(locationFormGroup);
        form.appendChild(linkFormGroup);
        form.appendChild(capacityFormGroup);
        form.appendChild(submitButton);
        container.appendChild(form);
    }
    else {
        // Create an h1 element
        const h1 = document.createElement('h1');
        h1.textContent = 'ثبت نام در کلاس';

// Create a form element
        const form = document.createElement('form');
        form.id = 'classForm';
        form.enctype = 'multipart/form-data';

// Create a function to simplify creating form groups
        function createFormGroup(labelText, inputType, inputName, required = true) {
            const formGroup = document.createElement('div');
            formGroup.className = 'form-group';

            const label = document.createElement('label');
            label.textContent = labelText;
            label.setAttribute('for', inputName);

            const input = document.createElement('input');
            input.type = inputType;
            input.id = inputName;
            input.name = inputName;
            input.required = required;

            formGroup.appendChild(label);
            formGroup.appendChild(input);

            return formGroup;
        }

// Create form groups for name, date, time, location, link, and capacity
        const nameFormGroup = createFormGroup('نام کامل:', 'text', 'full_name', true);
        const nationalFormGroup = createFormGroup('کدملی:', 'text', 'national_code', true);
        const passportFormGroup = createFormGroup('شماره شناسنامه:', 'text', 'passport_number', true);
        const fatherNameFormGroup = createFormGroup('نام پدر:', 'text', 'father_name', true);
        const phoneFormGroup = createFormGroup('شماره موبایل:', 'text', 'phone_number', true);
        const telephoneFormGroup = createFormGroup('شماره ثابت:', 'text', 'telephone_number', true);
        const locationFormGroup = createFormGroup('آدرس:', 'text', 'location', true);
        const locationCodeFormGroup = createFormGroup('کدپستی:', 'text', 'location_code', true);

// Create a submit button
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'ثبت نام';

// Add a click event listener to the submit button
        submitButton.addEventListener('click', async function (event) {
            event.preventDefault(); // Prevent the default form submission behavior

            const formData = new FormData(form);
            console.log(type)
            formData.append('board_email', type);
            formData.append('login_token', localStorage.getItem('login_token'));

            try {
                const response = await fetch(AUTH_API + "/add_to_class/", {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();
                if (!response.ok) {
                    Swal.fire({
                        icon: "error",
                        title: 'مشکلی رخ داده است',
                        text: data,
                        showConfirmButton: !1,
                        timer: 2000
                    });
                } else {
                    Swal.fire({
                        icon: "success",
                        title: 'ثبت نام شدید',
                        showConfirmButton: !1,
                        timer: 1500
                    }).then(() => window.history.back());
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

// Append all elements to the document
        const container = document.getElementById('container'); // Replace 'container' with the actual ID of the element where you want to add the form
        container.appendChild(h1);
        form.appendChild(nameFormGroup);
        form.appendChild(nationalFormGroup);
        form.appendChild(passportFormGroup);
        form.appendChild(fatherNameFormGroup);
        form.appendChild(phoneFormGroup);
        form.appendChild(telephoneFormGroup);
        form.appendChild(locationFormGroup);
        form.appendChild(locationCodeFormGroup);
        form.appendChild(submitButton);
        container.appendChild(form);
    }
}