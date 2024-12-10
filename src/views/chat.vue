<template>
  <div class="chatAI">
    <div class="chat-list">
      <div class="chat-main">
        <div v-for="msg in chatList" class="chat" :key="msg">
          <div :class="msg.type == '2' ? 'leftMsg' : 'rightMsg'">
            <img
              v-if="msg.type == '2'"
              src="@/assets/images/AIRobot.png"
              alt=""
            />
            <div class="msg">{{ msg.content }}</div>
            <img
              v-if="msg.type == '1'"
              src="@/assets/images/AIRobot.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="input-field">
      <div>
        <el-button @click="scrollToNew">滚动到底部</el-button>
      </div>
      <el-input
        v-model="input"
        placeholder="Please input"
        @keydown="handleInputEnter"
        @click="scrollToNew"
      >
        <template #suffix>
          <el-button
            type="primary"
            :icon="Promotion"
            :style="{ height: '40px', margin: '8px 0' }"
            @click="send"
            >Send</el-button
          >
        </template>
      </el-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick } from "vue";
import { Promotion } from "@element-plus/icons-vue";
const input = ref("");
const chatList = reactive([
  { type: 1, content: "你好" },
  {
    type: 2,
    content:
      "你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好",
  },
  { type: 1, content: "你好" },
  { type: 2, content: "你好" },
  { type: 1, content: "你好" },
  { type: 2, content: "你好" },
  { type: 1, content: "你好" },
  { type: 2, content: "你好" },
  { type: 1, content: "你好" },
  { type: 2, content: "你好" },
  { type: 1, content: "你好" },
  { type: 2, content: "你好" },
  { type: 1, content: "你好" },
  { type: 2, content: "你好" },
]);

const scrollToNew = async () => {
  await nextTick();
  const chatContainer = document.querySelector(".chat-main");
  if (chatContainer) {
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
};

const handleInputEnter = (e) => {
  if (e.shiftKey && e.keyCode === 13) {
    return;
  }
  if (e.keyCode === 13) {
    send();
  }
};
const send = () => {
  chatList.push({
    content: input.value,
    type: 1,
  });
  input.value = "";
  scrollToNew();
};
</script>

<style lang="scss" scoped>
.chatAI {
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  padding: 50px;
  .chat-list {
    flex: 1;
    overflow: scroll;
    scrollbar-width: none;
  }

  .text-container {
    :deep(.el-textarea__inner) {
      padding: 10px 12px;
    }

    :deep(.el-input__wrapper) {
      padding: 1px 11px;
    }
  }
  .chat-main {
    height: 100%;
    overflow: scroll;
    .chat {
      max-height: 580px;
      overflow-y: auto;
      padding: 10px;

      .leftMsg,
      .rightMsg {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        margin: 10px;

        img {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          overflow: hidden;
          object-fit: cover;
          margin: 0 10px;
        }

        .msg {
          display: inline-block;
          padding: 10px;
          word-wrap: anywhere;
          max-width: 600px;
          background-color: #364d79;
          border-radius: 10px;
        }
      }

      .rightMsg {
        justify-content: end;

        .msg {
          color: black;
          background-color: #dfdfdf;
        }
      }
    }
  }
}
</style>