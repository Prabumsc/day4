//compare two JSON
let obj1={name:"Raj",age:5};
let obj2={age:5,name:"Raj"};
if(obj1===obj2){
    console.log(true);
}
else{
    console.log(false);
}
//display all the country flags
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)

    for (var obj of result) {
      console.log(obj.flags, obj.name.common);
    }
    }
//display countryname,region,subregion
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)

    for (var obj of result) {
      console.log(obj.name.common , obj.region,obj.subregion,obj.population);
    }
   
  
 }

