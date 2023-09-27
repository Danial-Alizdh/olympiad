document.addEventListener("DOMContentLoaded", async function () {
    const backButton = document.getElementById("backButton");

    backButton.addEventListener("click", function (event) {
        window.location.href = '../';
    });

    // Define an async function to fetch data from the API
    async function fetchData() {

        try {
            let response = await fetch(AUTH_API + "/get_department_board/", {
                method: 'GET',
                headers: {
                    'Authorization': localStorage.getItem('login_token')
                }
            });
            let data = await response.json();
            if (response.status === 200) {
                if (data.board) {
                    return data.board
                }
                Swal.fire({
                    icon: 'info',
                    title: 'هیئتی یافت نشد',
                    showConfirmButton: !1,
                    timer: 2000
                });
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

    function createBoardElement(data) {
        console.log(data)
        const boardCard = document.createElement('div');
        boardCard.classList.add('board-card');

        const boardName = document.createElement('div');
        boardName.classList.add('board-name');
        boardName.textContent = data.name;

        const boardRate = document.createElement('div');
        boardRate.classList.add('board-rate');
        boardRate.innerHTML = '&#9733;'.repeat(data.rate);

        const boardGoals = document.createElement('div');
        boardGoals.classList.add('board-goals');
        boardGoals.textContent = `اهداف: ${data.goal}`;

        const boardLocation = document.createElement('div');
        boardLocation.classList.add('board-location');
        boardLocation.textContent = `آدرس: ${data.location}`;

        boardCard.appendChild(boardName);
        boardCard.appendChild(boardRate);
        boardCard.appendChild(boardGoals);
        boardCard.appendChild(boardLocation);

        return boardCard;
    }

// Define an async function to initialize the board elements
    async function initializeBoard() {
        const boardData = await fetchData();
        const boardContainer = document.getElementById('board-container'); // Replace 'board-container' with the actual container ID where you want to add the cards
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

        boardData.forEach(board => {
            const boardElement = createBoardElement(board);
  //           boardElement.addEventListener('click', async () => {
  //
  //               // Generate HTML for checkboxes
  //               const checkboxesHTML = itemNames.map((item, index) => `
  //   <div class="swal2-checkbox">
  //     <input type="checkbox" id="swal-input-${index}" class="swal2-input" value="${index}" style="display: block;">
  //     <label for="swal-input-${index}" class="swal2-label">${item}</label>
  //   </div>
  // `).join('');
  //
  //               // Show the Swal popup with checkboxes
  //               const {value: selectedValue} = await Swal.fire({
  //                   title: 'امتیاز بدهید',
  //                   html: checkboxesHTML,
  //                   focusConfirm: true,
  //                   confirmButtonText: 'انتخاب شد',
  //                   customClass: {
  //                       confirmButton: 'custom-confirm-button', // Add a custom class name
  //                   },
  //                   preConfirm: async () => {
  //                       const selectedCheckboxes = document.querySelectorAll('input:checked');
  //                       // const selectedItems = [];
  //                       rate = 0;
  //                       if (selectedCheckboxes.length > 0) {
  //                           // selectedCheckboxes.forEach(checkbox => {
  //                           //     const itemName = itemNames[checkbox.value];
  //                           //     selectedItems.push(itemName);
  //                           // });
  //                           rate = selectedCheckboxes.length / 8;
  //                       }
  //                       try {
  //                           let formData = new FormData();
  //                           formData.append('login_token', localStorage.getItem('login_token'));
  //                           formData.append('user_email', coach.email);
  //                           formData.append('rate', rate);
  //                           let response = await fetch(AUTH_API + "/change_rate/", {
  //                               method: 'POST',
  //                               body: formData,
  //                           });
  //                           let data = await response.json();
  //                           if (response.status === 200) {
  //                               window.location.reload();
  //                           } else {
  //                               Swal.fire({
  //                                   icon: "error",
  //                                   title: 'مشکلی رخ داده است',
  //                                   text: data.message,
  //                                   showConfirmButton: !1,
  //                                   timer: 2000
  //                               });
  //                           }
  //                       } catch (error) {
  //                           Swal.fire({
  //                               icon: "error",
  //                               title: 'مشکلی رخ داده است',
  //                               text: error,
  //                               showConfirmButton: !1,
  //                               timer: 2000
  //                           });
  //                       }
  //                   },
  //               });
  //           });
            boardContainer.appendChild(boardElement);
        });
    }

// Call the initializeBoard function to load the board elements
    initializeBoard();

});