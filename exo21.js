module.exports = function reverse (str=""){
    words = str.split("")
    words.reverse()
    return words.join("")
}