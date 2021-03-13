<template>
	<view :style=" mold === 'hidden'?'display:none;':'display:block;' ">
		<view class="custom-load" v-show="mold === 'normal'">
			<view class="iconfont iconload-a custom-icon" v-show="type === 'loading'">
			</view>
			<view class="custom-load-text" v-show="type === 'loaded'">
			  {{label}}
			</view>
		</view>
		<view class="custom-load-all" v-show="mold === 'screen'">
			<view class="container">
				<i class="iconfont iconload-a custom-all-icon"></i>
			</view>
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
			},
			mold:{
				type:String,
				default:'normal'
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
.custom-icon{font-size: 60rpx;animation: ratote 1s linear infinite;transform-origin: center center;}
@keyframes ratote{
	from{
		transform: rotate(0deg);
	}
	to{
		transform: rotate(360deg);
		}
}
.custom-load-text{font-size: 14px;color: #555555;}
.custom-load-all{position: fixed;top: 0;left: 0;bottom: 0;right: 0;width: 100%;height: 100%;z-index: 99999;background-color: rgba(255,255,255,1);display: flex;justify-content: center;align-items: center;}
.container{display: flex;justify-content: center;align-items: center;width: 60px;height: 60px;}
.custom-all-icon{font-size: 120rpx;animation: ratote 2s linear infinite;text-align: center;color: #000;}
</style>
