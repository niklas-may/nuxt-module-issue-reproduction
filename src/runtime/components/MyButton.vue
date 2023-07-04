<template>
  <div style="border: 1px solid pink">
    <slot />
  </div>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    variant: "fill" | "ghost";
  }>(),
  { variant: "fill" }
);
</script>
