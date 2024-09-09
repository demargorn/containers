import { Settings } from '../Settings';
const settings = new Settings();

test('test setSetting method with %s name and $s value', () => {
   settings.setSetting('theme', 'light');
   expect(settings.userSettings.has('theme')).toBe(true);
});

test('test setSetting method with %s invalid name and $s value', () => {
   expect(() => settings.setSetting('background', 'dark')).toThrow();
});

test('test getSetting method with %s name', () => {
   expect(settings.getSetting('theme')).toBe('light');
});

test('test getSetting method with %s default name', () => {
   expect(settings.getSetting('music')).toBe('trance');
});
