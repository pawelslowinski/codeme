const lancuch = function (parametr) {
    let tablica;
    if (parametr == null) {
        return ('koparka');
    } else {
        tablica = Array.from(parametr)
        for (i = 1; i <= tablica.length; i += 2) {
            console.log(tablica[i])
        }
    }
}