var department;
var name;
;
(function() {

	//查询我的周报的项目列表
	$(document).ready(function() {
		//		部门编码
		//获取用户信息
		$.ajax({
			type: "get",
			url: userAddress + "user/selectUser",
			data: {
				userId: userId
			},
			success: function(msg) {
				name = msg.name;
				$(".name").text(msg.name);
				department = msg.department;
				$(".img").attr("src", msg.avatar);
			},
		});
		//获取部门信息
		$.ajax({
			type: "post",
			url: userAddress + "user/selectDepartment",
			data: {
				Id: department
			},
			success: function(msg) {

				$(".department").text(msg.department.name);
			},
		});
		//权限
		$.ajax({
			type: "get",
			url: userAddress + "user/" + userId,
			success: function(msg) {
				var authority = msg.authority
				if(authority == 0) {
					$("#appeal").hide();
					$("#allScore").hide();
				}
			},
		});
	});

})();