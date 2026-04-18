// retrying 

// const str = "fuck"

// function reverseString(str){
//     strArr = str.split("")
//     revArr = strArr.reverse()
//     revStr = revArr.join("")
//     console.log(revStr)
// }

// reverseString(str)


// const arr = [67, 420, 1488, 1738, 21]

// function maxNum(arr){
//     Math.max(...arr)
//     console.log(maxNum)
// }

// maxNum(arr)


const vowels = "AEIOUaeiou"
const vowelsArr = vowels.split("")

const word = "javascript"

function vowelFinder(word, vowelsArr){
    let count = 0
    const wordArr = word.split("")
    for (let i = 0; i < wordArr.length; i++){
        if(wordArr.includes(vowelsArr[i])){
            count++
        }
    }
    return console.log(count)
}

vowelFinder(word, vowelFinder)

