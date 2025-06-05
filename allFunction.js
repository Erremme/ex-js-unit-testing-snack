const getInitials = (fullName) => {
    const words = fullName.split(" ")
    const char = words.map((word) => word.charAt(0).toUpperCase() )
     return char.join("")
}


const createSlug = (str, posts) => {
    if(str === ""){
        throw new Error("La stringa è vuota!")
    } 
       let slug = str.toLowerCase().replaceAll(" " , "-")

    if(posts){
        for(let i = 0; i < posts.length; i++){
            const post = posts[i]
            if(post.slug === slug){
              return  slug + "-1"
            }
        }
    }
    
    return slug

    
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

function addPost(posts , post) {
    posts.forEach((p) => {
        if(p.id === post.id){
            throw new Error("l' id che hai passato esiste gia")
        }

        if(p.slug === post.slug){
            throw new Error("lo slugs che hai passato esiste gia")

        }
    })
    return posts.push(post)
}

function removePost(posts , id) {
    const index = posts.findIndex((post) => post.id === id)
    posts.splice(index, 1)
    
}

 module.exports = {getInitials , createSlug , average , isPalindome, findPostById, addPost, removePost}