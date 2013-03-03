coordinates = [
                       {"lat": 42.395428, "lng": -71.142483 , "lat1": 42.39674, "lng1": -71.121815}, 
		       {"lat": 42.39674, "lng": -71.121815 , "lat1": 42.3884, "lng1": -71.119149 }, 
		       {"lat": 42.3884, "lng": -71.119149 , "lat1": 42.373362, "lng1": -71.118956}, 
		       {"lat": 42.373362, "lng": -71.118956 , "lat1": 42.365486, "lng1": -71.103802 }, 
		       {"lat": 42.365486, "lng": -71.103802 , "lat1": 42.36249079, "lng1": -71.08617653}, 
		       {"lat": 42.36249079, "lng": -71.08617653 , "lat1": 42.361166, "lng1": -71.070628 }, 
		       {"lat": 42.361166, "lng": -71.070628 , "lat1": 42.35639457, "lng1": -71.0624242 }, 
		       {"lat": 42.35639457, "lng": -71.0624242 , "lat1": 42.355518, "lng1": -71.060225  }, 
		       {"lat": 42.355518, "lng": -71.060225 , "lat1": 42.352271, "lng1": -71.055242}, 
		       {"lat": 42.352271, "lng": -71.055242 , "lat1": 42.342622, "lng1": -71.056967 }, 
		       {"lat": 42.342622, "lng": -71.056967 , "lat1": 42.330154, "lng1": -71.057655 }, 
		       {"lat": 42.330154, "lng": -71.057655 , "lat1": 42.320685, "lng1": -71.052391}, 
		       {"lat": 42.320685, "lng": -71.052391 , "lat1": 42.31129, "lng1": -71.053331}, 
		       {"lat": 42.31129, "lng": -71.053331 , "lat1": 42.300093, "lng1": -71.061667}, 
		       {"lat": 42.300093, "lng": -71.061667 , "lat1": 42.29312583, "lng1": -71.06573796}, 
		       {"lat": 42.29312583, "lng": -71.06573796 , "lat1": 42.284652, "lng1": -71.064489}, 
		       {"lat": 42.284652, "lng": -71.064489 , "lat1": 42.275275, "lng1": -71.029583}, 
		       {"lat": 42.275275, "lng": -71.029583 , "lat1": 42.2665139, "lng1": -71.0203369}, 
		       {"lat": 42.2665139, "lng": -71.0203369 , "lat1": 42.251809, "lng1": -71.005409 }, 
		       {"lat": 42.251809, "lng": -71.005409 , "lat1": 42.233391, "lng1": -71.007153}, 
		       {"lat": 42.233391, "lng": -71.007153 , "lat1": 42.2078543, "lng1": -71.0011385 }, 
		      ] 
coords = [     
                       {"lat": 42.395428, "lng": -71.142483, "title": "Alewife" }, 
		       {"lat": 42.39674, "lng": -71.121815, "title": "Davis"}, 
		       {"lat": 42.3884, "lng": -71.119149, "title": "Porter" }, 
		       {"lat": 42.373362, "lng": -71.118956, "title": "Harvard" }, 
		       {"lat": 42.365486, "lng": -71.103802, "title": "Central" }, 
		       {"lat": 42.36249079, "lng": -71.08617653, "title": "Kendall" }, 
		       {"lat": 42.361166, "lng": -71.070628, "title": "Charles" }, 
		       {"lat": 42.35639457, "lng": -71.0624242, "title": "Park" }, 
		       {"lat": 42.355518, "lng": -71.060225, "title": "Downtown Crossing" }, 
		       {"lat": 42.352271, "lng": -71.055242, "title": "South" }, 
		       {"lat": 42.342622, "lng": -71.056967, "title": "Broadway" }, 
		       {"lat": 42.330154, "lng": -71.057655, "title": "Andrew" }, 
		       {"lat": 42.320685, "lng": -71.052391, "title": "JFK" }, 
		       {"lat": 42.31129, "lng": -71.053331, "title": "Savin" }, 
		       {"lat": 42.300093, "lng": -71.061667, "title": "Fields" }, 
		       {"lat": 42.29312583, "lng": -71.06573796, "title": "Shawmut" }, 
		       {"lat": 42.284652, "lng": -71.064489, "title": "Ashmont" }, 
		       {"lat": 42.275275, "lng": -71.029583, "title": "North Quincy" }, 
		       {"lat": 42.2665139, "lng": -71.0203369, "title": "Wollaston" }, 
		       {"lat": 42.251809, "lng": -71.005409, "title": "Quincy Center" }, 
		       {"lat": 42.233391, "lng": -71.007153, "title": "Quincy Adams" }, 
		       {"lat": 42.2078543, "lng": -71.0011385, "title": "Braintree" } 
		 ]

