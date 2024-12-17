<template>
  <div class="index">
    <el-button v-for="item in list" :key="item" @click="toPath(item)">{{
      item.name
    }}</el-button>
  </div>
</template>

<script setup lang="ts">
import { useIndexRoute } from "@/hooks/useIndexRoute";
const { list, toPath } = useIndexRoute();
</script>

<style lang="scss" scoped>
.index {
  line-height: 50px;
}
</style>