var chh3 = function(a) {
	var logo = document.getElementById('logo');
	console.log(logo.innerHTML);
	var txt = prompt('new text for h3');
	logo.innerHTML = txt;
}
// setTimeout(chh3, 5000);

// $('body').prepend('<p> It is new paragraph from JS jQuery</p>');
// $('p').fadeTo(3000, 0.5);

// $('html').dblclick(function() {
// 	$('p').offset({ left: event.pageX, top: event.pageY });
// });

// $('#logo').offset({ left: 0, top: 0 });
var checkmv ='r';
var to =0, lo =0;
var chmv =function() { 
	if(checkmv=='r') { 
		$('#logo').offset({ left: ++lo, top: 0 }); 
		if($('#logo').offset().left>=200) { checkmv ='b'; }
	} else if(checkmv=='b') { 
		$('#logo').offset({ left: lo, top: ++to }); 
		if($('#logo').offset().top>=200) { checkmv ='l'; }
	} else if(checkmv=='l') { 
		$('#logo').offset({ left: --lo, top: to }); 
		if($('#logo').offset().left<=0) { checkmv ='t'; }
	} else if(checkmv=='t') { 
		$('#logo').offset({ left: lo, top: --to }); 
		if($('#logo').offset().top<=0) { checkmv ='r'; }
	}
};
var stsp =100;
// var inchmv = setInterval(chmv, stsp);
$('#logo').click(function(){
	clearInterval(inchmv);
	// var inchmv = setInterval(chmv, stsp-=1);
	// if(stsp<90) { $('html').append('You WIN'); clearInterval(inchmv); } else { $('html').append(stsp); }
});

/* Treasure map */
$('html').append('<img src="treasure.jpg" width="700px" height="500px">');
$('h1').css('margin', 0+'px');
$('h1').after('<span> Try to find your treasure</span');
$('span').css('font-size', 32+'px');
var imgw = $('img').width();
var treasx = Math.random()*700;
var treasy = Math.random()*500;
$('img').click(function() {
	var epx = event.pageX;
	var epy = event.pageY;
	var diffx = Math.abs(treasx-epx); 
	var diffy = Math.abs(treasy-epy); 
	$('span').text(' x: ' + epx + ', y: ' + epy);
	if(diffx+diffy <= 1300) $('span').offset({ left: epx, top: epy }).text('very cold');
	if(diffx+diffy <= 700) $('span').text('cold');
	if(diffx+diffy <= 300) $('span').text('hot');
	if(diffx+diffy <= 100) $('span').text('very hot');
	if(diffx+diffy <= 50) $('span').text('you WIN');
});
