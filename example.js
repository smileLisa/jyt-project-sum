/**
 * Created by lisaHao on 2016/12/7.
 */

//���ͼƬ�Ŵ�鿴-->�鿴��ͬ  ���layer��Ṧ�ܣ�layer�汾2.0+��
function imgPhotos(dataJson,index){
     var windWidth = $(window).width() - 100;
     var winHeight = $(window).height() - 100;
    layer.photos({
        photos:{
            "data":dataJson,
            "start":index
        },
        area:['auto','auto'],
        shift:5,
        closeBtn:1
    })
};

//ʹ�÷���
$(".img").on('click',function(){
    var parNode = $(this).parent(".img-parent");
    var dataSrc = [];
    parNode.find("img").each(function(){
        dataSrc.push({"src":$this.attr('src')});
    });
    var index = $(this).index();
    parent.imgPhotos(dataSrc,index);
});



// Urlת��  ��������Ŀ��ת������ҳ��
$(".status-tabs li a").each(function(){
    var startUrl = $(this).attr('href');
    var codeUrl = '/index?page='+ encodeURIComponent(startUrl);
    $(this).attr('href',codeUrl);
});



//ͨ������ĳ�������Ӳ˵�   ���������Զ���λ��ĳҳ��ĸ�ҳ��ĵ�������������̨1.5��

     //����url
function searchParse(){
    var resultObj = {};
    var search = window.location.search;  //��ȡurl
    if(search && search.length > 1){
        var search = search.substring(1);
        var items = search.split('&');
        for(var index = 0 ; index < items.length ; index++ ){
            if(! items[index]){
                continue;
            }
            var kv = items[index].split('=');
            resultObj[kv[0]] = typeof kv[1] === "undefined" ? "":kv[1];
        }
    }
    return resultObj;
}
var searchObj = searchParse();
var pageValue = searchObj["page"];

if(window.location.search.indexOf('page')>-1 &&  (pageValue != '') && (pageValue != 'undefined')){
    pageValue = decodeURIComponent(pageValue);
    var firstMenu = pageValue.split('/')[1];
    var secMenu = pageValue.split('/')[2];
    $(".J_href").each(function(){
        var me = $(this);
        if((me.data('href').indexOf(firstMenu+ '/') >-1) && (me.data('href').indexOf(secMenu) >-1)) {
            me.parents("li").addClass("active");
            me.addClass("current").siblings().removeClass("current");
            return false;
        }else{
            if(me.data('href').indexOf(firstMenu + '/') >-1){
                me.parents("li").addClass("active");
                me.addClass("current").siblings().removeClass("current");
            }
        }
    });
    $(".content-box").load(pageValue);
}else{
    $(".side-nav ul li").first().trigger("click");
    $(".sub-nav-l").first().find('p').trigger("click");
}
