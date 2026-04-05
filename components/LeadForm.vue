<script setup lang="ts">
const props = withDefaults(defineProps<{
  title: string
  subtitle?: string
  projectOptions: string[]
  showBudget?: boolean
  dark?: boolean
}>(), {
  subtitle: '',
  showBudget: false,
  dark: false,
})

const form = reactive({
  name: '',
  phone: '',
  email: '',
  projectType: props.projectOptions[0] ?? '',
  location: '',
  plotSize: '',
  budget: '',
  message: '',
})

const submitted = ref(false)

function submitForm() {
  submitted.value = true
}
</script>

<template>
  <div class="blueprint-grid p-6 sm:p-8" :class="dark ? 'panel-dark' : 'panel'">
    <div class="mb-6">
      <p class="technical-meta" :class="dark ? 'text-[var(--rk-tertiary)]' : 'text-[var(--rk-tertiary)]'">
        Consultation Form
      </p>
      <h3 class="mt-3 font-heading text-2xl font-bold uppercase tracking-[-0.05em] text-[var(--rk-primary)]">
        {{ title }}
      </h3>
      <p v-if="subtitle" class="mt-3 text-sm leading-7 text-[var(--rk-text-muted)]">
        {{ subtitle }}
      </p>
    </div>

    <form class="grid gap-4 md:grid-cols-2" @submit.prevent="submitForm">
      <input v-model="form.name" class="site-input md:col-span-1" type="text" placeholder="Full Name" required>
      <input v-model="form.phone" class="site-input md:col-span-1" type="tel" placeholder="Phone Number" required>
      <input v-model="form.email" class="site-input md:col-span-1" type="email" placeholder="Email Address" required>

      <select v-model="form.projectType" class="site-select md:col-span-1" required>
        <option v-for="option in projectOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </select>

      <input v-model="form.location" class="site-input md:col-span-1" type="text" placeholder="Project Location" required>
      <input v-model="form.plotSize" class="site-input md:col-span-1" type="text" placeholder="Plot Size (Optional)">

      <input
        v-if="showBudget"
        v-model="form.budget"
        class="site-input md:col-span-2"
        type="text"
        placeholder="Budget Range (Optional)"
      >

      <textarea v-model="form.message" class="site-textarea md:col-span-2" placeholder="Message / Requirements" required />

      <div class="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" class="button-primary">
          {{ showBudget ? 'Get Free Consultation' : 'Request Free Consultation' }}
        </button>
        <p v-if="submitted" class="text-sm text-[var(--rk-tertiary)]">
          Request captured. Connect your preferred backend or CRM next.
        </p>
      </div>
    </form>
  </div>
</template>
