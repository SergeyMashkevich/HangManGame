
//-----------------------------------------------------------

alert('HANG-MAN GAME' + '\n' + 'My first \'game\' based on just: js code. ' + '\n' + 'Press \'ok\' to start.')
if (confirm('Would you like to play with fewer chances to guess?' + '\n' + 'If you accept it click \'ok\'')) {
    var lives = 4
} else {
    var lives = 8
}
var words = ['management', 'environment', 'medicine', 'application', 'newspaper', 'revolution', 'championship', 'background', 'weather', 'hypertextmarkuplanguage', 'breakfast', 'evening', 'submarine', 'Sergeymashkevich', 'weekend', 'champion', 'warrior']
var word = words[Math.floor(Math.random() * words.length)]
var answerArray = []
for (i = 0; i < word.length; i++) {
    answerArray[i] = '_'
}

var remainingLetters = word.length
var newRemainigLetters = remainingLetters


while ((remainingLetters > 0) && (lives !== 0)) {
    alert('lives: ' + lives + '\n' + answerArray.join(' ') + '\n' + remainingLetters + ' letters to go')
    var guess = prompt('Guess a letter or press cancel to quit the game.')
    if (guess === null) {
        if (confirm('Maybe you want to try again...')) {
            document.location.reload()
        }
        break
    } else if (guess.length !== 1) {
        alert('Please, enter one letter.')
        lives++
    } else {
        guess = guess.toLowerCase()
        for (j = 0; j < word.length; j++) {
            if (answerArray[j] === guess) {
                alert('You have already guess this letter... try again.')
                lives++
                break
            }
            if (word[j] === guess) {
                answerArray[j] = guess
                remainingLetters--
            }


        }

    }
    if (remainingLetters === newRemainigLetters) {
        lives--
    }
    newRemainigLetters = remainingLetters
}

if (lives === 0) {
    alert('Sorry, but you have spend all you lives. ' + 'The secret word was:' + '\'' + word + '\'')
} else if (remainingLetters === 0) {
    if (confirm('Perfect! you guess: ' + '\'' + word + '\'.' + '\n' + 'If you want to play again press \'ok\'')) {
        document.location.reload()
    }
} else {
    alert('Made by \'Sergey\'.')
}

//alert(answerArray.join(' '))



