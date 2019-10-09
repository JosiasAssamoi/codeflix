module.exports = function splice (str="", start, deleteCountopt = str.length - start , toAddopt=''){
   return (start < 0) ? str.slice(0,start) + toAddopt + str.slice(start,deleteCountopt) :
   str.slice(0,start) + toAddopt + str.slice(deleteCountopt+start)

}