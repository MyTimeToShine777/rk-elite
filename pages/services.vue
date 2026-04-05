<script setup lang="ts">
import { services } from '~/data/site'

useSeoMeta({
  title: 'Services',
  description: 'Explore residential, commercial, industrial, and turnkey construction services offered by RK Elite Construction.',
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Services"
      title="Residential. Commercial. Industrial. Turnkey."
      description="Every service vertical is presented with a stronger blueprint identity while staying grounded in the actual RK Elite offering."
    />

    <section class="site-section">
      <div class="layout-shell">
        <SectionHeader
          eyebrow="Our Construction Services"
          title="Complete construction solutions tailored to project requirements."
          description="From homes and office buildings to warehouses and turnkey handovers, each service line is framed like a dedicated build system."
        />

        <div class="mt-12 space-y-8">
          <article
            v-for="(service, index) in services"
            :key="service.slug"
            class="project-shard overflow-hidden"
            data-reveal
            data-tilt
          >
            <div class="grid lg:grid-cols-[0.88fr_1.12fr]">
              <div :class="index % 2 === 1 ? 'lg:order-2' : ''" class="relative min-h-[22rem] overflow-hidden">
                <NuxtImg
                  :src="service.image"
                  :alt="service.title"
                  width="1200"
                  height="900"
                  class="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 44vw"
                />
                <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,20,36,0.04),rgba(6,20,36,0.86))]" />
                <div class="absolute bottom-0 left-0 right-0 p-6">
                  <p class="technical-meta text-[var(--rk-tertiary)]">{{ service.metric }}</p>
                </div>
              </div>

              <div :class="index % 2 === 1 ? 'lg:order-1' : ''" class="p-8 sm:p-10">
                <p class="eyebrow">{{ service.slug }}</p>
                <h2 class="section-title mt-5 text-[var(--rk-primary)]">{{ service.title }}</h2>
                <p class="mt-5 max-w-2xl text-[var(--rk-text-muted)] leading-8">{{ service.summary }}</p>
                <ul class="mt-8 grid gap-3 sm:grid-cols-2" data-stagger>
                  <li
                    v-for="detail in service.details"
                    :key="detail"
                    class="border-l border-[rgba(0,218,248,0.24)] bg-white/[0.03] px-4 py-3 text-sm font-medium text-[var(--rk-text)]"
                    data-tilt
                  >
                    {{ detail }}
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="site-section pt-0">
      <div class="layout-shell">
        <div class="panel-dark blueprint-grid p-8 lg:p-10">
          <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader
              eyebrow="Turnkey Strength"
              title="One team. Zero confusion. Better project control."
              description="The turnkey model is a major trust signal for RK Elite Construction, so this section highlights approvals, planning, estimation, execution, finishing, and final delivery under one coordinated roof."
              light
            />

            <div class="grid gap-4 md:grid-cols-3" data-stagger>
              <div class="glass-panel p-6" data-tilt>
                <p class="technical-meta text-[var(--rk-tertiary)]">Approvals</p>
                <p class="mt-3 font-heading text-2xl font-bold uppercase tracking-[-0.04em] text-[var(--rk-primary)]">Clearances handled</p>
                <p class="mt-3 text-sm leading-7 text-[var(--rk-text-muted)]">Required permissions managed in a structured and professional way.</p>
              </div>
              <div class="glass-panel p-6" data-tilt>
                <p class="technical-meta text-[var(--rk-tertiary)]">Cost Estimation</p>
                <p class="mt-3 font-heading text-2xl font-bold uppercase tracking-[-0.04em] text-[var(--rk-primary)]">Transparent budgeting</p>
                <p class="mt-3 text-sm leading-7 text-[var(--rk-text-muted)]">Clear project costing before active construction begins.</p>
              </div>
              <div class="glass-panel p-6" data-tilt>
                <p class="technical-meta text-[var(--rk-tertiary)]">Final Delivery</p>
                <p class="mt-3 font-heading text-2xl font-bold uppercase tracking-[-0.04em] text-[var(--rk-primary)]">Ready for handover</p>
                <p class="mt-3 text-sm leading-7 text-[var(--rk-text-muted)]">Finishing and delivery with quality control and project visibility.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
