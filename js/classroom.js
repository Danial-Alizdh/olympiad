document.addEventListener("DOMContentLoaded", async function () {
    const addClassroom = document.getElementById("addClass");
    const backButton = document.getElementById("backButton");

    backButton.addEventListener("click", function (event) {
        window.location.href = '../';
    });

    addClassroom.addEventListener("click", function (event) {
        window.location.href = '../add/index.html?type=classroom';
    });

    // Define an async function to fetch data from the API
    async function fetchData() {

        try {
            let response = await fetch(AUTH_API + "/get_department_classroom/", {
                method: 'GET',
                headers: {
                    'Authorization': localStorage.getItem('login_token')
                }
            });
            let data = await response.json();
            if (response.status === 200) {
                if (data.addClassroom) {
                    addClassroom.style.display = 'flex';
                }
                if (data.classroom) {
                    return data.classroom
                }
                Swal.fire({
                    icon: 'info',
                    title: 'کلاسی یافت نشد',
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

// Define a function to create a classroom element
    function createClassroomElement(data) {
        const classItem = document.createElement('div');
        classItem.classList.add('class-item');

        const className = document.createElement('div');
        className.classList.add('class-name');
        className.textContent = data.name;

        const classDateTime = document.createElement('div');
        classDateTime.classList.add('class-datetime');
        classDateTime.textContent = `تاریخ : ${data.date} / ساعت : ${data.time}`;

        const classLocation = document.createElement('div');
        classLocation.classList.add('class-location');
        classLocation.textContent = `محل برگزاری : ${data.location}`;

        const classCapacity = document.createElement('div');
        classCapacity.classList.add('class-capacity');
        classCapacity.textContent = `ظرفیت : ${data.capacity}`;

        const classUsers = document.createElement('div');
        classUsers.classList.add('class-users');
        classUsers.textContent = `افراد ثبت نام شده : ${data.users}`;

        const classLink = document.createElement('a');
        classLink.classList.add('class-link');
        classLink.href = data.link; // Set the link

        classLink.textContent = 'پیوستن به کلاس'; // Set the link text

        classItem.appendChild(className);
        classItem.appendChild(classDateTime);
        classItem.appendChild(classLocation);
        classItem.appendChild(classCapacity);
        classItem.appendChild(classUsers);
        classItem.appendChild(classLink);

        return classItem;
    }

// Define an async function to initialize the classroom elements
    async function initializeClassroom() {
        const classroomData = await fetchData();
        const classList = document.getElementById('class-list');

        classroomData.forEach(classroom => {
            const classroomElement = createClassroomElement(classroom);
            classList.appendChild(classroomElement);
        });
    }

// Call the initializeClassroom function to load the classroom elements
    initializeClassroom();

});