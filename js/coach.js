document.addEventListener("DOMContentLoaded", async function () {
    const backButton = document.getElementById("backButton");

    backButton.addEventListener("click", function (event) {
        window.location.href = '../';
    });

    // Define an async function to fetch data from the API
    async function fetchData() {

        try {
            let formData = new FormData();
            formData.append('login_token', localStorage.getItem('login_token'));
            formData.append('role', 'coach');
            let response = await fetch(AUTH_API + "/get_users_by_role/", {
                method: 'POST',
                body: formData,
            });
            let data = await response.json();
            if (response.status === 200) {
                return data.data;
            } else {
                Swal.fire({
                    icon: "error",
                    title: 'مشکلی رخ داده است',
                    text: data.errors.message,
                    showConfirmButton: !1,
                    timer: 2000
                }).then(() => {
                    return [];
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

    function createStarElement(color) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.style.color = color; // Set the star color
        star.innerHTML = '&#9733;'; // Star symbol
        return star;
    }

    function createStarRating(rate) {
        const starRating = document.createElement('div');
        starRating.className = 'star-rating';

        for (let i = 1; i <= 5; i++) {
            const star = document.createElement('span');
            star.className = 'star';
            star.textContent = ' ★ '; // Use a star character (★) or any other preferred representation

            // Set the star color based on the rate value
            if (i <= rate) {
                star.style.color = '#e3c013'; // Set filled stars to yellow
            } else {
                star.style.color = '#a9a9a9'; // Set empty stars to gray or any other color
            }

            starRating.appendChild(star);
        }

        return starRating;
    }

// Define a function to create a coach element
    function createCoachElement(coach) {
        const coachDiv = document.createElement('div');
        coachDiv.classList.add('coach');

        const img = document.createElement('img');
        img.src = coach.image_profile === null ? '../images/no_pic.png' : (AUTH_API + coach.image_profile);
        img.alt = `Coach ${coach.username}`;

        const h2 = document.createElement('h2');
        h2.textContent = coach.username + ' (' + coach.rate + ')';

        // const starRating = document.createElement('div');
        // starRating.classList.add('star-rating');
        // const stars = '&#9733;'.repeat(coach.rating);
        // starRating.innerHTML = stars;

//         const starRating = document.createElement('div');
//         starRating.classList.add('star-rating');
//
// // Create star elements with the specified color based on data.rate
//         const stars = Array.from({ length: coach.rate }, () => createStarElement(coach.rate));
//
// // Append the star elements to the starRating div
//         stars.forEach(star => starRating.appendChild(star));

        const p1 = document.createElement('p');
        p1.textContent = `بیوگرافی : ${coach.bio}`;

        const p2 = document.createElement('p');
        p2.textContent = `باشگاه ${coach.gym.name}`;

        const p3 = document.createElement('p');
        p3.textContent = `تخصص‌ها : ${coach.field}`;

        const p4 = document.createElement('p');
        p4.textContent = `تحصیلات : ${coach.education}`;

        coachDiv.appendChild(img);
        coachDiv.appendChild(h2);
        coachDiv.appendChild(createStarRating(coach.rate));
        coachDiv.appendChild(p1);
        coachDiv.appendChild(p2);
        coachDiv.appendChild(p3);
        coachDiv.appendChild(p4);

        return coachDiv;
    }

// Define an async function to initialize the coach elements
    async function initializeCoaches() {
        const coachesData = await fetchData();
        const coachContainer = document.getElementById('coach-list');
        const itemNames = [
            'اخلاق',
            'برنامه‌نویسی تمرین مناسب',
            'آشنایی با حرکات',
            'آشنایی با آسیب‌های ورزشی',
            'آشنایی با دستگاه‌های ورزشی',
            'دارا بودن سطح تکنیکی مناسب در تمرین‌ها',
            'روانشناسی در تمرین',
            'پیگیر بودن تمرین‌های شاگردها',
        ];

        coachesData.forEach(coach => {
            if (coach.accepted) {
                const coachElement = createCoachElement(coach);
                coachElement.addEventListener('click', async () => {

                    // Generate HTML for checkboxes
                    const checkboxesHTML = itemNames.map((item, index) => `
    <div class="swal2-checkbox">
      <input type="checkbox" id="swal-input-${index}" class="swal2-input" value="${index}" style="display: block;">
      <label for="swal-input-${index}" class="swal2-label">${item}</label>
    </div>
  `).join('');

                    // Show the Swal popup with checkboxes
                    const {value: selectedValue} = await Swal.fire({
                        title: 'امتیاز بدهید',
                        html: checkboxesHTML,
                        focusConfirm: true,
                        confirmButtonText: 'انتخاب شد',
                        customClass: {
                            confirmButton: 'custom-confirm-button', // Add a custom class name
                        },
                        preConfirm: async () => {
                            const selectedCheckboxes = document.querySelectorAll('input:checked');
                            // const selectedItems = [];
                            rate = 0;
                            if (selectedCheckboxes.length > 0) {
                                // selectedCheckboxes.forEach(checkbox => {
                                //     const itemName = itemNames[checkbox.value];
                                //     selectedItems.push(itemName);
                                // });
                                rate = selectedCheckboxes.length / 8;
                            }
                            try {
                                let formData = new FormData();
                                formData.append('login_token', localStorage.getItem('login_token'));
                                formData.append('user_email', coach.email);
                                formData.append('rate', rate);
                                let response = await fetch(AUTH_API + "/change_rate/", {
                                    method: 'POST',
                                    body: formData,
                                });
                                let data = await response.json();
                                if (response.status === 200) {
                                    window.location.reload();
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
                        },
                    });
                });
                coachContainer.appendChild(coachElement);
            }
        });
    }

// Call the initializeCoaches function to load the coach elements
    initializeCoaches();

});