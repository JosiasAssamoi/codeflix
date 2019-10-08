module.exports = function capitalize(str ='',restToLoweropt=false) {
    if (!restToLoweropt)
        return str.charAt(0).toUpperCase() + str.slice(1,)
    return str.charAt(0).toUpperCase() + str.slice(1,).toLowerCase()
}