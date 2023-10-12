// function getNum() {
//     //create promise
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             let num =Math.floor(Math.random()*10) +1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
// }


h1=document.querySelector("h1");

function changeColor(color , delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+1;
            if(num > 4){
                reject();
            }
            h1.style.color= color;
            console.log(`color changed to ${color}!`);
            resolve("color changed");
        },delay);
    });
}

async function demo(){
    try{
        await changeColor("red",1000);
    await changeColor("orange",1000);
    await changeColor("green",1000);
    await changeColor("blue",1000);
    }
    catch{
        console.log("error catuch");
        console.log(error)
    }

    let a = 4;
    console.log(a);
    console.log("new number", a+3);
}

demo()