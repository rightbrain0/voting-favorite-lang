  var py= 0 ;
	var js= 0 ;
	var go= 0 ;
	var ruby = 0 ;
	 
	function countingVote(){
		
		var pychecked = document.getElementById('pycheck').checked ;
		var jschecked = document.getElementById('jscheck').checked ; 
		var gochecked = document.getElementById('gocheck').checked ;
		var rubychecked = document.getElementById('rubycheck').checked ;

			if(pychecked){
		    	py = py + 1;
		    	document.getElementById('pyvote').innerHTML = py ;
		    	
			}

			

			if(jschecked){
		    	js = js + 1;
		    	document.getElementById('jsvote').innerHTML = js ;
		    	
			}
			

			if(gochecked){
		    	go = go + 1;
		    	document.getElementById('govote').innerHTML = go ;
		    	
			}
			
			
			if(rubychecked){
		    	ruby = ruby + 1;
		    	document.getElementById('rubyvote').innerHTML = ruby ;
		    	
			}
			

			if(pychecked === false && jschecked === false  && gochecked === false && rubychecked === false){
				alert("You Have TO Check Atleast One Option") ;
			}
			
	
	}
