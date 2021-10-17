const add = (a, b) => a + b


describe('AddTwoNumbers()', ()=>{
    test('adds 2 numbers', ()=>{
        const results =  add(1, 9)
        expect(results).toEqual(10)
    })
})