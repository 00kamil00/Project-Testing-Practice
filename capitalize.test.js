import { capitalize } from "./capitalize"

test('returns string with first letter capitalize', () => {
    expect(capitalize('hello')).toBe('Hello')
})

test('handles a word that starts with a capital letter', () => {
    expect(capitalize('Hello')).toBe('Hello')
})

test('handles an empty string', () => {
    expect(capitalize('')).toBe('')
})