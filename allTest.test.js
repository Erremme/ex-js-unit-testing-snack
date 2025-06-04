const {getInitials} = require("./allFunction.js")



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
})