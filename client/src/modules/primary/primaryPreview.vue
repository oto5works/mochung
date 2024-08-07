<template>
  
</template>
<script>

export default {
 
};
</script>

<style scoped>
.illust__wrap {
  position: relative;
  width: fit-content;
  height: fit-content;
}
.illust__wrap svg {
  position: relative;
  z-index: 2;
}
.button1 {
  top: 20.5%;
  left: 30%;
  width: 24%;
  height: 9%;
  border-radius: var(--border-radius-16);
}
.button2 {
  top: 24.2%;
  left: 59.8%;
  width: 9%;
  height: 9%;
  border-radius: var(--border-radius-12);
}
.button3 {
  top: 44%;
  left: 66.2%;
  width: 6%;
  height: 6%;
  transform: rotate(40deg);
  border-radius: var(--border-radius-4);
}
.button4 {
  top: 46.5%;
  left: 38%;
  width: 6%;
  height: 6%;
  border-radius: var(--border-radius-4);
}
.button5 {
  top: 46.5%;
  left: 48%;
  width: 6%;
  height: 6%;
  border-radius: var(--border-radius-4);
  opacity: 0.6;
}
.button-illust {
  position: absolute;
  content: "";
  background: var(--pc-pc-tr);

  outline-style: var(--border-style);
  outline-color: var(--font-color);
  outline-width: 1.5px;

  -webkit-box-shadow: var(--box-shadow-2) var(--primary-color);
  box-shadow: var(--box-shadow-2) var(--primary-color);
}
.illust-content {
  width: fit-content;
  height: fit-content;
}
.radius__wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}
.radius__content {
  width: 14px;
  height: 14px;
  outline: 1.6px solid var(--font-color);
  border-radius: 0 var(--border-radius-6) 0 0;
}
</style>
