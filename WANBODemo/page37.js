$(document).ready(function(){
	
	
	page37_jContainer1_obj=$('#page37_jContainer1_container').layout({
		onresize:function(){
			page37_jContainer2_obj.resizeAll();},
		center__paneSelector:'.page37_jContainer1_center'
		,north__paneSelector:'.page37_jContainer1_north'
		,north__size:	124
		,north__spacing_open:	0
		,west__paneSelector:'.page37_jContainer1_west'
		,west__size:	264
		,maskIframesOnResize: true
	});
	
	
	page37_jContainer2_obj=$('#page37_jContainer2_container').layout({
		onresize:function(){},
		center__paneSelector:'.page37_jContainer2_center'
		,north__paneSelector:'.page37_jContainer2_north'
		,north__size:	31
		,north__spacing_open:	0
		,maskIframesOnResize: true
	});
	
	var page37_jTreeView1_setting = {
	};
	var page37_jTreeView1_zNodes =[
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
					{ name:'Search', url:'page57.html', target:'_self'}
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
	$.fn.zTree.init($('#page37_jTreeView1_ztree'), page37_jTreeView1_setting, page37_jTreeView1_zNodes);
});

jQuery().ready(function(){
	jQuery('#page37_jDataGrid1_table').jqGrid({
		datatype: 'local',
		multiselect: true,
		rownumbers: true,
		altRows:true,
		viewrecords: true,
		colNames:['User Code','User Name','Valid From','Valid To'],
		colModel:[
			{name:'A0',index:'A0', width:212},
			{name:'A1',index:'A1', width:199},
			{name:'A2',index:'A2', width:146},
			{name:'A3',index:'A3', width:141}
		],
		width: 724,
		height: 158,
		rowNum:20,
		pager: jQuery('#page37_jDataGrid1_pager')
	}).navGrid('#page37_jDataGrid1_pager',{edit:false,add:false,del:false,refresh:false,search:false});
	$('#page37_jDataGrid1_table').closest('.ui-jqgrid-bdiv').css({'overflow-y': 'auto'});
	$('#page37_jDataGrid1_table').jqGrid('addRowData',1,{A0:'',A1:'',A2:'',A3:''});
	$('#page37_jDataGrid1_table').jqGrid('addRowData',2,{A0:'',A1:'',A2:'',A3:''});
	$('#page37_jDataGrid1_table').jqGrid('addRowData',3,{A0:'',A1:'',A2:'',A3:''});
	$('#page37_jDataGrid1_table').jqGrid('addRowData',4,{A0:'',A1:'',A2:'',A3:''});
	$('#page37_jDataGrid1_table').jqGrid('addRowData',5,{A0:'',A1:'',A2:'',A3:''});
	$('#page37_jDataGrid1_table').jqGrid('addRowData',6,{A0:'',A1:'',A2:'',A3:''});
	$('#page37_jDataGrid1_table').jqGrid('addRowData',7,{A0:'',A1:'',A2:'',A3:''});
	$('#page37_jDataGrid1_table').jqGrid('addRowData',8,{A0:'',A1:'',A2:'',A3:''});
	$('#page37_jDataGrid1_table').jqGrid('addRowData',9,{A0:'',A1:'',A2:'',A3:''});
	$('#page37_jDataGrid1_table').jqGrid('addRowData',10,{A0:'',A1:'',A2:'',A3:''});
	$('#page37_jDataGrid1_table').jqGrid('addRowData',11,{A0:'',A1:'',A2:'',A3:''});
	$('#page37_jDataGrid1_table').jqGrid('addRowData',12,{A0:'',A1:'',A2:'',A3:''});
	$('#page37_jDataGrid1_table').jqGrid('addRowData',13,{A0:'',A1:'',A2:'',A3:''});
	$('#page37_jDataGrid1_table').jqGrid('addRowData',14,{A0:'',A1:'',A2:'',A3:''});
	$('#page37_jDataGrid1_table').jqGrid('addRowData',15,{A0:'',A1:'',A2:'',A3:''});
	$('#page37_jDataGrid1_table').jqGrid('addRowData',16,{A0:'',A1:'',A2:'',A3:''});
	$('#page37_jDataGrid1_table').jqGrid('addRowData',17,{A0:'',A1:'',A2:'',A3:''});
	$('#page37_jDataGrid1_table').jqGrid('addRowData',18,{A0:'',A1:'',A2:'',A3:''});
	$('#page37_jDataGrid1_table').jqGrid('addRowData',19,{A0:'',A1:'',A2:'',A3:''});
	$('#page37_jDataGrid1_table').trigger('reloadGrid');
})

$(document).ready(function(){
	page37_jContainer1_obj.resizeAll();
});
