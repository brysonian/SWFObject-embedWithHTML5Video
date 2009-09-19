/*	embedWithHTML5Video by Chandler McWilliams <http://github.com/brysonian/SWFObject-embedWithHTML5Video> 
*/
swfobject.embedWithHTML5Video = function(swf, id, width, height, version, express, vars, params, attribs, callback, videovars) {
	swfobject.embedSWF(swf, id, width, height, version, express, vars, params, attribs, function(e) {
		var v;
		if(!e.success && (v = document.createElement('video'))) {
			var w = videovars.width?videovars.width:'320';
			var h = videovars.height?videovars.height:'240';
			v.setAttribute('src', videovars.mp4);
			v.setAttribute('width', w);
			v.setAttribute('height', h);
			for(var p in videovars) if (p != 'mp4' && p != 'width' && p != 'height') v.setAttribute(p, videovars[p]);
			v.appendChild(document.createTextNode("Could not display video."));
			var target = document.getElementById(id);
			while(target.hasChildNodes())target.removeChild(target.lastChild);
			target.appendChild(v);
		}
		if (typeof callback == 'function') callback(e);
	});
}