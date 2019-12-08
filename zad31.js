    const parzyste = function (min, max) {
        let sum = 0;
        while (min <= max) {
            if (min % 2 == 0) {
                console.log(min)
                sum += min;
            }
            min++
        }
        return sum;
    }