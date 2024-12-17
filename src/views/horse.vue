<template>
  <div class="box">
    <div class="text">
      tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
    </div>
  </div>
</template>
 
<script lang="ts" setup>
import { ref, computed } from "vue";
</script>

<style lang="scss" scoped>
.box {
  width: 400px;
  line-height: 50px;
  background-color: aqua;
  overflow: hidden;
}
.text {
  width: auto;
  line-height: 50px;
  white-space: nowrap;
  animation: textScroller 8s linear infinite;
}
@keyframes textScroller {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
