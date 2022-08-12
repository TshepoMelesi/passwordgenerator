/*header code ---------------------------------------*/
const header = document.getElementById('header')
const headerElements = `
<div class="container">
        <div class="logo">
            <h1>PAS Generator</h1>
        </div>
        
        <div class="navigator">
            <ul>
                <li>
                    <a href="./index.html">Home</a>
                </li>
                <li>
                    <a href="./index.html">Notes</a>
                </li>
                <li>
                    <a href="./index.html">Learn</a>
                </li>
                <li>
                    <a href="./index.html">About</a>
                </li>
            </ul>
        </div>
    </div>
`
/*---------------------------------------------------*/

/*---------------------------------------------------*/
const generateBtn = document.getElementById('generate')
const addNoteBtn = document.getElementById('addNote')
const limit = document.getElementById('length')
const displayPassword = document.getElementById('GeneratedPassword')
const checkNum = document.getElementById('includeNumbers')
const checkAlphas = document.getElementById('alphabets')
const checkLow = document.getElementById('lowerAlpha')
const checkChar = document.getElementById('specialChars')
const numbers = '1234567890'
const alphabets = 'eQzxWqwERrTYtyUuioIASpOPaDMbFGHsdfJKLZXghjkCVnmBNlcv'
const character = '!@#$%^&*()_+={}[]|?/<,>.'
/*---------------------------------------------------*/

class Generate{
    constructor(_inNum = '', _alphas = '', _inChar = ''){
        this.numbers = _inNum
        this.alphabets = _alphas
        this.character = _inChar
        this.holder = ''
        this.elements = ''
    }
    generate(_limit){
        this.holder += this.alphabets + this.numbers + this.character
        for (let i = 0; i <= _limit; i++) {
            if( !(i === 0) && i % 25 === 0 ) {
                this.elements += '\n'
            } else {
                this.elements += this.holder[Math.floor(Math.random() * this.holder.length)]
            }
        }
        return this.elements
    }
}

window.addEventListener('load', () => {
    header.innerHTML = headerElements

    generateBtn.addEventListener('click', generatePass)
})

function generatePass() {
    const checked = [checkNum.checked, checkAlphas.checked, checkChar.checked]

    checked.forEach((value => {
        console.log(value)
    }))


    if( checkNum.checked && checkAlphas.checked && checkChar.checked ) {
        displayPassword.innerText = ''
        let password = new Generate(numbers, alphabets, character)
        let newPass = password.generate(limit.value)
        displayPassword.innerText = newPass
        console.log(newPass)
    }
}







