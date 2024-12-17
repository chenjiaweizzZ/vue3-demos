<template>
  <div>
    <el-button @click="beforeDelete">Show Message Box</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useBeforeConfirm } from "@/hooks/useBeforeConfirm";
import imgSrc from "@/assets/images/AIRobot.png";
const { myMessageBox } = useBeforeConfirm();

const beforeDelete = async (id: number) => {
  myMessageBox({
    title: "确定删除对话？",
    imgSrc: imgSrc,
    message: "删除后，聊天记录将不可恢复",
    confirmButtonText: "确定",
    showCancelButton: true,
    onConfirm: () => {
      console.log(123);
    },
  });
};
</script>