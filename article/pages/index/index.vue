<template>
	<view class="home">
		<view class="content">
			<view class="item" v-for="item in list" :key="item._id" @click="gotoDetail(item._id)">
				<view class="text">
					<view class="title">
						{{item.title}}
					</view>
					<view class="info">
						<text>{{item.name}}</text>
						<uni-dateformat :date="item.posttime" format="yyyy-MM-dd"></uni-dateformat>
					</view>
				</view>

				<view class="pic">
					<image :src="item.imgUrl?item.imgUrl:'../../static/4.jpg'" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		<view class="btn" @click="gotoAdd">
			+
		</view>
		<view class="no-data" v-if="nodata">
			数据全部加载完成
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				nodata: false
			}
		},
		onShow() {
			this.getList()
		},
		onReachBottom() {
			this.getList()
		},
		onPullDownRefresh() {
			this.getList()
		},
		methods: {
			gotoDetail(e) {
				uni.navigateTo({
					url: "/pages/detail/detail?id=" + e
				})
			},

			gotoAdd() {
				uni.navigateTo({
					url: "/pages/add/add"
				})
			},
			getList() {
				uniCloud.callFunction({
					name: "getList",
					data: {
						num: this.list.length
					}
				}).then(res => {
					// console.log(res);
					this.list = this.list.concat(res.result.data)
					if (res.result.data.length == 0) {
						this.nodata = true
					}
					uni.stopPullDownRefresh()
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		.content {
			padding: 30rpx;

			.item {
				border-bottom: 1px solid #ddd;
				display: flex;
				padding: 10rpx;

				.text {
					flex: 1;
					padding-right: 15rpx;
					display: flex;
					justify-content: space-between;
					flex-direction: column;

					.title {
						font-size: 38rpx;
						text-overflow: ellipsis;
						overflow: hidden;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}

					.info {
						font-size: 28rpx;
						color: #afafaf;

						text {
							padding-right: 10rpx;
						}
					}
				}

				.pic {
					width: 260rpx;
					height: 180rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}

		.btn {
			width: 100rpx;
			height: 100rpx;
			background-color: #42b983;
			color: #fff;
			border-radius: 50%;
			position: fixed;
			bottom: 100rpx;
			right: 60rpx;
			text-align: center;
			line-height: 100rpx;
		}

		.no-data {
			text-align: center;
			padding: 10rpx 0;
			color: #afafaf;
		}
	}
</style>