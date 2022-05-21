//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

let myImg = document.querySelector('img');

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName()
{
    let myName = prompt('Please enter your name. ');
    if (!myName)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome to my website, ' + myName;
    }
}

if (!localStorage.getItem('name'))
{
    setUserName();
}
else
{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome back to my website, ' + storedName;
}

myButton.onclick = () => setUserName();

myImg.onclick = () =>
{
    let mySrc = myImg.getAttribute('src');

    if (mySrc === 'images/cap.png')
    {
        myImg.setAttribute('src', 'images/cap-laptop.png');
    }
    else
    {
        myImg.setAttribute('src', 'images/cap.png');
    }
}