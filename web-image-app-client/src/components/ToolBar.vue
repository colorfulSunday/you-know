<template>
  <el-row class="row">
    <el-col :span="4">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="decp"
        @keyup.enter.native="getIamges"
      >
      </el-input>
    </el-col>
    <el-col :span="4" :offset="16">
      <el-button class="upload-btn" type="primary">上传文件</el-button>
    </el-col>
  </el-row>
</template>

<script>
import Axios from 'axios'
export default {
  data() {
    return {
      decp: '',
    };
  },
  methods: {
    getIamges() {
      
      Axios.get('/images?caption='+this.decp).then(response => {
          if (response.data) {
              console.log(response.data)
          }
      }).catch(err => {
          alert('请求失败')
      })
    
    },
  },
};
</script>
<style>
.row {
  max-width: 1300px;
  padding: 10px 0px;
}
.upload-btn {
  float: right;
}
</style>
