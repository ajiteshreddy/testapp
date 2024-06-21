export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world').
		Button1.setDisabled(true);
		await Query1.run();
		if (Query1.responseMeta.isExecutionSuccess) {
			showAlert("Successfully Added!")
		}
		else {
			showAlert("Failure!")
		}
		Button1.setDisabled(false);
	}
}