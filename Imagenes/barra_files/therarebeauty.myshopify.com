(function(){var d=47423,e=document.createElement("script");if(e.src="https://config.gorgias.chat/gorgias-chat-bundle.js?rev=70497bd6&appKey=01J0KRX3GG7Z8DKYME1PQ2EA7Q",e.id="gorgias-chat-bundle",e.setAttribute("data-ot-ignore",""),window.GorgiasChat){console.warn("[GORGIAS-CHAT] Another chat was detected. Check that you did not add Gorgias chat snippet twice.",{chatSkipped:{appKey:"01J0KRX3GG7Z8DKYME1PQ2EA7Q",applicationId:"47423"}});return}var r={get(o,t){if(t!="init"&&t!="resolve"&&t!="constructor"&&typeof t!="symbol")throw new Error('You are trying to use the Gorgias Chat API before its initialization (property or function "'+t+'")! Please use `GorgiasChat.init()`. Refer to our documentation https://docs.gorgias.com/gorgias-chat/advanced-customization-new-chat for more info.');let a=o[t];return typeof a=="function"?a.bind(o):a}};window.GorgiasChat=new Proxy({},r);var i=new Promise(function(o,t){window.GorgiasChat.resolve=o});window.GorgiasChat.init=function(){return i},console.log("[GORGIAS-CHAT] Loading chat 01J0KRX3GG7Z8DKYME1PQ2EA7Q..."),window.gorgiasChatPendingEvents=[];function n(){document.body.appendChild(e)}function s(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}s();var c={get(o,t){if(t!="init")throw new Error("You are using the legacy `gorgiasChat` Chat API! Please use `GorgiasChat` instead. Refer to our documentation https://docs.gorgias.com/gorgias-chat/advanced-customization-new-chat for more info.");let a=o[t];return typeof a=="function"?a.bind(o):a}};window.gorgiasChat=new Proxy({},c),window.gorgiasChat.init=function(){return console.warn("You are using the legacy `gorgiasChat.init()` function, please use the new `GorgiasChat` chat API (`GorgiasChat.init()`). Refer to our documentation https://docs.gorgias.com/gorgias-chat/advanced-customization-new-chat for more info."),i}})();
