var map;

var addBubbles = function(bubbles) {

   
    var projection = map.projection;

    var options = map.options.bubble_config;

    var bubbleContainer = map.svg.append('g').attr('class', 'bubbles');
    bubbleContainer
        .selectAll('circle.bubble')
        .data(bubbles)
        .enter()
        .append('svg:circle')
        .attr('cx', function(datum) {
            return projection([datum.longitude, datum.latitude])[0];
        })
        .attr('cy', function(datum, index) {
            return projection([datum.longitude, datum.latitude])[1];
        })
        .style('fill', '#00FFFF')
        .style('stroke', function(datum) {
            return map.options.borderColor; 
        })
        .attr('class', 'bubble')
        .style('stroke-width', map.options.borderWidth)
        .attr('fill-opacity', map.options.fillOpacity)
        .attr('r', 0)
        .transition()
        .duration(400)
        .attr('r', function(datum) {
            return datum.radius;
        })
        
        

        	
        
};


$( document ).ready(function() {

     var conn;
     map = new Datamap({element: document.getElementById('container'),
     			   geographyConfig:{
     			   borderColor:"#4A4A70"
     			   
     			   },
		           fills: {
            		    defaultFill: '#2C2C43'            		    
            		                		 
        		   },
        		   bubble_config: {
                            borderWidth: 0,
                            borderColor: '#000',
                            popupOnHover: true,                        
                            fillOpacity: 0.75,
                            animate: true,
                            highlightOnHover: true,
                            highlightBorderColor: '#667FAF',
                            highlightFillColor: '#667FAF',
                            highlightBorderWidth: 1,
                            highlightFillOpacity: 0.85
                   },
                   fillOpacity: 0.5
        		   
        		   
        		   });
                                
	conn = io.connect(connAddr,{'force new connection': true});

	conn.emit('subscribe','userloc');                          
    
    	conn.on('message', function(data) {
		
	
	switch (data['channel']) {
	 
		case "userloc": 
				
		/*This removes the bubbles	
           $('.bubbles')
            .animate({opacity: 0,
                radius: 10},
                100000,
                null,
                function(){
                    this.remove();
                });
		*/
		
		addBubbles([{radius: 5,
                        latitude: data.latitude,
                        longitude: data.longitude,
                        fillKey: '#FFFFFF'}]);
		
		break;	
	}
	
	
	});
});
