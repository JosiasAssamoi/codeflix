module.exports = function decapitalize(str ='') {
    let words = str.split(' ')
    if(words.length >= 1){
        let decapitalized = ''
        for (word of words){
            decapitalized += word.charAt(0).toLowerCase() + word.slice(1,) +' '
        }
        // supprime le dernier espace en trop a la fin
        return decapitalized.slice(0,(decapitalized.length-1))
    }
    return str.charAt(0).toLowerCase() + word.slice(1,str)
    

}
