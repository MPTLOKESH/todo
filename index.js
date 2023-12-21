var poverlay = document.querySelector(".popup-overlay");
var pbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
  poverlay.style.display = "block";
  pbox.style.display = "block";
});

var cancelbutton = document.getElementById("cancel-new");

cancelbutton.addEventListener("click", function () {
  event.preventDefault();
  poverlay.style.display = "none";
  pbox.style.display = "none";
});

var listtitle = document.getElementById("list-title");
var listdescription = document.getElementById("list-description");
var addnew = document.getElementById("add-new");
var container = document.querySelector(".container");

addnew.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "box");
  div.innerHTML = `<h2>${listtitle.value}</h2>
  <p>${listdescription.value}</p>
  <button onclick="deleteBox(event)">close</button>`;

  container.append(div);
  listtitle.value = "";
  listdescription.value = "";

  poverlay.style.display = "none";
  pbox.style.display = "none";
});

function deleteBox(event) {
  event.target.parentElement.remove();
}
