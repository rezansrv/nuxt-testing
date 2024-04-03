describe('import vue components', () => {
    test('normal imports as expected' , async() => {
        const cmp = await import('../components/CounterApp.vue');
        expect(cmp).toBeDefined()
    })
})