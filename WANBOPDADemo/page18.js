	
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
	
	mui('#page18_jButton1')[0].addEventListener('tap', function(e) {
		window.open('page2.html','_self');
	})
