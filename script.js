let btnElem = document.querySelector('.btn');
let inputElem = document.querySelector('.input_div_input');

addEventListener('input', ()=>{
    let pattern = /^\b(?!0)\d{1,2}\b|\b(100)\b$/;
    let value = inputElem.value;
    let isValid = pattern.test(value);
    if (isValid){
        btnElem.classList.add('active');
    }else {
        btnElem.classList.remove('active');
    }
});


function loadData(id){
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(
            response=>response.json(),
            error => console.log(error)
        )
        .then(
            json => render(json),
            error => console.log(error)
        );
}

function render(json) {

    let postRoot = document.querySelector('#postRoot');
    postRoot.innerHTML = '';
    let divElem = document.createElement('div');
    divElem.classList.add('postFrame');
    for (let key in json){
        let elem = document.createElement('p');
        elem.innerHTML = `<b>${key}</b> : ${json[key]}`;
        elem.classList.add('postElem')
        divElem.appendChild(elem);
    }
    postRoot.appendChild(divElem);
}

btnElem.addEventListener('click', ()=>{
    let isActive = btnElem.classList.value.includes('active');
    if (isActive){
        let value = inputElem.value;
        loadData(+value);
        setTimeout(()=>{
            inputElem.value = '';
        },
            2000)

    }else{
        console.log('check regexp')
    }
});


//
//
// function samle() {
//     let link = 'https://samples.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid=b1b15e88fa797225412429c1c50c122a1';
//     fetch(link)
//         .then(
//             response=>response.json(),
//             error => console.log(error)
//         )
//         .then(
//             json => render(json),
//             error => console.log(error)
//         );
// }
//
// function postReq(){
//     fetch(`https://jsonplaceholder.typicode.com/posts`,
//         {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json;charset=utf-8'
//             },
//             body: JSON.stringify({name: 'user', password: 'pwd123'})
//         }
//         );
// }
//

// let btn = document.querySelector('#loadBtn');
//
// // важно функция не находит локально input, ищет в глобальных переменных, пример ниже
// btn.addEventListener('click', ()=>{
//     // convert to str
//     let input = +document.querySelector('#postID').value;
//     loadData(input);
// });
// btn.addEventListener('click', (input)=>loadData(input));



// // компактная запись
//
// let a = fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json(),
//           error => console.log(error))
//     .then(json => console.log(json),
//           error => console.log(error));


// let a = fetch('https://jsonplaceholder.typicode.com/todos/1');
//
// // fetch выдаёт Promise, тк мы в асинхронном потоке
//
// let a1 = a.then(
//     response => response.json(),
//     error => console.log(error)
// );
//
// let a2 = a1.then(
//     json => console.log(json),
//     error => console.log(error)
// );