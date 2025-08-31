// == , === , != ,!== , > , < , >= ,<= 


function validateLogin(inputAge, minAge,inputPassword, correctPassword){

    // Losse vs Strict Comparison

    let ageCheck1 = inputAge == minAge; // "18" == 18 ----> true

    let ageCheck2 = inputAge === minAge; // "18" === 18 ----> false


    let passwordMatch = inputPassword === correctPassword // Always use strict

    let canAccess = inputAge >= minAge && passwordMatch;

    console.log(`Age check (loose) : ${ageCheck1}`);

    console.log(`Age check (strict) : ${ageCheck2}`);

    console.log(`Can access: ${canAccess}`);

}

validateLogin("18",18,"secret123","secret123");




