<template>
	<view class="tab">
		<scroll-view scroll-y class="left-aside">
			<view v-for="item in itemList" 
			:key="item.name"
			:class="['f-item', item.name === itemName ?'active':'']" @click="click(item.name)">
				{{item.name}}
			</view>
		</scroll-view>
				
		<scroll-view scroll-with-animation scroll-y class="right-aside"  >
			<view class="s-list" >
				<slot name="list"></slot>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemName: 'html',
				itemList:[{name:'html'},{name:'css'},{name:'javascript'},{name:'vue'},{name:'node'},{name:'webpack'},{name:'service'}]
			};
		},
		mounted() {
		},
		methods:{
			click(e){
				this.$emit('click',e)
				this.itemName = e
			}
		}
	}
</script>

<style>
.tab{display: flex;height:100%;}
.left-aside{width:200upx; flex-shrink: 0;height: 100%;background-color: #fff;}
.left-aside .f-item{text-align: center;color: #606266;border-bottom: 1px solid #E4E7ED;height: 48px;line-height: 48px;position: relative;}
.left-aside .active:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    height: 17px;
    width: 3px;
    background-color: #D43D37;
    border-radius: 0 4px 4px 0;
    opacity: .8;
}
.right-aside{flex: 1;padding-left: 20upx;overflow-y: auto;overflow: hidden;}
.s-list{background-color: #fff;min-height: 100%;}
</style>
