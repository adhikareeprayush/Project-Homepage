let background = document.getElementById('blurryBack');

function loadImg() {
    // Construct the API URL with the random image endpoint, category query, and your access key
    const url = `https://api.unsplash.com/photos/random?query=landscape&client_id=gZb-BQbX2-TtxlCJ_jDzH-78EZN-cb8mvSrS9LmWQr8`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            //get the name of the author
            let unsplashAuthor = document.getElementById('unsplash-author');
            unsplashAuthor.innerHTML = data.user.name;
            background.style.backgroundImage = `url(${data.urls.regular})`;
        });
}

window.addEventListener('load', loadImg, getTime_date(), greeting());


function getTime_date() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

    let time = document.getElementById('time');
    time.innerHTML = `${hours}:${minutes}`;

    //change the date to text form
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    month = months[month];

    let dateElement = document.getElementById('date');
    dateElement.innerHTML = `${days[day]} ${day} ${month}`;
}

function greeting() {
    let date = new Date();
    let hours = date.getHours();

    if (hours < 12) {
        greeting.innerHTML = 'Good Morning';
    }
    else if (hours < 18) {
        greeting.innerHTML = 'Good Afternoon';
    }
    else {
        greeting.innerHTML = 'Good Evening';
    }

    const timeGreeting = document.getElementById('timeGreeting');
    timeGreeting.innerHTML = greeting.innerHTML;
}


const category = 'happiness';
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'R4mo+DRatvAxk/0Y42v3jw==GkmawomWvA4ARIKl' }, // Replace 'YOUR_API_KEY' with your actual API key
    contentType: 'application/json',
    success: function (result) {
        console.log('API Response:', result);
        if (result && result.length > 0) {
            const quote = result[0].quote;
            const author = result[0].author;
            quoteElement.textContent = quote;
            authorElement.textContent = author;
            console.log('Quote:', quote);
            console.log('Author:', author);
        } else {
            console.error('No data or empty response from the API.');
        }
    },
    error: function ajaxError(jqXHR) {
        console.error('Error fetching data:', jqXHR.status, jqXHR.statusText);
    }
});
