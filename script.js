//first
function sayAstrum(param){
    return param;
}
sayAstrum()
console.log(sayAstrum("Salom Astrum!"))

//second
function salomIsm(param){
    let ism = prompt("please enter your name")
    param(ism);
}
function inner(name){
    // console.log("Salom" + name + "!");
    console.log(`salom ${name}!`);
}
salomIsm(inner);

//third
function taqqoslash(param1, param2){
    param1 = +prompt("please enter a number");
    param2= +prompt("now enter the second number");
    if(param1 > param2){
        console.log(`the big number is: ${param1}`)
    }else if(param2 > param1){
        console.log(`the big number is: ${param2}`)
    }else{
        console.log(`these numbers are equal`)
    }
}
taqqoslash()

// fourth
function factorial(result, number){
    number = +prompt("please enter a positive number");
    if(number < 0){
        console.log(`error`)
    }else{
        result = 1;
        for(let i = 1; i <= number; i++){
            result *= i;
        }
        console.log(`the factorial of ${number} is: ${result}`) 
    }
}
factorial()

//fifth
function kvadrat(number, result){
    number = +prompt("please enter a number");
    result = number * number;
    console.log(`${result}`)
}
kvadrat()

//sixth
function cube(number, result){
    number = +prompt("please enter a number")
    result = number * number * number
    console.log(`${result}`)
}
cube()

//seventh
function arrays(arr){
   let max = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(`${max}`)
}
arrays([10, 21, 34, 775, 74, 31, 65, 90])

//eighth
function FindLongestName(arr){
    let LongestName = ""
    for(index of arr){
        if(index.length > LongestName.length){
            LongestName = index
        }
    }
    console.log(`the longest name is: ${LongestName}`)
}
FindLongestName([" Jasur", "Muhammad Yusuf", "Abdulla", "Mirzoavaz", "Beksulton"])

// 8-zadaniya for each methodida
function FindLongestName(arr){
    let LongestName = ""
    arr.forEach(element => {
        if(element.length > LongestName.length){
            LongestName = element
        }
    });
    return `the longest name is: ${LongestName}`
}
console.log(FindLongestName([" Jasur", "Muhammad Yusuf", "Abdulla", "Mirzoavaz", "Beksulton"]))

//nineth
function FindSmallestNum(arr){
    let SmallestNum = arr[0]
    arr.forEach(element => {
        if(element < SmallestNum){
            SmallestNum = element
        }
    });
    console.log(`the smallest number is: ${SmallestNum}`)
}
FindSmallestNum([14 , 53, 23, 634, 765, 875, 9, 2])

//9-zadaniya for of methodida
function FindSmallestNum(arr){
    let SmallestNum = arr[0]
    for(index of arr){
        if(index < SmallestNum){
            SmallestNum = index
        }
    }
    console.log(`the smallest number is: ${SmallestNum}`)
}
FindSmallestNum([14 , 53, 23, 634, 765, 875, 9, 2])

//10th
function FindSmallestName(arr){
    let SmallestName = arr[0]
    for(index of arr){
        if(index.length < SmallestName.length){
            SmallestName = index
        }
    }
    console.log(`the smallest name is:${SmallestName}`)
}
FindSmallestName([" Jasur", "Muhammad Yusuf", "Abdulla", "Mirzoavaz", "Beksulton"])

//10th for each methodida
function FindSmallestName(arr){
    let SmallestName = arr[0]
    arr.forEach(element => {
       if(element < SmallestName){
        SmallestName = index
       } 
    });
    console.log(`the smallest name is: ${SmallestName}`)
}
FindSmallestName([" Jasur", "Muhammad Yusuf", "Abdulla", "Mirzoavaz", "Beksulton"])
