const getInitials = (fullName) => {
    const words = fullName.split(" ")
    const char = words.map((word) => word.charAt(0) )
     return char.join("")
}


const createSlug = (str) => {
    if(str === ""){
        throw new Error("La stringa è vuota!")
    }else{

       return str.toLowerCase().replace(/\s+/g, "-")
    }
}


const average = (arr) => {
    const aver = arr.reduce( (acc , num) => acc+ num , 0) 
    return aver / arr.length
    
}

const isPalindome = (string) =>  {
    const reverseString = string.split("").reverse().join("")

    if(string !== reverseString){
        return false
    }
       return true
    
}

const findPostById = (posts, id) => {
   return posts.find((post) => post.id === id)
}

 module.exports = {getInitials , createSlug , average , isPalindome, findPostById}