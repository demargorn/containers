import { Team } from '../set';
import { Character } from '../Character';

const team = new Team();
const legolas = new Character('Legolas', 'Bowman');
const aragorn = new Character('Aragorn', 'Swordsman');
const sauron = new Character('Sauron', 'Magician');

test('test add method with %o values', () => {
   team.add(legolas);
   expect(team.members.has(legolas)).toBe(true);
});

test('test add method with %o included values', () => {
   expect(() => team.add(legolas)).toThrow();
});

test('test addAll method with %o values', () => {
   team.addAll(aragorn, sauron);
   expect(team.members.has(aragorn, sauron)).toBe(true);
});

test('test addAll method with %o included values', () => {
   expect(() => team.addAll(aragorn, sauron)).toThrow();
});

test('test toArray method', () => {
   team.toArray();
   expect(Array.isArray(team.members)).toBe(true);
});
