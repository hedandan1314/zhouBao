var weeklyKind;
var weeklyStatus = 0;;
(function() {
	function shows() {
		if($("#trigger4").attr("value") == 1) {
			$("#postpone").show();
		} else {
			$("#postpone").hide();
		}
	};
	/**
	 * 取得url参数
	 */
	function getUrlParamCN(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = decodeURI(window.location.search).substr(1).match(reg); //匹配目标参数
		if(r != null) return unescape(r[2]);
		return null; //返回参数值
	}
	var projectId = getUrlParamCN('projectId');
	var projectName = getUrlParamCN('projectName');
	//	获取周报状态
	//	获取周报id
	var weeklyId;
	$(document).ready(function() {
		$.ajax({
			type: "get",
			url: weeklyAddress + "weekly/SelectWeeklyToMember",
			data: {
				userId: userId,
				projectId: projectId
			},
			success: function(msg) {
				weeklyStatus = msg.weeklyStatus;
				weeklyId = msg.weeklyId;
				if(msg !== null) {
					var weeklyKind;
					switch(msg.weeklyKind) {
						case "0":
							weeklyKind = "正常";
							break;
						case "1":
							weeklyKind = "延期";
							break;
						case "2":
							weeklyKind = "提前";
							break;
					}
					$(".projectName").attr("value", projectName);
					$(".weeklyContext").text(msg.weeklyContext);
					$("#trigger4").text(weeklyKind);
					$("#trigger4").attr("value", msg.weeklyKind);
					$(".weeklyPlan").text(msg.weeklyPlan);
					$(".weeklyAmount").val(msg.weeklyAmount);
					$(".weeklyRemark").text(msg.weeklyRemark);
					shows();
					$(".weeklyCause").text(msg.weeklyCause);

				}
			}
		});
	})

	$(".request button").click(function() {
		var parameter1 = {
			"projectName": $(".projectName").val(),
			"projectId": projectId,
			"userId": userId,
			"projectKind": 1,
			"projectManager": name,
			"departmentId": parseInt(department),
		}
		$.ajax({
			type: "post",
			url: projectAddress + "project/UpdateProject",
			async: true,
			data: JSON.stringify(parameter1),
			contentType: 'application/json;charset=UTF-8',
			success: function(msg) {

			}
		});

		if(weeklyStatus == 0) {

			//		填写周报
			var parameter = {
				"weeklyPlan": $(".weeklyPlan").val(),
				"weeklyContext": $(".weeklyContext").val(),
				"weeklyAmount": $(".weeklyAmount").val(),
				"weeklyCause": $(".weeklyCause").val(),
				"weeklyKind": $("#trigger4").attr("value"),
				"weeklyRemark": $(".weeklyRemark").val(),
				"userId": userId,
				"weeklyStatus": 1,
				"departmentId": parseInt(department),
				"projectId": projectId,
				"projectName": $(".projectName").val(),
				"projectKind": 1,
				"projectManager": name

			}
			$.ajax({
				type: "post",
				url: weeklyAddress + "weekly/AddWeekly",
				data: JSON.stringify(parameter),
				contentType: 'application/json;charset=UTF-8',
				success: function(msg) {
					alert("提交成功！");
					$(".request").attr("href", "myProject .html");
				}

			});
		} else {
			//			修改周报
			var parameter = {
				"weeklyId": weeklyId,
				"weeklyPlan": $(".weeklyPlan").val(),
				"weeklyContext": $(".weeklyContext").val(),
				"weeklyAmount": $(".weeklyAmount").val(),
				"weeklyCause": $(".weeklyCause").val(),
				"weeklyKind": $("#trigger4").attr("value"),
				"weeklyRemark": $(".weeklyRemark").val(),
				"userId": userId,
				"weeklyStatus": 1,
				"departmentId": parseInt(department),
				"projectId": projectId,
				"projectName": $(".projectName").val(),
				"projectKind": 1,
				"projectManager": name
			}
			$.ajax({
				type: "post",
				url: weeklyAddress + "weekly/AddWeekly",
				data: JSON.stringify(parameter),
				contentType: 'application/json;charset=UTF-8',
				success: function(msg) {
					alert("修改成功！");
				}

			});
		}

	});
})();