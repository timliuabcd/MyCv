$(document).ready(function(){
	
	
	page42_jContainer1_obj=$('#page42_jContainer1_container').layout({
		onresize:function(){
			page42_jContainer2_obj.resizeAll();},
		center__paneSelector:'.page42_jContainer1_center'
		,north__paneSelector:'.page42_jContainer1_north'
		,north__size:	124
		,north__spacing_open:	0
		,west__paneSelector:'.page42_jContainer1_west'
		,west__size:	264
		,maskIframesOnResize: true
	});
	
	page42_jContainer2_DataGrids=new Array("page42_jDataGrid1","49");
	page42_jContainer2_obj=$('#page42_jContainer2_container').layout({
		onresize:function(){
			Vjjq.resizegrid(page42_jContainer2_DataGrids);},
		center__paneSelector:'.page42_jContainer2_center'
		,north__paneSelector:'.page42_jContainer2_north'
		,north__size:	31
		,north__spacing_open:	0
		,maskIframesOnResize: true
	});
	
	var page42_jTreeView1_setting = {
	};
	var page42_jTreeView1_zNodes =[
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
	$.fn.zTree.init($('#page42_jTreeView1_ztree'), page42_jTreeView1_setting, page42_jTreeView1_zNodes);
});

jQuery().ready(function(){
	jQuery('#page42_jDataGrid1_table').jqGrid({
		datatype: 'local',
		multiselect: true,
		altRows:true,
		viewrecords: true,
		colNames:['Apk Version','Create Time'],
		colModel:[
			{name:'A0',index:'A0', width:93},
			{name:'A1',index:'A1', width:64}
		],
		width: '100%',
		height: '100%',
		rowNum:20,
		pager: jQuery('#page42_jDataGrid1_pager')
	}).navGrid('#page42_jDataGrid1_pager',{edit:false,add:false,del:false,refresh:false,search:false});
	$('#page42_jDataGrid1_table').closest('.ui-jqgrid-bdiv').css({'overflow-y': 'auto'});
	$('#page42_jDataGrid1_table').jqGrid('addRowData',1,{A0:'',A1:''});
	$('#page42_jDataGrid1_table').jqGrid('addRowData',2,{A0:'',A1:''});
	$('#page42_jDataGrid1_table').jqGrid('addRowData',3,{A0:'',A1:''});
	$('#page42_jDataGrid1_table').jqGrid('addRowData',4,{A0:'',A1:''});
	$('#page42_jDataGrid1_table').jqGrid('addRowData',5,{A0:'',A1:''});
	$('#page42_jDataGrid1_table').jqGrid('addRowData',6,{A0:'',A1:''});
	$('#page42_jDataGrid1_table').jqGrid('addRowData',7,{A0:'',A1:''});
	$('#page42_jDataGrid1_table').jqGrid('addRowData',8,{A0:'',A1:''});
	$('#page42_jDataGrid1_table').jqGrid('addRowData',9,{A0:'',A1:''});
	$('#page42_jDataGrid1_table').jqGrid('addRowData',10,{A0:'',A1:''});
	$('#page42_jDataGrid1_table').jqGrid('addRowData',11,{A0:'',A1:''});
	$('#page42_jDataGrid1_table').jqGrid('addRowData',12,{A0:'',A1:''});
	$('#page42_jDataGrid1_table').jqGrid('addRowData',13,{A0:'',A1:''});
	$('#page42_jDataGrid1_table').jqGrid('addRowData',14,{A0:'',A1:''});
	$('#page42_jDataGrid1_table').jqGrid('addRowData',15,{A0:'',A1:''});
	$('#page42_jDataGrid1_table').jqGrid('addRowData',16,{A0:'',A1:''});
	$('#page42_jDataGrid1_table').jqGrid('addRowData',17,{A0:'',A1:''});
	$('#page42_jDataGrid1_table').jqGrid('addRowData',18,{A0:'',A1:''});
	$('#page42_jDataGrid1_table').jqGrid('addRowData',19,{A0:'',A1:''});
	$('#page42_jDataGrid1_table').trigger('reloadGrid');
})

$(document).ready(function(){
	page42_jContainer1_obj.resizeAll();
});
