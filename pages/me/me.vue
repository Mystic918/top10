<template>
	<view class="me">
		<customNav mode="logo" logoImg="../../static/images/mainlogo.png" bgcolor="#fff">
		</customNav>

		<scroll-view>
			<view class="info" v-if="info.name">
				<view class="item img line">
					<image :src="info.avatarUrl" style="width: 60px;height: 60px;padding: 0 10px;"></image>
					<view class="title" style="flex-shrink: 1;display: flex;flex-direction: column;justify-content: space-between;">
						<text style="font: 16px;color: #333;font-weight: bold;">
							{{info.name}}
						</text>
						<text style="font: 12px;color: #ccc;">
							{{info.city}}
						</text>
					</view>
				</view>
				<view class="item">
					<text class="iconfont icon-read item-icon" style="color: #006600;"></text><navigator url="../record/record?type=brows" open-type="navigate">浏览记录</navigator>
				</view>
				<view class="item line">
					<text class="iconfont icon-love item-icon" style="color: #FF0033;"></text><navigator url="../record/record?type=love" open-type="navigate">收藏记录</navigator>
				</view>
				<view class="item line">
					<text class="iconfont icon-system item-icon" style="color: #666666;"></text><text>设置</text>
				</view>
				<view class="item line">
					<text class="iconfont icon-system icon-back-curved-solid  item-icon" style="color: #000000;"></text><text>退出</text>
				</view>
			</view>
			<view v-if="JSON.stringify(info) == '{}'">
				<view class="text" style="padding: 50px;">
					<text>提示：</text>
					<text>请点击登录，发现更多功能</text>
				</view>
				<button class='bottom' type='primary' open-type="getUserInfo" lang="zh_CN" @getuserinfo="bindGetUserInfo">
					登录
				</button>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import customNav from "../../components/custom-nav/custom-nav.vue"
	import {
		request
	} from "../../util/request.js"
	import * as config from "../../config/index.js"
	import security from '../../static/script/security.js'
	export default {
		components: {
			customNav
		},
		data() {
			return {
				info: {}
			}
		},
		methods: {
			bindGetUserInfo(e) {
							const that = this
							let message = e.detail.userInfo
							wx.login({
									success(res) {
										if (res.code) {
											const data = {
												name: message.nickName,
												city: message.province + message.city,
												avatarUrl: message.avatarUrl
											}
											request(config.Api.ApiRoot + '/information/setVisitorsInfo', data, 'POST').then(res => {
												uni.setStorageSync(
													"infoMessage",security.base64encode(JSON.stringify(data))
												)
												that.info = data
											if (!uni.getStorageSync("brows") || !uni.getStorageSync("love")) {
												console.log("创建message")
												uni.setStorageSync("brows", [])
											    uni.setStorageSync("love", [])
												}
										})
								}
							 else {
							 console.log('登录失败！' + res.errMsg)
						 }
								
					 }
				 })
			}
	},
	mounted() {
		this.StatusHeight = getApp().globalData.StatusHeight
		const that = this
		uni.getSetting({
			success(res) {
				if (res.authSetting['scope.userInfo']) {
					uni.getUserInfo({
						success(rs) {
							//存在已经授权则自动登陆
							that.bindGetUserInfo({
								detail: rs
							})
						}
					})
				}
			}
		})
	}

	}
</script>

<style>
	.me {
		background-color: #f7f7f7;
		height: fill-available;
	}

	.img {
		height: 80px !important;
		padding: 20px 10px !important;
	}

	.item {
		padding: 0px 15px;
		height: 50px;
		border-bottom: 1px solid #eee;
		background-color: rgba(255, 255, 255, 1);
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.line {
		margin-bottom: 10px;
	}

	.item-icon {
		font-size: 20px;
		margin-right: 15px;
	}
</style>
