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
    realityStone: {
        equipped: false,
        info: 'Locally or universally alters the natural laws of the universe to the wielders will.',
        use() {
            if (this.equipped) {
                return 'Change the guns and knives of oponent into harmless bubbles. Transform the big guy into block of woods.';
            } else {
                return 'No reality stone!'
            }
        }
    },
    mindStone: {
        equipped: false,
        info: 'Taps the user into the universal consciousness, allowing for unlimited manipulation of psionic powers including telepathy and telekinesis.',
        use() {
            if (this.equipped) {
                return 'Know that my oponent Tony Stark is the most briliant person in the universe.';
            } else {
                return 'No mind stone!'
            }
        }
    },
    soulStone: {
        equipped: false,
        info: 'Limitless manipulation of souls both alive and dead also has shown to be able to evolve or devolve a beings physical self as well as their mental capacities.',
        use() {
            if (this.equipped) {
                return 'Bring a person back from the dead, or extract information from them.';
            } else {
                return 'No soul stone!'
            }
        }
    },
    timeStone: {
        equipped: false,
        info: 'Total control over all aspects of time including time travel, stopping time, slowing down or speed up flow of time and to accelerate or slow down aging.',
        use() {
            if (this.equipped) {
                return 'Turn back time so I can grab something before it gets destroyed!';
            } else {
                return 'No time stone!'
            }
        }
    },
};