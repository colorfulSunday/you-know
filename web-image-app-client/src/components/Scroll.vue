<template>
    <div>
        <div class="infinite-list-wrapper" style="overflow:auto;">
            <div v-infinite-scroll="load" class="list" infinite-scroll-disabled="disabled">
                <!-- 注意绑定的key值，这对图片删除等操作确定是哪个图片子组件很重要 -->
                <div v-for="(pic,index) in picArr" :key="pic.id" class="list-item">
                    <!--图片加载很慢是图片链接的服务器在国外-->
                    <el-image
                        style="width: 300px; height: 200px"
                        :src="'http://118.31.62.229:8080/img/' + pic.url"
                        fit="cover"
                    ></el-image>
                    <button class="btn watch-btn" @click="handleClick(pic.url)">预览</button>
                    <button
                        class="btn copy-btn"
                        style="width:120px"
                        @click="copy"
                        :data-clipboard-text="pic.url"
                    >复制链接</button>
                    <!-- <el-icon>
                        <data-board />
                    </el-icon>
                    <el-icon>
                        <link />
                    </el-icon>-->
                    <div>
                        <span style="font-weight:600">序号：{{ index + 1 }}</span>
                        &nbsp;&nbsp;图片名称:{{ pic.url == null ? '无此文件' : pic.url }}
                    </div>
                </div>
            </div>
            <!-- 加载提示语 -->
            <div v-if="loading" style="margin-top:20px">加载中，请稍等...</div>
            <div v-if="noMore">已无更多图片</div>
        </div>
        <el-dialog v-model="dialogVisible" title="图片预览" width="40%">
            <el-image style :src="'http://118.31.62.229:8080/img/' + picSrc" fit="cover"></el-image>
            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="dialogVisible = false">确定</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive, toRefs } from 'vue'

import Clipboard from 'clipboard'
import axios from 'axios'

export default defineComponent({
    setup() {
        // 一个图片数据结构
        let picArr = reactive([])

        // 弹窗控制
        let dialogVisible = ref(false)
        let picSrc = ref('')

        const loading = ref(false) // 设置是否显示“加载中”提示语用的变量
        const noMore = computed(() => picArr.length >= 60) // 设置关闭请求上线
        const disabled = computed(() => loading.value || noMore.value)

        //预览函数
        const handleClick = (e) => {
            // window.open(src, '_blank')
            dialogVisible.value = true
            picSrc.value = e
            console.log(e)
        }
        //复制链接函数
        const copy = (e) => {
            const btnCopy = new Clipboard(e.target);
        }

        // 请求图片
        const getPic = async () => {
            let res = await axios.get('/images')
            return res.data
        }

        // 获取图片地址
        const getPicUrl = async (url) => {
            let res = await axios.get(`/img/${url}`)
            return res.data
        }

        const load = () => {
            loading.value = true
            setTimeout(async () => {
                let new_arr = await getPic()
                console.log(new_arr)
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
            copy,
            dialogVisible,
            picSrc,
        }
    },
})
</script>

<style lang="scss">
.infinite-list-wrapper {
    height: calc(100vh - 100px);
    text-align: center;

    .list {
        width: 1285px; // 请注意根据图片组件实际宽度调整此处的宽度值
        padding: 0;
        margin: 0 auto;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        border: 1px solid #666;
    }

    .list-item {
        position: relative;
        // background-color: #6495ff;
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
            color: rgb(209, 209, 209);
            border-radius: 10px;
            opacity: 0;
            transition: opacity 0.5s;
            background-color: #000;

            &:hover {
                background-color: #000;
                color: white;
            }

            &.copy-btn {
                right: 30px;
            }

            &.watch-btn {
                left: 30px;
            }
        }

        &:hover {
            .btn {
                opacity: 1;
            }
        }
    }
}
</style>
