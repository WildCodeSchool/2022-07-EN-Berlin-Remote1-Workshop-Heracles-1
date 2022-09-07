/* Fighter class definition */

import assert from 'assert';

export const MAX_LIFE = 150;

export class Fighter {
    /*
        name: name of the fighter.
        strength: will be used to calculate the damage points during an attack.
        dexterity: will be used to calculate the defense points that will limit the damage received.
        life: initialized to MAX_LIFE, so they all start with 100 life points.
     */

    constructor(strength, dexterity, name) {
        assert(arguments.length === 3);
        assert(typeof name === 'string')

        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = null;
    }
}