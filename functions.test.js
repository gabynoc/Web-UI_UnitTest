const functions = require("./functions.js");

describe('multiply function', () => {
  it('should be return multiple when I sent two numbers', () => {
    //ARRANGE
    const a = 1;
    const b = 2;
    //ACT
    const result = functions.multiply(a, b);
    //ASSERT
    expect(result).toEqual(2);
  })
  it('should be return 0 when I sent one number and null', () => {
    //ARRANGE
    const a = 2;
    const b = null;
    //ACT
    const result = functions.multiply(a, b);
    //ASSERT
    expect(result).toEqual(0);
  }); 
  it('should be return NaN when I sent two strings', () => {
    //ARRANGE
    const a = "la";
    const b = "la";
    //ACT
    const result = functions.multiply(a, b);
    //ASSERT
    expect(result).toBeNaN();
  });
});

describe('isNull function', () => {
  it('should be return null', () => {
    //ARRANGE
    
    //ACT
    const result = functions.isNull();
    //ASSERT
    expect(result).toBeNull();
  })
  it('should be return null when I sent a string', () => {
    //ARRANGE
    const a = "hello";
    //ACT
    const result = functions.isNull(a);
    //ASSERT
    expect(result).toBeNull();
  });
});

describe('checkTruthy function', () => {
  it('should be return true when I sent true', () => {
    //ARRANGE
    const a = true;
    //ACT
    const result = functions.checkTruthy(a);
    //ASSERT
    expect(result).toBeTruthy();
  })
    it('should be return false when I sent false', () => {
      //ARRANGE
      const a = false;
      //ACT
      const result = functions.checkTruthy(a);
      //ASSERT
      expect(result).toBeFalsy();
  });
});

describe('addLastName function', () => {
  it('should be return Pepito Perez when I sent Perez', () => {
    //ARRANGE
    const a = "Perez";
    //ACT
    const result = functions.addLastName(a);
    //ASSERT
    expect(result).toEqual("Pepito Perez");
 });
  it('should be return Pepito when I sent Null', () => {
    //ARRANGE
     const a = null;
     //ACT
      const result = functions.addLastName(a);
     //ASSERT
     expect(result).toEqual("Pepito");
  });
});