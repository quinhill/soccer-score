describe('todosReducer', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = []

    // Execution
    const result = todosReducer(undefined, {})

    // Expectation
    expect(result).toEqual(expected)
  })
})