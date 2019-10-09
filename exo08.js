const Utils = require('./utils')

module.exports = function swapCase(str ='') {
     newStr=""
     for(lettre of str){
         if (Utils.isLowerCase(lettre))
            newStr +=lettre.toUpperCase()
        else 
        newStr +=lettre.toLowerCase()
     }
   return newStr.trim()
   }
   