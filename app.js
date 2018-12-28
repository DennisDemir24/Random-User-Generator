const url = 'https://randomuser.me/api/';

const btn = document.getElementById('btn');
let fullnameDisplay = document.getElementById('fullname');
let emailDisplay = document.getElementById('email');
let cityDisplay = document.getElementById('city');
let imgDisplay = document.getElementById('avatar');
let userNameDisplay = document.getElementById('username');


btn.addEventListener('click', () => {
    fetch(url)
        .then(parsJSON)
        .then(updateProfile)
        .catch((err) => {
            console.log(err);
        })
});

const parsJSON = (res) => {
    return res.json().then((parsedData) => {
        return parsedData.results[0];
    })
};

const updateProfile = (data) => {
    let fullname = data.name.first + ' ' + data.name.last;
    fullnameDisplay.innerText = fullname;
    imgDisplay.src = data.picture.medium;
    userNameDisplay.innerText = data.login.username;
    cityDisplay.innerText = data.location.city;
    emailDisplay.innerText = data.email;
}