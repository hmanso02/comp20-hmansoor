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
	var image = 'redline.jpeg';
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
            if (window.XMLHttpRequest)
            {// code for IE7+, Firefox, Chrome, Opera, Safari
              stationRequest=new XMLHttpRequest();
            }
            else
            {// code for IE6, IE5
              stationRequest=new ActiveXObject("Microsoft.XMLHTTP");
            }
            var self = this;
            stationRequest.onreadystatechange=function()
            {
              if (stationRequest.readyState==4 && stationRequest.status==200)
              {
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
        var pathcoords = [
            new google.maps.LatLng(42.365486, -71.103802),
            new google.maps.LatLng(42.36249079, -71.08617653),];
        var path_cent_kend = new google.maps.Polyline({
            path: pathcoords,
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 4
        });
        path_cent_kend.setMap(map);

}




var x=document.getElementById("map_canvas");
function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
   }
function showPosition(position)
  {
        abc = position.coords.latitude;
        def = position.coords.longitude;
        var self_mark = new google.maps.Marker({
                position: new google.maps.LatLng(abc, def),
                title: "MEEEEEE!!!!!"
        });
        self_mark.setMap(map);

        var self_info = new google.maps.InfoWindow();
	google.maps.event.addListener(self_mark, 'click', function() {
                self_info.setContent("sajgfjhsdgfjsdh");
                self_info.open(map, self_mark);
        });
  }
