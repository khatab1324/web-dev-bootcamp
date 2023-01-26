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
