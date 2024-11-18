import fs from 'fs';

// 1. Read the given file lipsum.txt

export function getData(cb1, cb2, cb3, cb4) {

    fs.readFile('lipsum.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(data);
        cb1(data, cb2, cb3, cb4);
    });
}

export function converttoUpperCase(data, cb2, cb3, cb4) {

    let modifiedData = data.toUpperCase();

    //console.log(modifiedData);

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
        console.log(data);
        cb2(data, cb3, cb4);
    });
}



export function converttoLowerCase(data, cb3, cb4) {

    let lowercaseData = data.toLowerCase().split(' ');
    let newString = lowercaseData.join("\n");

    console.log(newString);

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
        console.log(data);
        cb3(data, cb4);
    });
}


export function toSort(data, cb4) {

    let sortedData = data.split('\n').sort().join('\n');
    // console.log(sortedData)


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
        console.log(data);
        cb4(data);
    });
}



export function deleteFiles(data) {

    console.log(data);
    const array = data.split(' ');
    console.log(array);

    for (let x of array) {
        fs.unlink(x, (err) => {
            if (err) {
                console.log(err);
            }
            console.log(`files deleted ${x}`);
        });
    }
}














