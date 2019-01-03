var score;
var projectId;
$(document).ready(function() {
	$.ajax({
		type: "get",
		url: scoreAddress + "departmentScore/SelectDSW",
		async: true,
		data: {
			mainUserId: userId,
			departmentScoreStatus: 0
		},
		success: function(msg) {

			$(".concent").html("");
			$(".mainScore").css("color", "#3c84d9");
			$(".auxiliaryScore").css("color", "");
			if(msg == "") {
				$(".noData").css("display", "block");

			} else {

				for(var i = 0; i < msg.length; i++) {
					for(var a = 0; a < msg[i].memberList.length; a++) {
						projectId = msg[i].memberList[a].projectId;
						var scoreeeeee = msg[i] == null ? '' : msg[i].departmentScore;
						$(".concent").append('<div class="content_list"><div style="display: inline-block; width: 100%;"><p class="til">姓名：</p>	<p class="till">' + msg[i].userName + '</p>	</div>' +
							'<div style="display: inline-block; width: 100%;"><p class="til">部门：</p><p class="till">' + msg[i].departmentName + '</p></div>' +
							'<div style="display: inline-block; width: 100%;"><div style=""><p class="til">周报内容：</p></div><div style="display: inline-block;">' +
							'<p style="margin: 5px; font-size: 13px;color: #2f2a2a;" onclick="show(this)" class="' + msg[i].memberList[a].projectId + '" value="' + msg[i].userId + '"> ' + msg[i].memberList[a].projectName + '<span>    >></span></p>' +
							'</div></div><div style="display: inline-block; width: 100%; line-height: 20px;">' +
							'<p class="til" style=" float: left;height: 30px;"><span style="color: #E72F2E;">*</span>评分：</p>' +
							'<input class="score" type="number"  onblur="change(this)" placeholder="请输入" value="' + scoreeeeee + '"/><input class="' + msg[i].departmentId + '" type="hidden" value="' + msg[i].userId + '"></div></div>' +
							'<div class="content_foot"><div id="" style="display: inline-block;"><p style="display: inline-block; margin-left: 10px;">可分配分数：</p><span></span>' +
							'</div><div class="" style="width: 40%;height: 50px; float: right; "><a href="grade.html"><button class="" style="background-color: #FFFFFF;color: #f82c2c;border:1px #f82c2c solid;">取消</button></a>' +
							'<a href="#"><button class="main" value="0" onclick="gread()" style="background-color: #FFFFFF;color: #3c84d9; border:1px #3c84d9 solid;">提交</button></a></div></div>');
					}
				}
				score = $(".content_list").length * 10;
				$(".content_foot span").text(score);
				if($(".score").val() !== "") {
					change();
				}
			}

		}
	});
});

