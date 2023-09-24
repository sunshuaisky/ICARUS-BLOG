<template>
  <div
    class="scale-[0.25] flex flex-col justify-center items-center absolute right-[30px] top-[30px]"
  >
    <button
      type="button"
      class="bg-white dark:bg-black border-none w-[210px] h-[110px] rounded-[110px] absolute cursor-pointer animate-clickOff-0.5s"
      @click="isDark = !isDark"
    >
      <i
        class="absolute z-10 top-[23px] left-[23px] animate-shakeOn-0.7s dark:animate-shakeOff-0.7s"
      >
        <svg
          t="1684833132212"
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="8388"
          width="64"
          height="64"
        >
          <path
            d="M501.48 493.55m-233.03 0a233.03 233.03 0 1 0 466.06 0 233.03 233.03 0 1 0-466.06 0Z"
            fill="#707070"
            p-id="8389"
          ></path>
          <path
            d="M501.52 185.35H478.9c-8.28 0-15-6.72-15-15V87.59c0-8.28 6.72-15 15-15h22.62c8.28 0 15 6.72 15 15v82.76c0 8.28-6.72 15-15 15zM281.37 262.76l-16 16c-5.86 5.86-15.36 5.86-21.21 0l-58.52-58.52c-5.86-5.86-5.86-15.36 0-21.21l16-16c5.86-5.86 15.36-5.86 21.21 0l58.52 58.52c5.86 5.86 5.86 15.35 0 21.21zM185.76 478.48v22.62c0 8.28-6.72 15-15 15H88c-8.28 0-15-6.72-15-15v-22.62c0-8.28 6.72-15 15-15h82.76c8.28 0 15 6.72 15 15zM270.69 698.63l16 16c5.86 5.86 5.86 15.36 0 21.21l-58.52 58.52c-5.86 5.86-15.36 5.86-21.21 0l-16-16c-5.86-5.86-5.86-15.36 0-21.21l58.52-58.52c5.85-5.86 15.35-5.86 21.21 0zM486.41 794.24h22.62c8.28 0 15 6.72 15 15V892c0 8.28-6.72 15-15 15h-22.62c-8.28 0-15-6.72-15-15v-82.76c0-8.28 6.72-15 15-15zM706.56 709.31l16-16c5.86-5.86 15.36-5.86 21.21 0l58.52 58.52c5.86 5.86 5.86 15.36 0 21.21l-16 16c-5.86 5.86-15.36 5.86-21.21 0l-58.52-58.52c-5.86-5.85-5.86-15.35 0-21.21zM802.17 493.59v-22.62c0-8.28 6.72-15 15-15h82.76c8.28 0 15 6.72 15 15v22.62c0 8.28-6.72 15-15 15h-82.76c-8.28 0-15-6.72-15-15zM717.24 273.44l-16-16c-5.86-5.86-5.86-15.36 0-21.21l58.52-58.52c5.86-5.86 15.36-5.86 21.21 0l16 16c5.86 5.86 5.86 15.36 0 21.21l-58.52 58.52c-5.86 5.86-15.35 5.86-21.21 0z"
            fill="#707070"
            p-id="8390"
          ></path></svg
      ></i>
      <span
        class="bg-cyan-200 block w-[80px] h-[80px] rounded-[80px] absolute z-0 top-[15px] right-auto left-[15px] dark:left-auto dark:right-[15px] animate-animationClickOn-0.7s dark:animate-animationClickOff-0.7s"
      ></span>
      <i
        class="absolute z-10 top-[23px] right-[23px] animate-rotateOn-0.7s dark:animate-rotateOff-0.7s"
      >
        <svg
          t="1684833077751"
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="7162"
          width="64"
          height="64"
        >
          <path
            d="M335.22 240.91c0-57.08 10.68-111.66 30.15-161.87-167.51 64.86-286.3 227.51-286.3 417.92 0 247.42 200.58 448 448 448 190.34 0 352.95-118.71 417.85-286.13-50.16 19.42-104.69 30.08-161.71 30.08-247.41 0-447.99-200.57-447.99-448z"
            fill="#dbdbdb"
            p-id="7163"
          ></path></svg
      ></i>
    </button>
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>

<style lang="scss" scoped>
.theme-switch {
  &--light {
    .bxs-moon {
      animation: rotateOn 0.7s;
    }

    .bxs-sun {
      animation: shakeOn 0.7s;
    }
  }

  &--dark {
    .bxs-moon {
      animation: rotateOff 0.7s;
    }

    .bxs-sun {
      animation: shakeOff 0.7s;
    }
  }
}
// animations

@keyframes shakeOn {
  0% {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes rotateOff {
  50% {
    transform: rotate(180deg);
  }
}

@keyframes rotateOn {
  50% {
    transform: rotate(-180deg);
  }
}

@keyframes animationClickOff {
  0% {
    right: auto;
    left: 9%;
  }

  50% {
    width: 13vw;
  }

  100% {
    left: auto;
    right: 9%;
  }
}

@keyframes animationClickOn {
  0% {
    left: auto;
    right: 9%;
  }

  50% {
    width: 13vw;
  }

  100% {
    right: auto;
    left: 9%;
  }
}
</style>
