/*
    JavaScript 6th Edition
    Chapter 8
    Hands-on Project 8-1

    Author: Douglas Faulkner
    Date:   March 5, 2023

    Filename: script.js
*/
//Step4
"use strict";
var newAccountArray = [];
//Step5
function createID() {
    var fname = document.getElementById("fnameinput"); 
    var lname = document.getElementById("lnameinput");
    var zip = document.getElementById("zipinput");
    var account = document.getElementById("accountidbox");
    var fields = document.getElementsByTagName("input");
    var acctid;
    var firstInit;
    var lastInit;
    //Step6
    if (fname != "" && lname != "" && zip != "") {
	firstInit = fname.value.charAt(0).toUpperCase();
	lastInit = lname.value.charAt(0).toUpperCase();
	acctid = firstInit + lastInit + zip.value;
    	account.value = acctid; 
    	newAccountArray = [];
    	for (var i = 0; i < fields.length - 1; i++) {
        	newAccountArray.push(fields[i].value);
    	}
    }
}
//Step7
function createEventListeners() {
    var fname = document.getElementById("fnameinput");
    var lname = document.getElementById("lnameinput");
    var zip = document.getElementById("zipinput");
	if(fname.addEventListener) {
        fname.addEventListener("change", createID, false);
        lname.addEventListener("change", createID, false);
        zip.addEventListener("change", createID, false);
    } else if (fname.attachEvent) {
        fname.attachEvent("onchange", createID);
        lname.attachEvent("onchange", createID);
        zip.attachEvent("onchange", createID);
    }
}
if (window.addEventListener) {
    window.addEventListener ("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}
