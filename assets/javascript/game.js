// $(document).ready(function() {

// var rappers = {
// 'Ice Cube': {name: 'Ice Cube', imageUrl: 'assets/images/icecube.jpg'},
// // 'Jay-Z': {name:'Jay-Z', imageUrl: 'assets/images/jayz.ipg'},
// // 'Kanye West':{name: 'Kanye West', imageUrl: 'assets/images/kanyewest.jpg'},
// // 'Pimp C':{name:'Pimp C', imageUrl: 'assets/imagespimpc'}

// };

//  var currSelectedRapper;
//   var currRapper;

// var buildRappers = function(rappers) {
// 	var rappersDiv = $("<div class='rappers data-name='" + rappers.name + "'>");
// 	//  var rappersName = $("<div class='rappers-name'>").text(rappers.name);
// 	// var rappersImage = $("<img alt= image' class='rappers-image'>").attr("src", rappers.imageUrl);
// 	console.log(rappersDiv);
	
// 	// if (makeRapper == 'player2') {
//  //      $(rappersDiv).addClass("player2");
//  //    } else if (makeRapper == 'player1') {
//  //      currRapper = rappers;
//  //      $(rappersDiv).addClass("target-player2");
//  //    }

// };






// });

var rappers = {
'Ice Cube': {name: 'Ice Cube', imageUrl: 'assets/images/icecube.jpg'},
'Jay-Z': {name:'Jay-Z', imageUrl: 'assets/images/jayz.ipg'},
'Kanye West':{name: 'Kanye West', imageUrl: 'assets/images/kanyewest.jpg'},
'Pimp C':{name:'Pimp C', imageUrl: 'assets/imagespimpc'}

};

var renderCharacters = function(charObj, areaRender){
	if (areaRender == '#charaters'){
		$(areaRender).empty();
		for (var key in charObj) {
			renderOne(charObj[key], areaRender, '');
		}
	}
}


// $("#charaters").append('<div id="rappersDiv">' + rappers + '>');





