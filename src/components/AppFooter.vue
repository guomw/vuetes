<template>
	<div class="weui_navbar daohangs">
		<a href="javascript:void(0);" @click="doClickNav(1)" class="weui_navbar_item " :class="{weui_bar_item_on:index==1}">
			<p class="kimg dhshouyeicon"></p>
			<p>首页</p>
		</a>
		<a href="javascript:void(0);" @click="doClickNav(2)" class="weui_navbar_item " :class="{weui_bar_item_on:index==2}">
			<p class="kimg dhfenleiicon"></p>
			<p>分类</p>
		</a>
		<a href="javascript:void(0);" @click="doClickNav(3)" class="weui_navbar_item " :class="{weui_bar_item_on:index==3}">
			<p class="kimg faxxx"></p>
			<p style="z-index:99999; position:absolute;left:0px;right:0px;">发现</p>
			<div style="position:absolute;bottom:0px;left:0px;right:0px;">
				<p class="faxxxicon"></p>
				<div style="position:absolute;bottom:0px;left:0px;right:0px; z-index:-1">
					<p style=" height:5.5em; text-align:center; margin:0 auto;background-color:#fff; border-radius:100%; border:1px solid #eee">
					</p>
				</div>
			</div>
		</a>
		<a href="javascript:void(0);" @click="doClickNav(4)" class="weui_navbar_item " :class="{weui_bar_item_on:index==4}">
			<p class="kimg dhgouwucheicon"></p>
			<p>购物车</p>
		</a>
		<a href="javascript:void(0);" @click="doClickNav(5)" class="weui_navbar_item " :class="{weui_bar_item_on:index==5}">
			<p class="kimg dhzhongxinicon"></p>
			<p> 我的</p>
		</a>
	</div>
</template>

<script>
	
export default {
	data () {
		return {
			index:5
		}
	},
	methods:{
		doClickNav:function(index){
			this.index=index;
			this.$emit('child-tell-me-something',index);
		}
	}
}

</script>

<style>

</style>