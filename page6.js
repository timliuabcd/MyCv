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
			{ name:'Order',
				children: [
					{ name:'Create GR Orders'},
					{ name:'Create GI Orders'}
				]},
			{ name:'Inquiry'}
			]},
		{ name:'WMS', open: true,
			children: [
			{ name:'Goods Receipt',
				children: [
					{ name:'Search'}
				]},
			{ name:'Put Away',
				children: [
					{ name:'Search'}
				]},
			{ name:'Pick',
				children: [
					{ name:'Search'}
				]},
			{ name:'Deliery',
				children: [
					{ name:'Search'}
				]},
			{ name:'Report',
				children: [
					{ name:'Report'}
				]},
			{ name:'System',
				children: [
					{ name:'User and Role',
						children: [
								{ name:'User'},
								{ name:'Role'}
						]},
					{ name:'Org Structrue',
						children: [
								{ name:'Zone'},
								{ name:'Bin'}
						]},
					{ name:'PDA Manager'}
				]}
			]}
	]
	$.fn.zTree.init($('#page6_jTreeView1_ztree'), page6_jTreeView1_setting, page6_jTreeView1_zNodes);
});

$(document).ready(function(){
	page6_jContainer1_obj.resizeAll();
});
