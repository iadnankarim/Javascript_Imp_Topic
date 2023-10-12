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
 .then((result)=>{
    console.log("data1 saved");
    console.log("result of promise :" ,result)
    return savetoDb("Hello World")
 })
 .then((result)=>{
    console.log("data2 saved")
    console.log("result of promise :" ,result)
    return savetoDb("adnan");
 })
 .then((result)=>{
    console.log("data3 saved");
    console.log("result of promise :" ,result)
 })
 .catch((error)=>{
    console.log("promise was rejected");
    console.log("Error of promise :" ,error)
 });