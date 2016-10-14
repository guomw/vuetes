<template>
	<div>
		<!--<find-center v-if="navIndex==3"></find-center>-->
		<!--<my-center v-if="navIndex==5"></my-center>    -->
		<app-footer @child-tell-me-something="listenToNavbarSwitch"></app-footer>    
    <router-view></router-view>
	</div>
</template>

<script>

import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'
import MyCenter from './components/MyCenter'
import FindCenter from './components/FindCenter'


export default {
  data(){
    return {      
      navIndex:5
    }
  },
  watch:{},
  methods:{
    listenToNavbarSwitch:function(obj){
        this.navIndex=obj;
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    MyCenter,
    FindCenter,
  },
};
</script>

<style>
	@import url(./assets/css/weui.min-gggeren-diy.css);
</style>