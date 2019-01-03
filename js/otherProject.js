var i = 0;

function add() {

	$(".others").append('<div class="line-wrapper"><div class="line-scroll-wrapper"><div class="line-normal-wrapper">' +
		'<div class="line-normal-left-wrapper"><div class="news"><div class="news_left"><div class="news_time">' +
		'<span style="font-size:13px; color:#9e9e9e;"></span><span style="font-size:24px; color:#2496f1 ;"></span>' +
		'</div>	</div>	<div class="news_right"><div class="news_tittle"><p>其他项目</p>' +
		'<div class="states"><div class="state"><input id="color-input-red" name="Fruit" type="checkbox" value="" disabled="disabled" />' +
		'<label style="color: red;">未填写 </label></div></div></div></div></div></div></div>	<div class="line-btn-delete">' +
		'<a class="compile" href="otherFill.html"><button style="background-color: #CCCCCC;">' +
		'编辑</button></a><button onclick="del(this);">删除</button></div></div></div>'
	);
	init();
	var parameter = {
		"userId": userId,
		"projectName": "其他项目",
		"projectManager": name,
		"projectKind": 1,
		"departmentId": parseInt(department),
		"userId": userId
	}
	$.ajax({
		type: "post",
		url: projectAddress + "project/AddProject",
		data: JSON.stringify(parameter),
		contentType: 'application/json;charset=UTF-8',
		success: function(msg) {
			window.location.reload();
		}
	});

};

function del(obj) {

	var parameter = {
		"projectId": $(obj).parents(".line-wrapper").attr("id")
	}
	$.ajax({
		type: "post",
		url: projectAddress + "project/DeleteProject",
		data: JSON.stringify(parameter),
		contentType: 'application/json;charset=UTF-8',
		success: function(msg) {
			$(obj).parents(".line-wrapper").remove()
		}
	});
};
(function() {

	$(document).ready(function() {

		$.ajax({
			type: "post",
			url: projectAddress + "member/SelectMemberAndWeekly",
			data: {
				userId: userId
			},
			success: function(msg) {
				$(msg).each(function(index, ele) {
					if(ele.projectKind == 1) {
						//获取项目名称
						var projectName = ele.projectName;
						var month = "";
						var day = "";
						if(ele.weeklyDate !== null) {
							//获取周报时间
							month = ele.weeklyDate.substring(5, 7) + "月";
							day = ele.weeklyDate.substring(8, 10);
						}

						//向周报页面传项目id
						var projectId = ele.projectId;

						$(".others").append('<div class="line-wrapper" id="' + projectId + '"><div class="line-scroll-wrapper"><div class="line-normal-wrapper">' +
							'<div class="line-normal-left-wrapper"><div class="news"><div class="news_left"><div class="news_time">' +
							'<span style="font-size:13px; color:#9e9e9e;">' + month + '</span><span style="font-size:24px; color:#2496f1 ;">' + day + '</span>' +
							'</div>	</div>	<div class="news_right"><div class="news_tittle"><p>' + projectName + '</p>' +
							'<div class="states"><div class="state"><input id="color-input-red" name="Fruit" type="checkbox" value="" disabled="disabled" />' +
							'<label style="color: red;">未填写 </label></div></div></div></div></div></div></div>	<div class="line-btn-delete">' +
							'<a href="otherFill.html?projectId=' + projectId + '&projectName=' + projectName + '"><button style="background-color: #CCCCCC;">' +
							'编辑</button></a><button onclick="del(this);">删除</button></div></div></div>'
						);
						init();
						//获取填写状态
						var weeklyStatus = ele.weeklyStatus;
						if(weeklyStatus == 1) {
							$(".state").css("color", "#67c23a");
							$(".state").text("已填写");
							$(".color-input-red").attr("checked", "checked");
						}
					}

				});
			},
		});
	});
})();