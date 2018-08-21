const infinityGauntlet = {
    powerStone: {
        info: 'Controls all of the power in the universe. It can be used to augment or inhibit any force.',
        equipped: false,
        use() {
            if (this.equipped) {
                return 'Using super strength to crush the moon and throw it over to the Avengers!!';
            } else {
                return 'No Power Stone!!';
            }

        }
    },

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
