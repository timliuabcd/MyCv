$(document).ready(function(){
	
	
	page40_jContainer1_obj=$('#page40_jContainer1_container').layout({
		onresize:function(){
			page40_jContainer2_obj.resizeAll();},
		center__paneSelector:'.page40_jContainer1_center'
		,north__paneSelector:'.page40_jContainer1_north'
		,north__size:	124
		,north__spacing_open:	0
		,west__paneSelector:'.page40_jContainer1_west'
		,west__size:	264
		,maskIframesOnResize: true
	});
	
	page40_jContainer2_DataGrids=new Array("page40_jDataGrid1","49");
	page40_jContainer2_obj=$('#page40_jContainer2_container').layout({
		onresize:function(){
			Vjjq.resizegrid(page40_jContainer2_DataGrids);},
		center__paneSelector:'.page40_jContainer2_center'
		,north__paneSelector:'.page40_jContainer2_north'
		,north__size:	31
		,north__spacing_open:	0
		,maskIframesOnResize: true
	});
	
	var page40_jTreeView1_setting = {
	};
	var page40_jTreeView1_zNodes =[
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
	$.fn.zTree.init($('#page40_jTreeView1_ztree'), page40_jTreeView1_setting, page40_jTreeView1_zNodes);
});

jQuery().ready(function(){
	jQuery('#page40_jDataGrid1_table').jqGrid({
		datatype: 'local',
		multiselect: true,
		altRows:true,
		viewrecords: true,
		colNames:['Zone Code','Zone Name','Warehouse Code','Created by','Created on'],
		colModel:[
			{name:'A0',index:'A0', width:93},
			{name:'A1',index:'A1', width:64},
			{name:'A2',index:'A2', width:91},
			{name:'A3',index:'A3', width:94},
			{name:'A4',index:'A4', width:64}
		],
		width: '100%',
		height: '100%',
		rowNum:20,
		pager: jQuery('#page40_jDataGrid1_pager')
	}).navGrid('#page40_jDataGrid1_pager',{edit:false,add:false,del:false,refresh:false,search:false});
	$('#page40_jDataGrid1_table').closest('.ui-jqgrid-bdiv').css({'overflow-y': 'auto'});
	$('#page40_jDataGrid1_table').jqGrid('addRowData',1,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page40_jDataGrid1_table').jqGrid('addRowData',2,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page40_jDataGrid1_table').jqGrid('addRowData',3,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page40_jDataGrid1_table').jqGrid('addRowData',4,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page40_jDataGrid1_table').jqGrid('addRowData',5,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page40_jDataGrid1_table').jqGrid('addRowData',6,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page40_jDataGrid1_table').jqGrid('addRowData',7,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page40_jDataGrid1_table').jqGrid('addRowData',8,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page40_jDataGrid1_table').jqGrid('addRowData',9,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page40_jDataGrid1_table').jqGrid('addRowData',10,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page40_jDataGrid1_table').jqGrid('addRowData',11,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page40_jDataGrid1_table').jqGrid('addRowData',12,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page40_jDataGrid1_table').jqGrid('addRowData',13,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page40_jDataGrid1_table').jqGrid('addRowData',14,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page40_jDataGrid1_table').jqGrid('addRowData',15,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page40_jDataGrid1_table').jqGrid('addRowData',16,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page40_jDataGrid1_table').jqGrid('addRowData',17,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page40_jDataGrid1_table').jqGrid('addRowData',18,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page40_jDataGrid1_table').jqGrid('addRowData',19,{A0:'',A1:'',A2:'',A3:'',A4:''});
	$('#page40_jDataGrid1_table').trigger('reloadGrid');
})

$(document).ready(function(){
	page40_jContainer1_obj.resizeAll();
});
