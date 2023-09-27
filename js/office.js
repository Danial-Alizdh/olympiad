document.addEventListener("DOMContentLoaded", async function () {
    const backButton = document.getElementById("backButton");

    backButton.addEventListener("click", function (event) {
        window.location.href = '../';
    });

    // Define an async function to fetch data from the API
    async function fetchData() {

        try {
            let response = await fetch(AUTH_API + "/get_department_office/", {
                method: 'GET',
                headers: {
                    'Authorization': localStorage.getItem('login_token')
                }
            });
            let data = await response.json();
            if (response.status === 200) {
                if (data.office) {
                    return data.office
                }
                Swal.fire({
                    icon: 'info',
                    title: 'اداره‌ای یافت نشد',
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

// Define a function to create a office element
    function createOfficeElement(data) {
        const officeItem = document.createElement('div');
        officeItem.classList.add('office-item');

        const officeName = document.createElement('div');
        officeName.classList.add('office-name');
        officeName.textContent = data.name;

        const officeRate = document.createElement('div');
        officeRate.classList.add('office-rate');
        officeRate.innerHTML = '&#9733;'.repeat(data.rate); // Display stars based on rating

        const officeLocation = document.createElement('div');
        officeLocation.classList.add('office-location');
        officeLocation.textContent = data.location;

        officeItem.appendChild(officeName);
        officeItem.appendChild(officeRate);
        officeItem.appendChild(officeLocation);

        return officeItem;
    }

// Define an async function to initialize the office elements
    async function initializeOffice() {
        const officeData = await fetchData();
        const officeContainer = document.getElementById('office-list');
        officeData.forEach(office => {
            const officeElement = createOfficeElement(office);
            officeContainer.appendChild(officeElement);
        });
    }

// Call the initializeOffice function to load the office elements
    initializeOffice();

});