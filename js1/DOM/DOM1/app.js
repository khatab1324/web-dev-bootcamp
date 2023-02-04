// i suposed you know what is decoment

// ---------------------------------------------------------------getElemenetById-------------------------------------
//show the vedio to understand
// to ge the id from html just write  getElemenetById()
// it is very impoortant
document.getElementById("chick"); // <button id="chick">chick is not used in the sersver</button> are selected in js

// --------------------------------------------------------getElementsByTagName & className------------------------------
const allimgs = document.getElementsByTagName("img"); //you can choes what you want like document.getElementsByTagName('p')
// or document.getElementsByTagName('div').............
for (let img of allimgs) {
  console.log(img.src);
}
// but if you ask what is the Element

// ------------------------------------------------------querySelector -----------------------------------
// all -in method to select single element
document.querySelector("#imgs"); //donot forgit # for id or it will give you null
// or
document.querySelector("img"); //it will call the first element

// if you want call item don't have id or class  like this <a title="linkhere" href="www.youtupe.com">youtupe</a>
document.querySelector('a[title="linkhere"]'); //without sapac

// -----------------------------querySelectorAll----it call all the same element
document.querySelectorAll("p");
document.querySelectorAll("a p"); // it will call all element in p inside a

// -------------------------------------manipulate -------------------------------------properties and method
// we use manipulate to make js controle or maniplate on html or css

// the first element is  innerText  to change text
document.querySelector("a").innerText = "here js siiiii";

// -------------------------------------------------------textContent---------------------
// it simaler with innertext
// it sensitive for element inside like if you call p and inside p there a ,the textcontent
document.querySelector("p").textContent = "and also here js";

//--------------------------------------------------------------- innerHTML
//it same innertext but innerHTML but it show the element and you are replace it

// -----------------------------------------------------------------------------Attribute-------------------------
// the attribut i am not sure about it but i think it like link you save it in js
// how you will save it or even call it
const TheImges = document.querySelector("img");
TheImges.getAttribute("id");

// or even do this
document.querySelector("img").src;

// if you want to change the link or pass another one use set
// TheImges.setAttribute('name' , 'the insted element')

// ----------------------------------------------------------classList --------------------------
const h2 = document.querySelector("h2");
h2.getAttribute("class");
//  to add class
h2.setAttribute("class", "newClass");

// how add new class beside the old class ???
//  we can use `` and write all classes
let current = h2.getAttribute("class"); //we make it to replace it
h2.setAttribute("class", `${current} secondClass`);
// just call h2

//                          becuase that we need classList.add
// it like pushing
h2.classList.add("thired", "fourth");
// to remove
h2.classList.remove("fourth");

// and you have element called toggle it like a swich of the light when you press on it first time it will turn on
// and when you press on it again it will turn of
h2.classList.toggle("thired");
h2.classList.toggle("thired");
