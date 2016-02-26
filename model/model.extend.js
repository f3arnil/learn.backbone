'use strict'

var Person = Backbone.Model.extend({
    idAttribute: "_id",
    defaults: {
        firstName: 'Mr. unknown',
        lastName: ' Ivanovich'
    },
    initialize: function () {
        console.log('Init Person', this.get('firstName'))
    },
    validate: function (attrs, options) {
        if (attrs.age < 0 || attrs.age > 130) {
            alert('Age is < 0 ! Not valid!');
            return 'Wrong Age';
        }
    },
    sayFullName: function () {
        console.log(this.get('firstName') + ' ' + this.get('lastName'));
    }
});

var sasha = new Person({
    _id: 1,
    firstName: 'Aleksandr',
    lastName: 'Ivanovich'
});

sasha.on("change:firstName", function (model, name) {
    console.log("Изменено имя с " + sasha.previous("firstName") + " на " + name);
});

sasha.sayFullName();

sasha.set('firstName', "<script>alert('xss')</script>");
sasha.get('firstName');
sasha.escape('firstName');

console.log('Has Age >>', sasha.has('age'));
sasha.set('age', '-1', {
    validate: true
});
console.log(sasha.get('age'));

console.log('Has Age >>', sasha.has('age'));
console.log('Age is >>', sasha.get('age'));

sasha.unset('Age');
console.log('Has Age >>', sasha.has('age'));
console.log('Sasha`s id >>', sasha.id);
console.log('Sasha`s cid >>', sasha.cid);

var sasha2 = new Person({
    firstName: 'Not Aleksandr',
    lastName: 'Ivanovich'
});
console.log('Sasha`s2 cid >>', sasha2.cid);

console.log('Sasha`s attributes >>', sasha.attributes);
console.log('Sasha`s defaults >>', sasha.defaults);
console.log('Sasha toJson() >>', sasha.toJSON());

console.log('Sasha`s validationError >>', sasha.validationError);
console.log('Is sasha valid >>', sasha.isValid(), sasha.toJSON());

console.log('Sasha`s url >>', sasha.url); // need to define...this or urlRoot

console.log('Sasha`s isNew() >>', sasha.isNew());

console.log('Has sasha changed >>', sasha.hasChanged('firstName'));
console.log('Sasha`s changedAttributes >>', sasha.changedAttributes());
