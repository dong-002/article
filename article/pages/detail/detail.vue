<template>
	<view class="detail">
		<view v-if="loading">
			<view class="title">
				{{article.title}}
			</view>
			<view class="info">
				<text>{{article.name}}</text>
				<uni-dateformat :date="article.posttime" format="yyyy-MM-dd hh:mm:ss"></uni-dateformat>

			</view>
			<view class="content">
				{{article.text}}
			</view>
			<view class="btn">
				<button @click="edit">修改</button>
				<button type="warn" @click="openDialog">删除</button>
			</view>
		</view>
		<view v-else>
			<uni-load-more status="loading"></uni-load-more>
		</view>

		<uni-popup ref="alertDialog" type="dialog">
			<uni-popup-dialog cancelText="取消" confirmText="确定" title="提示" content="确定要删除文章吗？" @confirm="dialogConfirm"
				@close="dialogClose"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				article: {},
				id: "",
				loading: false,
				show: false
			};
		},
		onLoad(e) {
			this.id = e.id
			this.getDetail()
		},
		methods: {
			edit() {
				uni.navigateTo({
					url: "/pages/edit/edit?id=" + this.id
				})
			},
			openDialog() {
				this.$refs.alertDialog.open("dialog")
			},
			dialogConfirm() {
				// 删除文章
				uniCloud.callFunction({
					name: "delDetail",
					data: {
						id: this.id
					}
				}).then(res => {
					this.$refs.alertDialog.close()
					uni.navigateTo({
						url: "/pages/index/index"
					})
				}).catch(err => {
					console.log(err);
				})
			},
			dialogClose() {

			},
			getDetail() {
				uniCloud.callFunction({
					name: "getDetail",
					data: {
						id: this.id
					}
				}).then(res => {
					console.log(res);
					this.article = res.result.data[0]
					this.loading = true
					uni.setNavigationBarTitle({
						title: this.article.title
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.detail {
		padding: 30rpx;

		.title {
			font-size: 44rpx;
			margin-bottom: 25rpx;
		}

		.info {
			font-size: 30rpx;
			color: #949494;
			padding-bottom: 40rpx;
		}

		.content {
			font-size: 36rpx;
			line-height: 72rpx;
		}

		.btn {
			display: flex;
			justify-content: right;
		}
	}
</style>