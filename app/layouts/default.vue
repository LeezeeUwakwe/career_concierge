<template>
  <div class="layout__default">
    <Navbar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/Headers/Navbar.vue";
</script>
