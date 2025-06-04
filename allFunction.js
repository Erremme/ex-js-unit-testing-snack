const getInitials = (fullName) => {
    const words = fullName.split(" ")
    const char = words.map((word) => word.charAt(0) )
     return char.join("")
}


 module.exports = {getInitials}