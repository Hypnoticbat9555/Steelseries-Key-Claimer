// ==UserScript==
// @name        Steelseries Claiming
// @name:de     Steelseries Claiming
// @name:fr     Steelseries Claiming
// @match       *://games.steelseries.com/giveaway/*
// @grant       none
// @version     2.0beta
// @license     WTFPL
// @author      u/hypnoticbat9555
// @description If the user is on a giveaway page on Steelseries, it clicks the claim key button. It cannot be used to skip the waiting room. It will work if you are not in the waiting room and logged in. It basically clicks the button if/when it is available, nothing more.
// @description:de Wenn sich der Benutzer auf einer Giveaway-Seite auf Steelseries befindet, klickt er auf die Schaltfläche um den Schlüssel anzufragen. Er kann nicht verwendet werden, um den Warteraum zu überspringen. Es funktioniert, wenn Sie sich nicht im Warteraum befinden und eingeloggt sind. Er klickt auf die Schaltfläche, wenn sie verfügbar ist, mehr nicht.
// @description:fr Script pour cliquer sur le boutton pour demander une clé
// @namespace https://greasyfork.org/users/847300
// ==/UserScript==


// Sets the function to be executed every 15000 Milliseconds (15 seconds)
setInterval(function(){
  if (CheckIfNotInWaitingRoom()) {
    clickOnKeyButton()
  }
}, 15000);


// Function that clicks the "get Key" button. Reloads the page if it doesn't
function clickOnKeyButton() {
  if(document.getElementById("getKeyButton")) {
      
        // If the claim button exists, click it
        // Problems: If you are not logged in, this will take you to the login page -> It won't work automatically
		    document.getElementById("getKeyButton").click();
    }
    else {
        // If the claim button does not exist reloads the page
        location.reload(); 
    }
}


// This function checks if you are NOT in the waiting room 
function CheckIfNotInWaitingRoom()
{
	var othergiveawaypictures = document.getElementsByClassName('css-uwwqev');
  // Returns true if an element with the class 'css-uwwqev' exists
  // This class is used for the pictures on the right side of the website showing the other giveaways
  // This means being in the waiting room will return false and being on the giveaway site true
	return othergiveawaypictures.length > 0;
}


