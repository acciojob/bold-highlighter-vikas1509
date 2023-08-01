// function highlight() {
//     //Write your code here
// var s =document.getElementById(para).querySelectorAll("strong");
// for(var i=0;i<s.length;i++){
// 	s[i].style.color="green";
// }
// }

	function highlight() {
    // Get all elements with <strong> tag within the paragraph
    var boldWords = document.getElementById("para").querySelectorAll("strong");

    // Change the color of all bold words to green
    for (var i = 0; i < boldWords.length; i++) {
        boldWords[i].style.color = "green";
    }
}

function return_normal() {
    // Get all elements with <strong> tag within the paragraph
    var boldWords = document.getElementById("para").querySelectorAll("strong");

    // Revert the color of all bold words back to black
    for (var i = 0; i < boldWords.length; i++) {
        boldWords[i].style.color = "black";
    }
}
	

// function return_normal() {
//     //Write your code here

    
// }
