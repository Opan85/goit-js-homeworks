'use strict';

// Напиши функцию formatString(string) принимающую строку в параметр string.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

const formatString = function(string) {
	return string.length > 40 ? string.slice(0, 40) + '...' : string;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));