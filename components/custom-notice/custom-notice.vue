<template>
	<view class="custom-notice"  :style="{'background-color': bgColor,'color':color}">
		<view class="custom-notice-icon iconfont icon-broadcast">
		</view>
		<view class="custom-notice-broadcast">
			<!-- #ifdef MP-WEIXIN -->
			<view class="custom-notice-content" :animation="animationData"  @transitionend = "endAnimation">
			{{title}}
			</view>
			<!-- #endif -->
			<!-- #ifdef H5 -->
			<view class="custom-notice-content">
			{{title}}
			</view>
			<!-- #endif -->
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
			},
			title:{
				type: String,
				default: ''
			},
			speed:{
				type: Number,
				required: true
			}
		},
		data() {
			return {
				 animationData: {}
			}
		},
		methods: {
			endAnimation(){
				const that = this
				 that.animation.translateX(0).step({
				 	duration: 0,
				 	timingFunction: 'linear'
				 })
				 that.animationData = that.animation.export()
			}
		},
		mounted(){
			let time = this.speed , that = this
			//#ifdef H5
			const documentbody = document.documentElement || document.body
			const cNc = document.getElementsByClassName('custom-notice-content')[0]
			const width = cNc.clientWidth
			cNc.style.animation = "swipers "+time+"s linear infinite" 
			var style = document.styleSheets[0];
			style.insertRule("@keyframes swipers{from{left:"+documentbody.clientWidth+"px}to{left: -"+width+"px;}}")
			 //#endif
			 //#ifdef MP-WEIXIN 
			 
			uni.createSelectorQuery().in(this).select('.custom-notice-content').boundingClientRect(data => { 
				uni.createSelectorQuery().in(this).select('.custom-notice-broadcast').boundingClientRect(data2 =>{
					 
			  let animation  = uni.createAnimation()
			  that.animation = animation
			  
			that.animation.translateX(0-data.width).step({
								duration:  time * 1000,
								timingFunction: 'linear'
						 }) 
			that.animationData = that.animation.export()
		  setInterval(function(){
			that.animation.translateX(0-data.width).step({
								duration:  time * 1000,
								timingFunction: 'linear'
						 }) 
			that.animationData = that.animation.export()
		  }, 0)

			 		
		 }).exec();
}).exec(); 

 



			 //#endif
			 
		}
	}
</script>

<style scoped>
@import url("./iconfont.css");
.custom-notice{line-height: 34px;height: 34px;overflow: hidden;display: flex;justify-content: flex-start;padding: 0 10px;}
.custom-notice-icon{width: 30px;font-size: 20px;}
.custom-notice-broadcast{flex: 1;font-size: 14px;overflow: hidden;position: relative;}
.custom-notice-content{white-space:nowrap;position: absolute;z-index: 11;transform: translateX(0);}
 
</style>
