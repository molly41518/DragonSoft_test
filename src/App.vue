<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div id="nav" class="bg-dark vh-100 p-0">
          <ul class="mt-3 p-0 text-left">
            <li class="py-3 pl-3">
              <router-link to="/" class="text-white">
                <font-awesome-icon
                  :icon="['fas', 'tachometer-alt']"
                  class="text-white"
                />
                <span class="pl-3">儀表板</span>
              </router-link>
            </li>
            <li class="py-3 pl-3">
              <router-link to="/" class="text-white">
                <font-awesome-icon :icon="['fas', 'list']" class="text-white" />
                <span class="pl-3">資產管理</span></router-link
              >
            </li>
            <li class="py-3 pl-3">
              <router-link to="/" class="text-white">
                <font-awesome-icon :icon="['fas', 'flag']" class="text-white" />
                <span class="pl-3">組態管理</span>
              </router-link>
            </li>
            <li class="py-3 pl-3">
              <router-link to="/" class="text-white">
                <font-awesome-icon :icon="['fas', 'play']" class="text-white" />
                <span class="pl-3">任務管理</span>
              </router-link>
            </li>
            <li class="py-3 pl-3">
              <router-link to="/" class="text-white">
                <font-awesome-icon :icon="['fas', 'play']" class="text-white" />
                <span class="pl-3">CPE管理</span>
              </router-link>
            </li>
            <li class="py-3 pl-3">
              <router-link to="/" class="text-white">
                <font-awesome-icon
                  :icon="['fas', 'tachometer-alt']"
                  class="text-white"
                />
                <span class="pl-3">稽核結果</span>
              </router-link>
            </li>
            <li class="py-3 pl-3">
              <router-link to="/" class="text-white">
                <font-awesome-icon
                  :icon="['fas', 'clipboard-check']"
                  class="text-white"
                />
                <span class="pl-3">基本報表</span>
              </router-link>
            </li>
            <li class="py-3 pl-3">
              <router-link to="/" class="text-white">
                <font-awesome-icon
                  :icon="['fas', 'search']"
                  class="text-white"
                />
                <span class="pl-3">搜尋</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a:hover {
  text-decoration: none !important;
}
ul {
  list-style: none;
}
li:hover {
  background: white;
}
li:hover svg {
  color: #007bff !important;
}
li:hover a {
  color: black !important;
  font-weight: 600;
}
ul > li > .color-hover:hover {
  color: black;
}
#nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 10rem;
}
.row > .content {
  padding-left: 11rem;
  width: 100%;
  background: #e4e5e6;
}
</style>
