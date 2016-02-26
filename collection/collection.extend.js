'use strict'

var Persons = Backbone.Collection.extend({
    model: Person,
    url: '/persones'
})

var collection = new Persons([
    {
        firstName: "Тим",
        age: 5
    },
    {
        firstName: "Ида",
        age: 26
    },
    {
        firstName: "Роб",
        age: 55
    }
]);

collection.on("add", function (person) {
    console.log("«Здравствуйте! Меня зовут " + person.get("firstName") + " и я алкоголик»!");
});

collection.on("remove", function (person) {
    console.log("«Участник " + person.get("firstName") + " исключён из группы анонимных алкоголиков»!");
});

collection.add([
    {
        firstName: "Летучий Голландец"
    },
    {
        firstName: "Черная жемчужина"
    }
]);

console.log('Collection >>', collection.toJSON());

collection.remove(collection.at(1));
console.log('Collection >>', collection.toJSON());

console.log('List of fnames with .pluck() >>', collection.pluck('firstName'));

console.log('Collection .where() age 28 >>', collection.where({
    age: 28
}));

console.log('Collection .findWhere() age 28 >>', collection.findWhere({
    age: 28
}));

console.log('Collection url >>', collection.url);

//var ivan = collection.create({
//    firstName: 'Ivan',
//    lastName: 'SuperHero'
//});
//console.log('Ivan SuperHero with .create()', ivan);
