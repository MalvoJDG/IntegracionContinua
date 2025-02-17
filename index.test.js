const holamundo = require('./index')

test('Debe retornar "Hola Mundo"', () =>{
    expect(holamundo()).toBe("Hola Mundo");
})