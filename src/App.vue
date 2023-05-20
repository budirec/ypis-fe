<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="page">
    <header class="header">
      <el-menu style="width: 100%" mode="horizontal" :ellipsis="false" router>
        <el-menu-item index="/">Yummy Product</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item @click="toggleDark()">
          <div>
            <el-icon>
              <i-ep-sunny v-if="!isDark" />
              <i-ep-moon v-if="isDark" />
            </el-icon>
          </div>
        </el-menu-item>
        <el-sub-menu index="user">
          <template #title>Name</template>
          <el-menu-item index="/user">Profile</el-menu-item>
          <el-menu-item index="/user/reset-password">Reset Password</el-menu-item>
          <el-menu-item index="/logout">Logout</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </header>
    <div class="main">
      <aside class="menu">
        <el-menu :default-active="$route.path" router>
          <el-menu-item index="/">Home</el-menu-item>
          <el-menu-item index="/incubator">incubator</el-menu-item>
          <el-menu-item index="/productions">Productions</el-menu-item>
          <el-menu-item index="/about">About</el-menu-item>
        </el-menu>
      </aside>
      <div class="app-container">
        <div class="app-content">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.page {
  max-width: 1280px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main {
  display: flex;
  height: calc(100% - 80px);
}

.menu {
  width: 200px;
}

.app-container {
  flex: 1;
  overflow-y: auto;
  width: 100vw;
  max-width: calc(100% - 200px);
}

.app-content {
  padding: 20px;
}

.flex-grow {
  flex-grow: 1;
}
</style>
