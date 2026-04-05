<script setup lang="ts">
const props = withDefaults(defineProps<{
  name: string
  size?: string | number
  strokeWidth?: string | number
}>(), {
  size: 20,
  strokeWidth: 1.8,
})

const icons: Record<string, { viewBox: string, paths: string[] }> = {
  'lucide:building-2': {
    viewBox: '0 0 24 24',
    paths: [
      'M6 22V4a1 1 0 0 1 1-1h7v19',
      'M6 10H4a1 1 0 0 0-1 1v11h15',
      'M14 6h4a1 1 0 0 1 1 1v15',
      'M10 7v1',
      'M10 11v1',
      'M10 15v1',
      'M14 11v1',
      'M14 15v1',
    ],
  },
  'lucide:x': {
    viewBox: '0 0 24 24',
    paths: [
      'M18 6 6 18',
      'm6 6 12 12',
    ],
  },
  'lucide:menu': {
    viewBox: '0 0 24 24',
    paths: [
      'M4 7h16',
      'M4 12h16',
      'M4 17h16',
    ],
  },
  'lucide:map-pinned': {
    viewBox: '0 0 24 24',
    paths: [
      'M12 22s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z',
      'M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
      'M19 22H5',
    ],
  },
  'lucide:check-check': {
    viewBox: '0 0 24 24',
    paths: [
      'm7 12 3 3 7-7',
      'm3 12 3 3 3-3',
      'm14 8 4-4',
    ],
  },
  'lucide:badge-check': {
    viewBox: '0 0 24 24',
    paths: [
      'm12 3 2.35 1.64 2.85-.09 1.07 2.64 2.43 1.47-.68 2.77 1.78 2.23-2.04 2 .16 2.85-2.77.69-1.47 2.43-2.64-1.08-2.23 1.79-2-2.05-2.85.17-.69-2.77-2.43-1.47 1.08-2.64-.17-2.85 2.05-2-1.79-2.23 2.77-.68',
      'm9 12 2 2 4-4',
    ],
  },
  'lucide:arrow-up-right': {
    viewBox: '0 0 24 24',
    paths: [
      'M7 17 17 7',
      'M7 7h10v10',
    ],
  },
  'lucide:phone': {
    viewBox: '0 0 24 24',
    paths: [
      'M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72l.35 2.82a2 2 0 0 1-.57 1.69L7.1 10a16 16 0 0 0 6.9 6.9l1.77-1.79a2 2 0 0 1 1.69-.57l2.82.35A2 2 0 0 1 22 16.92Z',
    ],
  },
  'lucide:map-pin': {
    viewBox: '0 0 24 24',
    paths: [
      'M12 22s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z',
      'M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
    ],
  },
}

const icon = computed(() => icons[props.name] ?? icons['lucide:badge-check'])
</script>

<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="icon.viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    :stroke-width="strokeWidth"
    aria-hidden="true"
  >
    <path
      v-for="path in icon.paths"
      :key="path"
      :d="path"
    />
  </svg>
</template>
