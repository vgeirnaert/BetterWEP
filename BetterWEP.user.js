// ==UserScript==
// @name         BetterWEP
// @namespace    http://emakina.nl
// @version      0.1.3
// @description  Makes naviwep less terrible
// @author       Valentijn
// @match        https://naviweb.emakina.nl/*
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @resource     betterWEP_css https://raw.githubusercontent.com/vgeirnaert/BetterWEP/master/BetterWEP.css
// ==/UserScript==

var characterLimit = 50;

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
    
    // add character limit textbox
    $('#MainDiv').append('<input type="number" id="charlimit" value="50" name="charlimit">');
    
    // bind onchange events
    $('#charlimit').on('change', function(e) {
        console.log("charlimit changed");
        setCharacterLimit();
        checkAllTextAreas();
    });
    $('textarea').on('change', function(e) {
        console.log("textarea changed");
        checkTextArea($(this));
    });
}

function setCharacterLimit() {
    characterLimit = $('#charlimit').val();
    
    if(characterLimit === '' || characterLimit < 1) {
        charLimit = 50;
    }
    
    console.log("character limit set to: " + charLimit);
}

function checkAllTextAreas() {
    $('textarea').each(function(index) {
        checkTextArea($(this));
    });
}

function checkTextArea(textArea) {
    console.log("checking textarea");
    
    if(textArea.val().length > characterLimit) {
        textArea.addClass('limit_exceeded');
    } else {
        textArea.removeClass('limit_exceeded');
    } 
}

function betterWep_add() {
    alert('woei');
}

// called on page load
betterWep();
