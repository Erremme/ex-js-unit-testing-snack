const getInitials = (fullName) => {
    fullName.split(" ")
    return fullName.map((word) => word.charAt(0) ).join("")
}


 exports = {getInitials}