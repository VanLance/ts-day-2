console.log("TS Day 2");

const userFoo = { id : 1 };

// userFoo.username = 'fooUser';

const userBar = { id: 2, username: 'barUser'};
userBar.username;

const userFooBar: { id: number, username: string } = { id : 3, username: 'fooBar' };

type User = {
    id: number,
    username: string,
    email: string,
}

const userOne: User = {
    id: 4,
    username: "userOne",
    email:"user@one3.com"
};

userOne.email = 'user@one.com';

type UserReadOnly = {
    readonly id: number,
    username: string,
    email: string,
}

const userReadOnly: UserReadOnly = {
    id: 5,
    username: "read-only",
    email : 'read@only.com'
};

userReadOnly.username = 'readOnly';

// userReadOnly.id = 88;

type UserOptional = {
    readonly id: number,
    username: string,
    firstName?: string,
};

const userWithFirst: UserOptional = {
    id: 8,
    username: 'dsmith',
    firstName: 'dylan',
}

const userWoFirst: UserOptional = {
    id:7,
    username: "bcarlson",
};

type UserWithMethod = {
    readonly id: number,
    username:string,
    displayInfo: ( firstName: string ) => string
}

const userWithMethod: UserWithMethod = { 
    id: 10,
    username: "fooBar",
    displayInfo: function(firstName: string): string { 
        return `Username: ${this.username} Id: ${this.id} 
        FirstName: ${firstName}`
    }
}

console.log(userWithMethod.displayInfo('brandt'));

/* Create a type `IceShoeType` and 1 member of this type `iceShoe`

all IceProducts must meet the following requirements

- has readonly id field
- has size (i.e. 7, 8, 11)
- has a name
- has an Optional value to describe if is the product has a wide version
- has a description */

const userBar2: User = {
    id: 11
} as User;

userBar2.username = 'fizz'

console.log(userBar2.email);


type UserInfo = {
    firstName: string
    lastName: string,
}

type UserLogin = {
    username: string,
    password: string,
}

type CompleteUser = UserInfo & UserLogin;

const completeUser: CompleteUser = {
    firstName: "dylan",
    lastName: 'smith',
    username: 'dsmith',
    password: '123',
}

type Direction = 'north' | 'south' | 'east' | 'west'

const direction: Direction = 'north'


type GridUnit = 1| 2| 3 | 4 | 5 |6;

let gridUnit: GridUnit = 2;

gridUnit = 3;


//  classes

type Archetype = 'barbarian' | 'archer' | 'thief' | 'ranger'
type Race = 'hobbit' | 'human' | 'elf' | 'dwarf'

class RpgCharacter {
    static totalCharacters: number = 0;

    private _name: string;

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value.toLowerCase();
    }
    private _archetype: Archetype
    
    public get archetype(): string {
        return this._archetype;
    }

    private readonly race: Race
    private level?: number

    constructor( archetype: Archetype, race: Race, name: string, level?: number ){
        this._archetype = archetype;
        this.race = race;
        this._name = name;
        this.level = level
        RpgCharacter.totalCharacters++
    }

    displayInfo = function(): string {
        return `Name: ${this._name}\nArchetype: ${this._archetype}\nRace:${this.race}`
    }
}

const bilbo = new RpgCharacter('thief', 'hobbit', 'bilbo')

console.log(bilbo.displayInfo());

bilbo.name = 'FRODO';
console.log(bilbo.displayInfo());


class RpgParty{
    [ rpgCharacter: string]: RpgCharacter
}

const rpgParty = new RpgParty();

rpgParty['bibbo'] = bilbo
rpgParty['gandalf'] = new RpgCharacter('ranger', 'human', 'gandalf', 20) 

console.table(rpgParty);

console.log(rpgParty.gandalf);

console.log(RpgCharacter.totalCharacters);

const legolas = new RpgCharacter('ranger', 'elf', 'legolas', 20)

console.log(RpgCharacter.totalCharacters);
