const {getInitials , createSlug, average , isPalindome , findPostById} = require("./allFunction.js")



/*🏆 Snack 1
Creare un test che verifichi la seguente descrizione:
👉 "La funzione getInitials restituisce le iniziali di un nome completo." */

    test('La funzione getInitials restituisce le iniziali di un nome completo. ', () => { 
        const result = getInitials("Raffele Molinaro")
        expect(result).toBe("RM")
    })

    /*🏆 Snack 2
Creare un test che verifichi la seguente descrizione:

👉 "La funzione createSlug restituisce una stringa in lowercase." */

test("La funzione createSlug restituisce una stringa in lowercase." , () => {
   const result = createSlug("Ciao")
    expect(result).toBe("ciao")

    const resultTwo = createSlug("CIAO")
    expect(resultTwo).toBe("ciao")
    
})

/* 🏆 Snack 3
Creare un test che verifichi la seguente descrizione:

👉 "La funzione average calcola la media aritmetica di un array di numeri."*/

test("La funzione average calcola la media aritmetica di un array di numeri." , () => {
    const result = average([1,4,2,6 ,2])
    expect(result).toBe(3)

    const resultTwo = average([6,4, 8 , 2])
    expect(resultTwo).toBe(5)
})


/* 🏆 Snack 4
Creare un test che verifichi la seguente descrizione:

👉 "La funzione createSlug sostituisce gli spazi con -."


📌 Esempi:

createSlug("Questo è un test") → "questo-e-un-test"*/

test("La funzione createSlug sostituisce gli spazi con -.", () => {
    const result = createSlug("Ciao come stai?")
    expect(result).toBe("ciao-come-stai?")
})
 

/*🏆 Snack 5
Creare un test che verifichi la seguente descrizione:

👉 "La funzione isPalindrome verifica se una stringa è un palindromo."



📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.

 */

test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    const result = isPalindome("osso")
    expect(result).toBeTruthy()

    const resultTwo = isPalindome("ciao")
    expect(resultTwo).toBeFalsy()
})

/*🏆 Snack 6
Creare un test che verifichi la seguente descrizione:

👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido." */

test( "La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
   
    expect(() => createSlug("")).toThrow(Error)
})

const posts = [
    { id: 1, title: "Primo post", slug: "primo-post" },
    { id: 2, title: "Secondo post", slug: "secondo-post" },
    { id: 3, title: "Terzo post", slug: "terzo-post" }
];

/* 
🏆 Snack 7
Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.

Creare un test che verifichi le seguenti descrizioni:

👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"


Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico). */

test("La funzione findPostById restituisce il post corretto dato l'array di post e l'id" , () => {
    const result = findPostById(posts , 2)
    expect(result).toEqual({ id: 2, title: "Secondo post", slug: "secondo-post" })

    const resultTwo = findPostById(posts , 3)
    expect(resultTwo).toEqual({ id: 3, title: "Terzo post", slug: "terzo-post" })
})