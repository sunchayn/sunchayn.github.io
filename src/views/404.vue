<template>
  <main class="h-screen w-screen flex items-center justify-center bg-blue">
    <div class="container max-w-5xl space-y-10">
      <div class="leading-none">
        <h1 class="text-7xl">
          404
        </h1>
        <h2>Wow, you're lost!</h2>
      </div>

      <p>
        01001001 01110100 00100111 01110011 00100000 01100001 01101100 01110010 01101001 01100111 01101000 01110100 00100000 01110100 01101111 00100000 01100110 01100001 01101001 01101100 01110011 00100000 01110011 01101111 01101101 01100101 01110100 01101001 01101101 01100101 01110011 00101110 00100000 01000011 01101000 01100101 01100101 01110010 01110011 00100001
      </p>

      <router-link
        :to="{name: 'Home'}"
        class="button hover:text-white hover:underline hover:border-red"
      >
        Homepage
      </router-link>

      <div class="flex items-center space-x-6">
        <div class="w-20">
          <img
            src="@/assets/logo.svg"
            alt="logo"
            class="w-full"
          >
        </div>
        <div class="flex-1 text-xs">
          <p class="mb-1">
            Designed and developed by Mazen Touati @2021 – GNU GPLv3 License
          </p>
          <small>Stop code PAGE_NOT_FOUND</small>
        </div>
      </div>
    </div>
  </main>
</template>
