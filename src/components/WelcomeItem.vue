<template>
  <el-timeline-item :icon="icon" size="large" type="primary">
    <el-card class="item">
      <h1>
        <slot name="heading"></slot>
      </h1>
      <p><slot></slot></p>
    </el-card>
  </el-timeline-item>
</template>

<script lang="ts">
export default {
  props: {
    icon: {
      type: Object,
      default: null
    }
  }
}
</script>
