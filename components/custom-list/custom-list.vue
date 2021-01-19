<template>
	<view class="custom-list">
		<view class="custom-list-normal custom-list-item" v-if="mode === 'normal'" @click="gotIndex">
					<view class="custom-list-title">
								{{title | filter_title}}
					</view>
					<view class="custom-list-detail">
								{{source}} {{time}}
					</view>
		</view>
		<view class="custom-list-chart custom-list-item" v-if="mode === 'material'">
					<view class="custom-list-item-main">
						<view class="custom-list-title custom-list-title-limit"  @click="gotIndex">
								{{title | filter_title}}
						</view>
						<view class="custom-list-detail">
								{{source}} {{time}}
						</view>
					</view>
					<view class="custom-list-item-img">
						<image @click="clickImg(imgUrl)" :src="imgUrl[0]" mode="heightFix"></image>
					</view>
		</view>
		<view class="custom-list-btn"  v-if="mode === 'materialBtn'">

			<view class="custom-list-item">
						<view class="custom-list-item-main"   @click="gotIndex">
							<view class="custom-list-title custom-list-title-limit">
								{{title | filter_title}}
							</view>
							<view class="custom-list-detail">
								{{source}} {{time}}
							</view>
						</view>
						<view class="custom-list-item-img">
							<image @click="clickImg(imgUrl)" :src="imgUrl[0]" mode="heightFix"></image>
						</view>
			</view>
			<view class="custom-list-btn-detai">
				<view   @click="gotTool(1)"  class="custom-list-btn-detai-item">
					<text class="iconfont icon-edit"></text>
					<text>查看</text>
				</view>
				<view   @click="gotTool(2)" class="custom-list-btn-detai-item">
					<text class="iconfont icon-share"></text>
					<text>分享</text>

				</view>
				<view  @click="gotTool(3)" class="custom-list-btn-detai-item">
					<text class="iconfont icon-top"></text>
					<text>置顶</text>

				</view>
			</view>
		</view>
		<view class="custom-list-btn"  v-if="mode === 'normalBtn'">

			<view class="custom-list-item"  @click="gotIndex">
						<view class="custom-list-item-main">
							<view class="custom-list-title">
								{{title | filter_title}}
							</view>
							<view class="custom-list-detail">
								{{source}} {{time}}
							</view>
						</view>
			</view>
			<view class="custom-list-btn-detai">
				<view   @click="gotTool(1)"  class="custom-list-btn-detai-item">
					<text class="iconfont icon-edit"></text>
					<text>查看</text>
				</view>
				<view   @click="gotTool(2)" class="custom-list-btn-detai-item">
					<text class="iconfont icon-share"></text>
					<text>分享</text>
				
				</view>
				<view  @click="gotTool(3)" class="custom-list-btn-detai-item">
					<text class="iconfont icon-top"></text>
					<text>置顶</text>
				
				</view>
			</view>
		</view>	
			
		<view class="custom-list-btn" v-if="mode === 'materialBtnMore'">
			<view class="custom-list-item-more-img"  @click="gotIndex">
						<view class="custom-list-item-main">
							<view class="custom-list-title">
								{{title | filter_title}}
							</view>
							<view class="custom-list-detail">
								{{source}} {{time}}
							</view>
						</view>
			</view>
			<view class="custom-list-item-img-arr">
				<view class="custom-list-item-img-arr-item">
				<image @click="clickImg(imgUrl)" :src="imgUrl[0]" mode="heightFix"></image>
				</view>
				<view class="custom-list-item-img-arr-item">
				<image @click="clickImg(imgUrl)" :src="imgUrl[1]" mode="heightFix"></image>
				</view>
				<view class="custom-list-item-img-arr-item">
				<image @click="clickImg(imgUrl)" :src="imgUrl[2]" mode="heightFix"></image>
				</view>
			</view>
			<view class="custom-list-btn-detai">
				<view   @click="gotTool(1)"  class="custom-list-btn-detai-item">
					<text class="iconfont icon-edit"></text>
					<text>查看</text>
				</view>
				<view   @click="gotTool(2)" class="custom-list-btn-detai-item">
					<text class="iconfont icon-share"></text>
					<text>分享</text>
				
				</view>
				<view  @click="gotTool(3)" class="custom-list-btn-detai-item">
					<text class="iconfont icon-top"></text>
					<text>置顶</text>
				
				</view>
			</view>
		</view>
		
		
		<view class="custom-list-btn" v-if="mode === 'normalBtnMore'">
			<view class="custom-list-item-more-img"  @click="gotIndex">
						<view class="custom-list-item-main">
							<view class="custom-list-title">
								{{title | filter_title}}
							</view>
							<view class="custom-list-detail">
								{{source}} {{time}}
							</view>
						</view>
			</view>
			<view class="custom-list-item-img-arr ">
				<view class="custom-list-item-img-arr-item">
				<image @click="clickImg(imgUrl)" :src="imgUrl[0]" mode="heightFix"></image>
				</view>
				<view class="custom-list-item-img-arr-item">
				<image @click="clickImg(imgUrl)" :src="imgUrl[1]" mode="heightFix"></image>
				</view>
				<view class="custom-list-item-img-arr-item">
				<image @click="clickImg(imgUrl)" :src="imgUrl[2]" mode="heightFix"></image>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props: {
			mode: {
				type: String,
				default: 'normal'
			},
			url: {
				type: String,
			},
			title:{
				type: String,
				default: ''
			},
			source:{
				type: String,
				default: ''
			},
			time:{
				type: String,
				default: ''
			},
			imgUrl:{
				type: Array
			},
			target:{
				type: Array
			}
		},
		data() {
			return {

			}
		},
		methods: {
			gotTool(index){
				this.$emit("clickTool",{index})
			},
			gotIndex(){
				let target = this.target
				if(!target) target = ['_self','navigateTo'];
				const h5patt = ['_blank','_self', '_parent' , '_top']
				const wxpatt = [ 'navigateTo' , 'redirectTo' , 'reLaunch', 'switchTab']
			   //#ifdef H5
			       target = target[0]
				   if(h5patt.indexOf(target) !== -1){
				   window.open(this.url,target);
				   }
			   //#endif
			   //#ifdef MP-WEIXIN
			       target = target[1]
					if(wxpatt.indexOf(target) !== -1){
						switch(target){
							case 'navigateTo':uni.navigateTo({url: this.url,complete(e){console.log(e)}});break;
							case 'redirectTo':uni.redirectTo({url: this.url,complete(e){console.log(e)}});break;
							case 'reLaunch':uni.reLaunch({url: this.url,complete(e){console.log(e)}});break;
							case 'switchTab':uni.switchTab({url: this.url,complete(e){console.log(e)}});break;
						}
					}
			   //#endif
			},
			clickImg(value){ 
				//#ifdef MP-WEIXIN
				 uni.previewImage({
				            urls: value
				        })
				//#endif
				//#ifdef H5
				    const nodeMask = document.createElement("div")
					let nodeContainer = document.createElement("div")
					nodeContainer.style.margin="auto"
					nodeContainer.style.width= 100+'%'
					nodeContainer.style.height= 100+'%'
					nodeContainer.style.overflow= 'auto'
					nodeContainer.setAttribute("onclick","document.getElementById('nodeMask').parentNode.removeChild(document.getElementById('nodeMask'))")
					for(let i = 0; i < value.length; i++){
							let nodeImg = document.createElement("img")
							nodeImg.style.width = '100%'
							nodeImg.style.height = 'auto'
							nodeImg.src = value[i]
							nodeContainer.appendChild(nodeImg)
					}
					nodeMask.setAttribute("id","nodeMask")
					nodeMask.style.width = '100%'
					nodeMask.style.height = '100%'
					nodeMask.style.position = "fixed"
					nodeMask.style.zIndex = "9999999"
					nodeMask.style.backgroundColor = "#000"
					nodeMask.style.top = "0"
					nodeMask.style.margin = "0 auto"
					const doc = document.documentElement || document.body
					nodeMask.appendChild(nodeContainer)
					doc.appendChild(nodeMask)
				//#endif
			}
		},
		watch:{ 
		},
		filters:{
			filter_title(e){
				if(e.length > 45)return e.slice(0, 45) + "...";
				return e
			}
		}
	}
