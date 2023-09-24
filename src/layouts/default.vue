<template>
  <div
    class="w-full h-screen flex justify-center items-center overflow-hidden select-none relative"
  >
    <img
      class="w-full h-full absolute left-0 top-0"
      src="@/assets/images/bg.jpg"
    />
    <div
      class="bg-light dark:bg-dark w-5/6 h-[90vh] flex overflow-hidden shadow-2xl rounded-[20px] opacity-95 z-10 relative"
    >
      <ThemeToggle />
      <slot />
    </div>
  </div>
</template>
