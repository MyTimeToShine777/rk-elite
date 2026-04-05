<script setup lang="ts">
import { contactDetails } from '~/data/site'

useSeoMeta({
  title: 'Contact',
  description: 'Start your construction project with RK Elite Construction in Chennai. Contact the team for a free consultation.',
})

const projectOptions = [
  'Residential',
  'Commercial',
  'Industrial',
  'Turnkey',
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Contact"
      title="Start Your Build with Confidence."
      description="Build your home, office, or industrial project with confidence. Get in touch and the team will walk you through the next steps."
    />

    <section class="site-section">
      <div class="layout-shell grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <div class="panel-dark blueprint-grid p-8" data-reveal data-tilt>
          <p class="eyebrow">Contact Details</p>
          <h2 class="mt-5 font-heading text-4xl font-bold uppercase tracking-[-0.05em] text-[var(--rk-primary)]">RK Elite Construction</h2>
          <div class="mt-8 space-y-6 text-[var(--rk-text-muted)]">
            <div>
              <p class="technical-meta">Phone</p>
              <a :href="`tel:${contactDetails.phone}`" class="mt-2 block text-lg text-[var(--rk-text)]">{{ contactDetails.phone }}</a>
            </div>
            <div>
              <p class="technical-meta">Address</p>
              <p class="mt-2 text-lg text-[var(--rk-text)]">{{ contactDetails.address }}</p>
            </div>
            <div>
              <p class="technical-meta">Project Focus</p>
              <p class="mt-2 text-lg text-[var(--rk-text)]">Residential, Commercial, Industrial, Turnkey</p>
            </div>
          </div>
        </div>

        <LeadForm
          title="Request a Free Consultation"
          subtitle="Fill out the form below and our team will contact you shortly."
          :project-options="projectOptions"
          :show-budget="true"
          dark
          data-reveal
        />
      </div>
    </section>

    <section class="site-section pt-0">
      <div class="layout-shell">
        <div class="project-shard overflow-hidden" data-reveal>
          <div class="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div class="p-8 sm:p-10">
              <p class="eyebrow">Location and Reach</p>
              <h2 class="section-title mt-5 text-[var(--rk-primary)]">A premium-ready contact experience anchored in Chennai.</h2>
              <p class="mt-5 max-w-2xl text-[var(--rk-text-muted)] leading-8">
                RK Tower, 10/1008 Mogappair East, EB Office Road, Chennai - 600037. Use this as the polished location block now, and connect a live map later if needed.
              </p>
              <div class="mt-8">
                <div class="trace-line" data-blueprint-line />
                <p class="mt-4 technical-meta text-white/48">Build your home, office, or industrial project with confidence.</p>
              </div>
            </div>

            <div class="relative min-h-[20rem] overflow-hidden" data-depth-scene>
              <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(175,198,255,0.08),rgba(0,218,248,0.08))]" />
              <div data-depth-layer="0.05" class="absolute inset-8 border border-[rgba(0,218,248,0.18)] bg-[linear-gradient(180deg,rgba(15,28,45,0.7),rgba(6,20,36,0.9))]" />
              <div data-depth-layer="0.12" class="absolute inset-[4.5rem] overflow-hidden border border-[rgba(175,198,255,0.12)]">
                <NuxtImg
                  src="/images/commercial-office.jpg"
                  alt="Commercial building exterior"
                  width="1200"
                  height="900"
                  class="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 36vw"
                />
                <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,20,36,0.15),rgba(6,20,36,0.7))]" />
              </div>
              <div data-depth-layer="0.22" class="hero-mini-stack right-10 top-8 h-28 w-28">
                <NuxtImg
                  src="/images/residential-villa.jpg"
                  alt="Residential construction"
                  width="700"
                  height="700"
                  class="h-full w-full object-cover"
                  sizes="112px"
                />
              </div>
              <div class="relative z-10 flex h-full items-center justify-center p-8 text-center">
                <div>
                  <Icon name="lucide:map-pinned" size="44" class="mx-auto text-[var(--rk-tertiary)]" />
                  <p class="mt-5 font-heading text-3xl font-bold uppercase tracking-[-0.05em] text-[var(--rk-primary)]">Mogappair East, Chennai</p>
                  <p class="mt-3 max-w-md text-sm leading-7 text-[var(--rk-text-muted)]">
                    RK Tower, 10/1008 Mogappair East, EB Office Road, Chennai - 600037
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
