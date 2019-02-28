$('#TRANS_ARRTIME_EXP').datetimepicker({
    language: 'zh',
    format: 'yyyy-mm-dd',
    todayBtn: true,
    autoclose: true
});
// 时间选择
$('#TRANS_DEPART_EXP').datetimepicker({
    language: 'zh',
    format: 'yyyy-mm-dd',
    todayBtn: true,
    autoclose: true
});
// 时间选择
$('#TRANS_REACH_EXP').datetimepicker({
    language: 'zh',
    format: 'yyyy-mm-dd',
    todayBtn: true,
    autoclose: true
});
// 时间选择
$('#TRANS_ARRTIME').datetimepicker({
    language: 'zh',
    format: 'yyyy-mm-dd',
    todayBtn: true,
    autoclose: true
});
// 时间选择
$('#TRANS_DEPART').datetimepicker({
    language: 'zh',
    format: 'yyyy-mm-dd',
    todayBtn: true,
    autoclose: true
});
// 时间选择
$('#TRANS_REACH').datetimepicker({
    language: 'zh',
    format: 'yyyy-mm-dd',
    todayBtn: true,
    autoclose: true
});
function addOrder()
{
    layer.open({
        type: 2,//0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
        title: '<span class="text-color">新增运单</span>',//请修改span中间的内容
        shadeClose: true,//开启阴影关闭
        closeBtn: 1, //不显示关闭按钮
        shade: 0.6,
        maxmin: false,//开启最大化最小化按钮
        area: ['90%', '90%'],//此处可以改为100%，该数值按UI图比例算出
        content: 'tms-trans-add.html'//如果不想出现滚动条['content.html', 'no']
    });
}
