const {performance} = require('perf_hooks');

function reverseMachine(str){

    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'please enter a valid string';
    }
    // const start = performance.now();

    // let reversed = '';
    // for(let i=str.length-1 ; i>=0 ; i--){
    //     reversed += str[i];
    // }
    // const end = performance.now();
    // let time = end - start; //in milliseconds
    // console.log(time);
    // return reversed;  // meduim 0.15567800030112267

    // return str.split('').reverse().join(''); // worest 0.15567800030112267
    
    return [...str].reverse().join(''); // fatest one 0.09065499901771545s
}

const str = `Software development experience in one or more general purpose programming languages including but not limited to: Java, C#, C/C++ or Python
Strong fundamentals of distributed systems and highly scalable applications on cloud platforms
Good proficiency of developing applications using SQL or NoSQL databases
Solid concepts grasp of OOP, design patterns, REST and Protobuf
Excellent foundations of the latest web standards, including HTML5 and CSS3
Knowledge of web libraries and frameworks such as AngularJS, Angular, VueJS or React
Knowledge of cross platform frameworks such as Flutter
Familiarity with the whole web stack, including protocols and web server optimization techniques
Configuration management proficiency using Git
Familiarity with CI/CD concepts and pipelines
Highly analytical mindset and problem solving skills
Excellent troubleshooting and debugging skills
Working proficiency and communication skills in verbal and written English
High sense of ownership and responsibility
Familiarity with Google Cloud Platform is a plus`

console.log(reverseMachine(str));
