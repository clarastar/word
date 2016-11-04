
/***单词保存列表页加载完成，异步请求第1页记录 ****/
$(function(){
    loadWord(1);
})
//为分页条中超链接代理事件监听
$('.pagination').on('click','a', function(e){
    e.preventDefault();
    var pno = $(this).attr('href'); //目标页号
    loadWord(pno);
})
function loadWord(pno){
    $.getJSON('data/5_word_save_v2.php',{'pno':pno},function(pager){
        var html = '';
        $.each(pager.data, function(i,p){
            html +=
            `<tr>
                    <td>${p.cwid}</td>
                    <td><a href="interval.html">${p.cname}</a></td>
                    <td style="color:#ffe">${p.cmean}</td>
                    <td><a href="#" class="cancelBtn">取消收藏</a></td>
               </tr> `;
        });
        $('#wordList tbody').html(html);
        var pagerHtml ="";
        if(pager.pno-2>0){
            pagerHtml += `<li><a href="${pager.pno-2}">${pager.pno-2}</a></li> `;
        }
        if(pager.pno-1>0){
            pagerHtml += `<li><a href="${pager.pno-1}">${pager.pno-1}</a></li> `;
        }
        pagerHtml += `<li class="active"><a href="#">${pager.pno}</a></li> `;
        if(pager.pno+1<=pager.pageCount){
            pagerHtml += `<li><a href="${pager.pno+1}">${pager.pno+1}</a></li> `;
        }
        if(pager.pno+2<=pager.pageCount){
            pagerHtml += `<li><a href="${pager.pno+2}">${pager.pno+2}</a></li> `;
        }
        $('.pagination').html(pagerHtml);
    })
}
//$(".save-box").on("click","tbody a.cancelBtn",function(e){
//    console.log("删除开始了");
//    e.preventDefault();
//    $(this).parent().parent().remove();
//})

$(".save-box").on("click",".cancelBtn",
    function(){
        $(this).parent().parent().remove();
    }
);


function drawStudyStatWeek(){
    var width=parseFloat($("#study-stat-container").innerWidth());
    $.getJSON('data/3_save_stat_week.php', function(responseData){
        //开始调用FusionCharts，绘制统计图
        var chart = new FusionCharts({
            type: 'column2d',
            //type: 'column3d',
            //type: 'bar2d',
            //type: 'bar3d',
            //type: 'pie2d',
            //type: 'pie3d',
            // type: 'doughnut2d',
            //type: 'doughnut3d',
            //type: 'line',
            renderAt: 'study-stat-container',
            width: width,
            height: 450,
            dataFormat: 'json',
            dataSource: {           //指定数据源
                data: responseData
            }
        });
        chart.render(); //渲染出统计图
    });
}

$("[href='#study-stat-container-week']").click(function(){
    drawStudyStatWeek();
});


function drawStudyStatMonth(){
    var width=parseFloat($("#study-stat-container").innerWidth());
    $.getJSON('data/4_save_stat_month.php', function(responseData){
        //开始调用FusionCharts，绘制统计图
        var chart = new FusionCharts({
            type: 'column2d',
            //type: 'column3d',
            //type: 'bar2d',
            //type: 'bar3d',
            //type: 'pie2d',
            //type: 'pie3d',
            // type: 'doughnut2d',
            //type: 'doughnut3d',
            //type: 'line',
            renderAt: 'study-stat-container',
            width: width,
            height: 450,
            dataFormat: 'json',
            dataSource: {           //指定数据源
                data: responseData
            }
        });
        chart.render(); //渲染出统计图
    });
}

$("[href='#study-stat-container-month']").click(function(){
    drawStudyStatMonth();
});


function drawStudyStatYear(){
    var width=parseFloat($("#study-stat-container").innerWidth());
    $.getJSON('data/2_save_stat_year.php', function(responseData){
        //开始调用FusionCharts，绘制统计图
        var chart = new FusionCharts({
            type: 'column2d',
            //type: 'column3d',
            //type: 'bar2d',
            //type: 'bar3d',
            //type: 'pie2d',
            //type: 'pie3d',
            // type: 'doughnut2d',
            //type: 'doughnut3d',
            //type: 'line',
            renderAt: 'study-stat-container',
            width: width,
            height: 450,
            dataFormat: 'json',
            dataSource: {           //指定数据源
                data: responseData
            }
        });
        chart.render(); //渲染出统计图
    });
}


$("[href='#study-stat-container-year']").click(function(){
    drawStudyStatYear();
});