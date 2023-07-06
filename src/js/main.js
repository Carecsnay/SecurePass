//É obrigatório setar a variável global para utilizar na função generatePassword e definir um valor para não dar problema no for da 
//função, lembrando que 16 é o valor padrão do input.
let passwordLength = 16;
//Capturando elementos
const inputPasswordEl = document.querySelector('#password');
const inputRangeEl = document.querySelector('#password-length');
const buttonEl = document.querySelector('button');

const generatePassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzçABCDEFGHIJKLMNOPQRSTUVWXYZÇ1234567890!@#$%&*()_+-[]{}"
    let password = ''

    for (let i = 0; i < passwordLength; i++) {
        //Numero randômico vai de 1 a comprimento de 'chars'.
        const randomNumber = Math.floor(Math.random() * chars.length)
        /*Após o calculo do resultado do sorteio randômico atribuímos o valor na variável password (que antes era ''). 
        Agora utilizando o método substring faremos o recorte da posição randomNumber até a próxima posição (+1), o resultado será o recorte de 1 caractere sorteado que fará a composição da senha. */
        password += chars.substring(randomNumber, randomNumber + 1)
    }
    //Setando senha randômica no campo password.
    inputPasswordEl.value = password;
}

const copy = () => {
    navigator.clipboard.writeText(inputPasswordEl.value);
}

//Adicionando evento de escuta e pegando o seu valor.
inputRangeEl.addEventListener('input', () => {
    passwordLength = inputRangeEl.value;
    generatePassword()
})

//Adicionando evento de escuta e ação do botão.
buttonEl.addEventListener('click', () => {
    copy();
})

generatePassword()
copy()