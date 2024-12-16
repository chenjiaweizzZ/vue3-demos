<template>
  <div>
    <el-button @click="showMessageBox">Show Message Box</el-button>
  </div>
</template>

<script>
import { useBeforeConfirm } from "@/hooks/useBeforeConfirm"; // 请替换为实际的路径

export default {
  setup() {
    const { myMessageBox } = useBeforeConfirm();
    const showMessageBox = () => {
      myMessageBox({
        // title: "提示",
        message: "您确定要继续吗？",
        type: "warning",
        confirmButtonText: "确定",
        onConfirm: () => {
          console.log("用户点击了确定");
        },
      });
    };
    return {
      showMessageBox,
    };
  },
};
</script>