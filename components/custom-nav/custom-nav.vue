<template>
	<view :class="['navbar',isScroll === true ? 'nav-fixed':'nav-normal']" :style="{ 'height': navheight +parseInt(slotheight)+ 'px' ,'background-color' : bgcolor}">
		<view v-if="mode ==='normal'">
			<view :style="{'height': statusBarHeight +'px'}"></view>
			<view class="header" :style="{'height': menuHeight +'px'}">
				<view class="hearder-status" v-if="haveBack">
					<view class="nav-title-left iconnav icon-back" @click="goback" :style="{'height': btnHeight + 'px', 'color': toolcolor}" style="text-align: left;    justify-content: flex-start;"> 
					<text style="padding-left: 5px;">返回</text> 
					</view>
				</view>
				<view class="header-title" :style="{'line-height': menuHeight + 'px', 'color': color}">{{title}}</view>
			</view>
		</view>
		<view v-if="mode ==='normal-circle'">
			<view :style="{'height': statusBarHeight +'px'}"></view>
			<view class="header" :style="{'height': menuHeight +'px'}">
				<view class="hearder-status" v-if="haveBack">
					<view class="nav-btn" :style="{'width':btnWidth + 'px','height': btnHeight + 'px','background-color':toolBgColor, 'color': toolcolor}">
						<view @click="goback" class="gotback iconnav icon-back" :style="{'border-right': '1px solid '+toolDividing}"></view>
						<view @click="goHome" class="gothome iconnav icon-home"></view>
					</view>
				</view>
				<view class="header-title" :style="{'line-height': menuHeight + 'px', 'color': color}">{{title}}</view>
			</view>
		</view>
		<view :style="{ 'height': navheight + 'px' ,'background-color' : bgcolor}" v-if="mode ==='tool'">
			<view :style="{'height': statusBarHeight +'px'}"></view>
			<view class="header" :style="{'height': menuHeight +'px'}">
				<view class="hearder-status">
					<view class="nav-btn" :style="{'width':btnWidth + 'px','height': btnHeight + 'px', 'color': toolcolor}">
						<view @click="getTool(1)" class="gotback iconnav icon-edit"></view>
						<view @click="getTool(2)" class="gothome iconnav icon-search"></view>
					</view>
				</view>
				<view class="header-title" :style="{'line-height': menuHeight + 'px', 'color': color}">{{title}}</view>
			</view>
		</view>
		<view :style="{ 'height': navheight + 'px' ,'background-color' : bgcolor}" v-if="mode ==='logo'">
			<view :style="{'height': statusBarHeight +'px'}"></view>
			<view class="header" :style="{'height': menuHeight +'px'}">
				<view class="header-title-left  logo-centent" :style="{'line-height': menuHeight + 'px'}">
					<image :src="logoImg" mode="aspectFit"></image>
				</view>

			</view>
		</view>
		<view :style="{ 'height': navheight + 'px' ,'background-color' : bgcolor}" v-if="mode ==='normal-left'">
			<view :style="{'height': statusBarHeight +'px'}"></view>
			<view class="header" :style="{'height': menuHeight +'px'}">
				
					<view class="hearder-status" v-if="haveBack">
						<view class="nav-title-left" :style="{'width': '100%','height': btnHeight + 'px', 'color': color}" style="text-align: left;    justify-content: flex-start;"> 
				{{title}}
						</view>
					</view>
			</view>
		</view>
		<view class="Addslot" :style="{'top':navheight+'px','height':slotheight+'px'}">
			<slot name="extend"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			logoImg: {
				type: String,
				default: ''
			},
			scrollTop: {
				type: Number
			},
			title: {
				type: String,
				default: "标题"
			},
			bgcolor: {
				type: String,
				default: "#000"
			},
			mode: {
				type: String,
				default: 'normal'
			},
			color: {
				type: String,
				default: '#fff'
			},
			slotheight: {
				type: String,
				default: '0'
			},
			toolDividing: {
				type: String,
				default: 'rgba(125,125,125,.8)'
			},
			toolBgColor: {
				type: String,
				default: 'rgba(125,125,125,.8)'
			},
			toolcolor:{
				type: String,
				default: 'rgba(125,125,125,.8)'
			}
		},
		data() {
			return {
				isScroll: false,
				navheight: 0,
				statusBarHeight: 0,
				menuHeight: 0,
				haveBack: false,
				btnHeight: 30,
				btnWidth: 70
			}
		},
		methods: {
			getSysHeightInfo() {
				const that = this
				let statusBarHeight, menuButtonObject, menuHeight, navheight, haveBack, btnHeight, btnWidth

				statusBarHeight = uni.getSystemInfoSync().statusBarHeight
				//#ifdef MP-WEIXIN
				menuButtonObject = uni.getMenuButtonBoundingClientRect()
				menuHeight = menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2
				navheight = menuHeight + statusBarHeight
				btnHeight = menuButtonObject.height
				btnWidth = menuButtonObject.width
				//#endif
				//#ifdef H5
				menuHeight = 44
				navheight = menuHeight + statusBarHeight
				btnHeight = 30
				btnWidth = 70
				//#endif
				if (getCurrentPages().length === 1) { // 当只有一个页面时
					haveBack = false;
				} else {
					haveBack = true;
				}
				that.navheight = navheight
				that.statusBarHeight = statusBarHeight
				that.menuHeight = menuHeight
				that.haveBack = haveBack
			},
			goback() {
				//#ifdef H5
				self.location = document.referrer
				//#endif
				//#ifdef MP-WEIXIN
				let beforePage = getCurrentPages()[getCurrentPages().length - 2]; // 前一个页面
				uni.navigateBack({
					success: function() {
						beforePage.onLoad(); // 执行前一个页面的onLoad方法
					}
				});
				//#endif
			},
			goHome() {
				//#ifdef H5
				window.location.href = "/"
				//#endif
				//#ifdef MP-WEIXIN
				uni.reLaunch({
					url: '../../pages/index/index'
				})
				//#endif
			},
			getTool(index) {
				this.$emit("getTool", index)
			}
		},
		mounted() {
			const that = this
			this.getSysHeightInfo()
			//#ifdef H5
			window.onscroll = function() {
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				if (scrollTop > 0) {
					that.isScroll = true
				} else {
					that.isScroll = false
				}
			}
			//#endif

		},
		watch: {
			scrollTop(newValue, oldValue) {
				//#ifdef MP-WEIXIN
				const that = this
				if (newValue > 1) {
					that.isScroll = true
				} else {
					that.isScroll = false
				}
				//#endif
			}
		}
	}
