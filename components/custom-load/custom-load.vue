<template>
	<view class="custom-load">
		<view class="iconfont iconload-a custom-icon" v-show="type === 'loading'">
		</view>
		<view class="custom-load-text" v-show="type === 'loaded'">
		  {{label}}
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			type:{
				type:String,
				default:'loading'
			},
			label:{
				type:String,
				default:'已加载完'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
@import url("./iconfont.css");
.custom-load{display: flex;justify-content: center;align-items: center;padding: 10px;}
.custom-icon{font-size: 60rpx;animation: ratote 1s linear infinite;}
@keyframes ratote{
	from{
		transform: rotate(0deg);
	}
	to{
		transform: rotate(360deg);
		}
}
.custom-load-text{font-size: 14px;color: #555555;}
</style>
