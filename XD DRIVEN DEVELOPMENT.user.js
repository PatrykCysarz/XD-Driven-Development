// ==UserScript==
// @name         XD DRIVEN DEVELOPMENT
// @version      0.1.1
// @description  Bring more XD to your software development
// @author       You
// @match        https://github.com/*
// @require http://code.jquery.com/jquery-1.12.4.min.js
// ==/UserScript==

(function() {
    
    // TODO: Random generation
    var xds = ['xD', 'XD', 'xd', 'XDDD', 'XDXDXDD', 'xDDD', 'xdd', 'xDD', 'Xddd', 'xdDDDDDDDD', 'XDDDDD', 'XDDDD', 'xddddddd', 'xdxxdd', 'xdddddd'];
    
    $('.link-gray-dark.no-underline.h4.js-navigation-open').each(function(){

        var xdType = xds[Math.floor(Math.random()*xds.length)];
        
        var html = $(this).html();
        
        $(this).html(html + ' ' + xdType);
    });
})();
