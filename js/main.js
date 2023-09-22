const input = document.querySelector('#input')
const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const btn = document.querySelector('#btn')
const res = document.querySelector('#result')

btn.addEventListener('click', answearText)

function calculate(n1, n2, l) {
    const min = Number(n1.value)
    const max = Number(n2.value)
    const lenghtArray = Number(l.value)

    const arr = new Array(lenghtArray).join(',').split(',').map(function() { return Math.floor(Math.random() * (max - min + 1)) + min });
    let sum = 0

    if(arr.length < 2) {
        return 'Массив < 2'
    }

    let checkA = arr[0] >= 0 ? 1: -1

    for(let i = 1; i < arr.length; i++) {
        const checkB = arr[i] >= 0 ? 1: -1

        if(checkA !== checkB) {
            sum++
            checkA = checkB
        }
    }
    
    return 'Кол-во изменений в массиве: ' + sum + '\nCам массив: ' + arr 
    
}

function answearText() {
    const result = calculate(input, input1, input2)

    res.innerHTML = result
}





