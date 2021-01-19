<template>
	<view class="custom-notice"  :style="{'background-color': bgColor,'color':color}">
		<view class="custom-notice-icon iconfont icon-broadcast">
		</view>
		<view class="custom-notice-broadcast">
			<view class="custom-notice-content">
			111111这是一个测试一个测试一个测试一个测试一个测试一个测试一个测试一个测试一个测试一个测试一个测试一个测试一个测试一个测试一个测试一个测试一个测试一个测试一个测试一个测试一个测试一个测试
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			bgColor:{
				type: String,
				default: "#fffbe8"
			},
			color:{
				type: String,
				default: "#ed6a0c"
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
@import url("./iconfont.css");
.custom-notice{line-height: 34px;height: 34px;overflow: hidden;display: flex;justify-content: flex-start;padding: 0 10px;}
.custom-notice-icon{width: 30px;font-size: 20px;}
.custom-notice-broadcast{flex: 1;font-size: 14px;overflow: hidden;position: relative;}
.custom-notice-content{white-space:nowrap;position: absolute;z-index: 11;left: 0;}
</style>
