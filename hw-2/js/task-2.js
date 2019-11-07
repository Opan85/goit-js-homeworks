// TAsk - 2 ===============================================

// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки.

// Вызовы функции для проверки работоспособности твоей реализации.

const calculateEngravingPrice = function(message, pricePerWord) {
  const words = message.split(" ");
  let total = 0;

  for (const word of words) {
    total += pricePerWord;
  }
  return total;
};

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montesmagnis parturient montes mus',20),);

