<template>
	<view class="custom-notice"  :style="{'background-color': bgColor,'color':color}">
		<view class="custom-notice-icon iconfont icon-broadcast">
		</view>
		<view class="custom-notice-broadcast"> 
			<view class="custom-notice-content" :style="'left:'+offsetLeft+'px'">
			{{title}}
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
			},
			title:{
				type: String,
				default: ''
			},
			speed:{
				type: String,
				required: true
			}
		},
		data() {
			return {
				 intervalStatus: null, //动画状态
				 interval: 20, //时间间隔
				 childWidth: 0, //字体宽度
				 offsetLeft: 0, //偏移量
				 parentWidth: 0 //容器大小
			}
		},
		methods: { 
			quertViewWidth(viewId){
				return new Promise(resolve=>{
					let query = uni.createSelectorQuery(),
					that = this;
					query.in(that).select(viewId).boundingClientRect(rect=>{
						resolve(rect.width)
					}).exec()
				})
			}
		},
		async mounted(){
			//初始化数据
			const that = this
			that.parentWidth = await that.quertViewWidth('.custom-notice-broadcast')
			that.childWidth = await that.quertViewWidth('.custom-notice-content')
			
			function starttest(timestamp){
				let start = timestamp;
				   const elapsed = timestamp - start;
						console.log(elapsed,timestamp,start) 
				    if (elapsed < 20) {
						console.log("startMarquee")
						//文本长度是否 超过 容器大小
						if(that.childWidth > that.parentWidth){
								if(that.offsetLeft <= 0){
									if(that.offsetLeft >= -that.childWidth){
										that.offsetLeft = that.offsetLeft - that.speed
									}else{
										//dda
										that.offsetLeft = that.parentWidth
									}
								}else{
									that.offsetLeft = that.offsetLeft - that.speed
								}
						}
						start = timestamp
				       window.requestAnimationFrame(starttest)
				     }
			}
			 window.requestAnimationFrame(starttest);			 
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
