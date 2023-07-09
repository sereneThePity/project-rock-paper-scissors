
getComputerChoice = () => {
    rpsList = ['rock','paper','scissors']
    randomNumber = Math.floor(Math.random() * rpsList.length)
    return rpsList[randomNumber]
}

