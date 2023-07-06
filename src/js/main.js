function generatePassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzçABCDEFGHIJKLMNOPQRSTUVWXYZÇ1234567890!@#$%&*()_+-[]{}"

    let password = ''

    for (let i = 0; i < 8; i++) {
        //Numero randômico vai de 1 a comprimento de 'chars'.
        const randomNumber = Math.floor(Math.random() * chars.length)
        /*Após o calculo do resultado do sorteio randômico atribuímos o valor na variável password (que antes era ''). 
        Agora utilizando o método substring faremos o recorte da posição randomNumber até a próxima posição (+1), o resultado será o recorte de 1 caractere 
        sorteado que fará a composição da senha. */

        password += chars.substring(randomNumber, randomNumber + 1)
    }
}