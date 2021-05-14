import {capitalize, nameFunction} from './formatters'

describe('@Utils/formatters', () => {
    describe('capitalize', () => {
        it('Given a valid string input not capitalized it must return the same string capitalized', () => {
            // Arrange
            const input = 'notCapitalized'
            // Act
            const output = capitalize(input)
            //Assert
            expect(output).toBe('NotCapitalized')
        })
        it('Given a valid string input capitalized it must return the same string', () => {
            // Arrange
            const input = 'Capitalized'
            // Act
            const output = capitalize(input)
            //Assert
            expect(output).toBe(input)
        })
        it('Given an invalid input it must return an empty string', () => {
            // Arrange
            const input = undefined
            // Act
            const output = capitalize(input)
            //Assert
            expect(output).toBe('')
        })
    })
    describe('nameFunction', () => {
        it('Given valid args it must return a function named as it was defined', () => {
            // Arrange
            const name = 'ValidFunctionName'
            const body = function() { return null }
            // Act
            const namedFunct = nameFunction(name, body)
            // Assert
            expect(namedFunct.name).toBe(name)
        })
        it('Given an invalid name it must throw an error', () => {
            // Arrange
            const name = undefined
            const body = function() { return null }
            // Act
            const namedFunct = () => nameFunction(name, body)
            // Assert
            expect(namedFunct).toThrow("Name must be a string")
        })
        it('Given an invalid body it must throw an error', () => {
            // Arrange
            const name = 'ValidFunctionName'
            const body = undefined
            // Act
            const namedFunct = () => nameFunction(name, body)
            // Assert
            expect(namedFunct).toThrow("Body must be a function")
        })
    })
})