// task 3 ====================================

// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// Вызовы функции для проверки работоспособности твоей реализации.

const findLongestWord = function (string) {
    const words = string.split(' ');
    let longWord = words[0] ;

    for (const word of words ) {
        if ( word.length > longWord.length) {
            longWord = word;
        }
    }
    return longWord;
};

console.log(findLongestWord('Proin sociis natoque et magnis parturient montesmagnis parturient montes mus'),);