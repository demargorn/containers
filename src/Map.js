class ErrorRepository {
   constructor() {
      this.repository = new Map();
   }

   addError(code, text) {
      if (typeof code !== 'number' || typeof text !== 'string') {
         throw new Error('Code must be type of number and text must be type of string');
      }

      this.repository.set(code, text);
   }

   translate(code) {
      if (!this.repository.has(code)) {
         throw new Error('Unknown error');
      }

      this.repository.get(code);
   }
}

export { ErrorRepository };