</script>

<style scoped>
	@import url("./iconfont.css");

	.navbar {
		width: 100%;
		overflow: hidden;
		top: 0;
		left: 0;
		z-index: 99999;
		flex-shrink: 0;
		color: #fff;
		font-size: 16px;
	}

	.nav-normal {
		position: relative;
	}

	.nav-fixed {
		position: fixed;
	}

	.header {
		position: fixed;
		width: 100%;
	}

	.logo-centent {
		display: flex;
		align-items: center;
	}

	.logo-centent image {
		width: 260rpx;
		height: 68rpx;
		margin-left: 20rpx;
	}

	.hearder-status {
		display: flex;
		align-items: center;
		position: absolute;
		padding-left: 10px;
		height: 100%;
		z-index: 99999;

	}

	.header-title {
		height: 100%;
		left: 0;
		right: 0;
		position: absolute;
		margin: auto;
		text-align: center;
	}

	.header-title-left {
		height: 100%;
		left: 0;
		right: 0;
		position: absolute;
		margin: auto;
		text-align: left;
	}

	.back-text {
		margin-left: 7px;
		width: 100upx;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.hearder-status .nav-title-left {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: rgba(0, 0, 0, .8);
		width: 100%;
		font-weight: bold;
	}
	.hearder-status .nav-btn {
		background-color: rgba(255, 255, 255, .5);
		border-radius: 15px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: rgba(0, 0, 0, .8);
		width: 50%;
		font-weight: bold;
	}

	.hearder-status .nav-btn .gotback,
	.hearder-status .nav-btn .gothome {
		flex: 1;
		text-align: center;
		font-size: 18px;
	}
	.Addslot {
		position: absolute;
		width: 100%;
	}
</style>
