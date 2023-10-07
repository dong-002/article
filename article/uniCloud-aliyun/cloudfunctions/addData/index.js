const db = uniCloud.database()
exports.main = async (event, context) => {
	let res = db.collection('article').add({
		...event,
		posttime: Date.now()
	})
	return res
};