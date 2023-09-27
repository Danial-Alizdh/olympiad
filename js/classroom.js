document.addEventListener("DOMContentLoaded", async function () {
    const addClassroom = document.getElementById("addClass");
    const backButton = document.getElementById("backButton");
    let classes = []

    backButton.addEventListener("click", function (event) {
        window.location.href = '../';
    });

    addClassroom.addEventListener("click", function (event) {
        window.location.href = '../add/index.html?type=classroom';
    });

    async function getClasses() {
        try {
            let response = await fetch(AUTH_API + "/get_all_class/", {
                method: 'GET',
                headers: {
                    'Authorization': localStorage.getItem('login_token')
                }
            });
            let data = await response.json();
            if (response.status === 200) {
                if (data.data) {
                    classes = data.data.map(item => item.board_email);
                }
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
            // Swal.fire({
            //     icon: "error",
            //     title: 'مشکلی رخ داده است',
            //     text: error,
            //     showConfirmButton: !1,
            //     timer: 2000
            // });
        }
    }

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

        classItem.appendChild(className);
        classItem.appendChild(classDateTime);
        classItem.appendChild(classLocation);
        classItem.appendChild(classCapacity);
        classItem.appendChild(classUsers);

        if (classes.includes(data.board_email)) {
            const classLink = document.createElement('a');
            classLink.classList.add('class-link');
            classLink.href = data.link; // Set the link
            classLink.textContent = 'پیوستن به کلاس'; // Set the link text
            classItem.appendChild(classLink);
        }
        else {
            const joinClassButton = document.createElement('button');
            joinClassButton.id = 'joinClassButton';
            joinClassButton.textContent = 'ثبت نام';

            joinClassButton.addEventListener('click', async function () {
                window.location.href = `../add/index.html?type=${data.board_email}`;
            });
            classItem.appendChild(joinClassButton);
        }

        return classItem;
    }

    async function initializeClassroom() {
        getClasses();
        const classroomData = await fetchData();
        const classList = document.getElementById('class-list');

        classroomData.forEach(classroom => {
            const classroomElement = createClassroomElement(classroom);
            classList.appendChild(classroomElement);
        });
    }

    initializeClassroom();

});