const {getInitials , createSlug} = require("./allFunction.js")



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

const average = (arr) => {
    const aver = arr.reduce( (acc , num) => acc+ num , 0) 
    return aver / arr.length
    
}

test("La funzione average calcola la media aritmetica di un array di numeri." , () => {
    const result = average([1,4,2,6 ,2])
    expect(result).toBe(3)

    const resultTwo = average([6,4, 8 , 2])
    expect(resultTwo).toBe(5)
})