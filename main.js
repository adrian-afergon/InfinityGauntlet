const infinityGauntlet = {
    powerStone: {
        info: 'Controls all of the power in the universe. It can be used to augment or inhibit any force.',
        equipped: false,
        use () {
            if(this.equipped) {
                return 'Using super strength to crush the moon and throw it over to the Avengers!!';
            } else {
                return 'No Power Stone!!';
            }

        }
    },
    spaceStone: {
        equipped: false,
        info: 'Limitless manipulation of space, allowing for teleportation, dimensional manipulation, creation of wormholes, etc.',
        use () {
            if(this.equipped) {
                return 'Create a wormhole and transport from planet Titan to Wakanda in a minute!';
            } else {
                return 'No Power Stone!!';
            }

        }
    }
};