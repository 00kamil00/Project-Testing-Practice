import { caesarCipher } from "./caesarCipher";



test('shifts letters by a given factor', () => {
    expect(caesarCipher('abc', 3)).toBe('def')
})

test('shifts again from z to a etc.', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
})

test('preserves lettercase', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
})