<template>
  <div id="bg">
    <div id="bg-shadow">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#bg {
  width: 100%;
  height: 100vh;
  background-image: url('~/assets/images/bg.png');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: color-dodge;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  user-select: none;

  #bg-shadow {
    background-color: #16171a;
    min-width: 65vw;
    max-width: 65vw;
    max-height: 900px;
    height: 95vh;
    display: flex;
    overflow: hidden;
    width: 100%;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 20px 50px;
    position: relative;
    opacity: 0.95;
  }
}
</style>
