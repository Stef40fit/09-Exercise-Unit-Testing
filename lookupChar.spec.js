import { lookupChar } from "./lookupChar.js"; 
import { expect } from "chai";
describe("lookupChar",()=>{
        it('Should return undefined If the first parameter is NOT a string or the second is NOT a number',()=>{
        //Arrange
        const inputFirst =123;
        const inputFirst1 ='123';
        const inputSecond1 = "2";
        const inputSecond12 = 2;
        const inputFloat = 3.4;

        //Act
        const result21 = lookupChar(inputFirst,inputSecond12);
        const result212 = lookupChar(inputFirst1,inputSecond1);
        
        const result214 = lookupChar(inputFirst1,inputFloat);

        const result211 = lookupChar(inputFirst,inputFloat);
        //Assert
        expect(result21).to.be.undefined;
        expect(result212).to.be.undefined;
        
        expect(result214).to.be.undefined;
        expect(result211).to.be.undefined;
        })
        it('Should return "Incorrect index" If both parameters are of the correct type, but the value of the index is incorrect (bigger than or equal to the string length or a negative number)',()=>{
            //Arrange
            const inputFirst ="123";
            const inputSecond1 = 4;
            const inputSecond2 = 3;
            const inputSecond3 = -4;
            

            
            //Act
            const resultBiger = lookupChar(inputFirst,inputSecond1);
            const resultEquel = lookupChar(inputFirst,inputSecond2);
            const resultNegative = lookupChar(inputFirst,inputSecond3);
            
            //Assert
            expect(resultBiger).to.be.equal("Incorrect index");
            expect(resultEquel).to.be.equal("Incorrect index");
            expect(resultNegative).to.be.equal("Incorrect index");
           
            })
            it('Should return character at the specified index in the string if both parameters have correct types and values.',()=>{
                //Arrange
                const inputFirstCorect ="123";
                const inputSecondCorect = 2;
                
                //Act
                const resultCorect = lookupChar(inputFirstCorect,inputSecondCorect);
                
                //Assert
                expect(resultCorect).to.be.equal('3');
                
     })
})
       

   
