class Team {
   constructor() {
      this.members = new Set();
   }

   add(hero) {
      if (this.members.has(hero)) {
         throw new Error('This hero is already in the Team');
      }
      this.members.add(hero);
   }

   addAll(...heroes) {
      if (this.members.has(...heroes)) {
         throw new Error('These heroes are already in the Team');
      }
      this.members.add(...heroes);
   }

   toArray() {
      this.members = Array.from(this.members);
   }
}

export { Team };
