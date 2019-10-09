module.exports= function countSubstrings(str="", substring){
    words = str.split(' ')
    count =0 
    for(word of words){
        if(word === substring)
            count++
    }
    return count
}