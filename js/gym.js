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
            formData.append('role', 'gym_manager');
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
        console.log(color)
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
                star.className = 'star-rating';
            }

            starRating.appendChild(star);
        }

        return starRating;
    }

// Define a function to create a gym_manager element
    function createGymManagerElement(gym_manager) {
        const gym_managerDiv = document.createElement('div');
        gym_managerDiv.classList.add('gym');

        const img = document.createElement('img');
        img.src = gym_manager.image === null ? '../images/no_pic.png' : (AUTH_API + gym_manager.image);
        img.alt = `Gym manager ${gym_manager.name}`;

        const h2 = document.createElement('h2');
        h2.textContent = gym_manager.name + ' (' + gym_manager.rate + ')';

        // const starRating = document.createElement('div');
        // starRating.classList.add('star-rating');
        // const stars = '&#9733;'.repeat(gym_manager.rating);
        // starRating.innerHTML = stars;

//         const starRating = document.createElement('div');
//         starRating.classList.add('star-rating');
//
// // Create star elements with the specified color based on data.rate
//         const stars = Array.from({ length: gym_manager.rate }, () => createStarElement(gym_manager.rate));
//
// // Append the star elements to the starRating div
//         stars.forEach(star => starRating.appendChild(star));

        const p1 = document.createElement('p');
        p1.textContent = `بیوگرافی : ${gym_manager.bio}`;

        const p2 = document.createElement('p');
        p2.textContent = `امکانات ${gym_manager.possibilities}`;

        const p3 = document.createElement('p');
        p3.textContent = `آدرس : ${gym_manager.location}`;

        if (gym_manager.location_link) {
            const addressLink = document.createElement('a');
            addressLink.href = gym_manager.location_link;
            addressLink.target = '_blank';
            addressLink.textContent = 'آدرس';
            gym_managerDiv.appendChild(addressLink);

        }
        gym_managerDiv.appendChild(img);
        gym_managerDiv.appendChild(h2);
        gym_managerDiv.appendChild(createStarRating(gym_manager.rate));
        gym_managerDiv.appendChild(p1);
        gym_managerDiv.appendChild(p2);
        gym_managerDiv.appendChild(p3);

        return gym_managerDiv;
    }

// Define an async function to initialize the gym_manager elements
    async function initializeGymManagers() {
        const gym_managersData = await fetchData();
        const gym_managerContainer = document.getElementById('gym-list');
        const itemNames = [
            'تصفیه هوا',
            'ارتفاع مناسب سالن',
            'کیفیت دستگاه‌ها',
            'مربی‌های باتجربه و خوش برخورد',
            'دارا بودن بوفه',
            'دارا بودن حمام و سرویس بهداشتی',
            'امکانات خاص',
            'مساحت مناسب سالن',
            'تنوع ورزش‌ها',
        ];

        gym_managersData.forEach(gym_manager => {
            if (gym_manager.accepted) {
                const gym_managerElement = createGymManagerElement(gym_manager);
                gym_managerElement.addEventListener('click', async () => {

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
                                rate = selectedCheckboxes.length / 9;
                            }
                            // return selectedItems;
                            try {
                                let formData = new FormData();
                                formData.append('login_token', localStorage.getItem('login_token'));
                                formData.append('user_email', gym_manager.email);
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
                gym_managerContainer.appendChild(gym_managerElement);
            }
        });
    }

// Call the initializeGymManagers function to load the gym_manager elements
    initializeGymManagers();

});