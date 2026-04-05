<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
}>()
</script>

<template>
  <section class="page-hero blueprint-grid">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(175,198,255,0.08),transparent_32%)]" />
    <div class="absolute bottom-0 right-0 font-heading text-[clamp(5rem,22vw,16rem)] font-bold uppercase tracking-[-0.08em] text-white/[0.03]">
      ELITE
    </div>
    <div class="layout-shell relative pb-14 pt-8 text-[var(--rk-text)] md:pb-16 md:pt-10 lg:pb-18 lg:pt-12">
      <div class="grid gap-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(22rem,0.86fr)] lg:items-start xl:gap-14">
        <div data-page-hero-copy class="page-hero-copy">
          <p class="eyebrow">
            {{ eyebrow }}
          </p>
          <div class="mt-5">
            <TypingText text="RK Elite Construction // Chennai Build Command" class="technical-meta text-[var(--rk-tertiary)]" />
          </div>
          <h1 class="page-hero-title mt-6 text-[var(--rk-primary)]">
            {{ title }}
          </h1>
          <p class="page-hero-description mt-5 text-base text-[var(--rk-text-muted)] md:text-lg">
            {{ description }}
          </p>
          <div class="page-hero-tags mt-7" data-stagger>
            <span class="page-hero-tag">Premium Positioning</span>
            <span class="page-hero-tag">Chennai Focus</span>
            <span class="page-hero-tag">Residential to Turnkey</span>
          </div>
        </div>

        <div data-page-hero-card data-depth-scene class="hero-depth-scene hero-depth-scene-page">
          <div data-depth-layer="0.04" class="hero-depth-board blueprint-grid" />
          <div data-depth-layer="0.12" class="hero-depth-frame hero-depth-frame-page">
            <NuxtImg
              src="/images/commercial-office.jpg"
              alt="Commercial construction building exterior"
              width="1200"
              height="900"
              class="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div data-depth-layer="0.18" class="hero-mini-stack top-6 right-6 h-36 w-36">
            <NuxtImg
              src="/images/residential-villa.jpg"
              alt="Residential villa project"
              width="600"
              height="600"
              class="h-full w-full object-cover"
              sizes="160px"
            />
          </div>
          <div data-depth-layer="0.22" class="hero-mini-stack bottom-10 left-10 h-28 w-44">
            <NuxtImg
              src="/images/industrial-warehouse.jpg"
              alt="Industrial warehouse project"
              width="900"
              height="560"
              class="h-full w-full object-cover"
              sizes="220px"
            />
          </div>
          <div data-depth-layer="0.16" class="hero-data-strip">
            <div class="hero-data-cell">
              <p class="technical-meta text-[var(--rk-tertiary)]">Coverage</p>
              <p class="mt-2 font-heading text-lg font-bold uppercase text-[var(--rk-primary)]">Homes + Offices + Industrial</p>
            </div>
            <div class="hero-data-cell">
              <p class="technical-meta text-[var(--rk-tertiary)]">Workflow</p>
              <p class="mt-2 font-heading text-lg font-bold uppercase text-[var(--rk-primary)]">Approval to Handover</p>
            </div>
          </div>
          <div data-depth-layer="0.28" data-float class="hero-float-card left-8 top-10">
            <p class="technical-meta text-[var(--rk-tertiary)]">Positioning</p>
            <p class="mt-3 font-heading text-2xl font-bold uppercase text-[var(--rk-primary)]">Premium</p>
            <p class="mt-2 text-sm text-[var(--rk-text-muted)]">Quality-led construction experiences with modern execution discipline.</p>
          </div>
          <div data-depth-layer="0.32" data-float class="hero-float-card bottom-8 right-8">
            <p class="technical-meta text-[var(--rk-tertiary)]">Location</p>
            <p class="mt-3 font-heading text-2xl font-bold uppercase text-[var(--rk-primary)]">Chennai</p>
            <p class="mt-2 text-sm text-[var(--rk-text-muted)]">Homes, offices, industrial structures, and turnkey projects.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
