(function () {
  const slowa = ['javascript', 'java', 'php', 'elm'];
  const index = Math.floor(Math.random() * slowa.length);
  const slowo = slowa[index];
  let ukryteSlowo = Array.from(slowo, () => '_');
  let liczbaBledow = 5;
  let trafiony = false;

  while (ukryteSlowo.join('') !== slowo && liczbaBledow >= 1) {
    alert('Slowo: ' + ukryteSlowo.join(''));
    let trafiony = false;
    const wpisanaLitera = prompt('Wpisz litere');

    for (i = 0; i < slowo.length; i++) {
      if (wpisanaLitera === slowo.charAt(i)) {
        ukryteSlowo[i] = wpisanaLitera;
        trafiony = true;
        if (ukryteSlowo == slowo) { //brak pomyslu na dzialajacy warunek
          alert('Brawo! odgadłeś hasło: "' + ukryteSlowo + '"');
        }
      }
    }
    if (trafiony == false) {
      liczbaBledow -= 1;
      if (liczbaBledow > 0) {
        alert('Pudlo! Pozostalo ' + liczbaBledow + ' strzalow.')
      } else {
        alert('Game Over');
      }
    }
  }
}());