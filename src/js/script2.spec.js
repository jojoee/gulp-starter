describe('A suite', function() {
  it('contains spec with an expectation', function() {
    expect(true).toBe.true;
  });

  it('should be equal', function() {
    expect(add2(2, 4)).toEqual(8);
    expect(add3(2, 4)).toEqual(9);
  });
});
