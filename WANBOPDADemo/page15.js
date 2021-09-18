	
	mui.init({
		gestureConfig:{
			tap: true,
			doubletap: true,
			longtap: true,
			hold: true,
			drag: true,
			swipe: true,
			release: true
		}
	});
	
	mui('#page15_jButton1')[0].addEventListener('tap', function(e) {
		window.open('page4.html','_self');
	})
