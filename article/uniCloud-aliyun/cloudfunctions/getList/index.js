const db = uniCloud.database()
exports.main = async (event, context) => {
	let {
		num = 0
	} = event
	const res = await db.collection('article').orderBy('posttime', 'desc').limit(8).skip(num).get()
	return res
};