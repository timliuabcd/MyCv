$(document).ready(function(){
	
	
	page16_jContainer1_obj=$('#page16_jContainer1_container').layout({
		onresize:function(){},
		center__paneSelector:'.page16_jContainer1_center'
		,north__paneSelector:'.page16_jContainer1_north'
		,north__size:	124
		,north__spacing_open:	0
		,west__paneSelector:'.page16_jContainer1_west'
		,west__size:	264
		,maskIframesOnResize: true
	});
	
	var page16_jTreeView1_setting = {
	};
	var page16_jTreeView1_zNodes =[
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
	$.fn.zTree.init($('#page16_jTreeView1_ztree'), page16_jTreeView1_setting, page16_jTreeView1_zNodes);
});

jQuery().ready(function(){
	jQuery('#page16_jDataGrid1_table').jqGrid({
		datatype: 'local',
		multiselect: true,
		rownumbers: true,
		altRows:true,
		viewrecords: true,
		colNames:['Order Type','Order','SKU','Qty','Delivery Date','Receive Date','Order Status','Logistics Track','Fee 1','Fee 2','Fee 3','Discount','Total Fee'],
		colModel:[
			{name:'A0',index:'A0', width:64},
			{name:'A1',index:'A1', width:34},
			{name:'A2',index:'A2', width:26},
			{name:'A3',index:'A3', width:20},
			{name:'A4',index:'A4', width:77},
			{name:'A5',index:'A5', width:68},
			{name:'A6',index:'A6', width:76},
			{name:'A7',index:'A7', width:107},
			{name:'A8',index:'A8', width:31},
			{name:'A9',index:'A9', width:32},
			{name:'A10',index:'A10', width:35},
			{name:'A11',index:'A11', width:62},
			{name:'A12',index:'A12', width:64}
		],
		width: 845,
		height: 165,
		rowNum:20,
		pager: jQuery('#page16_jDataGrid1_pager')
	}).navGrid('#page16_jDataGrid1_pager',{edit:false,add:false,del:false,refresh:false,search:false});
	$('#page16_jDataGrid1_table').closest('.ui-jqgrid-bdiv').css({'overflow-y': 'auto'});
	$('#page16_jDataGrid1_table').jqGrid('addRowData',1,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:'',A10:'',A11:'',A12:''});
	$('#page16_jDataGrid1_table').jqGrid('addRowData',2,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:'',A10:'',A11:'',A12:''});
	$('#page16_jDataGrid1_table').jqGrid('addRowData',3,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:'',A10:'',A11:'',A12:''});
	$('#page16_jDataGrid1_table').jqGrid('addRowData',4,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:'',A10:'',A11:'',A12:''});
	$('#page16_jDataGrid1_table').jqGrid('addRowData',5,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:'',A10:'',A11:'',A12:''});
	$('#page16_jDataGrid1_table').jqGrid('addRowData',6,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:'',A10:'',A11:'',A12:''});
	$('#page16_jDataGrid1_table').jqGrid('addRowData',7,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:'',A10:'',A11:'',A12:''});
	$('#page16_jDataGrid1_table').jqGrid('addRowData',8,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:'',A10:'',A11:'',A12:''});
	$('#page16_jDataGrid1_table').jqGrid('addRowData',9,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:'',A10:'',A11:'',A12:''});
	$('#page16_jDataGrid1_table').jqGrid('addRowData',10,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:'',A10:'',A11:'',A12:''});
	$('#page16_jDataGrid1_table').jqGrid('addRowData',11,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:'',A10:'',A11:'',A12:''});
	$('#page16_jDataGrid1_table').jqGrid('addRowData',12,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:'',A10:'',A11:'',A12:''});
	$('#page16_jDataGrid1_table').jqGrid('addRowData',13,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:'',A10:'',A11:'',A12:''});
	$('#page16_jDataGrid1_table').trigger('reloadGrid');
})

$(document).ready(function(){
	page16_jContainer1_obj.resizeAll();
});
