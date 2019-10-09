module.exports = function insert(str ='',toInsertopt='',positionopt=0) {
    return str.slice(0,positionopt) + toInsertopt + str.slice(positionopt)

  }