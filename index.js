// Question 3 
let Science ='Physics, Chemistry, Biology, Technical Drawing'
let SocialScience = 'Accounting, Commerce, Marketting, Geography'
let Arts = 'Goverment, Economics, Literature, History'
let GeneralSubjects = 'English, Mathematics.'

let Dept = Arts

if (Dept = Arts){
    console.log("Hello, here are the subjets for Art students: " + Arts + " , " + GeneralSubjects) 
}
else if (Dept = SocialScience){
    console.log("Hello, here are the subjets for SocialScience students: " + SocialScience + " , " + GeneralSubjects) 
}
else if (Dept = Science){
    console.log("Hello, here are the subjets for Science students: " + Science + " , " + GeneralSubjects) 
}
else {
    console.log (GeneralSubjects)
}

// Question 4
for(
    let i=1;
    i<20;
    i +=7
    ){
        console.log(i)
    }

// Question 5
let num;
for (let i = 2; i < 20; i = i**2){
    mum = i;
}
console.log(num); 18