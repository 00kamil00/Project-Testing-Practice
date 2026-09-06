import { reverseString } from "./reverseString"

test('returns reversed string', () => {
    expect(reverseString('hello')).toBe('olleh')
})

test('handles an empty string', () => {
    expect(reverseString('')).toBe('')
})

test('handles single character', () => {
    expect(reverseString('a')).toBe('a')
})

test('handles palindrome', () => {
    expect(reverseString('kayak')).toBe('kayak')
})

test('handles white spaces', () => {
    expect(reverseString(' a')).toBe('a ')
})