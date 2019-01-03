;
(function() {
	$(document).ready(function() {

		$.ajax({
			type: "get",
			url: projectAddress + "member/SelectMemberAndWeekly",
			data: {
				userId: userId
			},
			success: function(msg) {
				$(msg).each(function(index, ele) {
					if(ele.projectKind == 0) {
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
						$("#projectName").append('	<div class="news"><div class="news_left"><div class="news_time"><span style="font-size:14px; color:#9e9e9e ; ">' + month + '</span>' +
							' <span style="font-size:24px; color:#3C84D9 ;">' + day + '</span></div></div><div class="news_right">	<div class="news_tittle">' +
							'<a href="weeklyFill.html?projectId=' + projectId + '&projectName=' + projectName + '"><p>' + projectName + '</p></a><input class="color-input-red" name="Fruit" type="checkbox" value=" " disabled="disabled" /> ' +
							'<label class="state" style="color: red;">未填写 </label></div></div></div> ');

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