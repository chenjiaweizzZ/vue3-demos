<template>
  <div ref="threeJSContainer" class="three-js-container"></div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import * as THREE from "three";
const threeJSContainer = ref(null);
let scene, camera, renderer, cube;

const initThreeJS = () => {
  // 创建场景
  scene = new THREE.Scene();

  // 创建相机
  camera = new THREE.PerspectiveCamera(
    75,
    threeJSContainer.value.clientWidth / threeJSContainer.value.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // 创建渲染器
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(
    threeJSContainer.value.clientWidth,
    threeJSContainer.value.clientHeight
  );
  threeJSContainer.value.appendChild(renderer.domElement);

  // 创建一个立方体
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  cube = new THREE.Mesh(geometry, material);

  // 将立方体添加到场景中
  scene.add(cube);
};

const animate = () => {
  requestAnimationFrame(animate);

  // 旋转立方体
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // 渲染场景
  renderer.render(scene, camera);
};

onMounted(() => {
  initThreeJS();
  animate();
});

onBeforeUnmount(() => {
  // 清理资源，如需要的话
  // renderer.dispose();
});
</script>

<style scoped>
.three-js-container {
  width: 100%;
  height: 100%;
}
</style>