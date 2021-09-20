$(document).ready(function(){
	
	
	page20_jContainer1_obj=$('#page20_jContainer1_container').layout({
		onresize:function(){
			page20_jContainer2_obj.resizeAll();},
		center__paneSelector:'.page20_jContainer1_center'
		,north__paneSelector:'.page20_jContainer1_north'
		,north__size:	124
		,north__spacing_open:	0
		,west__paneSelector:'.page20_jContainer1_west'
		,west__size:	264
		,maskIframesOnResize: true
	});
	
	page20_jContainer2_DataGrids=new Array("page20_jDataGrid1","49");
	page20_jContainer2_obj=$('#page20_jContainer2_container').layout({
		onresize:function(){
			Vjjq.resizegrid(page20_jContainer2_DataGrids);},
		center__paneSelector:'.page20_jContainer2_center'
		,north__paneSelector:'.page20_jContainer2_north'
		,north__size:	31
		,north__spacing_open:	0
		,maskIframesOnResize: true
	});
	
	var page20_jTreeView1_setting = {
	};
	var page20_jTreeView1_zNodes =[
		{ name:'OMS',
			children: [
			{ name:'My SKUS', url:'page8.html', target:'_self'},
			{ name:'Order',
				children: [
					{ name:'Create GR Orders'},
					{ name:'Create GI Orders'}
				]},
			{ name:'Inquiry'}
			]},
		{ name:'WMS',
			children: [
			{ name:'Goods Receipt',
				children: [
					{ name:'New Task'},
					{ name:'Search'}
				]},
			{ name:'Put Away',
				children: [
					{ name:'New Task'},
					{ name:'Search'}
				]},
			{ name:'Pick',
				children: [
					{ name:'New Task'},
					{ name:'Search'}
				]},
			{ name:'Deliery',
				children: [
					{ name:'New Task'},
					{ name:'Search'}
				]},
			{ name:'Sort',
				children: [
					{ name:'节点'},
					{ name:'节点'}
				]},
			{ name:'Report',
				children: [
					{ name:'Phy Inv Report'}
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
				]},
			{ name:'Message Center',
				children: [
					{ name:'System Post'}
				]}
			]}
	]
	$.fn.zTree.init($('#page20_jTreeView1_ztree'), page20_jTreeView1_setting, page20_jTreeView1_zNodes);
});

jQuery().ready(function(){
	jQuery('#page20_jDataGrid1_table').jqGrid({
		datatype: 'local',
		multiselect: true,
		altRows:true,
		viewrecords: true,
		colNames:['人员编号','姓名','性别','部门','电话','手机','Email','备注'],
		colModel:[
			{name:'A0',index:'A0', width:93},
			{name:'A1',index:'A1', width:64},
			{name:'A2',index:'A2', width:64},
			{name:'A3',index:'A3', width:94},
			{name:'A4',index:'A4', width:64},
			{name:'A5',index:'A5', width:127},
			{name:'A6',index:'A6', width:130},
			{name:'A7',index:'A7', width:64}
		],
		width: '100%',
		height: '100%',
		rowNum:20,
		pager: jQuery('#page20_jDataGrid1_pager')
	}).navGrid('#page20_jDataGrid1_pager',{edit:false,add:false,del:false,refresh:false,search:false});
	$('#page20_jDataGrid1_table').closest('.ui-jqgrid-bdiv').css({'overflow-y': 'auto'});
	$('#page20_jDataGrid1_table').jqGrid('addRowData',1,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
	$('#page20_jDataGrid1_table').jqGrid('addRowData',2,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
	$('#page20_jDataGrid1_table').jqGrid('addRowData',3,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
	$('#page20_jDataGrid1_table').jqGrid('addRowData',4,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
	$('#page20_jDataGrid1_table').jqGrid('addRowData',5,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
	$('#page20_jDataGrid1_table').jqGrid('addRowData',6,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
	$('#page20_jDataGrid1_table').jqGrid('addRowData',7,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
	$('#page20_jDataGrid1_table').jqGrid('addRowData',8,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
	$('#page20_jDataGrid1_table').jqGrid('addRowData',9,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
	$('#page20_jDataGrid1_table').jqGrid('addRowData',10,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
	$('#page20_jDataGrid1_table').jqGrid('addRowData',11,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
	$('#page20_jDataGrid1_table').jqGrid('addRowData',12,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
	$('#page20_jDataGrid1_table').jqGrid('addRowData',13,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
	$('#page20_jDataGrid1_table').jqGrid('addRowData',14,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
	$('#page20_jDataGrid1_table').jqGrid('addRowData',15,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
	$('#page20_jDataGrid1_table').jqGrid('addRowData',16,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
	$('#page20_jDataGrid1_table').jqGrid('addRowData',17,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
	$('#page20_jDataGrid1_table').jqGrid('addRowData',18,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
	$('#page20_jDataGrid1_table').jqGrid('addRowData',19,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
	$('#page20_jDataGrid1_table').trigger('reloadGrid');
})

$(document).ready(function(){
	page20_jContainer1_obj.resizeAll();
});
