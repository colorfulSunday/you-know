<template>
    <div class="infinite-list-wrapper" style="overflow:auto;">
        <div v-infinite-scroll="load" class="list" infinite-scroll-disabled="disabled" ref="test">
            <div v-for="i in count" :key="i" class="list-item">
                <!--这里放图片组件-->
                <div>{{ i }}</div>
                <el-image style="width: 300px; height: 200px" :src="url" fit="cover"></el-image>
            </div>
        </div>
        <!-- 加载提示语 -->
        <div v-if="loading" style="margin-top:20px">加载中，请稍等...</div>
        <div v-if="noMore">已全部加载</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive, toRefs } from 'vue'

export default defineComponent({
    created() {
        this.$nextTick(() => {
            console.log(this.$refs.test)
            console.log(this.$refs.test.clientWidth)
            return
        })
    },
    setup() {
        const count = ref(10)
        const loading = ref(false)
        const noMore = computed(() => count.value >= 10000)
        const disabled = computed(() => loading.value || noMore.value)
        const load = () => {
            loading.value = true
            setTimeout(() => {
                count.value += 500
                loading.value = false
            }, 100) // 这里控制延迟时间
        }

        return {
            count,
            loading,
            noMore,
            disabled,
            load,
            // (临时充当图片组件所涉及的变量)
            url: 'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
        }
    },
})
</script>

<style lang="scss">
.infinite-list-wrapper {
    height: calc(100vh);
    text-align: center;

    .list {
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    .list-item {
        background-color: #6495ff;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;
        margin-bottom: 20px;
    }
}
</style>
