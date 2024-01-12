/**
 * Ternary Operators🌟🔥🌟 --> condition ? yes : no
 */

// condition ? value if true : value if false
// condition1 ? value1 if true : condition2 ? value2 if true : condition3 ? value3 if true : value if 1,2&3 false

const totalMarksScored = 100;

if (totalMarksScored < 40){
    console.log("You need to work hard.");
}else if (totalMarksScored < 60){
    console.log("B Grade");
}else if (totalMarksScored < 75){
    console.log("A Grade");
}else if(totalMarksScored < 85){
    console.log("A+ Grade")
}else{
    console.log("Genius")
} 

const result = totalMarksScored < 40 ? "You need to work hard" : totalMarksScored < 60 ? "B Grade" : totalMarksScored < 75 ? "A Grade" : totalMarksScored < 85 ? "A+ Grade" : "Genius";

console.log(result);

