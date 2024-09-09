class Settings {
   constructor() {
      this.defaults = new Map([
         ['theme', 'dark'],
         ['music', 'trance'],
         ['difficulty', 'easy'],
      ]);

      this.userSettings = new Map();
   }

   setSetting(name, value) {
      if (!this.defaults.has(name)) {
         throw new Error(`Unknown setting name: ${name}`);
      }

      this.userSettings.set(name, value);
   }

   getSetting(name) {
      return this.userSettings.has(name) ? this.userSettings.get(name) : this.defaults.get(name);
   }
}

export { Settings };
