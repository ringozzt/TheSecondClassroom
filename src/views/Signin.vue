<template>
<div class="Signin">
  <div class="hold-transition theme-primary bg-lighter" style="height:100vh;width:100vw">
    <div class="container h-p100">
    <div class="row align-items-center justify-content-md-center h-p100">

      <div class="col-12">
        <div class="row justify-content-center no-gutters">
          <div class="col-lg-4 col-md-5 col-12">
            <div class="content-top-agile p-10">
              <h2 class="text-success">第二课堂</h2>
              <p class="text-success-50">The Secondary Studies Management</p>
            </div>
            <div class="p-30 rounded30 box-shadowed b-2 b-dashed bg-white">
              <form>
                <div class="form-group">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text bg-transparent text-success"><i class="ti-user"></i></span>
                    </div>
                    <input type="text" class="form-control pl-15 bg-transparent text-success plc-white" v-model="loginForm.account" placeholder="帐号">
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text  bg-transparent text-success"><i class="ti-lock"></i></span>
                    </div>
                    <input type="password" class="form-control pl-15 bg-transparent text-success plc-white" v-model="loginForm.password" placeholder="密码">
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <!-- /.box-body -->
                    <div class="box-header with-border">
                      <i class="fa fa-check-circle text-black"></i>
                      <h6 class="box-title">选择登录身份</h6>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body">
                      <div class="demo-radio-button">
                        <input name="group1" type="radio" id="radio_1" class="radio-col-success" checked />
                        <label for="radio_1">教务</label>
                        <input name="group1" type="radio" id="radio_2" class="radio-col-success" />
                        <label for="radio_2">活动项目负责人</label>
                        <input name="group1" type="radio" id="radio_3" class="radio-col-success" />
                        <label for="radio_3">团委</label>
                      </div>
                    </div>
                  </div>
                  <!-- /.col -->
                  <div class="col-12 text-center">
                    <button type="button" class="btn btn-success btn-rounded mt-0" @click.prevent="login">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
                  </div>
                  <!-- /.col -->
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import request from '../utils/request'
export default {
  name: 'Signin',
  data () {
    return {
      loginForm: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      let _this = this
      if (this.loginForm.account === '' || this.loginForm.password === '') {
        request.message(this, '账号或密码不能为空','warning');
      } else {
        // request.$post('', {
        //   account: _this.loginForm.account,
        //   password: _this.loginForm.password
        // }, (res) => {
        //   console.log(res.data);
        //   let token = res.data.data.token;
        //   request.localStorageSet('token', token);
          setTimeout(function () {
            // if (_this.$route.query.redirect) {
            //   _this.$router.push({path: decodeURIComponent(_this.$route.query.redirect)}) //跳转到原页面
            // } else {
              _this.$router.push({name: 'Index'});//正常登录流程进入的页面
//            }
            location.reload();
          }, 2000)
          request.message(_this, message, 'success');
        // }, _this)
      }
    }
  }
}
</script>

<style scoped>

</style>
