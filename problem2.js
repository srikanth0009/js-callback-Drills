import fs from 'fs';

// 1. Read the given file lipsum.txt

export function getData() {

    fs.readFile('lipsum.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(data);

        converttoUpperCase(data,(result1)=>{
            converttoLowerCase(result1,(result2)=>{
                toSort(result2, (result3)=>{
                    deleteFiles(result3,(finalResult)=>{
                        console.log(finalResult);
                    });
                });
            });
        });
    });

    
}

export function converttoUpperCase(data,cb) {


    let modifiedData = data.toUpperCase();

    fs.writeFile('uppercase.txt', modifiedData, (err) => {
        if (err) {
            console.log(err);
        }
        console.log(" uppercase.txt file created");
    });


    fs.appendFile('filenames.txt', 'uppercase.txt ', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("uppercase.txt file appended");
    });

    fs.readFile('uppercase.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        
        cb(data);
    });
}


    export function converttoLowerCase(data,cb) {


    let lowercaseData = data.toLowerCase().split(' ');
    let newString = lowercaseData.join("\n");

    fs.writeFile('lowercase.txt', newString, (err) => {
        if (err) {
            console.log(err);
        }
        console.log(" lowercase.txt file created");
    });


    fs.appendFile('filenames.txt', 'lowercase.txt ', (err) => {
        if (err) {
            console.log(err);
        }
        console.log(" lowercase.txt file appended");
    });

    fs.readFile("lowercase.txt", 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }

        cb(data);
    });
}


    export function toSort(data,cb) {

    let sortedData = data.split('\n').sort().join('\n');

    fs.writeFile('sorteddata.txt', sortedData, (err) => {
        if (err) {
            console.log(err);
        }
        console.log(" sorteddata.txt file created");
    });


   fs.appendFile('filenames.txt', 'sorteddata.txt', (err) => {
    if (err) {
        console.log(err);
    }
    console.log(" sorteddata.txt file appended");
});

    fs.readFile("filenames.txt", 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }

        cb(data);
    });
}

    export function deleteFiles(data,cb) {

    const array = data.split(' ');

    for (let x of array) {
        fs.unlink(x, (err) => {
            if (err) {
                console.log(err);
            }
            console.log(`files deleted ${x}`);
        });
    }
     cb("successful");
}














