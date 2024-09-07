import { ErrorRepository } from '../map';

const errorRepository = new ErrorRepository();

test('test addError method with %n code and %s text', () => {
   errorRepository.addError(404, 'Not found');
   expect(errorRepository.repository.get(404)).toBe('Not found');
});

test('test addError method with %s invalid code and %s text', () => {
   expect(() => errorRepository.addError('202', 'some string')).toThrow();
});

test('test addError method with %n code and %n invalid text', () => {
   expect(() => errorRepository.addError(400, 640256737652)).toThrow();
});

test('test translate method with %n code', () => {
   errorRepository.translate(404);
   expect('Not found').toBe('Not found');
});

test('test translate method with %n unknown code', () => {
   expect(() => errorRepository.translate(100)).toThrow();
});
