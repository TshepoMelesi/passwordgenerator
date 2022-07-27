const generatorBtn = document.getElementById('generate')
const saveBtn = document.getElementById('save')
const emailBtn = document.getElementById('restore')
const passwordLen = document.getElementById('passwordLength')
const passwordTitle = document.getElementById('passwordTitle')
const characters = '123#aZb?/YcX#d6(WeV?fU4)56#gThSi7*RjQ?kP#l7%89!O#mNnMo#8LpKq0/12J@rI9sHtGu&F345v!EwDxCy0BzA'
let generatedPassword = ''
let storage = []
let passwordTag = document.getElementById('password')

function generate(_characters, _length){
    let _len = _length.value - 1
    let char
    generatedPassword = ''
    for(let i=0; i<=_len; i++){
        char = _characters[Math.ceil(Math.random() * _characters.length)]
        generatedPassword += char
    }
}

generatorBtn.addEventListener('click', ev =>{
    generate(characters, passwordLen)
    if (passwordLen.value >= 4) {
        passwordTag.innerText = generatedPassword
    } else {
        passwordTag.innerText = 'please insert a minimum of 4 characters'}
})

saveBtn.addEventListener('click', ev => {
    let entry = {'title': passwordTitle.value, 'pass': generatedPassword}
    storage.push(entry)
})

emailBtn.addEventListener('click', ev => {
    // todo: add emailing functionality
    console.clear()
    if (storage.length > 0){
        for (let i = 0; i<=storage.length -1; i++){
        console.log(storage[i].title + ': ' + storage[i].pass)
    }
    }
})