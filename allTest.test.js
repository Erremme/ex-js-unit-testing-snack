const {getInitials , createSlug, average , isPalindome , findPostById, addPost, removePost} = require("./allFunction.js")

let posts;

beforeEach(() => {
    posts = [
    { id: 1, title: "Primo post", slug: "primo-post" },
    { id: 2, title: "Secondo post", slug: "secondo-post" },
    { id: 3, title: "Terzo post", slug: "terzo-post" }
];

})

afterEach(() => {
    posts ;
})


describe ("Minipolazione di stringhe" , ()=> {

    /*🏆 Snack 1*/
    test('La funzione getInitials restituisce le iniziali di un nome completo. ', () => { 
        expect((getInitials("Raffele Molinaro"))).toBe("RM")
        expect((getInitials("raffele molinaro"))).toBe("RM")
        expect((getInitials("raffele   molinaro"))).toBe("RM")
        expect((getInitials("giovanni paolo seconso"))).toBe("GPS")

    });

/*🏆 Snack 5*/
test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    const result = isPalindome("osso")
    expect(result).toBeTruthy()

    const resultTwo = isPalindome("ciao")
    expect(resultTwo).toBeFalsy()
});


})


describe("Operazioni su array" , () => {
    
    
/* 🏆 Snack 3*/
test("La funzione average calcola la media aritmetica di un array di numeri." , () => {
    
    expect(average([1,4,2,6 ,2])).toBe(3)
    expect(average([6,4, 8 , 2])).toBe(5)
});


  /* 🏆 Snack 7 */
test("La funzione findPostById restituisce il post corretto dato l'array di post e l'id" , () => {
    const result = findPostById(posts , 2)
    expect(findPostById(posts , 2)).toEqual({ id: 2, title: "Secondo post", slug: "secondo-post" })
    expect(findPostById(posts , 4)).toBe(null)


    expect(() => findPostById(posts , "ciao")).toThrow("'ciao' non è un id")
    expect(() => findPostById([34,62,12] , 2)).toThrow("L/' array non è nel formato corretto")

});


})




describe("Generazione di slug" , () => {

/*🏆 Snack 2 */
test("La funzione createSlug restituisce una stringa in lowercase." , () => {
   
    expect(createSlug("Ciao")).toBe("ciao")
    expect(createSlug("HOLA")).toBe("hola")

    
});

/* 🏆 Snack 4*/
test("La funzione createSlug sostituisce gli spazi con -.", () => {
    const result = createSlug("Ciao come stai?")
    expect(result).toBe("ciao-come-stai?")
});


/*🏆 Snack 6 */
test( "La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
   
    expect(() => createSlug("")).toThrow(Error)
})

test("Se viene passato un array di post come secondo argomento , la funzione createSlug incrementa di 1 se lo slug esiste già", () => {
    
    expect(createSlug("Primo post", posts)).toBe("primo-post-1")
     addPost(posts, { id: 4, title: "Altro post", slug: createSlug("primo post", posts) })
     expect(posts[posts.length -1].slug).toBe("primo-post-1")
})


})





/*Snack 8 */
test("Dopo aver aggiunto un post con la funzione 'addPost', l/' array posts deve contenere un elemento in più", () => {
    addPost(posts , {id : 4 , title : "Quarto post" , slug :"quarto-post"});
    expect(posts).toHaveLength(4);
})

test("Dopo aver rimosso un post con la funzione 'removePost', l/' array posts deve contenere un elemento in meno", () => {
  removePost(posts , 2) 
  expect(posts).toHaveLength(2)
})

/*Snack 9 */
test("Se si tenta di aggiungere un post con un id o uno slugs già esistente la funzione addPost lancia un errore", () => {
    expect(() => addPost(posts, { id: 1, title: "Altro post", slug: "altro-post" })).toThrow("l' id che hai passato esiste gia")

    expect(() => addPost(posts, { id: 4, title: "Altro post", slug: "primo-post" })).toThrow("lo slugs che hai passato esiste gia")
})