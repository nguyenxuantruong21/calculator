
// lay ra INPUT va Item
var input = document.querySelector('.input')
var items = Array.from(document.querySelectorAll('.item'))

// ham duyet cac phan tu co class: item
items.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (input.innerHTML === '0')
            input.innerHTML = ''
        // neu an clear all thi xoa tat ca
        if (btn.innerHTML === 'C')
            input.innerHTML = '0'
        else if (btn.innerHTML === 'CE') {
            // neu xoa tung phan tu thi xoa o cuoi len
            var arrText = Array.from(input.innerHTML)
            arrText.splice(arrText.length - 1, 1)
            // neu do dai > 0 thi noi thanh chuoi
            if (arrText.length !== 0) {
                input.innerHTML = arrText.join('')
            } else {
                input.innerHTML = '0'
            }
        } else if (btn.innerHTML === '=') {
            // thuc hien cac phep toan
            input.innerHTML = eval(input.innerHTML)
        } else {
            input.innerHTML += btn.innerHTML
        }
    })
})
