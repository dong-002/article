const db = uniCloud.database()
exports.main = async (event, context) => {
	let {
		id,
		title,
		name,
		text,
		imgUrl
	} = event
	let res = await db.collection('article').doc(id).update({
		title,
		name,
		text,
		imgUrl,
		posttime: Date.now()
	})
	return res
};