</script>

<style scoped>
	@import url("./iconfont.css");

	.custom-list-item {
		padding: 10px 8px;
		border-bottom: 1px solid #f5f7f9;
		display: flex;
		justify-content: space-between;
	}
	.custom-list-item-more-img {
		padding: 10px 8px;
		display: flex;
		justify-content: space-between;
	}
.custom-list-normal{
		display: flex;
		justify-content: center;
		flex-direction: column;
		}
	.custom-list-chart a {
		display: flex;
		justify-content: space-between;
	}

	.custom-list-btn a {
		text-decoration: none;
	}

	.custom-list-btn navigator {
		display: flex;
		justify-content: space-between;
	}

	.custom-list-chart navigator {
		display: flex;
		justify-content: space-between;
	}

	.custom-list-title {
		font-size: 32upx;
	}
	.custom-list-item .custom-list-title-limit{
		width: 570upx;
		}

	.custom-list-item-main {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.custom-list-detail {
		font-size: 24upx;
		color: #b4b4b4;
		margin-top: 5px;
	}
	.custom-list-item-img {
		width: 234upx;
		height: 146upx;
		text-align: center;
	}
.custom-list-item-img-arr{
	    display: flex;
		height: 146upx;
		text-align: center;
		padding-bottom: 15px;
		border-bottom: 1px solid #f5f7f9;
		}
.custom-list-item-img-arr-item{
	    margin-right: 5upx ;
		width: 245upx;
		height: 146upx;
		}
.custom-list-item-img-arr image ,	.custom-list-item-img image {
		height: 146upx;
	}

.custom-list-item-img-arr  img,	.custom-list-item-img img {
		width: auto;
		height: 146upx;
	}

	.custom-list-item-img-arr /deep/ uni-image ,.custom-list-item-img /deep/ uni-image {
		width: 100%;
	} 
	.custom-list-item-img-arr /deep/ uni-image>div , .custom-list-item-img /deep/ uni-image>div {
		background-size: auto 100% !important;
		background-position: center center !important;
	}

	.custom-list-item-img-arr /deep/ uni-image>img , .custom-list-item-img /deep/ uni-image>img {
		width: auto !important;
	}

	.custom-list-btn-detai {
		display: flex;
		justify-content: space-between;
		align-items: center;
		line-height: 63upx;
		border-bottom: 1px solid #f5f7f9;
		color: #999999;
		font-size: 26upx;
	}

	.custom-list-btn-detai view {
		flex: 1;
		text-align: center;
	}

	.custom-list-btn-detai-item text:first-child {
		margin-right: 5px;
	}

	.custom-list-btn-detai-item {
		position: relative;
	}

	.custom-list-btn-detai-item::after {
		content: '';
		width: 1px;
		position: absolute;
		height: 100%;
		background-color: #f5f7f9;
		right: 0;
	}
</style>
