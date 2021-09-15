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
	
	page37_jContainer2_DataGrids=new Array("page37_jDataGrid1","49");
	page37_jContainer2_obj=$('#page37_jContainer2_container').layout({
		onresize:function(){
			Vjjq.resizegrid(page37_jContainer2_DataGrids);},
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
	$.fn.zTree.init($('#page37_jTreeView1_ztree'), page37_jTreeView1_setting, page37_jTreeView1_zNodes);
});

jQuery().ready(function(){
	jQuery('#page37_jDataGrid1_table').jqGrid({
		datatype: 'local',
		multiselect: true,
		altRows:true,
		viewrecords: true,
		colNames:['User Code','User Name','Vaild From','Vaild To'],
		colModel:[
			{name:'A0',index:'A0', width:93},
			{name:'A1',index:'A1', width:64},
			{name:'A2',index:'A2', width:64},
			{name:'A3',index:'A3', width:94}
		],
		width: '100%',
		height: '100%',
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
