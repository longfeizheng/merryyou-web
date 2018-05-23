<template>
  <el-row>
    <el-col :xs="24" :sm="18" :md="14" :lg="6" id="main">
      <el-input v-model="info.username" placeholder="请输入用户名"></el-input>
      <el-input v-model="info.password" placeholder="请输入密码"></el-input>
      <el-row>
        <el-button  class="btn-auto" @click="login" type="success">密码模式</el-button>
        <el-button  class="btn-auto" @click="customLogin" type="success">自定义登录</el-button>
        <!--<label>{{token}}</label>-->
      </el-row>
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
      // token: '',
      info: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$axios({
        method: 'post',
        url: '/api/oauth/token',
        params: {
          'username': this.info.username,
          'password': this.info.password,
          'grant_type': 'password',
          'scope': 'all'
        },
        auth: {
          username: 'merryyou',
          password: 'merryyou'
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (res) {
        console.log(res)
      })
    },
    customLogin () {
      this.$axios({
        method: 'post',
        url: '/api/login',
        params: {
          'username': this.info.username,
          'password': this.info.password
        },
        auth: {
          username: 'merryyou',
          password: 'merryyou'
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (res) {
        console.log(res.data.access_token)
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
  margin-left: 0px;
}
</style>
