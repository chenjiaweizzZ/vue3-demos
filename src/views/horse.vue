<template>
  <div class="barrage-container">
    <div
      v-for="(line, index) in barrageLines"
      :key="index"
      class="barrage-line"
      :style="{ top: `${index * 40}px` }"
    >
      <div
        v-for="(message, idx) in line"
        :key="idx"
        class="barrage-message"
        :style="getMessageStyle(idx, line.length)"
      >
        {{ message }}
      </div>
    </div>
  </div>
</template>
 
<script>
import { ref, computed } from "vue";

export default {
  name: "Barrage",
  setup() {
    const messages = ref([
      ["Message 1-1", "Message 1-2", "Message 1-3"],
      ["Message 2-1", "Message 2-2", "Message 2-3"],
      ["Message 3-1", "Message 3-2", "Message 3-3"],
    ]);

    const barrageLines = computed(() => messages.value);

    const getMessageStyle = (index, totalMessages) => {
      // 计算每个消息的动画延迟，使得它们在同一行中错开滚动
      const delay = (index / totalMessages) * 5; // 延迟时间可以根据需要调整
      return {
        animationDelay: `${delay}s`,
      };
    };

    return {
      barrageLines,
      getMessageStyle,
    };
  },
};
</script>
 
<style scoped>
.barrage-container {
  position: relative;
  width: 100%;
  height: 120px; /* 根据需要调整高度 */
  overflow: hidden;
  background-color: #000; /* 背景色 */
  color: #fff;
  font-size: 18px;
  line-height: 40px; /* 每行的高度，与每行的垂直位置设置相匹配 */
}

.barrage-line {
  position: absolute;
  width: 100%;
  white-space: nowrap; /* 防止文本换行 */
}

.barrage-message {
  display: inline-block;
  padding: 0 10px; /* 消息的内边距 */
  background-color: rgba(255, 255, 255, 0.5); /* 消息的背景色，带透明度 */
  border-radius: 10px; /* 圆角 */
  animation: scroll linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>