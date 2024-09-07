class Character {
   static types = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];

   constructor(name, type) {
      this.name = name;
      this.type = type;
      this.level = 1;
      this.health = 100;
      this.attack = null;
      this.defence = null;

      if (typeof name !== 'string' || this.name.length < 2 || this.name.length > 10) {
         throw new Error(`Your name must be at least 2 and no more than 10 characters`);
      }

      if (!Character.types.includes(type) || typeof type !== 'string') {
         throw new Error('invalid character type');
      }
   }

   levelUp() {
      if (this.health === 0) {
         throw new Error(`You cannot increase the level of the deceased hero`);
      }

      this.level += 1;
      this.health = 100;
      this.attack *= 1.2;
      this.defence *= 1.2;
   }

   damage(points) {
      if (this.health <= 0) {
         throw new Error(`You are dead`);
      }

      this.health -= Math.floor(points * (1 - this.defence / 100));
   }
}

export { Character };
