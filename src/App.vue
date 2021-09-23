<template>
  <div id="app">
    <nav
      class="
        hidden
        flex
        items-center
        justify-between
        flex-wrap
        bg-purple-900
        text-white
        p-2
      "
    >
      <div class="flex items-center flex-shrink-0 mr-6">
        <span class="font-semibold text-xl tracking-tight">Lol Tracker</span>
      </div>
      <div class="flex-grow flex items-center w-auto">
        <div class="text-sm flex-grow">
          <router-link
            to="/"
            class="my-auto inline-block text-teal-200 hover:text-white mr-4"
          >
            Home
          </router-link>
          <router-link
            to="/about"
            class="my-auto inline-block text-teal-200 hover:text-white mr-4"
          >
            About
          </router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>
