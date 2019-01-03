var projectId;
var projectName;
var score;

function getUrlParamCN(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = decodeURI(window.location.search).substr(1).match(reg); //匹配目标参数
	if(r != null) return unescape(r[2]);
	return null; //返回参数值
}
projectName = getUrlParamCN('projectName');
projectId = getUrlParamCN('projectId');

$(document).ready(function() {
	$(".tittle p").text(projectName);
	//查询项目成员
	$.ajax({
		type: "post",
		url: projectAddress + "projectandmember/SelectProjectMemberForScore",
		data: {
			projectId: projectId
		},
		success: function(msg) {
			//			if(){
			//				
			//			}
			for( i = 0; i < msg.length; i++) {
				var scoreeeeee =msg[i].projectScoreList == null?'': msg[i].projectScoreList.projectScore
				$(".content_center").append('<div class="content_c"><div style="display: inline-block; width: 100%;"><p class="til">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</p>' +
					'<p class="till">' + msg[i].memberName + '</p>	</div><div style="display: inline-block; width: 100%;"><p class="til">部&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;门：</p>' +
					'<p class="till department ' + msg[i].mdId + '" ></p></div><div style="display: inline-block; width: 100%;">	<p class="til" >周报内容：</p>' +
					'<p class="till" value="' + msg[i].muId + '" onclick="show(this)">查看详情 >></p></div><div style="display: inline-block; width: 100%; line-height: 20px;">' +
					'<p class="til" style=" float: left;height: 30px;"><span style="color: #E72F2E;">*</span>评&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分：</p>' +
					'<input class="score"  type="number" pattern="[0-9]*" onblur="change(this)" placeholder="请输入分数" value="'+scoreeeeee+'"/>' +
					'<input type="hidden" value="' + msg[i].muId + '"></div></div>');

			}
			score = $(".content_c").length * 10;
			$(".content_foot span").text(score);
			if($(".score").val() !== "") {
				change();
			}
		}

	});
	//		部门名称
	$.ajax({
		type: "post",
		url: userAddress + "user/selectDepartment",
		success: function(msg) {
			for(var a = 0; a < msg.department.length; a++) {
				$("." + msg.department[a].id).text(msg.department[a].name);
			}
		},
	});
});
//项目成员批量打分
function gread() {

	//	获取分数和id
	var gread = [];
	$('.score').each(function() {
		gread.push({
			"userId": $(this).parent().find("input[type=hidden]").val(),
			"projectScore": $(this).val(),
			"projectScoreUserId": userId,
			"projectId": projectId
		});
	});
	$.ajax({
		type: "post",
		url: scoreAddress + "projectScore/AddProjectScore",
		data: JSON.stringify(gread),
		contentType: 'application/json;charset=UTF-8',
		success: function(msg) {
			alert(msg);
		}
	});
}