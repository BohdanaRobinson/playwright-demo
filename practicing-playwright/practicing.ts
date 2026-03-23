// Task 1 — Typed function + basic methods

// Write a TypeScript function called analyzeUser that:

// Requirements:
// Takes 3 parameters:
// name (string)
// age (number)
// isActive (boolean)
// Returns an object with:
// nameUpper → name in uppercase
// isAdult → true if age ≥ 18
// status →
// "ACTIVE" if isActive = true
// "INACTIVE" if false
// Add proper return type annotation.

function analyzeUser(name:string, age:number, isActive: boolean){
return {
nameUpper: name.toUpperCase(),
isAdult: age>=18,
status: isActive ? "ACTIVE" : "FALSE"
};
}

// we need to add proper retirn type annotation, so for reusability we can use interface

interface UserAnalysis {
    nameUpper: string;
    isAdult: boolean;
    status: string;
}

function analyzeUser1(name: string, age: number, isActive:boolean):UserAnalysis{
    return {
        nameUpper: name.toUpperCase();
        isAdult: age >=18,
        status: isActive? "ACTIVE": "INACTIVE"
    };
}