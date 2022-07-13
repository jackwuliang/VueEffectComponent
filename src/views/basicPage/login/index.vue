<template>
    <div class="app">
         loginpage12121112121 
         <button @click="handleClick">点击</button>  
         <div>{{state.count}}</div>  
    </div>
</template>

<script>
import { reactive,ref,watch} from 'vue';

export default{
        setup(){
                
                const state = reactive({ count:0 })

                const handleClick = () => {
                    state.count++
                    console.log(state,'state')
                }

                return {
                    state,
                    handleClick
                }
        }
}
</script>



<style scoped lang="scss">

    .app{
        background-color: blue;
        height: 100vh;
        width: 100vw;
        padding: 0;
        margin: 0;
        color: white;
        overflow: hidden;
        .style{
             height: 100px;
        }
    }

</style>