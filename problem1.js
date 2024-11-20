import fs from 'fs';
import path from 'path';


//Create a directory of random JSON files

export function createDirectory(cb){

    const dirPath = path.join(process.cwd(),'jsonFiles');

    fs.mkdir(dirPath,{recursive : true},(err)=>{

        if(err){
            console.log(err);
        }
        console.log("directory created");
        cb();
    });
}


export function createFiles(cb){

    let path = '';

    for(let i=1;i<=3;i++){

        path = `jsonFiles/file${i}.json`;

        fs.writeFile(path,'This is a json file',(err)=>{
            if(err){
                console.log(err);
            }

            if(i==3){
                 cb(); 
            }
        }); 
    }
}


export function deleteFiles(cb){

    let path = '';

    for(let i=1;i<=3;i++){
        
        path = `jsonFiles/file${i}.json`;

        fs.unlink(path, (err)=>{
            if(err){
                console.log(err);
            }

            if(i==3){
                cb();
            }
        });
    }
}

