<script setup lang="ts">
import { processSteps, projectCategories } from '~/data/site'

useSeoMeta({
  title: 'Projects',
  description: 'Representative project categories and execution strengths from RK Elite Construction across residential, commercial, and industrial sectors.',
})

const executionPillars = [
  'Residential Villas and Homes',
  'Commercial Buildings and Showrooms',
  'Industrial Warehouses and Units',
  'Turnkey Planning and Delivery',
  'Structured Project Monitoring',
  'Quality Materials and Finishing',
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Projects"
      title="Spaces We Build Across Chennai."
      description="The project presentation stays credible by focusing on categories, execution quality, and the type of spaces RK Elite Construction builds."
    />

    <section class="site-section">
      <div class="layout-shell">
        <div class="grid gap-6 xl:grid-cols-3">
          <article
            v-for="category in projectCategories"
            :key="category.title"
            class="project-shard overflow-hidden"
            data-reveal
            data-tilt
          >
            <div class="relative h-80 overflow-hidden">
              <NuxtImg
                :src="category.image"
                :alt="category.title"
                width="1100"
                height="860"
                class="h-full w-full object-cover"
                sizes="(max-width: 1280px) 100vw, 30vw"
              />
              <div class="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(6,20,36,0.88))]" />
            </div>
            <div class="p-6">
              <p class="technical-meta">Representative Category</p>
              <h2 class="mt-3 font-heading text-3xl font-bold uppercase tracking-[-0.05em] text-[var(--rk-primary)]">{{ category.title }}</h2>
              <p class="mt-4 text-sm leading-7 text-[var(--rk-text-muted)]">{{ category.description }}</p>
            </div>
          </article>
        </div>

        <div class="mt-8 panel blueprint-grid p-8 sm:p-10" data-aos="fade-up">
          <SectionHeader
            eyebrow="Execution Pillars"
            title="Project quality expressed through capability, workflow, and supervision."
            description="Without inventing project names, the page still feels rich by highlighting sectors, typologies, and operational strengths that shape delivery."
          />
          <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <div
              v-for="pillar in executionPillars"
              :key="pillar"
              class="glass-panel border-l border-[rgba(0,218,248,0.2)] p-5 text-[var(--rk-text)]"
              data-tilt
            >
              <p class="font-heading text-2xl font-bold uppercase tracking-[-0.04em] text-[var(--rk-primary)]">{{ pillar }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="site-section pt-0">
      <div class="layout-shell">
        <div class="panel-dark blueprint-grid p-8 lg:p-10">
          <SectionHeader
            eyebrow="Delivery Sequence"
            title="What clients experience across a well-managed build."
            description="Process visibility is part of the project story, so the steps are repeated here as a confidence layer for prospects evaluating capability."
            light
          />
          <div class="mt-10 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
            <article
              v-for="step in processSteps"
              :key="step.id"
              class="glass-panel p-5"
              data-process-card
              data-tilt
            >
              <p class="font-heading text-4xl font-bold text-[var(--rk-tertiary)]">{{ step.id }}</p>
              <h3 class="mt-4 font-heading text-2xl font-bold uppercase tracking-[-0.05em] text-[var(--rk-primary)]">{{ step.title }}</h3>
              <p class="mt-3 text-sm leading-7 text-[var(--rk-text-muted)]">{{ step.body }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
