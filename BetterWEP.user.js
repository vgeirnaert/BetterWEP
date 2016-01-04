// ==UserScript==
// @name         BetterWEP
// @namespace    http://emakina.nl
// @version      0.1
// @description  Makes naviwep less terrible
// @author       Valentijn
// @match        https://naviweb.emakina.nl/*
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @resource     betterWEP_css https://raw.githubusercontent.com/vgeirnaert/BetterWEP/master/BetterWEP.css?cache=1
// ==/UserScript==

function betterWep() {
    // initialise
    
    // load css file
    var betterWEP_css = GM_getResourceText("betterWEP_css");
    GM_addStyle(betterWEP_css);
    
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

// called on page load
betterWep();
