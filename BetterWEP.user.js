// ==UserScript==
// @name         BetterWEP
// @namespace    http://emakina.nl
// @version      0.1.8
// @description  Makes naviwep less terrible
// @author       Valentijn
// @match        https://naviweb.emakina.nl/*
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @resource     betterWEP_css https://raw.githubusercontent.com/vgeirnaert/BetterWEP/master/BetterWEP.css
// ==/UserScript==

var characterLimit = 50;
var bottomTableRow = null;

function betterWep() {
    // initialise
    
    // load css file
    var betterWEP_css = GM_getResourceText("betterWEP_css");
    GM_addStyle(betterWEP_css);
    
    // add search box to bottom row
    var tableBottom = $('#ContentDiv table.MainTable tbody tr th').first().parent().prev();
    bottomTableRow = $('<tr><td colspan="7"><form id="inlineTaskForm" style="float: left;"><input type="text" id="inlineTaskName" name="projectIndex"></form><input type="button" value="Add" id="inlineTaskButton"></td></tr>');
    tableBottom.after(bottomTableRow);
    
    // add character limit textbox
    $('#MainDiv').append('Character limit: <input type="number" id="charlimit" value="50" name="charlimit" size="4">');
    
    // bind onchange events
    $('#charlimit').on('change', function(e) {
        console.log("charlimit changed");
        setCharacterLimit();
        checkAllTextAreas();
    });
    
    $('textarea').on('change keydown', function(e) {
        console.log("textarea changed");
        checkTextArea($(this));
    });
    
    // add new row onclick event
    $('#inlineTaskButton').on('click', function(e) {
        findTask();
    });
    
    checkAllTextAreas();
}

function setCharacterLimit() {
    characterLimit = $('#charlimit').val();
    
    if(characterLimit === '' || characterLimit < 1) {
        characterLimit = 50;
    }
    
    console.log("character limit set to: " + characterLimit);
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

function findTask() {
    var code = $('#inlineTaskForm').serialize();

    // open search results in popup window
    $.post("https://naviweb.emakina.nl/registration/reg_activity_project_search.asp", code+"&Submit1=Search").done(function (data) {
        var w = window.open('about:blank', 'windowname', 'fullscreen=no, height=500, width=1200, menubar=no, resizable=yes, toolbar=no');
        w.document.write(data);
        w.document.close();
    });
}

// called on page load
betterWep();
