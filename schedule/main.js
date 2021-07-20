//正常版
/*
$(function() {
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th><tr>");

    var topicCount = topic.length;

    //一秒鐘有1000毫秒
    //每分鐘60秒、每小時60分鐘、每天24小時          
    var millisecsPerDay = 24*60*60*1000;
    
    for(var x= 0; x < topicCount; x++)
    {
        $("#courseTable").append("<tr>");
        $("#courseTable").append(`<td>${x+1}</td>`);
        $("#courseTable").append(`<td>${((new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString())}</td>`);
        $("#courseTable").append(`<td>${topic[x]}</td>`);
        $("#courseTable").append("</tr>");
    }
});
*/

//無年份版
/*
$(function() {
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th><tr>");

    var topicCount = topic.length;

    //一秒鐘有1000毫秒
    //每分鐘60秒、每小時60分鐘、每天24小時          
    var millisecsPerDay = 24*60*60*1000;
    
    for(var x= 0; x < topicCount; x++)
    {
        $("#courseTable").append("<tr>");
        $("#courseTable").append(`<td>${x+1}</td>`);
        var str = ((new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString());
        $("#courseTable").append(`<td>${str.substring(5)}</td>`);
        $("#courseTable").append(`<td>${topic[x]}</td>`);
        $("#courseTable").append("</tr>");
    }
});
*/

//自行輸入日期版
/*
$(function() {
    $("#date").on("change", function() {
        $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th><tr>");

        var topicCount = topic.length;

        //一秒鐘有1000毫秒
        //每分鐘60秒、每小時60分鐘、每天24小時          
        var millisecsPerDay = 24*60*60*1000;
        
        for(var x= 0; x < topicCount; x++)
        {
            $("#courseTable").append("<tr>");
            $("#courseTable").append(`<td>${x+1}</td>`);
            var str = ((new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString());
            $("#courseTable").append(`<td>${str.substring(5)}</td>`);
            $("#courseTable").append(`<td>${topic[x]}</td>`);
            $("#courseTable").append("</tr>");
        }
    });
});
*/
//var weekday
function over(rowNum)
{
    document.getElementById("row" + rowNum + "_1").setAttribute("style", "background-color:	#FFD9EC");
    document.getElementById("row" + rowNum + "_2").setAttribute("style", "background-color:	#FFD9EC");
    document.getElementById("row" + rowNum + "_3").setAttribute("style", "background-color:	#FFD9EC");
    document.getElementById("row" + rowNum + "_4").setAttribute("style", "background-color:	#FFD9EC");
    if(document.getElementById("row" + rowNum + "_4").innerHTML == "尚未開學" || document.getElementById("row" + rowNum + "_4").innerHTML == "國定假日")
        document.getElementById("row" + rowNum + "_4").setAttribute("style", "background-color:	#FFD9EC; color:grey;");
}

function out(rowNum)
{
    document.getElementById("row" + rowNum + "_1").setAttribute("style", "background-color:	#ECFFFF");
    document.getElementById("row" + rowNum + "_2").setAttribute("style", "background-color:	#ECFFFF");
    document.getElementById("row" + rowNum + "_3").setAttribute("style", "background-color:	#ECFFFF");
    document.getElementById("row" + rowNum + "_4").setAttribute("style", "background-color:	#ECFFFF");
    if(document.getElementById("row" + rowNum + "_4").innerHTML == "尚未開學" || document.getElementById("row" + rowNum + "_4").innerHTML == "國定假日")
        document.getElementById("row" + rowNum + "_4").setAttribute("style", "background-color:	#ECFFFF; color:grey;");
}


function showTable()
{
    $("#courseTable").empty();
    $("#courseTable").append("<tr><th>場次</th><th>日期</th><th>星期</th><th>主題</th><tr>");

    var topicCount = topic.length;

    //一秒鐘有1000毫秒
    //每分鐘60秒、每小時60分鐘、每天24小時          
    var millisecsPerDay = 24*60*60*1000;
    
    for(var x= 0; x < topicCount; x++)
    {
        $("#courseTable").append("<tr>");
        $("#courseTable").append(`<td onmouseover = 'over(${x})' onmouseout = 'out(${x})' id = 'row${x}_1'>${x+1}</td>`);

        var str = ((new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString());
        if($('input:radio:checked[name="choice"]').val() == 'noyear')
            str = str.substring(5);
        $("#courseTable").append(`<td onmouseover = 'over(${x})' onmouseout = 'out(${x})' id = 'row${x}_2'>${str}</td>`);

        var str2 = (startDate.getDay() + 7*x) % 7;
        if(str2 == 0)
            str2 = 7;
        $("#courseTable").append(`<td onmouseover = 'over(${x})' onmouseout = 'out(${x})' id = 'row${x}_3'>${str2}</td>`);

        if(topic[x] == "尚未開學" || topic[x] == "國定假日")
            $("#courseTable").append(`<td style='color:grey' onmouseover = 'over(${x})' onmouseout = 'out(${x})' id = 'row${x}_4'>${topic[x]}</td>`);
        else
            $("#courseTable").append(`<td style='color:black' onmouseover = 'over(${x})' onmouseout = 'out(${x})' id = 'row${x}_4'>${topic[x]}</td>`);

        $("#courseTable").append("</tr>");
    }
}

$(document).ready(function(){
    $("#date").on("change",showTable);
    $('input[type="radio"]').on('change',showTable);
    
});