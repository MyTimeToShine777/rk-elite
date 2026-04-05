<template>
  <div class="min-h-screen overflow-x-clip bg-[var(--rk-bg)] text-[var(--rk-text)]">
    <SiteHeader />
    <main>
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
