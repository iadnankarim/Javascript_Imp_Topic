
//call back function
// function savetoDb(data , success , failure){
//      let internetSpeed = Math.floor(Math.random()*10) +1;
//      if(internetSpeed > 4){
//         success();
//      }else{
//        failure();
//      };
// };

// savetoDb("apna college" , ()=>{
//     console.log("success : your data was saved");
//     savetoDb("Hello World",()=>{
//         console.log("success2 : data2 saved")
//     },()=>{
//         console.log("failer2 : weak connection")
//     })
// }, ()=>{
//     console.log(" Failure : weak connection.data not saved");
// })


function savetoDb(data){
   return new Promise((success , failure) =>{
    let internetSpeed = Math.floor(Math.random()*10) +1;
    if(internetSpeed >4){
        success("success : data was saved");
    }else{
        failure("failure : weak connection ");
    }
   });
};

let request =  savetoDb("apna college"); //req = promise object
request
.catch(()=>{
    console.log("promise was resolved");
    console.log(request);
})
.catch(()=>{
    console.log("promise was rejected");
    console.log(request);
})