'use strict'

// Удаляет только обработчик `onChange`.
//object.off("change", onChange);

// Удаляет все обработчики события "change".
//object.off("change");
object.off("alert");
// Удаляет все обработчики `onChange` для всех событий.
//object.off(null, onChange);

// Удаляет все обработчики в контексте `context` для всех событий.
//object.off(null, null, context);

// Удаляет все обработчики для объекта `object`.
//object.off();

console.log('Try to emit alert..');
object.trigger("alert", "событие");
object.trigger("change", 'Oops... again'); // Ничего не произойдёт
console.log('Nothing should happens');