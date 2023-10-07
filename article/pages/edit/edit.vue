<template>
	<view class="add">
		<form @submit="submitForm">
			<view class="title box">
				<input type="text" name="title" placeholder="请输入标题" v-model="article.title">
			</view>
			<view class="name box">
				<input type="text" name="name" placeholder="请输入作者" v-model="article.name">
			</view>
			<view class="text box">
				<textarea name="text" placeholder="请输入内容" v-model="article.text"> </textarea>
			</view>
			<uni-file-picker v-model="imageValue" fileMediatype="image" mode="grid" @select="select"
				@progress="progress" @success="success" @fail="fail" ref="file" :limit="1">
			</uni-file-picker>
			<button form-type="reset">重置</button>
			<button form-type="submit" type="primary">提交</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				article: {},
				id: "",
				imageValue: []
			};
		},
		onLoad(e) {
			if (e.id) {
				this.id = e.id
				this.getDetail(e.id)
			}
		},
		methods: {

			upload() {
				this.$refs.file.upload()
			},
			select(e) {
				console.log('选择文件：', e)
			},
			// 获取上传进度
			progress(e) {
				console.log('上传进度：', e)
			},

			// 上传成功
			success(e) {
				console.log('上传成功', e)
			},

			// 上传失败
			fail(e) {
				console.log('上传失败：', e)
			},

			getDetail(id) {
				uniCloud.callFunction({
					name: "getDetail",
					data: {
						id,
					}
				}).then(res => {
					this.article = res.result.data[0]
					this.loading = true
					// console.log(res);
					this.imageValue = res.result.data.map(item => {
						return {
							url: item.imgUrl
						}
					})

					uni.setNavigationBarTitle({
						title: this.article.title
					})
				})
			},
			submitForm(e) {
				if (!e.detail.value.title) {
					uni.showToast({
						title: "请输入标题",
						icon: "error"
					})
					return
				}
				if (!e.detail.value.name) {
					uni.showToast({
						title: "请输入来源",
						icon: "error"
					})
					return
				}
				if (!e.detail.value.text) {
					uni.showToast({
						title: "请输入内容",
						icon: "error"
					})
					return
				}
				this.upload()
				uniCloud.callFunction({
					name: "editData",
					data: {
						id: this.id,
						title: e.detail.value.title,
						name: e.detail.value.name,
						text: e.detail.value.text,
						imgUrl: this.imageValue[0].fileID
					}
				}).then(res => {
					console.log(res);
				})
				uni.navigateTo({
					url: "/pages/index/index"
				})
			}
		}
	}
</script>

<style lang="scss">
	.add {
		.box {
			padding: 20rpx;
			border: 1px solid #ddd;
			box-sizing: border-box;
			margin-bottom: 10rpx;
		}
	}
</style>