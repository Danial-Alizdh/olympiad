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
            formData.append('role', 'actor');
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

    // function createStarRating(rate) {
    //     const starRating = document.createElement('div');
    //     starRating.className = 'star-rating';
    //
    //     for (let i = 1; i <= 5; i++) {
    //         const star = document.createElement('span');
    //         star.className = 'star';
    //         star.textContent = ' ★ '; // Use a star character (★) or any other preferred representation
    //
    //         // Set the star color based on the rate value
    //         if (i <= rate) {
    //             star.style.color = '#e3c013'; // Set filled stars to yellow
    //         } else {
    //             star.style.color = '#a9a9a9'; // Set empty stars to gray or any other color
    //         }
    //
    //         starRating.appendChild(star);
    //     }
    //
    //     return starRating;
    // }

// Define a function to create a actor element
    function createCoachElement(actor) {
        const actorDiv = document.createElement('div');
        actorDiv.classList.add('actor');

        const img = document.createElement('img');
        img.src = actor.image_profile === null ? '../images/no_pic.png' : (AUTH_API + actor.image_profile);
        img.alt = `Actor ${actor.username}`;

        const h2 = document.createElement('h2');
        // h2.textContent = actor.username + ' (' + actor.rate + ')';
        h2.textContent = actor.username;

        const p1 = document.createElement('p');
        p1.textContent = `بیوگرافی : ${actor.bio}`;

        const p2 = document.createElement('p');
        p2.textContent = `تخصص‌ها : ${actor.field}`;

        actorDiv.appendChild(img);
        actorDiv.appendChild(h2);
        // actorDiv.appendChild(createStarRating(actor.rate));
        actorDiv.appendChild(p1);
        actorDiv.appendChild(p2);

        return actorDiv;
    }

// Define an async function to initialize the actor elements
    async function initializeCoaches() {
        const actoresData = await fetchData();
        const actorContainer = document.getElementById('actor-list');
        // const itemNames = [
        //     'اخلاق',
        //     'برنامه‌نویسی تمرین مناسب',
        //     'آشنایی با حرکات',
        //     'آشنایی با آسیب‌های ورزشی',
        //     'آشنایی با دستگاه‌های ورزشی',
        //     'دارا بودن سطح تکنیکی مناسب در تمرین‌ها',
        //     'روانشناسی در تمرین',
        //     'پیگیر بودن تمرین‌های شاگردها',
        // ];

        actoresData.forEach(actor => {
            if (actor.accepted) {
                const actorElement = createCoachElement(actor);
  //               actorElement.addEventListener('click', async () => {
  //
  //                   // Generate HTML for checkboxes
  //                   const checkboxesHTML = itemNames.map((item, index) => `
  //   <div class="swal2-checkbox">
  //     <input type="checkbox" id="swal-input-${index}" class="swal2-input" value="${index}" style="display: block;">
  //     <label for="swal-input-${index}" class="swal2-label">${item}</label>
  //   </div>
  // `).join('');
  //
  //                   // Show the Swal popup with checkboxes
  //                   const {value: selectedValue} = await Swal.fire({
  //                       title: 'امتیاز بدهید',
  //                       html: checkboxesHTML,
  //                       focusConfirm: true,
  //                       confirmButtonText: 'انتخاب شد',
  //                       customClass: {
  //                           confirmButton: 'custom-confirm-button', // Add a custom class name
  //                       },
  //                       preConfirm: async () => {
  //                           const selectedCheckboxes = document.querySelectorAll('input:checked');
  //                           // const selectedItems = [];
  //                           rate = 0;
  //                           if (selectedCheckboxes.length > 0) {
  //                               // selectedCheckboxes.forEach(checkbox => {
  //                               //     const itemName = itemNames[checkbox.value];
  //                               //     selectedItems.push(itemName);
  //                               // });
  //                               rate = selectedCheckboxes.length / 8;
  //                           }
  //                           try {
  //                               let formData = new FormData();
  //                               formData.append('login_token', localStorage.getItem('login_token'));
  //                               formData.append('user_email', actor.email);
  //                               formData.append('rate', rate);
  //                               let response = await fetch(AUTH_API + "/change_rate/", {
  //                                   method: 'POST',
  //                                   body: formData,
  //                               });
  //                               let data = await response.json();
  //                               if (response.status === 200) {
  //                                   window.location.reload();
  //                               } else {
  //                                   Swal.fire({
  //                                       icon: "error",
  //                                       title: 'مشکلی رخ داده است',
  //                                       text: data.errors.message,
  //                                       showConfirmButton: !1,
  //                                       timer: 2000
  //                                   });
  //                               }
  //                           } catch (error) {
  //                               Swal.fire({
  //                                   icon: "error",
  //                                   title: 'مشکلی رخ داده است',
  //                                   text: error,
  //                                   showConfirmButton: !1,
  //                                   timer: 2000
  //                               });
  //                           }
  //                       },
  //                   });
  //               });
                actorContainer.appendChild(actorElement);
            }
        });
    }

// Call the initializeCoaches function to load the actor elements
    initializeCoaches();

});