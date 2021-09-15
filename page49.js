
jQuery().ready(function(){
	jQuery('#page49_jDataGrid1_table').jqGrid({
		datatype: 'local',
		multiselect: true,
		altRows:true,
		viewrecords: true,
		colNames:['商品编号','商品名称','数量','价格','型号','厂家'],
		colModel:[
			{name:'A0',index:'A0', width:64},
			{name:'A1',index:'A1', width:127},
			{name:'A2',index:'A2', width:64},
			{name:'A3',index:'A3', width:64},
			{name:'A4',index:'A4', width:64},
			{name:'A5',index:'A5', width:145}
		],
		width: 622,
		height: 158,
		rowNum:20,
		pager: jQuery('#page49_jDataGrid1_pager')
	}).navGrid('#page49_jDataGrid1_pager',{edit:false,add:false,del:false,refresh:false,search:false});
	$('#page49_jDataGrid1_table').closest('.ui-jqgrid-bdiv').css({'overflow-y': 'auto'});
	$('#page49_jDataGrid1_table').jqGrid('addRowData',1,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page49_jDataGrid1_table').jqGrid('addRowData',2,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page49_jDataGrid1_table').jqGrid('addRowData',3,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page49_jDataGrid1_table').jqGrid('addRowData',4,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page49_jDataGrid1_table').jqGrid('addRowData',5,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page49_jDataGrid1_table').jqGrid('addRowData',6,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page49_jDataGrid1_table').jqGrid('addRowData',7,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page49_jDataGrid1_table').jqGrid('addRowData',8,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page49_jDataGrid1_table').jqGrid('addRowData',9,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page49_jDataGrid1_table').jqGrid('addRowData',10,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page49_jDataGrid1_table').jqGrid('addRowData',11,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page49_jDataGrid1_table').jqGrid('addRowData',12,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page49_jDataGrid1_table').jqGrid('addRowData',13,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page49_jDataGrid1_table').jqGrid('addRowData',14,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page49_jDataGrid1_table').jqGrid('addRowData',15,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page49_jDataGrid1_table').jqGrid('addRowData',16,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page49_jDataGrid1_table').jqGrid('addRowData',17,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page49_jDataGrid1_table').jqGrid('addRowData',18,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page49_jDataGrid1_table').jqGrid('addRowData',19,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page49_jDataGrid1_table').trigger('reloadGrid');
})

$(function(){
	$("#page49_jDateTimePicker1_edit").datepicker({
		changeMonth: true,
		changeYear: true,
		dateFormat: "mm/dd/yy"
	});
});
