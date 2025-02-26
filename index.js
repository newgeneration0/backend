// const fs = require('fs')
// const fs1 = require('fs').promises
const path = require ('path')

// const fileContent = 'we are learning nodejs'

// fs.writeFileSync('note.txt', fileContent)

// fs.readFile('note.txt', 'utf-8', (err, data)=>(
//     console.log(data)
// ))

// fs1.readFile('note.txt', 'utf-8').then((data)=>console.log(data)
// )

// const appendFileDataSync = fs.appendFileSync('note.txt', 'we have complete fs module')

// const appendFileData = fs.appendFile('note.txt', 'we have complete fs moduleeeee', (data)=>(console.log(data)
// ))

// fs1.appendFile('note.txt', 'hello thus is a promise').then((data)=>(console.log(data)))

//TASK1--- YOU HAVE TO READ A DATA FROM A FILE AND THEN USING THAT YOU HAVE TO CREATE A FILE

// sync method
// const data = fs.readFileSync('task.txt', 'utf-8');

// fs.writeFileSync('task1.txt', data)

// // async method
// fs.readFile('task.txt', 'utf-8', (err, data)=>{
//     fs.writeFile('task3.txt', data, (err, data)=>{
//         console.log('file written succesfully')
//     })
// })

// //promise method
// fs1.readFile('task.txt', 'utf-8').then((data)=>{
//    fs1.writeFile('task2.txt', data).then((data)=>{
//     console.log('promise done!');
    
//    })
// })

// const file = path.extname('index.js')
// console.log(file)

const base = path.extname('/uer/index.js')
console.log(base);


