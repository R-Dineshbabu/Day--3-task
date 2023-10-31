//1.How to compare two JSON have same properties withouth order using javascript? 
    //a.let obj1={name:"person 1",age:5}; 
   //b.let obj2={age:5,name:"person 1"};

let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };

let json1= JSON.stringify(obj1);
let json2= JSON.stringify(obj2);

if(json1===json2){
  console.log("The Json is same")
}
else{
  console.log("The Json is Not same")
}


//2.use the rest countries API print the countrys flag

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data=request.response;
    //console.log(data);
    var result=JSON.parse(data);
    for (var i=0;i<result.length;i++){
        console.log(result[i].flags.png)
    }


//3.use the rest countries API print all country names 

    for (var i=0;i<result.length;i++){
      console.log(result[i].name.common)
  }

// * print all regions
  for (var i=0;i<result.length;i++){
    console.log(result[i].region)
}

// * print all subregion
  for (var i=0;i<result.length;i++){
  console.log(result[i].subregion)
}
//* print all population
 for (var i=0;i<result.length;i++){
  console.log(result[i].population)
}


    
}
