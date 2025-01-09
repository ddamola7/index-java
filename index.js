// // const paragraph = document.querySelector('p').innerHTML
// // console.log(paragraph);

// // const allParagraph = document.querySelectorAll('p')
// // console.log(allParagraph);

// // const secondparagraph=document.getElementById('two')
// // console.log(secondparagraph);

// // const thirdparagragh=document.getElementsByClassName('third')
// // console.log(thirdparagragh);


// // document.querySelector('button').addEventListener('dblclick', () => {
// //     // alert('i have been clicked')   
// // })




// const greetings = (name) => {
//     return `hello ${name}`
// }

// console.log(greetings('damola cubana'));
// console.log(greetings('ehis'));

// const sentence = (name,job,school,product) => {
//     return `my name is ${name} i'm a ${job},i graduated from ${school},and i'm currently building a ${product}`

// }
// console.log(sentence('sidney','game developer','GMC','roblox'));
// console.log(sentence('ayo','software dev','GMC','fintech app'));



// const inec =(age) => {
//     age >= 18 ? console.log('you can vote') : console.log("you're too young to vote");
// }
// inec(13)
// inec(123)

// function inectwo(age){
//     if(age>= 18){
//         console.log('you can vote');
//     }else{
//         console.log('you cant vote');
        
//     }
// }
// inectwo(27)
// inectwo(15)


// const nigeriaDishes = ['ofada rice','jollof rice','bread&beans','fried rice','tuwo','plantain','yam&egg','suya','egusi','pap']
// const [ehis,femi,tochukwu,demola,damola,...rest]=nigeriaDishes
// console.log(rest);

// const drinks = ['pepsi','fanta','cocacola','malta','tequila']
// const nigeriaDishes2 = ['ofada rice','jollof rice','bread&beans','fried rice','tuwo']
// const drinksnigeriaDishes2=[...drinks,...nigeriaDishes2]
// console.log(drinksnigeriaDishes2);



// const staff =[
//     {
//         name: 'ayo',
//         salary: 250000,
//     },
//     {
//         name: 'ehi',
//         salary: 150000,
//     },
//     {
//         name: 'alex',
//         salary: 100000,
//     },
//     {
//         name: 'daniel',
//         salary: 1500,
//     },
//     {
//         name: 'mola',
//         salary: 60000,
//     },
// ]
// const alex = staff.find(employee => employee.name==='alex')
// console.log(alex);

// const mola = staff.find(employee => employee.salary===60000)
// console.log(mola);



const customers =[
    {
        name: 'damola cubana',
        phone: 8099999777,
        email: 'damolacubana@gmail.com',
        married: true,
        numberOfChildren: 6,
        homeAddress: 'yaba,lagos',
        nin: 1234567802,
    },
    {
        name: 'alexgmc',
        phone: 8099999777,
        email: 'alexgmc@gmail.com',
        married: false,
        numberOfChildren: 5,
        homeAddress: 'mushin,lagos',
        nin: 987654312,
    },
    {
        name: 'ehis',
        phone: 8099999777,
        email: 'ehisgmc@gmail.com',
        married: true,
        numberOfChildren: 3,
        homeAddress: 'onipanu,lagos',
        nin: 1515161987,
    },
    {
        name: 'daniel',
        phone: 8099999777,
        email: 'danielgmc@gmail.com',
        married: false,
        numberOfChildren: 10,
        homeAddress: 'oyingbo,lagos',
        nin: 20203030456,
    },
]
const alexgmc =customers.find(employee => employee.nin===987654312)
console.log(alexgmc);

const alexposition = customers.findIndex(employee => employee.nin===987654312)
console.log(alexposition);

const danielposition = customers.findIndex(employee => employee.nin===20203030456)
console.log(danielposition);


customers.forEach((customer) => {
    return console.log(`${customer.name} has ${customer.numberOfChildren} children`);
})

customers.forEach((customer) => {
    return console.log(`${customer.name} lives at ${customer.homeAddress} nigeria`);
    
})


const staff =[
    {
        name: 'ayo',
        salary: 250000,
    },
    {
        name: 'ehi',
        salary: 150000,
    },
    {
        name: 'alex',
        salary: 100000,
    },
    {
        name: 'daniel',
        salary: 1500,
    },
    {
        name: 'mola',
        salary: 60000,
    },
]

const updatedSalaries = staff.map((employee) => {
    return {
        name: employee.name,
        salary: employee.salary*1.3
    }
})
console.log(updatedSalaries);


const highEarners = staff.filter((employee) => {
    return employee.salary >= 100000
})
console.log(highEarners);






