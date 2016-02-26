'use strict'

var object = {};
var model = {};
var book = {};

_.extend(object, Backbone.Events);
_.extend(model, Backbone.Events);
_.extend(book, Backbone.Events);

object.on("alert", function (msg) {
    alert("object.on Сработало " + msg);
});

book.on("change:title change:author", function (newValue) {
    console.log('book.on ' + newValue);
});

/*
book.on({
  "change:title": titleView.update,
  "change:author": authorPane.update,
  "destroy": bookView.remove
});
*/

object.once('change', function (newVal) {
    console.log('Object changed!', newVal);
})

object.trigger("alert", "событие");
book.trigger("change:title", "change:title");
book.trigger("change:author", "change:author");
object.trigger("change", 'Oops...');

// Events list:
/*
"add" (model, collection, options) — когда модель добавляется в коллекцию.
"remove" (model, collection, options) — когда модель удаляется из коллекции.
"reset" (collection, options) — когда всё содержимое коллекции заменяется.
"sort" (collection, options) — когда коллекция была отсортирована.
"change" (model, options) — когда атрибут модели меняется.
"change:[attribute]" (model, value, options) — когда меняется конкретный атрибут модели.
"destroy" (model, collection, options) — когда модель уничтожена.
"request" (model, xhr, options) — когда модель (или коллекция) отправляет запрос на сервер.
"sync" (model, resp, options) — когда модель была успешно синхронизирована с сервером.
"error" (model, xhr, options) — когда вызов save провалился на сервере.
"invalid" (model, error, options) — модель не прошла валидацию на клиенте.
"route:[name]" (params) — когда один конкретный роут находит соответствие.
"route" (router, route, params) — когда любой из роутов находит соответствие.
"all" — это специальное событие срабатывает каждый раз, когда срабатывает любое событие, передавая имя события первым аргументом.

*/
