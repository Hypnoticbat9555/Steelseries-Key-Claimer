

    // ==UserScript==
    // @name        Steelseries Claiming
    // @name:de     Steelseries Claiming
    // @name:fr     Steelseries Claiming
    // @match       *://games.steelseries.com/giveaway/*
    // @grant       none
    // @version     1.0.1
    // @license     WTFPL
    // @author      u/hypnoticbat9555
    // @description If the user is on a giveaway page on Steelseries, it clicks the claim key button. It cannot be used to skip the waiting room. It will work if you are not in the waiting room and logged in. It basically clicks the button if/when it is available, nothing more.
    // @description:de Wenn sich der Benutzer auf einer Giveaway-Seite auf Steelseries befindet, klickt er auf die Schaltfläche um den Schlüssel anzufragen. Er kann nicht verwendet werden, um den Warteraum zu überspringen. Es funktioniert, wenn Sie sich nicht im Warteraum befinden und eingeloggt sind. Er klickt auf die Schaltfläche, wenn sie verfügbar ist, mehr nicht.
    // @description:fr Script pour cliquer sur le boutton pour demander une clé
    // @namespace https://greasyfork.org/users/847300
    // ==/UserScript==
     
    // Sets the function to be executed every 15000 Milliseconds (15 seconds)
    setInterval(function(){
      
        if(document.getElementById("getKeyButton")) {
          
            // If the claim button exists, click it
            // Problems: If you are not logged in, this will take you to the login page -> It won't work automatically
    		    document.getElementById("getKeyButton").click();
          
        }
        
        else {
          
            // If the claim button does not exist reloads the page
            // Problems: This will reload the page even if you are in the waiting room. I don't know if this affects your place in the line. Steelseries says it does. I think that since the page already reloads it does't affect it but I don't know.
            // To fix this: The script would need to know if you are in the waiting room or not. Because of my limited knowledge of javascript, I can't do it. If you know how you could do it, please message me on reddit
            location.reload(); 
          
        }
      
    }, 15000);

