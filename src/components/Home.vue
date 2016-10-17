<template>
    <div>
        <div v-if="$route.params.id==1">yes</div>
        <div v-if="$route.params.id==2">no</div>
        <span>{{ $route.params.id }}</span>
    </div>
</template>


<script>

    export default {
        data(){
            return {
               
               msg:null
            }
        },
	    beforeCreate () {
         
        },
        methods:{

        }
    }
</script>