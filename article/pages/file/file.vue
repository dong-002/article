<template>
	<view class="file">
		<view class="box" v-for="(item,index) in imgList">
			<image :src="item.path" mode="aspectFill" @click="preview(index)"></image>
			<view class="close" @click="delFile(index)">
				x
			</view>

		</view>
		<view class="box add" @click="addFile" v-if="imgList.length<9">
			+
		</view>
		<button @click="upload()">上传</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: []
			};
		},
		methods: {
			upload() {
				let arr = this.imgList.map(async item => {
					// 使用promise异步返回
					return await this.uploadFun(item)
				})
				Promise.all(arr).then(res => {
					console.log(res);
				})
			},
			uploadFun(item) {
				return uniCloud.uploadFile({
					filePath: item.path,
					cloudPath: item.name
				})
			},
			delFile(index) {
				this.imgList.splice(index, 1)
			},
			preview(index) {
				uni.previewImage({
					urls: this.imgList.map(item => item.path),
					current: index
				})
			},
			addFile() {
				uni.chooseImage({
					success: (res) => {
						console.log(res);
						this.imgList = [...this.imgList, ...res.tempFiles]
						this.imgList = this.imgList.slice(0, 9)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.file {
		padding: 30rpx;
		display: flex;
		flex-wrap: wrap;

		.box {
			width: 200rpx;
			height: 200rpx;
			background-color: #eee;
			margin-right: 15rpx;
			margin-bottom: 15rpx;
			position: relative;

			image {
				width: 100%;
				height: 100%;
			}

			.close {
				position: absolute;
				right: 0%;
				top: 0;
				width: 30rpx;
				height: 30rpx;
				background: rgba(0, 0, 0, 0.7);
				color: #fff;
				padding: 0 0 10rpx 10rpx;
				border-radius: 10rpx;
			}

		}

		.add {
			font-size: 80rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>