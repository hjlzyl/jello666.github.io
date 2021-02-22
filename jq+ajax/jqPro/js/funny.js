var pageNum=1;
var uid=1;
function xiao(){
    $.get('https://www.apiopen.top/satinGodApi?',
    {
        'page':pageNum
        
    },
    function(data,status){
        
    $.each(data.data,function(i,e){
        $('<p id="pp">'+(i+uid)+'.'+'作者:'+e.username+'</p>').appendTo("#divs");
        $('<p id="p1">'+e.text+'</p>').appendTo("#divs");
       
    });
    pageNum++;
    uid+=20;
});
}
xiao();
