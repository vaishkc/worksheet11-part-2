const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
 console.log(event.target);

const backgroundColor = event.target.style.backgroundColor;

if (backgroundColor === 'red') {
event.target.style.backgroundColor = 'blue';
} else {
event.target.style.backgroundColor = 'red';
}
});