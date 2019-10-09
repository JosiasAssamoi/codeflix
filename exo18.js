module.exports = function indexOf(str ='',search,fromIndexopt=str.lenght - 1) {
    return str.lastIndexOf(search,fromIndexopt)
  }