<template>
  <div ref="threeJSContainer" class="three-js-container"></div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
let scene, camera, renderer, cube, controls;
const threeJSContainer = ref(null);
const initThreeJs = () => {
  //创建场景
  scene = new THREE.Scene();
  //创建透视相机
  camera = new THREE.PerspectiveCamera(
    45, //视角
    threeJSContainer.value.clientWidth / threeJSContainer.value.clientHeight, //宽高比
    0.1, //进平面
    1000 //远平面
  );
  //设置相机位置
  camera.position.z = 5;
  camera.position.y = 2;
  camera.position.x = 2;
  camera.lookAt(0, 0, 0);

  //增加世界坐标辅助器
  const axesHelper = new THREE.AxesHelper(5);

  //创建渲染器
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(
    threeJSContainer.value.clientWidth,
    threeJSContainer.value.clientHeight
  );
  threeJSContainer.value.appendChild(renderer.domElement);
  //创建几何体
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  //创建材质
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  //创建网格
  cube = new THREE.Mesh(geometry, material);
  //将网格添加到场景中
  scene.add(cube);
  scene.add(axesHelper);

  //控制器
  controls = new OrbitControls(camera, renderer.domElement);
  //阻尼
  controls.enableDamping = true;
  //阻尼系数
  controls.dampingFactor = 0.05;
  //旋转速度
  controls.autoRotate = true;
};

const animate = () => {
  controls.update();
  requestAnimationFrame(animate);
  // 旋转立方体
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  // 渲染场景
  renderer.render(scene, camera);
};

//渲染
onMounted(() => {
  initThreeJs();
  animate();
});
</script>


<style scoped>
.three-js-container {
  width: 100%;
  height: 100%;
}
</style>