$(document).ready(function(){
	
	
	page31_jContainer1_obj=$('#page31_jContainer1_container').layout({
		onresize:function(){},
		center__paneSelector:'.page31_jContainer1_center'
		,north__paneSelector:'.page31_jContainer1_north'
		,north__size:	124
		,north__spacing_open:	0
		,west__paneSelector:'.page31_jContainer1_west'
		,west__size:	264
		,maskIframesOnResize: true
	});
	
	var page31_jTreeView1_setting = {
	};
	var page31_jTreeView1_zNodes =[
		{ name:'OMS', open: true,
			children: [
			{ name:'Register User', url:'page47.html', target:'_self'},
			{ name:'My SKUS', url:'page8.html', target:'_self'},
			{ name:'Order',
				children: [
					{ name:'Create GR Orders', url:'page51.html', target:'_self'},
					{ name:'Create GI Orders', url:'page52.html', target:'_self'}
				]},
			{ name:'Inquiry', url:'page16.html', target:'_self'}
			]},
		{ name:'WMS', open: true,
			children: [
			{ name:'Goods Receipt',
				children: [
					{ name:'Search', url:'page27.html', target:'_self'}
				]},
			{ name:'Put Away',
				children: [
					{ name:'Search', url:'page29.html', target:'_self'}
				]},
			{ name:'Pick',
				children: [
					{ name:'Search', url:'page31.html', target:'_self'}
				]},
			{ name:'Deliery',
				children: [
					{ name:'Search', url:'page33.html', target:'_self'}
				]},
			{ name:'Report',
				children: [
					{ name:'Report', url:'page35.html', target:'_self'}
				]},
			{ name:'System',
				children: [
					{ name:'User and Role',
						children: [
								{ name:'User', url:'page37.html', target:'_self'},
								{ name:'Role', url:'page38.html', target:'_self'}
						]},
					{ name:'Org Structrue',
						children: [
								{ name:'Zone', url:'page40.html', target:'_self'},
								{ name:'Bin', url:'page41.html', target:'_self'}
						]},
					{ name:'PDA Manager', url:'page42.html', target:'_self'}
				]}
			]}
	]
	$.fn.zTree.init($('#page31_jTreeView1_ztree'), page31_jTreeView1_setting, page31_jTreeView1_zNodes);
});

jQuery().ready(function(){
	jQuery('#page31_jDataGrid1_table').jqGrid({
		datatype: 'local',
		multiselect: true,
		rownumbers: true,
		altRows:true,
		viewrecords: true,
		colNames:['Order','Sku','Product Name','UoM','Qty','FBA#','Location','Fee 1','Fee 2','Fee 3'],
		colModel:[
			{name:'A0',index:'A0', width:49},
			{name:'A1',index:'A1', width:44},
			{name:'A2',index:'A2', width:85},
			{name:'A3',index:'A3', width:45},
			{name:'A4',index:'A4', width:36},
			{name:'A5',index:'A5', width:53},
			{name:'A6',index:'A6', width:72},
			{name:'A7',index:'A7', width:52},
			{name:'A8',index:'A8', width:53},
			{name:'A9',index:'A9', width:50}
		],
		width: 739,
		height: 184
	}).navGrid('#page31_jDataGrid1_pager',{edit:false,add:false,del:false,refresh:false,search:false});
	$('#page31_jDataGrid1_table').closest('.ui-jqgrid-bdiv').css({'overflow-y': 'auto'});
	$('#page31_jDataGrid1_table').jqGrid('addRowData',1,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page31_jDataGrid1_table').jqGrid('addRowData',2,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page31_jDataGrid1_table').jqGrid('addRowData',3,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page31_jDataGrid1_table').jqGrid('addRowData',4,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page31_jDataGrid1_table').jqGrid('addRowData',5,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page31_jDataGrid1_table').jqGrid('addRowData',6,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page31_jDataGrid1_table').jqGrid('addRowData',7,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page31_jDataGrid1_table').jqGrid('addRowData',8,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page31_jDataGrid1_table').jqGrid('addRowData',9,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page31_jDataGrid1_table').jqGrid('addRowData',10,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page31_jDataGrid1_table').jqGrid('addRowData',11,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page31_jDataGrid1_table').jqGrid('addRowData',12,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page31_jDataGrid1_table').jqGrid('addRowData',13,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page31_jDataGrid1_table').jqGrid('addRowData',14,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page31_jDataGrid1_table').jqGrid('addRowData',15,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page31_jDataGrid1_table').jqGrid('addRowData',16,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page31_jDataGrid1_table').jqGrid('addRowData',17,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page31_jDataGrid1_table').jqGrid('addRowData',18,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page31_jDataGrid1_table').jqGrid('addRowData',19,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page31_jDataGrid1_table').trigger('reloadGrid');
})

$(document).ready(function(){
	page31_jContainer1_obj.resizeAll();
});
