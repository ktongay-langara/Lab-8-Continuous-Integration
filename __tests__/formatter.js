const Formatter = require('../formatter');

describe('Formatter', () => {
  let format, a, b;

  beforeEach(() => {
    // Arrange
    format = new Formatter();
    text = "TEXT"
  });

  it('should convert text to lower case', () => {
    // Act
    let result = format.lower(text);
    // Assert
    expect(result).toBe("text");
  });


});
