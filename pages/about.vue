<script setup lang="ts">
import { contactDetails, differentiators, values } from '~/data/site'

useSeoMeta({
  title: 'About',
  description: 'Learn about RK Elite Construction, its mission, vision, values, and quality-driven construction approach in Chennai.',
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="About RK Elite"
      title="Reliable Construction. Premium Execution."
      description="With 50+ projects delivered, RK Elite Construction focuses on durable structures, modern standards, and client confidence from approval to final delivery."
    />

    <section class="site-section">
      <div class="layout-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div data-aos="fade-right">
          <p class="eyebrow">Company Profile</p>
          <h2 class="section-title mt-5 text-[var(--rk-primary)]">Focused on durable structures and premium execution standards.</h2>
          <p class="mt-5 max-w-xl text-[var(--rk-text-muted)] leading-8">
            RK Elite Construction is a Chennai-based construction company providing reliable, professional, and quality-driven construction services across residential, commercial, industrial, and turnkey projects.
          </p>
          <div class="mt-8">
            <div class="trace-line" data-blueprint-line />
            <div class="mt-4 space-y-3">
              <div class="technical-meta flex items-center gap-3 text-white/50">
                <span class="h-px w-8 bg-[rgba(0,218,248,0.45)]" />
                Residential Construction
              </div>
              <div class="technical-meta flex items-center gap-3 text-white/50">
                <span class="h-px w-8 bg-[rgba(0,218,248,0.45)]" />
                Commercial Construction
              </div>
              <div class="technical-meta flex items-center gap-3 text-white/50">
                <span class="h-px w-8 bg-[rgba(0,218,248,0.45)]" />
                Industrial Construction
              </div>
              <div class="technical-meta flex items-center gap-3 text-white/50">
                <span class="h-px w-8 bg-[rgba(0,218,248,0.45)]" />
                Turnkey Construction Projects
              </div>
            </div>
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2" data-stagger>
          <div class="panel p-6" data-tilt>
            <p class="technical-meta">Mission</p>
            <p class="mt-4 text-sm leading-8 text-[var(--rk-text-muted)]">
              To deliver high-quality construction services with transparency, professionalism, and genuine client satisfaction from approval to final delivery.
            </p>
          </div>
          <div class="panel p-6" data-tilt>
            <p class="technical-meta">Vision</p>
            <p class="mt-4 text-sm leading-8 text-[var(--rk-text-muted)]">
              To become one of the most trusted construction companies in Chennai, known for quality workmanship and dependable project delivery.
            </p>
          </div>
          <div class="glass-panel p-6 sm:col-span-2" data-tilt>
            <p class="technical-meta text-[var(--rk-tertiary)]">North Star</p>
            <p class="mt-4 font-heading text-3xl font-bold uppercase tracking-[-0.05em] text-[var(--rk-primary)]">
              Quality, reliability, and professionalism should be visible in every stage of the build.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="site-section pt-0">
      <div class="layout-shell grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div class="project-shard overflow-hidden" data-reveal data-tilt>
          <div class="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div class="relative min-h-[24rem] overflow-hidden">
              <NuxtImg
                src="/images/planning-blueprint.jpg"
                alt="Construction blueprint and planning visuals"
                width="1200"
                height="900"
                class="h-full w-full object-cover opacity-78"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
              <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,20,36,0.06),rgba(6,20,36,0.82))]" />
            </div>
            <div class="p-6 sm:p-8">
              <p class="technical-meta">Field Notes</p>
              <h3 class="mt-4 font-heading text-3xl font-bold uppercase tracking-[-0.05em] text-[var(--rk-primary)]">
                Built on modern standards and client expectations.
              </h3>
              <p class="mt-4 text-sm leading-8 text-[var(--rk-text-muted)]">
                The goal is to be the most trusted construction partner in Chennai, built on quality, reliability, and professionalism rather than empty claims.
              </p>
            </div>
          </div>
        </div>

        <div class="panel-dark blueprint-grid p-6 sm:p-8" data-aos="fade-left">
          <p class="technical-meta text-[var(--rk-tertiary)]">Values Matrix</p>
          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <div
              v-for="value in values"
              :key="value"
              class="border-l border-[rgba(0,218,248,0.25)] bg-white/[0.03] px-4 py-4"
            >
              <p class="font-heading text-lg font-bold uppercase tracking-[-0.03em] text-[var(--rk-primary)]">{{ value }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="site-section">
      <div class="layout-shell">
        <SectionHeader
          eyebrow="What Makes Us Different"
          title="A construction partner you can trust."
          description="Experienced teams, structured workflows, and quality-focused execution come together so every project runs smoothly and gets delivered as promised."
        />

        <div class="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <div
            v-for="item in differentiators"
            :key="item"
            class="panel p-6"
            data-reveal
            data-tilt
          >
            <p class="technical-meta">Operational Difference</p>
            <p class="mt-5 font-heading text-2xl font-bold uppercase tracking-[-0.04em] text-[var(--rk-primary)]">{{ item }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="site-section pt-0">
      <div class="layout-shell">
        <div class="panel-dark grid gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p class="eyebrow">Direct Contact</p>
            <h2 class="section-title mt-5 text-[var(--rk-primary)]">Start your project with a clear and professional conversation.</h2>
            <p class="mt-4 max-w-2xl text-[var(--rk-text-muted)] leading-8">
              Contact RK Elite Construction to discuss your residential, commercial, industrial, or turnkey requirement.
            </p>
          </div>
          <div class="flex flex-col gap-3">
            <a :href="`tel:${contactDetails.phone}`" class="button-primary">Call {{ contactDetails.phone }}</a>
            <NuxtLink to="/contact" class="button-secondary">Open Contact Page</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
