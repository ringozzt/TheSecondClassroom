<template>
  <div id="Topbar" class="theme-success">

    <header class="main-header">
      <!-- Header Navbar -->
      <nav class="navbar navbar-static-top pl-15">
        <!-- Sidebar toggle button-->
        <div>
          <ul class="nav">
            <li class="btn-group nav-item">
              <a href="#" class="waves-effect waves-light nav-link rounded svg-bt-icon" data-toggle="push-menu" role="button">
                <i class="fa fa-navicon" aria-hidden="true"></i>
              </a>
            </li>
            <li class="btn-group nav-item">
              <a href="#" data-provide="fullscreen" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="Full Screen">
                <i class="fa fa-expand" aria-hidden="true"></i>
              </a>
            </li>
            <li class="btn-group nav-item d-none d-xl-inline-block">
              <a href="activity.html" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="">
                <i class="ti-check-box"></i>
              </a>
            </li>
            <li class="btn-group nav-item d-none d-xl-inline-block">
              <a href="activity.html" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="">
                <i class="ti-calendar"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="navbar-custom-menu r-side">
          <ul class="nav navbar-nav">
            <!-- full Screen -->
            <li class="search-bar">
              <div class="lookup lookup-circle lookup-right">
                <input type="text" name="s">
              </div>
            </li>
            <!-- Notifications -->
            <li class="dropdown notifications-menu">
              <a href="#" class="waves-effect waves-light rounded dropdown-toggle" data-toggle="dropdown" title="Notifications">
                <i class="ti-bell"></i>
              </a>
              <ul class="dropdown-menu animated bounceIn">

                <li class="header">
                  <div class="p-20">
                    <div class="flexbox">
                      <div>
                        <h4 class="mb-0 mt-0">预警管理</h4>
                      </div>
                      <div>
                        <a href="#" class="text-danger">清除所有</a>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <!-- inner menu: contains the actual data -->
                  <ul class="menu sm-scrol">
                    <li>
                      <a href="#">
                        <i class="fa fa-users text-info"></i> Curabitur id eros quis nunc suscipit blandit.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-warning text-warning"></i> Duis malesuada justo eu sapien elementum, in semper diam posuere.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-users text-danger"></i> Donec at nisi sit amet tortor commodo porttitor pretium a erat.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-shopping-cart text-success"></i> In gravida mauris et nisi
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-user text-danger"></i> Praesent eu lacus in libero dictum fermentum.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-user text-primary"></i> Nunc fringilla lorem
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-user text-success"></i> Nullam euismod dolor ut quam interdum, at scelerisque ipsum imperdiet.
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="footer">
                  <a href="#">查看所有</a>
                </li>
              </ul>
            </li>

            <!-- User Account-->
            <li class="dropdown user user-menu">
              <a href="#" class="waves-effect waves-light rounded dropdown-toggle d-flex align-items-center" data-toggle="dropdown" title="User">
                <div class="text-right d-none d-lg-block"><p class="font-weight-600 mb-0">团委</p><small>苏前溢</small></div>
                <img src="./../assets/images/logo.png" alt="">
              </a>
              <ul class="dropdown-menu animated flipInX">
                <li class="user-body">
                  <a class="dropdown-item" href="#"><i class="ti-user text-muted mr-2"></i>帐号</a>
                  <a class="dropdown-item" href="#"><i class="ti-settings text-muted mr-2"></i>重置密码</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#"><i class="ti-lock text-muted mr-2"></i>注销</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" data-toggle="control-sidebar" title="Setting" class="waves-effect waves-light">
                <i class="ti-settings"></i>
              </a>
            </li>

          </ul>
        </div>
      </nav>
    </header>

  </div>
</template>

<script>
export default {
  name: 'Topbar'
}
</script>

<style scoped>

</style>
