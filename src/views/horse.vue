<template>
  <div>
    <div class="marquee">
      <p>这是滚动的文本效果。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.marquee p {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  line-height: 50px;
  text-align: center;

  /* 动画名称和持续时间 */
  animation: marquee 10s linear infinite;
}

/* 关键帧动画 */
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>