<script setup lang="ts">
const props = withDefaults(defineProps<{
  text: string
  class?: string
}>(), {
  class: '',
})

const characterCount = computed(() => Math.max(props.text.length, 12))
</script>

<template>
  <span
    class="typing-line"
    :class="props.class"
    :style="{ '--typing-characters': characterCount }"
  >
    {{ text }}
  </span>
</template>
