/*🏆 Snack 1
Creare un test che verifichi la seguente descrizione:
👉 "La funzione getInitials restituisce le iniziali di un nome completo." */

const getInitials = (fullName) => {
    fullName.split(" ")
    return fullName.map((word) => word.charAt(0) ).join("")
}

    test('La funzione getInitials restituisce le iniziali di un nome completo. ', () => { 
        
        expect( () => getInitials("Raffele Molinaro").toBe("RM") )
    })