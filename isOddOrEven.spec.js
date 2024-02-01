import { expect } from "chai";
import { isOddOrEven } from "./isOddOrEven.js";

describe('isOddOrEven',()=>{
    it('Should return undefined when non string is input',()=>{
        //Arrange
        const inputValueNumber = 123;
        const inputValueUndefined = undefined;
        const inputValueNull = null;
        const inputValueFloat = 12.3;
        //Act
        const result1 = isOddOrEven(inputValueNumber);
        const result2 = isOddOrEven(inputValueUndefined);
        const result3 = isOddOrEven(inputValueNull);
        const result4 = isOddOrEven(inputValueFloat);
        //Assert
        expect(result1).to.be.undefined;
        expect(result2).to.be.undefined;
        expect(result3).to.be.undefined;
        expect(result4).to.be.undefined;
    })
    it('Should return Even when even string is input',()=>{
        //Arrange
        const inputEvenStringLenght ="1234";
        //Act
        const resultEvenStringLenght = isOddOrEven(inputEvenStringLenght);        
        //Assert
        expect(resultEvenStringLenght).to.be.equal('even');

    })
    it('Should return Odd when evenodd string is input',()=>{
        //Arrange
        const inputOddStringLenght ="123";
        //Act
        const resultOddStringLenght = isOddOrEven(inputOddStringLenght);        
        //Assertdd
        expect(resultOddStringLenght).to.be.equal('odd');

    })
})