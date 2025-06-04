const getInitials = (fullName) => {
    const words = fullName.split(" ")
    const char = words.map((word) => word.charAt(0).toUpperCase() )
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
    if(isNaN(id)){
        throw new Error("'ciao' non è un id")
    }
    posts.forEach((post) => {
        if(post.id === undefined ||
            post.title === undefined ||
            post.slug === undefined
        ){
            throw new Error("L/' array non è nel formato corretto");
            
        }
    })
   return posts.find((post) => post.id === id) || null
}

 module.exports = {getInitials , createSlug , average , isPalindome, findPostById}