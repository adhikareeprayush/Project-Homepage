let background = document.getElementById('blurryBack');

function loadImg() {
    // Construct the API URL with the random image endpoint, category query, and your access key
    const url = `https://api.unsplash.com/photos/random?query=landscape&client_id=gZb-BQbX2-TtxlCJ_jDzH-78EZN-cb8mvSrS9LmWQr8`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

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
