<template>
	<view class="add">
		<form @submit="submitForm">
			<view class="title box">
				<input type="text" name="title" placeholder="请输入标题">
			</view>
			<view class="name box">
				<input type="text" name="name" placeholder="请输入作者">
			</view>
			<view class="text box">
				<textarea name="text" placeholder="请输入内容"> </textarea>
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
				imageValue: [],
				// imgStyle: {
				// 	"height": 60, // 边框高度
				// 	"width": 60, // 边框宽度
				// 	"border": { // 如果为 Boolean 值，可以控制边框显示与否
				// 		"color": "#eee", // 边框颜色
				// 		"width": "1px", // 边框宽度
				// 		"style": "solid", // 边框样式
				// 		"radius": "50%" // 边框圆角，支持百分比
				// 	}
				// }

			};
		},
		onLoad(e) {

		},
		methods: {
			upload() {
				this.$refs.file.upload()
				console.log(this.imageValue);
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
					name: "addData",
					data: {
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