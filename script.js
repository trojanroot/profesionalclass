// let arry=["hermit","kashib","pratik"];
// for(let i=0;i<arry.length;i++){
//     console.log(arry[i]);
// }
// for(let value of arry){
//     console.log(value);
// }
// for(let value in arry){
//     console.log(value);
// }
// let i=0;
// while(i<arry.length){
//     console.log(arry[i]);
//     i++;
// }

// do{
//     let i=0;
//     console.log(arry[i]);
//     i++;
// }
// while(i<arry.length);

// const object={
//     name:"aryan",
//     address:"Kapan",
//     bio:{
//         bloodGrou:"A+",
//         nidnumber:'123344',
//     }
// }
// for (let key in object){
//     console.log(key,object[key]);
// }

// let arry1=[2,4,6,8];
// // arry1.shift(2);
// // arry1.unshift(2);
// console.log(arry1);
// // let arry2=[];
// // for(i=0;i<=arry.length;i++){
// //     arry2.push(arry1[i]*2);
// // }
// // console.log(arry2);
//  arry2=arry1.map((value)=>value*2);
//  console.log(arry2);


// let a=[1,2,3,4,5,6];
// // console.log(a.indexOf(5));
// // a.splice(4,1);
// console.log(a);


// const obj1={
//     firstName:"Aryan",
//     address:"kapan",
//     bio:{
//         bloodgroup:"B -ve",
//         test:true
//     }
// };

// const obj2={
//     ...obj1.bio,
//     lastname:"Thapa"    
// }
// console.log(obj2);

// const obj3={
//     ...obj1.bio,
//    positive:"Yes"
// }




// function object(param,value){
//     const detail={
//     name:"Aryan",
//     Phoneno :9765970087,
//     address:"Kapan"
// }
//     // detail[param]=value
// console.log(detail);
// detail[param]=value;
// // detail.name="pujan";
// console.log(detail);
// }
// object("name","Aman");






function add(){
    const value=2+2;
    console.log(value);
    setTimeout(()=>{
        console.log("time out");
    },100);
    console.log("Complete")
}

add();
// promise
// .then
// .asycn
// .catch