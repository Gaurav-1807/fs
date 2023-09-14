const fs = require('fs');
let opr =  process.argv[2]
let filename = process.argv[3]
let data = process.argv[4]


const write=() =>{
    fs.writeFile(filename,data ,(err) =>{
        if (err)throw err
        console.log("file write successfully")
    })
}

const read=() =>{
    fs.readFile(filename,'utf-8' ,(err , data) =>{
        if (err)throw err
        console.log(`${filename} \n ${data} \n file read successfully , `)
    })
}

const deleteFile =() =>{
    fs.unlink(filename , (err) =>{
        if (err)throw err
        console.log(`${filename}file delete successfully `)
    })
}
const appendFile =() =>{
    fs.appendFile(filename , data, (err) =>{
        if (err)throw err
        console.log(`${filename} append ${data} successfully`)
    })
}

if (opr == "write"){
    write();
}
else if (opr == "read"){
    read();
}
else if (opr == "delete"){
    deleteFile();
}
else if (opr == "append"){
    appendFile();
}
