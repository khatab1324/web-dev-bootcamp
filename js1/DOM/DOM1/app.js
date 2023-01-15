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
