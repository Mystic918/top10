<template>
	<view class="custom-list">
		<view class="custom-list-normal custom-list-item" v-if="mode === 'normal'">
			<view class="custom-list-title">
				时政微周刊丨总书记的一周
			</view>
			<view class="custom-list-detail">
				央视网 3小时前
			</view> 
		</view>
		<view class="custom-list-chart custom-list-item" >
			<view class="custom-list-item-main">
				<view class="custom-list-title">
					时政微周刊丨总书记的一周
				</view>
				<view class="custom-list-detail">
					央视网 3小时前
				</view> 
			</view>
			<view class="custom-list-item-img">
				<image src="../../static/logo.png" mode="heightFix"></image>
			</view> 
			 
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			mode: {
				type: String,
				default: 'normal'
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.custom-list-item{padding: 10px 8px;border-bottom: 1px solid #f5f7f9;display: flex;justify-content: space-between;}
.custom-list-item .custom-list-title{font-size: 40upx;}
.custom-list-detail{font-size: 28upx;color: #b4b4b4;margin-top: 5px;}
.custom-list-item-img{width: 234upx;height: 146upx;text-align: center;}
.custom-list-item-img image{height: 146upx;}
</style>
