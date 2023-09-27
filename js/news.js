document.addEventListener("DOMContentLoaded", async function () {
    const addNews = document.getElementById("addNews");
    const backButton = document.getElementById("backButton");

    backButton.addEventListener("click", function (event) {
        window.location.href = '../';
    });

    addNews.addEventListener("click", function (event) {
        window.location.href = '../add/index.html?type=news';
    });

    // Define an async function to fetch data from the API
    async function fetchData() {

        try {
            let response = await fetch(AUTH_API + "/get_department_news/", {
                method: 'GET',
                headers: {
                    'Authorization': localStorage.getItem('login_token')
                }
            });
            let data = await response.json();
            if (response.status === 200) {
                if (data.addNews) {
                    addNews.style.display = 'flex';
                }
                if (data.news) {
                    return data.news
                }
                Swal.fire({
                    icon: 'info',
                    title: 'خبری یافت نشد',
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

// Define a function to create a news element
    function createNewsElement(news) {
        const newsDiv = document.createElement('div');
        newsDiv.className = 'news';

        const img = document.createElement('img');
        img.src = news.image === null ? '../images/no_image.jpg' : (AUTH_API + news.image);
        img.alt = `News ${news.image}`;

        const h2 = document.createElement('h2');
        h2.textContent = news.title;

        const dateP = document.createElement('p');
        dateP.textContent = 'تاریخ : ' + news.date;

        const descriptionP = document.createElement('p');
        descriptionP.textContent = 'توضیحات : ' + news.description;

        // Add click event listener to open the link
        if (news.link) {
            newsDiv.addEventListener('click', function () {
                window.open(news.link, '_blank');
            });
        }

        // Append elements to the news div
        newsDiv.appendChild(img);
        newsDiv.appendChild(h2);
        newsDiv.appendChild(dateP);
        newsDiv.appendChild(descriptionP);

        return newsDiv;
    }

// Define an async function to initialize the news elements
    async function initializeNews() {
        const newsData = await fetchData();
        const newsContainer = document.getElementById('news-list');

        newsData.forEach(news => {
            const newsElement = createNewsElement(news);
            newsContainer.appendChild(newsElement);
        });
    }

// Call the initializeNews function to load the news elements
    initializeNews();

});