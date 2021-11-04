var up = async (appName, instanceId) => {
	var params = {
		method: "PUT"
	};
	await fetch(`/eureka/apps/${appName}/${instanceId}/status?value=UP`, params);
	location.reload();
};
var down = async (appName, instanceId) => {
	var params = {
		method: "PUT"
	};
	await fetch(`/eureka/apps/${appName}/${instanceId}/status?value=OUT_OF_SERVICE`, params);
	location.reload();
};
var dlt = async (appName, instanceId) => {
	if (confirm("Sure?")) {
		var params = {
			method: "DELETE"
		};
		await fetch(`/eureka/apps/${appName}/${instanceId}`, params);
//		location.reload();
	}
};