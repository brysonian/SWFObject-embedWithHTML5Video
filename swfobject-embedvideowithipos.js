/*	embedVideoWithIPOS by Chandler McWilliams <http://github.com/brysonian/SWFObject-embedVideoWithIPOS> 
*/
swfobject.embedVideoWithIPOS = function(swf, id, width, height, version, express, vars, params, attribs, callback, iphonevars) {
	swfobject.embedSWF(swf, id, width, height, version, express, vars, params, attribs, function(e) {
		if(!e.success && ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)))) {
			var w = iphonevars.width?iphonevars.width:'320';
			var h = iphonevars.height?iphonevars.height:'240';
			
			var v = '<video src="'+iphonevars.mp4+'" width="'+w+'" height="'+h+'" ';
			for(var p in iphonevars) if (p != 'mp4' && p != 'width' && p != 'height') v += p+'="'+iphonevars[p]+'" ';
			v += ' >Could not display video.</video>';
			document.getElementById(id).innerHTML = v;
		}
		if (typeof callback == 'function') callback(e);
	});
}