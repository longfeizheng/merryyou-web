<template>
  <el-row>
    <el-col :xs="24" :sm="18" :md="14" :lg="6" id="main">
      <el-input v-model="info.username" placeholder="请输入用户名"></el-input>
      <el-input v-model="info.password" placeholder="请输入密码"></el-input>
      <el-button  class="btn-auto" @click="login" type="success">登录</el-button>
    </el-col>
    <template>
      <router-link to="newcontact">{{msg}}</router-link>
    </template>
  </el-row>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome',
      info: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$axios({
        methods: 'POST',
        url: '/api/login',
        data: {
          username: 'admin',
          password: '123456'
        },
        headers: {
          'Authorization': 'Basic bWVycnl5b3U6bWVycnl5b3U=',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (res) {
        console.log(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#main {
  float: none;
  margin: 0 auto;
}
.btn-auto {
  width: 100%;
  margin-top: 12px;
}
</style>
