	
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
	
	mui('#page21_jButton1')[0].addEventListener('tap', function(e) {
		window.open('page6.html','_self');
	})
	
	mui('#page21_jButton2')[0].addEventListener('tap', function(e) {
		window.open('page6.html','_self');
	})
	
	mui('#page21_jButton3')[0].addEventListener('tap', function(e) {
		window.open('page6.html','_self');
	})
