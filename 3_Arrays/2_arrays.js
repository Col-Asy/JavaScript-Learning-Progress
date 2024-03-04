var arr = [1, 2, 3, 4, "Hello", true, 1.11];

console.log(arr);

// shift unshift for front indexing
arr.unshift("Valentine");
console.log(arr);
arr.shift();
console.log(arr);

//push pop for back indexing
arr.push("Basant Panchmi");
console.log(arr);
arr.pop();
console.log(arr);


// For of Loop
// For of used to find the elemnt in the array
for(let el of arr){
    console.log(el);
}

// For in Loop
// For in used to find the index in the array
for(let indx in arr){
    console.log(indx);
}

// Searching key
let indx = arr.indexOf("Hell");
console.log("Index",indx);