"use strict"
class Calculator {
    constructor() {}

    #divide(varOne, varTwo) {
        return varOne / varTwo
    }

    #multiply(varOne, varTwo){
        return varOne * varTwo
    }

    #add(varOne, varTwo){
        return varOne + varTwo
    }

    #subtract(varOne, varTwo){
        return varOne - varTwo
    }

    calculate(varOne, varTwo, Operator){
        if (Operator === "+") {
            console.log('jjj')
            return this.#add(varOne, varTwo)
        }
        else if(Operator === "/"){
            return this.#divide(varOne,varTwo)
        }
        else if(Operator === "*"){
            return this.#multiply(varOne*varTwo)
        }
        else if(Operator === "-"){
            return this.#subtract(varOne*varTwo)
        }
        else{
            return "invalid Operator"
        } 
    }
}

class AdvancedCalculator extends Calculator {
    constructor() {
        super();
    }

    #sqrt(varOne){
        return Math.sqrt(varOne)
    }

    #log(varOne){
        return Math.log(varOne)
    }

    calculate(varOne, varTwo, Operator){
        if (Operator === "log") {
            return this.#log(varOne)
        }
        else if(Operator==="sqrt"){
            return this.#sqrt(varOne)
        }
        else{
            return super.calculate(varOne, varTwo, Operator)
        } 
    }
}

const calc_interface = (varOne, varTwo, Operator) => {
    const calc = new AdvancedCalculator()
    let ans = calc.calculate(varOne, varTwo, Operator)
    console.log("The answer is: ", ans)
}

let varOne = parseInt(process.argv[2])
let varTwo = parseInt(process.argv[3])
let Operator = process.argv[4]
console.log(process.argv)
calc_interface(varOne, varTwo, Operator)

