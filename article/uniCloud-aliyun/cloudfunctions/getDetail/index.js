const db = uniCloud.database()
exports.main = async (event, context) => {
	let {
		id
	} = event
	let res = await db.collection('article').where({
		_id: id
	}).get()
	return res
};