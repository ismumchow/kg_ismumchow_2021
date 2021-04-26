const arguments = process.argv.slice(2)
let convertNumToString = function (arr){
    let finalArray = []
    let newArr = arr.map(element => {
        element = element.toString().split('');
        return element
    });

    for (let i = 0; i < newArr.length; i++){
        let wordArr = []
        newArr[i].map(element => {
            if(element ==='1')  wordArr.push('One')
            else if(element ==='2')  wordArr.push('Two')
            else if(element ==='3')  wordArr.push('Three')
            else if(element ==='4')  wordArr.push('Four')
            else if(element ==='5')  wordArr.push('Five')
            else if(element ==='6')  wordArr.push('Six')
            else if(element ==='7')  wordArr.push('Seven')
            else if(element ==='8')  wordArr.push('Eight')
            else if(element ==='9')  wordArr.push('Nine')
            else if(element ==='0')  wordArr.push('Zero')
        })

        finalArray.push(wordArr.join(''))
    }
    return finalArray.join(',')
}

console.log(convertNumToString(arguments))