function initialize() {
  draw_stations();
  getLocation();
}

markers = [];

function draw_stations(){
        var mapOptions = {
          center: new google.maps.LatLng(42.320685, -71.052391),
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
	var image = 'assets/redline.jpeg';
        map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
        var stat_mark = new google.maps.Marker({
                position: new google.maps.LatLng(42.395428, -71.142483),
                title: "Alewife",
 		customInfo: {"north":"RALEN", "south": "NULL"},
		icon: image
        });
        markers.push(stat_mark);
        stat_mark = new google.maps.Marker({
                position: new google.maps.LatLng(42.39674, -71.121815),
                title: "Davis",
 		customInfo: {"north":"RDAVN", "south": "RDAVS"},
		icon: image
        });
        markers.push(stat_mark);   
        
        stat_mark = new google.maps.Marker({
                position: new google.maps.LatLng(42.3884, -71.119149),
                title: "Porter",
 		customInfo: {"north":"RPORN", "south": "RPORS"},
		icon: image
        });
        markers.push(stat_mark);   
        stat_mark = new google.maps.Marker({
                position: new google.maps.LatLng(42.373362, -71.118956),
                title: "Harvard",
 		customInfo: {"north":"RHARN", "south": "RHARS"},
		icon: image
        });
        markers.push(stat_mark);   

        stat_mark = new google.maps.Marker({
                position: new google.maps.LatLng(42.365486, -71.103802),
                title: "Central",
 		customInfo: {"north":"RCENN", "south": "RCENS"},
		icon: image
        });
        markers.push(stat_mark); 

        stat_mark = new google.maps.Marker({
                position: new google.maps.LatLng(42.36249079, -71.08617653),
                title: "Kendall",
 		customInfo: {"north":"RKENN", "south": "RKENS"},
		icon: image
        });
        markers.push(stat_mark); 


        stat_mark = new google.maps.Marker({
                position: new google.maps.LatLng(42.361166, -71.070628),
                title: "Charles",
 		customInfo: {"north":"RMGHN", "south": "RMGHS"},
		icon: image
        });
        markers.push(stat_mark); 


        stat_mark = new google.maps.Marker({
                position: new google.maps.LatLng(42.35639457, -71.0624242),
                title: "Park",
 		customInfo: {"north":"RPRKN", "south": "RPRKS"},
		icon: image
        });
        markers.push(stat_mark); 

        stat_mark = new google.maps.Marker({
                position: new google.maps.LatLng(42.355518, -71.060225),
                title: "Downtown Crossing",
 		customInfo: {"north":"RDTCN", "south": "RDTCS"},
		icon: image
        });
        markers.push(stat_mark); 

        stat_mark = new google.maps.Marker({
                position: new google.maps.LatLng(42.352271, -71.055242),
                title: "South",
 		customInfo: {"north":"RSOUN", "south": "RSOUS"},
		icon: image
        });
        markers.push(stat_mark); 

        stat_mark = new google.maps.Marker({
                position: new google.maps.LatLng(42.342622, -71.056967),
                title: "Broadway",
 		customInfo: {"north":"RBRON", "south": "RBROS"},
		icon: image
        });
        markers.push(stat_mark); 

        stat_mark = new google.maps.Marker({
                position: new google.maps.LatLng(42.330154, -71.057655),
                title: "Andrew",
 		customInfo: {"north":"RANDN", "south": "RANDS"},
		icon: image
        });
        markers.push(stat_mark); 

        stat_mark = new google.maps.Marker({
                position: new google.maps.LatLng(42.320685, -71.052391),
                title: "JFK",
 		customInfo: {"north":"RJFKN", "south": "RJFKS"},
		icon: image
        });
        markers.push(stat_mark); 

        stat_mark = new google.maps.Marker({
                position: new google.maps.LatLng(42.31129, -71.053331),
                title: "Savin",
 		customInfo: {"north":"RSAVN", "south": "RSAVS"},
		icon: image
        });
        markers.push(stat_mark); 


        stat_mark = new google.maps.Marker({
                position: new google.maps.LatLng(42.300093, -71.061667),
                title: "Fields",
 		customInfo: {"north":"RFIEN", "south": "RFIES"},
		icon: image
        });
        markers.push(stat_mark); 


        stat_mark = new google.maps.Marker({
                position: new google.maps.LatLng(42.29312583, -71.06573796),
                title: "Shawmut",
 		customInfo: {"north":"RSHAN", "south": "RSHAS"},
		icon: image
        });
        markers.push(stat_mark); 


        stat_mark = new google.maps.Marker({
                position: new google.maps.LatLng(42.284652, -71.064489),
                title: "Ashmont",
 		customInfo: {"north":"NULL", "south": "RASHS"},
		icon: image
        });
        markers.push(stat_mark); 

        stat_mark = new google.maps.Marker({
                position: new google.maps.LatLng(42.275275, -71.029583),
                title: "North Quincy",
 		customInfo: {"north":"RNQUN", "south": "RNQUS"},
		icon: image
        });
        markers.push(stat_mark); 

        stat_mark = new google.maps.Marker({
                position: new google.maps.LatLng(42.2665139, -71.0203369),
                title: "Wollaston",
 		customInfo: {"north":"RWOLN", "south": "RWOLS"},
		icon: image
        });
        markers.push(stat_mark); 

        stat_mark = new google.maps.Marker({
                position: new google.maps.LatLng(42.251809, -71.005409),
                title: "Quincy Center",
 		customInfo: {"north":"RQUCN", "south": "RQUCS"},
		icon: image
        });
        markers.push(stat_mark); 


        stat_mark = new google.maps.Marker({
                position: new google.maps.LatLng(42.233391, -71.007153),
                title: "Quincy Adams",
 		customInfo: {"north":"RQUAN", "south": "RQUAS"},
		icon: image
        });
        markers.push(stat_mark); 

        stat_mark = new google.maps.Marker({
                position: new google.maps.LatLng(42.2078543, -71.0011385),
                title: "Braintree",
 		customInfo: {"north":"NULL", "south": "RBRAS"},
		icon: image
        });
        markers.push(stat_mark); 

  for (k = 0; k < markers.length; k++){
    markers[k].setMap(map); 
  }
  for (i = 0; i < markers.length; i++){
    var info = new google.maps.InfoWindow();
    google.maps.event.addListener(markers[i], 'click', function() {
      var stationRequest;
      if (window.XMLHttpRequest) {
        stationRequest=new XMLHttpRequest();
      }
      else {
        stationRequest=new ActiveXObject("Microsoft.XMLHTTP");
      }
      var self = this;
      stationRequest.onreadystatechange=function() {
        if (stationRequest.readyState==4 && stationRequest.status==200) {
          scheduleData = stationRequest.responseText;
          parsed = JSON.parse(scheduleData);
          var timingsn = "";
          var timingss = "";
          for (j = 0; j < parsed.length; j++){
            if (parsed[j]['PlatformKey'] == self.customInfo['north']){
		    timingsn = "North: " + parsed[j]['TimeRemaining'] + "<br>";          
            }
            if (parsed[j]['PlatformKey'] == self.customInfo['south']){ 
		    timingss = "South: " + parsed[j]['TimeRemaining'];
            }
          }
	info.setContent(self.title + "<br>" + timingsn + timingss);
        info.open(map, self);		
      }
        else if (stationRequest.readyState==4){
          document.write("Page not found ..");
        }
      }
      stationRequest.open("GET","http://mbtamap-cedar.herokuapp.com/mapper/redline.json",true);
      stationRequest.send();
    });
  }     
  draw_polyline();
}

function draw_polyline(){
  for (i = 0; i < coordinates.length; i++){
    var pathcoords = [
    new google.maps.LatLng(coordinates[i]['lat'], coordinates[i]['lng'] ),
    new google.maps.LatLng(coordinates[i]['lat1'], coordinates[i]['lng1'] ),];
    var path_cent_kend = new google.maps.Polyline({
      path: pathcoords,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    path_cent_kend.setMap(map);        
  }
}

Number.prototype.toRad = function() {
   return this * Math.PI / 180;
}

var x=document.getElementById("map_canvas");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function find_dist(lat1, lat2, lng1, lng2){
  var dist = 0;
  var R = 6371;
  var a = lat2 - lat1;
  var dlat= a.toRad();
  var b = lng2 - lng1;
  var dlng = b.toRad();
  var x = Math.sin(dlat/2) * Math.sin(dlat/2) +
          Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * Math.sin(dlng/2) * Math.sin(dlng/2);
  var y = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1-x));
  var z = R * y;
  return z;
}
   
function showPosition(position) {
  abc = position.coords.latitude;
  def = position.coords.longitude;
  var self_mark = new google.maps.Marker({
        position: new google.maps.LatLng(abc, def),
        title: "ME",
  });
  self_mark.setMap(map);

  min_dist = find_dist(coords[0]['lat'], abc, coords[0]['lng'], def);

  var Title;
  for (i = 1; i < coords.length; i++){
    dis = find_dist(coords[i]['lat'], abc, coords[i]['lng'], def);
    if (dis < min_dist){
      min_dist = dis;
      Title = coords[i]['title'];
    }
  }
  var self_info = new google.maps.InfoWindow();
  google.maps.event.addListener(self_mark, 'click', function() {
    self_info.setContent("I am here!  " + "<br>" + "Closest Station: " + Title + "<br>" + "Distance: " + min_dist);
    self_info.open(map, self_mark);
  });

  var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp=new XMLHttpRequest();
  }
  else {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      str = xmlhttp.responseText;
      parsed = JSON.parse(str);
      locations = [];
      for (i = 0; i <parsed.length; i++){  
        var dst = find_dist(parsed[i]['loc']['latitude'], abc, parsed[i]['loc']['longitude'], def);
        if (parsed[i]['name'] == "Waldo"){
          image = "assets/waldo.png";
        }
        else if (parsed[i]['name'] == "Carmen Sandiego"){
	  image = "assets/carmen.png";
	}
        wal_carm = new google.maps.Marker({
          position: new google.maps.LatLng(parsed[i]['loc']['latitude'], parsed[i]['loc']['longitude']),
          title: parsed[i]['name'],
          customInfo: {"info": parsed[i]['loc']['note'], "distance" : dst}, 
          icon: image
        });	  
        locations.push(wal_carm);
      }
      for (j = 0; j < locations.length; j++){
 	locations[j].setMap(map);
        var wal_carm_info = new google.maps.InfoWindow();
    	google.maps.event.addListener(locations[j], 'click', function() {
          wal_carm_info.setContent(this.title + "<br>" + this.customInfo['info'] + "<br>" + "Distance from you: " + this.customInfo['distance'] );
          wal_carm_info.open(map, this);
        });
      }
    }
  }
  xmlhttp.open("GET","http://messagehub.herokuapp.com/a3.json",true);
  xmlhttp.send();
}
