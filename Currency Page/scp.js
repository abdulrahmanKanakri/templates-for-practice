"use strict";

function myFunc(x) {
  if (x.matches) {
    var x = document.getElementById("collapsibleNavbar");
    x.className = "collapse navbar-collapse justify-content-end";
    var y = document.getElementById("Brand");
    y.className = "navbar-brand ml-1";
  } else {
    var x = document.getElementById("collapsibleNavbar");
    x.className = "collapse navbar-collapse justify-content-end mr-5";
    var y = document.getElementById("Brand");
    y.className = "navbar-brand ml-5";
  }
}

var w = window.matchMedia("(max-width: 575px)");

myFunc(w);
w.addListener(myFunc);

function convert() {
  var num1 = document.getElementById("input1").value;
  document.getElementById("input2").value = num1 * 590;
}
