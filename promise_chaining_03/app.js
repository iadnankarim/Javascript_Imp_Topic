function savetoDb(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            resolve("Success : data was soved");
        }else{
            reject("failure : weak connection");
        }
    });
}

savetoDb("apna college")
 .then(()=>{
    console.log("data1 saved");
    return savetoDb("Hello World")
 })
 .then(()=>{
    console.log("data2 saved")
    return savetoDb("adnan");
 })
 .then(()=>{
    console.log("data3 saved");
 })
 .catch(()=>{
    console.log("promise was rejected");
 });