$(document).ready(function(){
	
	
	page6_jContainer1_obj=$('#page6_jContainer1_container').layout({
		onresize:function(){},
		center__paneSelector:'.page6_jContainer1_center'
		,north__paneSelector:'.page6_jContainer1_north'
		,north__size:	124
		,north__spacing_open:	0
		,west__paneSelector:'.page6_jContainer1_west'
		,west__size:	264
		,maskIframesOnResize: true
	});
	
	var page6_jTreeView1_setting = {
	};
	var page6_jTreeView1_zNodes =[
		{ name:'OMS', open: true,
			children: [
			{ name:'My SKUS', url:'page8.html', target:'_self'},
			{ name:'Order', open: true,
				children: [
					{ name:'Create GR Orders', url:'page51.html', target:'_self'},
					{ name:'Create GI Orders', url:'page52.html', target:'_self'}
				]},
			{ name:'Inquiry', url:'page16.html', target:'_self'}
			]},
		{ name:'WMS', open: true,
			children: [
			{ name:'Goods Receipt', open: true,
				children: [
					{ name:'Search', url:'page27.html', target:'_self'}
				]},
			{ name:'Put Away', open: true,
				children: [
					{ name:'Search', url:'page29.html', target:'_self'}
				]},
			{ name:'Pick', open: true,
				children: [
					{ name:'Search', url:'page31.html', target:'_self'}
				]},
			{ name:'Deliery', open: true,
				children: [
					{ name:'Search', url:'page33.html', target:'_self'}
				]},
			{ name:'Report', open: true,
				children: [
					{ name:'Sku Aging Report', url:'page35.html', target:'_self'},
					{ name:'Balance Report', url:'page56.html', target:'_self'}
				]},
			{ name:'System', open: true,
				children: [
					{ name:'User and Role', open: true,
						children: [
								{ name:'User', url:'page37.html', target:'_self'},
								{ name:'Role', url:'page38.html', target:'_self'}
						]},
					{ name:'Org Structrue', open: true,
						children: [
								{ name:'Zone', url:'page40.html', target:'_self'},
								{ name:'Bin', url:'page41.html', target:'_self'}
						]}
				]}
			]}
	]
	$.fn.zTree.init($('#page6_jTreeView1_ztree'), page6_jTreeView1_setting, page6_jTreeView1_zNodes);
});

$(document).ready(function(){
	page6_jContainer1_obj.resizeAll();
});
