;
(function() {

	$.ajax({
		type: "post",
		url: projectAddress + "projectandmember/SelectProjectANDMemberForScore",
		data: {
			userId: userId
		},
		success: function(msg) {
			$(msg).each(function(index, ele) {
				if(ele.projectKind == 0) {

					var projectId = ele.projectId;
					var projectName = ele.projectName;
					var projectName = ele.projectName;
					var month = ele.projectDate.substring(5, 7) + "月";
					var day = ele.projectDate.substring(8, 11);
					$(".project").append('<div class="news"><div class="news_left"><div class="news_time"><span style="font-size:14px; color:#9e9e9e ; ">' + month + '</span>' +
						'<span style="font-size:24px; color:#3C84D9 ;">' + day + '</span></div></div><div class="news_right"><div class="news_tittle">' +
						'<a href="greadChild.html?projectId=' + projectId + '&projectName=' + projectName + '"><p>' + projectName + '</p></a>' +
						'<input id="color-input-red" name="Fruit" type="checkbox" value="" disabled="disabled" /><label class="state" style="color: #f6530b;">未评分 </label></div></div></div>');
					if(ele.status == 1) {
						$(".state").css("color", "#67c23a");
						$(".state").text("已填写");
						$(".color-input-red").attr("checked", "checked");
					}
				}

			});
		}
	});
})();