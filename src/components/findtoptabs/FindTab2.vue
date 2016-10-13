<!-- 圈子页面组件 -->
<template>
	<div>
		<!-- 轮播组件 -->
		<swiper></swiper>

		<div class="weui_cells weui_cells_access" style="margin-top:0px; font-size:14px">
			<a class="weui_cell" href="geren-index10.html">
				<div class="weui_cell_bd weui_cell_primary">
					<p>热门推荐</p>
				</div>
				<div class="weui_cell_ft" style="font-size:12px">18个</div>
			</a>
		</div>

		<div class="custom-switch" style="padding:0px 0px; background-color:#fff; overflow:hidden">
			<div class="switch_slider" id="loopImgDiv" style="padding-bottom: 0px; padding-left: 2%; padding-top: 2%; padding-bottom: 2%; padding-right: 0px; background: #fff;">
				<div class="inner">
					<div class="switch-container">
						<div id="wrapperPanel" class="swiper-wrapper" style="height: auto;">
							<div class="swiper-slide" style="width: auto;">
								<a href="geren-index3.html">
									<div class="xjcma">
										<span class="bn">养生</span>
										<span class="bna">3232人已关注</span>
										<div class="masksd"></div>
										<img src="../../assets/images/a1.jpg" style="width:100%; " />
									</div>
								</a>
							</div>
							<div class="swiper-slide" style="width: auto;">
								<a href="geren-index3.html">
									<div class="xjcma">
										<span class="bn">激情</span>
										<span class="bna">3232人已关注</span>
										<div class="masksd"></div>
										<img src="../../assets/images/a2.jpg" style="width:100%; " />
									</div>
								</a>
							</div>
							<div class="swiper-slide" style="width: auto;">
								<a href="geren-index3.html">
									<div class="xjcma">
										<span class="bn">运动</span>
										<span class="bna">3232人已关注</span>
										<div class="masksd"></div>
										<img src="../../assets/images/a3.jpg" style="width:100%; " />
									</div>
								</a>
							</div>


							<div class="swiper-slide" style="width: auto;">
								<a href="geren-index10.html">
									<div class="xjcma">
										<span class="bn">全部圈子</span>
										<span class="bna" style="">查看</span>
										<div class="masksd"></div>
										<img src="../../assets/images/a2.jpg" style="width:100%; " />
									</div>
								</a>
							</div>



						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="weui_cells weui_cells_access xia" style="margin-top:0px; font-size:14px">
			<a class="weui_cell" href="javascript:void(0);">
				<div class="weui_cell_bd weui_cell_primary">
					<p>我的小组</p>
				</div>
				<div class="weui_cell_ft" style="font-size:12px"></div>
			</a>
		</div>
		<div class="cont-zhbox">

			<div class="cont-zhbox-t" style="padding:5px 0px">
				<div class="cont-zhbox-t" style="border:0px; padding:5px 10px 10px 10px">
					<div class="zhbox">
						<div class="zh-tx">
							<img src="../../assets/images/j2.jpg">
						</div>
						<div class="zh-wz">
							<div class="zh-wz-x">
								<p class="zh-wz-name" style="color:#333">养生馆</p>
							</div>
							<div class="njk fkfk">
								<a href="javascript:;" class="guanzudian">
									<div class="weui_btn weui_btn_mini weui_btn_default" style="padding:0px 4px">
										<img src="../../assets/images/ddicon/iconfont-gengduo-b.png" style="width:30px; margin-top:-6px"></div>
								</a>
							</div>
							<div class="zh-wz-time">
								<span style="float:left">3小时前</span>
								<span style="float:right"></span>
								<span style="float:right; margin-right:10px"></span>
								<p style="clear:both"></p>
							</div>
						</div>
					</div>
				</div>










				<div class="weui_cells wala" style="margin-top:0px">
					<div class="weui_cell" v-for="item in items">
						<div class="weui_cell_bd weui_cell_primary">
							<p class="cont-zhbox-a sm">韩媒:朝鲜遭遇严重干旱粮食缺口近70万吨粮食缺口近70万吨</p>
							<div class="zhbox mtt">
								<div class="zh-wz-time">
									<span style="float:left">小小明</span>
									<span style="float:right">回复212</span>
									<span style="float:right; margin-right:10px">浏览32222</span>
									<p style="clear:both"></p>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script type="text/javascript">
	import Swiper from '../../components/Swiper'
	export default {
		data(){
			return {
				items:[
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				]
			}
		},
		components:{
			Swiper
		}
	}
</script>