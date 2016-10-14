<!-- 发现页面头部选项卡组件-->
<template>
	<div>
		<div class="weui_navbar" style="position: fixed; top:0px; z-index:999">
			<!--<a href="javascript:void(0)" @click="doClickTabs(1)" class="weui_navbar_item" :class="{weui_bar_item_on:tabIndex==1}"> 热门 </a>
			<a href="javascript:void(0)" @click="doClickTabs(2)" class="weui_navbar_item" :class="{weui_bar_item_on:tabIndex==2}"> 圈子 </a>
			<a href="javascript:void(0)" @click="doClickTabs(3)" class="weui_navbar_item" :class="{weui_bar_item_on:tabIndex==3}"> 关注 </a>-->
			<!--<a href="javascript:void(0)" @click="doClickTabs(4)" class="weui_navbar_item" :class="{weui_bar_item_on:tabIndex==4}"> 科普 </a>-->
			<router-link to="/index/tab1" class="weui_navbar_item" active-class="weui_bar_item_on">热门</router-link>
			<router-link to="/index/tab2" class="weui_navbar_item" active-class="weui_bar_item_on">圈子</router-link>
			<router-link to="/index/tab3" class="weui_navbar_item" active-class="weui_bar_item_on">关注</router-link>
			<router-link to="/index/tab4" class="weui_navbar_item" active-class="weui_bar_item_on">科普</router-link>
		</div>
	</div>
</template>
<script type="text/javascript">	
	export default {
		data(){
			return {
				tabIndex:1
			}
		},
		computed:{},
		methods:{
			doClickTabs:function(index){
				this.tabIndex=index;				
			}
		},		
		components:{
			
		}
	}
</script>

<style>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s
	}
	
	.fade-enter,
	.fade-leave-active {
		opacity: 0
	}
</style>