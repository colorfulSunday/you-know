<template>
    <div class="infinite-list-wrapper" style="overflow:auto;">
        <div v-infinite-scroll="load" class="list" infinite-scroll-disabled="disabled">
            <!-- 注意绑定的key值，这对图片删除等操作确定是哪个图片子组件很重要 -->
            <div v-for="(pic,index) in picArr" :key="pic.id" class="list-item">
                <!--这里放图片组件（7-11行）-->
                <div>{{ index + 1 }}</div>
                <p>{{ pic.id }}</p>
                <!--图片加载很慢是图片链接的服务器在国外-->
                <el-image style="width: 300px; height: 200px" :src="pic.src" fit="cover"></el-image>
                <button  class="btn watch-btn" @click="handleClick(pic.src)">预览</button>
                <button  class="btn copy-btn" @click="copy"  :data-clipboard-text="pic.src">复制链接</button>
            </div>
        </div>
        <!-- 加载提示语 -->
        <div v-if="loading" style="margin-top:20px">加载中，请稍等...</div>
        <div v-if="noMore">已无更多图片</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive, toRefs } from 'vue'

import Clipboard from 'clipboard'

export default defineComponent({
    setup() {
        // 模拟一个图片数据结构(仅为测试，请在有正式数据删除此变量)
        let picArr = reactive([])

        const loading = ref(false) // 设置是否显示“加载中”提示语用的变量
        const noMore = computed(() => picArr.length >= 60) // 设置关闭请求上线
        const disabled = computed(() => loading.value || noMore.value) 

        //预览函数
        const handleClick = (src) => {
           window.open(src,'_blank')
        }
        //复制链接函数
        const copy = (e)=>{
            const btnCopy = new Clipboard(e.target); 
        }

        const load = () => {
            loading.value = true
            setTimeout(() => {
                /*
                    此处应该请求api，去获取图片资源，这里要注意请求后端的参数
                */
                // 使用模拟数据
                let new_arr = [
                    { id: "001", src: 'https://w.wallhaven.cc/full/72/wallhaven-72rd8e.jpg', name: '风景' },
                    { id: '002', src: 'https://w.wallhaven.cc/full/1k/wallhaven-1kg8g1.jpg', name: '键盘' },
                    { id: '003', src: ' https://w.wallhaven.cc/full/e7/wallhaven-e7wjeo.jpg', name: '山' },
                    { id: "004", src: 'https://w.wallhaven.cc/full/72/wallhaven-72rd8e.jpg', name: '风景' },
                    { id: '005', src: 'https://w.wallhaven.cc/full/1k/wallhaven-1kg8g1.jpg', name: '键盘' },
                    { id: '006', src: ' https://w.wallhaven.cc/full/e7/wallhaven-e7wjeo.jpg', name: '山' },
                    { id: "007", src: 'https://w.wallhaven.cc/full/72/wallhaven-72rd8e.jpg', name: '风景' },
                    { id: '008', src: 'https://w.wallhaven.cc/full/1k/wallhaven-1kg8g1.jpg', name: '键盘' },
                    { id: '009', src: ' https://w.wallhaven.cc/full/e7/wallhaven-e7wjeo.jpg', name: '山' },
                    { id: "010", src: 'https://w.wallhaven.cc/full/72/wallhaven-72rd8e.jpg', name: '风景' },
                ]
                // 拼接数组
                picArr.push(...new_arr)
                loading.value = false
            }, 500) // 这里控制延迟时间
        }

        return {
            loading,
            noMore,
            disabled,
            load,
            // (临时充当图片组件所涉及的变量)
            picArr,
            handleClick,
            copy
        }
    },
})
</script>

<style lang="scss">
.infinite-list-wrapper {
    height: calc(100vh);
    text-align: center;

    .list {
        width: 1300px; // 请注意根据图片组件实际宽度调整此处的宽度值
        padding: 0;
        margin: 0 auto;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    .list-item {
        position: relative;
        background-color: #6495ff;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;
        margin-bottom: 20px;

        .btn {
            position: absolute;
            bottom: 10px;
            width: 70px;
            height: 30px;
            border: none;
            color: black;
            border-radius: 10px;
            opacity: 0;
            transition: all .5s;

            &.copy-btn{
                right: 30px;
            }

            &.watch-btn{
                left: 30px;
            }
        }


        &:hover{
            .btn {
                opacity: 1;
            }
        }
    }
}
</style>
