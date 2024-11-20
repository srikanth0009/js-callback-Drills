
import { createDirectory,createFiles, deleteFiles } from "../problem1.js";



createDirectory(()=>{
    createFiles(()=>{
        deleteFiles(()=>{
            console.log("creation and deletion of files completed");
        });
    })
})



