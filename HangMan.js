//var name = prompt('What is you name?')
//console.log('Hello, ' + name)

//var likesCats = confirm("Тебе нравятся кошки?");
//if (likesCats) {
//    console.log("Ты классная кошка!");
//} else {
//    console.log("Что ж, не проблема. Все равно ты молодец!");
//}

//var words = ['program', 'monkey', 'beautiful', 'frog']
//var word = words[Math.floor(Math.random() * words.length)]

//var answerarray = []
//for (i = 0; i < word.length; i++) {
//    answerarray[i] = '_'
//}
//var remainingletters = word.length

//while (remainingletters > 0) {
//    alert(answerarray.join(' '))
//    var guess = prompt('guess a letter or press cancel to leave the game.')
//    if (guess === null) {
//        break
//    } else if (guess.length !== 1) {
//        alert('please, enter just one character.')
//    } else {
//        for (j = 0; j < word.length; j++) {
//            if (word[j] === guess) {
//                answerarray[j] = guess
//                remainingletters--
//            }
//        }

//    }
//}

//alert(answerarray.join(' '))
//alert('perfect you guess: ' + word)

//-----------------------------------------------------------

alert('HANG-MAN GAME' + '\n' + 'My first \'game\' based on just: js code. ' + '\n' + 'Press \'ok\' to start.')
if (confirm('Would you like to play with fewer chances to guess?' + '\n' + 'If you accept it click \'ok\'')) {
    var lives = 5
} else {
    var lives = 10
}
var words = ['frog', 'mobile', 'animal', 'bread', 'program', 'monkey', 'grandmother', 'butter', 'telephone','hypertextmarkuplanguage','earth','friend','submarine','language','airplane','computer','warrior']
var word = words[Math.floor(Math.random() * words.length)]
var answerArray = []
for (i = 0; i < word.length; i++) {
    answerArray[i] = '_'
}

var remainingLetters = word.length
var newRemainigLetters = remainingLetters


while ((remainingLetters > 0) && (lives !== 0)) {
    alert('lives: ' + lives + '\n' + answerArray.join(' ') + '\n' + remainingLetters + ' letters to go')
    //alert(answerArray.join(' '))
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
    alert('Sorry but you have spend all you lives.')
} else if (remainingLetters === 0) {
    if (confirm('Perfect! you guess: ' + '\'' + word + '\'.' + '\n' + 'If you want to play again press \'ok\'')) {
        document.location.reload()
    }
} else {
    alert('Made by \'Sergey\'.')
}

//alert(answerArray.join(' '))


