
// function toggleAllTodos() {
//     let todos = document.querySelectorAll('li')


//     for (elem of todos) {
//         elem.classList.toggle('completed')
//     }
// }


// const h1 = document.querySelector('h1')


// setInterval(function () {
//     if (h1.classList.contains('big')) {
//         h1.innerText = 'SAD'
//     } else {
//         h1.innerText = 'HAPPY'
//     }

//     h1.classList.toggle('big')
//     h1.classList.toggle('small')

// }, 1000)






























// function toggleAllTodos() {
//   const todos = document.querySelectorAll('li');

//   for (let li of todos) {
//     li.classList.toggle('completed');
//   }
// }

// const h1 = document.querySelector('h1');

// setInterval(function () {
//   if (h1.classList.contains('big')) {
//     h1.innerText = "SAD";
//   } else {
//     h1.innerText = "HAPPY"
//   }
//   h1.classList.toggle('big');
//   h1.classList.toggle('small');
// }, 1000)










let newLi = document.createElement('li')

newLi.textContent = 'hey'

let myUl = document.querySelector('ul')

myUl.append(newLi)


let firstLi = document.createElement('li')

firstLi.textContent = 'im FIRST'

myUl.prepend(firstLi)

let myImg = document.createElement('img')



myImg.setAttribute('src', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')

myImg.classList.add('thumbnail')

document.body.prepend(myImg)