$(".auxiliaryScore").click(function() {

	$.ajax({
		type: "get",
		url: scoreAddress + "departmentScore/SelectDSWF",
		async: true,
		data: {
			auxiliaryUserId: userId,
			departmentScoreStatus: 1
		},
		success: function(msg) {
			$(".concent").html("");
			$(".mainScore").css("color", "");
			$(".auxiliaryScore").css("color", "#3c84d9");
			if(msg == "") {
				$(".noData").css("display", "block");

			} else {

				for(var i = 0; i < msg.length; i++) {
					for(var a = 0; a < msg[i].memberList.length; a++) {
						projectId = msg[i].memberList[a].projectId;
						var scoreeeeee = msg[i] == null ? '' : msg[i].departmentScore;
						$(".concent").append('<div class="content_list"><div style="display: inline-block; width: 100%;"><p class="til">姓名：</p>	<p class="till">' + msg[i].userName + '</p>	</div>' +
							'<div style="display: inline-block; width: 100%;"><p class="til">部门：</p><p class="till">' + msg[i].departmentName + '</p></div>' +
							'<div style="display: inline-block; width: 100%;"><div style=""><p class="til">周报内容：</p></div><div style="display: inline-block;">' +
							'<p style="margin: 5px; font-size: 13px;color: #2f2a2a;" onclick="show(this)" class="' + msg[i].memberList[a].projectId + '"  value="' + msg[i].userId + '"> ' + msg[i].memberList[a].projectName + '<span>    >></span></p>' +
							'</div></div><div style="display: inline-block; width: 100%; line-height: 20px;">' +
							'<p class="til" style=" float: left;height: 30px;"><span style="color: #E72F2E;">*</span>评分：</p>' +
							'<input class="score" type="number"  onblur="change(this)" placeholder="请输入" value="' + scoreeeeee + '" /><input class="' + msg[i].departmentId + '" type="hidden" value="' + msg[i].userId + '"></div></div>' +
							'<div class="content_foot"><div id="" style="display: inline-block;"><p style="display: inline-block; margin-left: 10px;">可分配分数：</p><span></span>' +
							'</div><div class="" style="width: 40%;height: 50px; float: right; "><a href="grade.html"><button class="" style="background-color: #FFFFFF;color: #f82c2c;border:1px #f82c2c solid;">取消</button></a>' +
							'<a href="#"><button class="main" value="1" onclick="gread()" style="background-color: #FFFFFF;color: #3c84d9; border:1px #3c84d9 solid;">提交</button></a></div></div>');

					}
				}
				score = $(".content_list").length * 10;
				$(".content_foot span").text(score);
				if($(".score").val() !== "") {
					change();
				}
			}
		}
	});
});
$(".mainScore").click(function() {
	$.ajax({
		type: "get",
		url: scoreAddress + "departmentScore/SelectDSW",
		async: true,
		data: {
			mainUserId: userId,
			departmentScoreStatus: 0
		},
		success: function(msg) {
			$(".concent").html("");
			$(".mainScore").css("color", "#3c84d9");
			$(".auxiliaryScore").css("color", "");
			if(msg == "") {
				$(".noData").css("display", "block");

			} else {

				for(var i = 0; i < msg.length; i++) {
					for(var a = 0; a < msg[i].memberList.length; a++) {
						projectId = msg[i].memberList[a].projectId;
						var scoreeeeee = msg[i] == null ? '' : msg[i].departmentScore;
						$(".concent").append('<div class="content_list"><div style="display: inline-block; width: 100%;"><p class="til">姓名：</p>	<p class="till">' + msg[i].userName + '</p>	</div>' +
							'<div style="display: inline-block; width: 100%;"><p class="til">部门：</p><p class="till">' + msg[i].departmentName + '</p></div>' +
							'<div style="display: inline-block; width: 100%;"><div style=""><p class="til">周报内容：</p></div><div style="display: inline-block;">' +
							'<p style="margin: 5px; font-size: 13px;color: #2f2a2a;" onclick="show(this)" class="' + msg[i].memberList[a].projectId + '"  value="' + msg[i].userId + '"> ' + msg[i].memberList[a].projectName + '<span>    >></span></p>' +
							'</div></div><div style="display: inline-block; width: 100%; line-height: 20px;">' +
							'<p class="til" style=" float: left;height: 30px;"><span style="color: #E72F2E;">*</span>评分：</p>' +
							'<input class="score" type="number"  onblur="change(this)" placeholder="请输入" value="' + scoreeeeee + '" /><input class="' + msg[i].departmentId + '"  type="hidden" value="' + msg[i].userId + '"></div></div>' +
							'<div class="content_foot"><div id="" style="display: inline-block;"><p style="display: inline-block; margin-left: 10px;">可分配分数：</p><span></span>' +
							'</div><div class="" style="width: 40%;height: 50px; float: right; "><a href="grade.html"><button class="" style="background-color: #FFFFFF;color: #f82c2c;border:1px #f82c2c solid;">取消</button></a>' +
							'<a href="#"><button class="main" value="0" onclick="gread()" style="background-color: #FFFFFF;color: #3c84d9; border:1px #3c84d9 solid;">提交</button></a></div></div>');

					}
				}
				score = $(".content_list").length * 10;
				$(".content_foot span").text(score);
				if($(".score").val() !== "") {
					change();
				}

			}
		}
	});
});

function gread() {
	//	获取分数和id
	var gread = [];
	$('.score').each(function() {
		gread.push({
			"userId": $(this).parent().find("input[type=hidden]").val(),
			"departmentScore": $(this).val(),
			"departmentScoreUserId": userId,
			"departmentId": $(this).parent().find("input[type=hidden]").attr("class"),
			"departmentScoreStatus": $(".main").attr("value"),
		});
	});
	$.ajax({
		type: "post",
		url: scoreAddress + "departmentScore/AddDepartmentScore",
		data: JSON.stringify(gread),
		contentType: 'application/json;charset=UTF-8',
		success: function(msg) {
			alert(msg);
		}
	});
};