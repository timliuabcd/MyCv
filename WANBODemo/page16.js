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
	$.fn.zTree.init($('#page16_jTreeView1_ztree'), page16_jTreeView1_setting, page16_jTreeView1_zNodes);
});

jQuery().ready(function(){
	jQuery('#page16_jDataGrid1_table').jqGrid({
		datatype: 'local',
		multiselect: true,
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
			{name:'A7',index:'A7', width:171},
			{name:'A8',index:'A8', width:42},
			{name:'A9',index:'A9', width:32},
			{name:'A10',index:'A10', width:30},
			{name:'A11',index:'A11', width:64},
			{name:'A12',index:'A12', width:64}
		],
		width: 734,
		height: 158,
		rowNum:20,
		pager: jQuery('#page16_jDataGrid1_pager')
	}).navGrid('#page16_jDataGrid1_pager',{edit:false,add:false,del:false,refresh:false,search:false});
	$('#page16_jDataGrid1_table').closest('.ui-jqgrid-bdiv').css({'overflow-y': 'auto'});
	$('#page16_jDataGrid1_table').jqGrid('addRowData',1,{A0:'PO',A1:'P00001',A2:'1',A3:'11',A4:'',A5:'2012-01-01',A6:'已收货',A7:'',A8:'12',A9:'33',A10:'19',A11:'',A12:''});
	$('#page16_jDataGrid1_table').jqGrid('addRowData',2,{A0:'SO',A1:'S00001',A2:'2',A3:'12',A4:'2012-01-01',A5:'',A6:'已发货',A7:'LinK就可以，小快递公司 有个备注就行',A8:'11',A9:'0',A10:'0',A11:'',A12:''});
	$('#page16_jDataGrid1_table').jqGrid('addRowData',3,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'显示税后金额。SAP获取。',A8:'',A9:'',A10:'',A11:'',A12:''});
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
