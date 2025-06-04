const getInitials = (fullName) => {
    const words = fullName.split(" ")
    const char = words.map((word) => word.charAt(0) )
     return char.join("")
}


const createSlug = (str) => str.toLowerCase().replace(/\s+/g, "-")


const average = (arr) => {
    const aver = arr.reduce( (acc , num) => acc+ num , 0) 
    return aver / arr.length
    
}

const isPalindome = (string) =>  {
    const reverseString = string.split(" ").reverse().join("")

    if(string === reverseString){
        return true
    }else{
       return false
    }
}

 module.exports = {getInitials , createSlug , average , isPalindome}