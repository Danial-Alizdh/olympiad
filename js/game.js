document.addEventListener("DOMContentLoaded", async function () {
    const addGame = document.getElementById("addGame");
    const backButton = document.getElementById("backButton");

    backButton.addEventListener("click", function (event) {
        window.location.href = '../';
    });

    addGame.addEventListener("click", function (event) {
        window.location.href = '../add/index.html?type=game';
    });

    // Define an async function to fetch data from the API
    async function fetchData() {

        try {
            let response = await fetch(AUTH_API + "/get_department_game/", {
                method: 'GET',
                headers: {
                    'Authorization': localStorage.getItem('login_token')
                }
            });
            let data = await response.json();
            if (response.status === 200) {
                if (data.addGame) {
                    addGame.style.display = 'flex';
                }
                if (data.game) {
                    return data.game
                }
                Swal.fire({
                    icon: 'info',
                    title: 'بازی‌ای یافت نشد',
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

// Define a function to create a game element
    function createGameElement(data) {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');

        const gameImage = document.createElement('img');
        gameImage.classList.add('game-image');
        gameImage.src = data.image === null ? '../images/no_image.jpg' : (AUTH_API + data.image);

        gameImage.alt = 'Game Image';

        const gameName = document.createElement('div');
        gameName.classList.add('game-name');
        gameName.textContent = data.name;

        const gameDatetime = document.createElement('div');
        gameDatetime.classList.add('game-datetime');
        gameDatetime.textContent = `تاریخ : ${data.date} / ساعت : ${data.time}`;

        const gameLocation = document.createElement('div');
        gameLocation.classList.add('game-location');
        gameLocation.textContent = `محل برگزاری : ${data.location}`;

        const boardName = document.createElement('div');
        boardName.classList.add('board-name');
        boardName.textContent = data.boardName;

        gameItem.appendChild(gameImage);
        gameItem.appendChild(gameName);
        gameItem.appendChild(gameDatetime);
        gameItem.appendChild(gameLocation);
        gameItem.appendChild(boardName);

        return gameItem;
    }

// Define an async function to initialize the game elements
    async function initializeGame() {
        const gameData = await fetchData();
        const gameList = document.getElementById('game-list');

        gameData.forEach(game => {
            const gameElement = createGameElement(game);
            gameList.appendChild(gameElement);
        });
    }

// Call the initializeGame function to load the game elements
    initializeGame();

});