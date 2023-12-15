// // function performance(btn) {
// //     btn.innerText = 'Clicked'
// // };

// let array = ['cat', 'dog', 'monkey', 'kitchenSink', 'Waffles']

// function random(arr) {

// }

// function performance(btn) {

//     let buttonChanger = [];

//     for (let i = 0; i < array.length; i++) {
//         if (btn.innerText === 'First button')buttonChanger.push(btn.innerText = 'Clicked')

//         else if (btn.innerText === 'Second button')  btn.innerText = 'Clicked'

//         else (btn.innerText === 'Clicked')
//             buttonChanger.push(btn.innerText = array[i])
//         }
//         return buttonChanger
//     }


// function hide(element) {
//     element.remove();
// }

let sum = 0;
let sum2 = 0;

function sumFunc1(button) {
    sum++;
    button.innerHTML = `${sum} Hype`;
    alert(`Ninja was liked: ${sum}`);
};

function sumFunc2(button) {
    sum2++;
    button.innerHTML = `${sum2} Hype`;
    alert(`Ninja was liked: ${sum}`);
};

function statusFunc(button) {
    if (button.innerHTML === 'Login') {
        button.innerHTML = 'Logout'
    } else {
        button.innerHTML = 'Login'
    }
}

function removalFunc(button) {
    button.remove();
}
