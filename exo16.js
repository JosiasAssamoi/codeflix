const capitalize = require('./exo04')
const Utils = require('./utils')
module.exports = function countWords(str="",patternopt){
    // on remplace les tirets par
    str = str.replace('-','')
    let words = str.split(' ')
    //on supprime les espaces en trop
    words = words.filter(function (element) {
        return element !==''
      })
    // capitalise du ou des mots
    let  newStr=""
    for(word of words){
        newStr+=capitalize(word)+' '
    }
    str =newStr.trim()
    //si il n'y qu'unseul mot 
    if(words.length==1){
        let count=0
        
        for(i=0;i<=str.length-1; i++){
            if(Utils.isUpperCase(str.charAt(i)) && Utils.isLowerCase(str.charAt(i+1)) ){
                count++
            }
        }
        return count
    }
    else{
       return words.length
    }
}