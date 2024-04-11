console.log("TS Day 2");
var userFoo = { id: 1 };
// userFoo.username = 'fooUser';
var userBar = { id: 2, username: 'barUser' };
userBar.username;
var userFooBar = { id: 3, username: 'fooBar' };
var userOne = {
    id: 4,
    username: "userOne",
    email: "user@one3.com"
};
userOne.email = 'user@one.com';
var userReadOnly = {
    id: 5,
    username: "read-only",
    email: 'read@only.com'
};
userReadOnly.username = 'readOnly';
var userWithFirst = {
    id: 8,
    username: 'dsmith',
    firstName: 'dylan',
};
var userWoFirst = {
    id: 7,
    username: "bcarlson",
};
var userWithMethod = {
    id: 10,
    username: "fooBar",
    displayInfo: function (firstName) {
        return "Username: ".concat(this.username, " Id: ").concat(this.id, " \n        FirstName: ").concat(firstName);
    }
};
console.log(userWithMethod.displayInfo('brandt'));
/* Create a type `IceShoeType` and 1 member of this type `iceShoe`

all IceProducts must meet the following requirements

- has readonly id field
- has size (i.e. 7, 8, 11)
- has a name
- has an Optional value to describe if is the product has a wide version
- has a description */
var userBar2 = {
    id: 11
};
userBar2.username = 'fizz';
console.log(userBar2.email);
var completeUser = {
    firstName: "dylan",
    lastName: 'smith',
    username: 'dsmith',
    password: '123',
};
var direction = 'north';
var gridUnit = 2;
gridUnit = 3;
var RpgCharacter = /** @class */ (function () {
    function RpgCharacter(archetype, race, name, level) {
        this.displayInfo = function () {
            return "Name: ".concat(this._name, "\nArchetype: ").concat(this._archetype, "\nRace:").concat(this.race);
        };
        this._archetype = archetype;
        this.race = race;
        this._name = name;
        this.level = level;
        RpgCharacter.totalCharacters++;
    }
    Object.defineProperty(RpgCharacter.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value.toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RpgCharacter.prototype, "archetype", {
        get: function () {
            return this._archetype;
        },
        enumerable: false,
        configurable: true
    });
    RpgCharacter.totalCharacters = 0;
    return RpgCharacter;
}());
var bilbo = new RpgCharacter('thief', 'hobbit', 'bilbo');
console.log(bilbo.displayInfo());
bilbo.name = 'FRODO';
console.log(bilbo.displayInfo());
var RpgParty = /** @class */ (function () {
    function RpgParty() {
    }
    return RpgParty;
}());
var rpgParty = new RpgParty();
rpgParty['bibbo'] = bilbo;
rpgParty['gandalf'] = new RpgCharacter('ranger', 'human', 'gandalf', 20);
console.table(rpgParty);
console.log(rpgParty.gandalf);
console.log(RpgCharacter.totalCharacters);
var legolas = new RpgCharacter('ranger', 'elf', 'legolas', 20);
console.log(RpgCharacter.totalCharacters);
