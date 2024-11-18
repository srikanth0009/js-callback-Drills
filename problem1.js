import fs from 'fs';
import path from 'path';


//Create a directory of random JSON files

export function createDirectory(cb1,cb2){

    const dirPath = path.join(process.cwd(),'jsonFiles');

    fs.mkdir(dirPath,{recursive : true},(err)=>{

        if(err){
            console.log(err);
        }
    }
    );
    console.log("Directory created");
    cb1(cb2);
}


export function createFiles(cb2){

    let path = '';

    for(let i=1;i<=3;i++){

        if(i==1){
            path = 'jsonFiles/file1.json';
        }else if(i==2){
            path = 'jsonFiles/file2.json';
        }else{
            path = 'jsonFiles/file3.json';
        }

        fs.writeFile(path,'This is a json file',(err)=>{
            if(err){
                console.log(err);
            }
        });
        console.log(`The file ${i} is created`);
    }

    cb2();
}



export function deleteFiles(){

    let path = '';

    for(let i=1;i<=3;i++){

        if(i==1){
            path = 'jsonFiles/file1.json';
        }else if(i==2){
            path = 'jsonFiles/file2.json';
        }else{
            path = 'jsonFiles/file3.json';
        }

        fs.unlink(path, (err)=>{
            if(err){
                console.log(err);
            }
        });
        console.log(`The file ${i} is deleted`);
    }

}

