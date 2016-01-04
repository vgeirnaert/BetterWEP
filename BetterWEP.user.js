// ==UserScript==
// @name         BetterWEP
// @namespace    http://emakina.nl
// @version      0.1
// @description  Makes naviwep less terrible
// @author       Valentijn
// @match        https://naviweb.emakina.nl/*
// @grant        none
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js
// ==/UserScript==

function betterWep() {
    // initialise
    
    // reduce size of text areas
	jQuery('textarea').attr('rows', 2);
    
    // add form
   /* $('#MainDiv').append('<form id="betterWep_form" style="float:left"></form>');
    $('#betterWep_form').append('<select name="activity"></select>');
    $('#betterWep_form').append('<select name="type"></select>');
    $('#betterWep_form').append('<button id="betterWep_add">Add line</button>');
    $('#betterWep_add').click(betterWep_add);*/
}

function betterWep_add() {
    alert('woei');
}

betterWep();