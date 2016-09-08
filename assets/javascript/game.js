$(document).ready(function(){

var rappers = {
'Ice Cube': {name: 'Ice Cube', imageUrl: 'assets/images/icecube.jpg'},
'Jay-Z': {name:'Jay-Z', imageUrl: 'assets/images/jayz.ipg'},
'Kanye West':{name: 'Kanye West', imageUrl: 'assets/images/kanyewest.jpg'},
'Pimp C':{name:'Pimp C', imageUrl: 'assets/imagespimpc'}

};

var buildRappers = function(rappers) {
	var rappersDiv = $("<div class='rappers data-name='" + rappers.name + "'>");
	 var rappersName = $("<div class='rappers-name'>").text(rappers.name);
	var rappersImage = $("<img alt= image' class='rappers-image'>").attr("src", rappers.imageUrl);
	rappersDiv.append(rappersName).append(rappersImage);

}






});











