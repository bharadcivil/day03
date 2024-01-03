let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };

let jsonString1 = JSON.stringify(obj1);
let jsonString2 = JSON.stringify(obj2);


if (jsonString1 === jsonString2) {
  console.log("The JSON objects are equal.");
} else {
  console.log("The JSON objects are not equal.");
}

//2


var c  = new XMLHttpRequest();
c.open("GET","https://restcountries.eu/rest/v2/all",true)
c.send();
c.onload =function(){
    var result =c.response;
    var d=JSON.parse(result);
    for (var i=0;i<d.length;i++)
    {
        console.log(d[i].flags.png)
    }

}

//3

var a = new XMLHttpRequest();
a.open("GET","https://restcountries.eu/rest/v2/all",true)
a.send();
a.onload =function(){
    var data =a.response;
    var b=JSON.parse(data);
    for (var i=0;i<b.length;i++)
    {
        console.log(b[i].name.common,b[i].region,b[i].subregion,b[i].population)
    }

}
 