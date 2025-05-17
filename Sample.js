//prompt("enter a value:")
//alert("welcome page....")
a="59"
console.log(typeof(a));
b=parseInt(a);
console.log(typeof(b));
console.log(b);
//variable declaration
//1.let
//2.var
//3.const
//4.nothing//
var a=10
console.log(a);
//let b=30
//console.log(b);
//const a=30
//console.log(a)
a=30
console.log(a);
//let a=30
//console.log(a)
//const a=10
//console.log(a)
var a=10
console.log("Before scope:",a);
{
  console.log("Inside:",a);
  var a=30
  console.log("Inside2:",a)

}
console.log("after:",a);
//objects
let movies_list={
    Name:"Og",
    Rating:5,
    "H-F":true
}
document.write(movies_list.name)
document.write(movies_list["H-F"])

