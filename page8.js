$(document).ready(function(){
	
	
	page8_jContainer1_obj=$('#page8_jContainer1_container').layout({
		onresize:function(){},
		center__paneSelector:'.page8_jContainer1_center'
		,north__paneSelector:'.page8_jContainer1_north'
		,north__size:	124
		,north__spacing_open:	0
		,west__paneSelector:'.page8_jContainer1_west'
		,west__size:	264
		,maskIframesOnResize: true
	});
	
	var page8_jTreeView1_setting = {
	};
	var page8_jTreeView1_zNodes =[
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
	$.fn.zTree.init($('#page8_jTreeView1_ztree'), page8_jTreeView1_setting, page8_jTreeView1_zNodes);
});

jQuery().ready(function(){
	jQuery('#page8_jDataGrid1_table').jqGrid({
		datatype: 'local',
		multiselect: true,
		rownumbers: true,
		altRows:true,
		viewrecords: true,
		colNames:['SKU','Brand','Product Name','UoM','FBA#'],
		colModel:[
			{name:'A0',index:'A0', width:64},
			{name:'A1',index:'A1', width:86},
			{name:'A2',index:'A2', width:85},
			{name:'A3',index:'A3', width:92},
			{name:'A4',index:'A4', width:64}
		],
		width: 739,
		height: 184
	}).navGrid('#page8_jDataGrid1_pager',{edit:false,add:false,del:false,refresh:false,search:false});
	$('#page8_jDataGrid1_table').closest('.ui-jqgrid-bdiv').css({'overflow-y': 'auto'});
	$('#page8_jDataGrid1_table').jqGrid('addRowData',1,{A0:'Sku00001',A1:'Brand',A2:'Product Name',A3:'PCS',A4:'FBA#'});
	$('#page8_jDataGrid1_table').jqGrid('addRowData',2,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page8_jDataGrid1_table').jqGrid('addRowData',3,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page8_jDataGrid1_table').jqGrid('addRowData',4,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page8_jDataGrid1_table').jqGrid('addRowData',5,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page8_jDataGrid1_table').jqGrid('addRowData',6,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page8_jDataGrid1_table').jqGrid('addRowData',7,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page8_jDataGrid1_table').jqGrid('addRowData',8,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page8_jDataGrid1_table').jqGrid('addRowData',9,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page8_jDataGrid1_table').jqGrid('addRowData',10,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page8_jDataGrid1_table').jqGrid('addRowData',11,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page8_jDataGrid1_table').jqGrid('addRowData',12,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page8_jDataGrid1_table').jqGrid('addRowData',13,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page8_jDataGrid1_table').jqGrid('addRowData',14,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page8_jDataGrid1_table').jqGrid('addRowData',15,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page8_jDataGrid1_table').jqGrid('addRowData',16,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page8_jDataGrid1_table').jqGrid('addRowData',17,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page8_jDataGrid1_table').jqGrid('addRowData',18,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page8_jDataGrid1_table').jqGrid('addRowData',19,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page8_jDataGrid1_table').trigger('reloadGrid');
})

$(document).ready(function(){
	page8_jContainer1_obj.resizeAll();
});
