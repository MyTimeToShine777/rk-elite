<script setup lang="ts">
import { commandMetrics, contactDetails, heroStats, processSteps, projectCategories, services, strengths, whyChooseUs } from '~/data/site'

useSeoMeta({
  title: 'Premium Construction in Chennai',
  description: 'RK Elite Construction delivers residential, commercial, industrial, and turnkey construction services in Chennai with premium execution and complete transparency.',
})

const featuredServices = services.slice(0, 3)

const projectOptions = [
  'Home Construction',
  'Office Construction',
  'Industrial Construction',
  'Turnkey Project',
]

const feedStats = [
  { label: 'Projects', value: '50+' },
  { label: 'Verticals', value: '4' },
  { label: 'Stages', value: '7' },
  { label: 'CCTV', value: '24/7' },
]
</script>

<template>
  <div>
    <section class="relative overflow-hidden pb-24 pt-32 blueprint-grid">
      <div class="absolute left-0 top-28 font-heading text-[clamp(5rem,23vw,17rem)] font-bold uppercase tracking-[-0.09em] text-white/[0.03]">
        BUILD
      </div>
      <div class="absolute bottom-10 right-0 font-heading text-[clamp(5rem,23vw,17rem)] font-bold uppercase tracking-[-0.09em] text-white/[0.03]">
        ELITE
      </div>

      <div class="layout-shell relative z-10">
        <header class="mb-14 grid gap-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(22rem,0.86fr)] lg:items-center xl:gap-14">
          <div data-hero-copy class="max-w-4xl">
            <div class="flex items-center gap-4">
              <span class="eyebrow">Asset Archive 09.1</span>
            </div>
            <div class="mt-5">
              <TypingText text="RK Elite Construction // Structural Build Command" class="technical-meta text-[var(--rk-tertiary)]" />
            </div>
            <h1 data-hero-title class="mt-6 max-w-5xl font-heading text-[clamp(2.95rem,7.2vw,5.9rem)] font-bold uppercase leading-[0.88] tracking-[-0.07em] text-[var(--rk-primary)]">
              Building Homes<br>
              Offices and Industries<br>
              with Quality and Trust
            </h1>
            <p class="mt-6 max-w-3xl text-lg leading-8 text-[var(--rk-text-muted)]">
              Delivering reliable residential, commercial, industrial, and turnkey construction services in Chennai with professional execution and complete transparency at every stage.
            </p>

            <div class="mt-8 flex flex-col gap-4 sm:flex-row">
              <NuxtLink to="/contact" class="button-primary">
                Get Free Consultation
              </NuxtLink>
              <NuxtLink to="/services" class="button-secondary">
                Request Cost Estimate
              </NuxtLink>
            </div>

            <div class="mt-7 flex flex-wrap gap-3" data-stagger>
              <span class="page-hero-tag">50+ Projects Delivered</span>
              <span class="page-hero-tag">Transparent Costing</span>
              <span class="page-hero-tag">Quality Material Systems</span>
            </div>
          </div>

          <div data-hero-visual data-depth-scene class="hero-depth-scene min-h-[24rem] lg:min-h-[28rem]">
            <div data-depth-layer="0.04" class="hero-depth-board blueprint-grid" />
            <div data-depth-layer="0.1" class="hero-depth-frame">
              <NuxtImg
                src="/images/residential-hero.jpg"
                alt="Modern construction building exterior"
                width="1280"
                height="900"
                class="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>
            <div data-depth-layer="0.16" class="hero-mini-stack top-6 right-6 h-36 w-40">
              <NuxtImg
                src="/images/commercial-office.jpg"
                alt="Commercial office construction"
                width="900"
                height="720"
                class="h-full w-full object-cover"
                sizes="200px"
              />
            </div>
            <div data-depth-layer="0.22" class="hero-mini-stack bottom-8 left-8 h-28 w-44">
              <NuxtImg
                src="/images/industrial-warehouse.jpg"
                alt="Industrial warehouse construction"
                width="900"
                height="560"
                class="h-full w-full object-cover"
                sizes="220px"
              />
            </div>
            <div data-depth-layer="0.28" data-float class="hero-float-card left-8 top-10">
              <p class="technical-meta text-[var(--rk-tertiary)]">System Coordinates</p>
              <p class="mt-3 font-heading text-3xl font-bold text-[var(--rk-primary)]">CHN // 600037</p>
              <p class="mt-2 text-sm leading-7 text-[var(--rk-text-muted)]">
                RK Tower, 10/1008 Mogappair East, EB Office Road, Chennai.
              </p>
            </div>
            <div data-depth-layer="0.34" data-float class="hero-float-card bottom-8 right-8">
              <p class="technical-meta text-[var(--rk-tertiary)]">Live Build Focus</p>
              <p class="mt-3 font-heading text-2xl font-bold uppercase text-[var(--rk-primary)]">Residential, commercial, industrial, turnkey.</p>
            </div>
          </div>
        </header>

        <div class="grid gap-6 lg:grid-cols-3 perspective-[1200px]" data-stagger>
          <article
            v-for="(service, index) in featuredServices"
            :key="service.slug"
            data-command-card
            data-tilt
            class="project-shard group cursor-pointer"
          >
            <div
              class="absolute inset-y-0 left-0 w-[3px]"
              :class="index === 0 ? 'bg-[var(--rk-tertiary)]' : index === 1 ? 'bg-[var(--rk-primary)]' : 'bg-white/24'"
            />
            <div class="absolute right-4 top-4 technical-meta">
              REF: 0{{ index + 1 }} // {{ service.slug.toUpperCase() }}
            </div>

            <div class="relative h-72 overflow-hidden">
              <NuxtImg
                :src="service.image"
                :alt="service.title"
                width="960"
                height="1080"
                class="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
                sizes="(max-width: 1024px) 100vw, 33vw"
                data-parallax
                data-parallax-speed="6"
              />
              <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,20,36,0.08),rgba(6,20,36,0.82))]" />
              <div class="absolute bottom-4 left-5 flex items-center gap-2">
                <span class="h-2 w-2 animate-pulse bg-[var(--rk-tertiary)]" />
                <span class="technical-meta text-[var(--rk-tertiary)]">Live System</span>
              </div>
            </div>

            <div class="p-6">
              <h2 class="font-heading text-3xl font-bold uppercase tracking-[-0.05em] text-[var(--rk-primary)]">
                {{ service.title }}
              </h2>
              <p class="mt-4 text-sm leading-7 text-[var(--rk-text-muted)]">
                {{ service.summary }}
              </p>
              <div class="mt-6 grid gap-3">
                <span
                  v-for="detail in service.details.slice(0, 2)"
                  :key="detail"
                  class="technical-meta flex items-center gap-2 text-white/46"
                >
                  <span class="h-px w-6 bg-[rgba(0,218,248,0.35)]" />
                  {{ detail }}
                </span>
              </div>
              <div class="mt-8 flex items-end justify-between border-t border-[rgba(68,70,79,0.28)] pt-5">
                <div>
                  <span class="technical-meta">Status</span>
                  <p class="mt-2 font-heading text-sm font-bold uppercase text-white">Optimized</p>
                </div>
                <div class="text-right">
                  <span class="technical-meta">Type</span>
                  <p class="mt-2 font-heading text-sm font-bold uppercase text-[var(--rk-tertiary)]">{{ service.slug }}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="site-section pt-0">
      <div class="layout-shell grid gap-10 lg:grid-cols-[22rem_minmax(0,1fr)] lg:items-start">
        <aside class="space-y-5">
          <div
            v-for="metric in commandMetrics"
            :key="metric.label"
            data-command-metric
            class="panel p-5"
          >
            <p class="technical-meta">{{ metric.label }}</p>
            <div class="mt-3 flex items-end gap-2">
              <p class="font-heading text-5xl font-bold text-[var(--rk-primary)]">
                {{ metric.value }}
              </p>
              <span class="technical-meta mb-1 text-[var(--rk-tertiary)]">{{ metric.unit }}</span>
            </div>
          </div>

          <NuxtLink to="/contact" class="button-primary w-full justify-center">
            Initialize Project Discussion
          </NuxtLink>
        </aside>

        <div class="panel blueprint-grid p-2" data-reveal>
          <div class="image-frame min-h-[24rem] border border-[rgba(68,70,79,0.22)] lg:min-h-[25rem]">
            <div class="absolute left-0 right-0 top-0 flex items-center justify-between border-b border-[rgba(68,70,79,0.22)] bg-[rgba(30,43,60,0.22)] px-6 py-5">
              <h2 class="font-heading text-xl font-bold uppercase tracking-[-0.03em] text-[var(--rk-primary)]">
                Active Deployment Feed
              </h2>
              <span class="technical-meta text-[var(--rk-tertiary)]">Monitoring</span>
            </div>
            <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,20,36,0.98)_0%,rgba(6,20,36,0.9)_42%,rgba(6,20,36,0.78)_100%)]" />
            <div class="relative z-10 grid min-h-[24rem] gap-8 px-6 pb-24 pt-22 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
              <div class="max-w-md self-center">
                <p class="technical-meta text-[var(--rk-tertiary)]">Live Operations Summary</p>
                <h3 class="mt-4 font-heading text-3xl font-bold uppercase tracking-[-0.05em] text-[var(--rk-primary)]">
                  Structured planning, supervision, and client visibility in one command layer.
                </h3>
                <p class="mt-4 text-sm leading-8 text-[var(--rk-text-muted)]">
                  From approvals and cost estimation to CCTV-backed progress tracking and final handover, RK Elite keeps the build cycle visible instead of vague.
                </p>
                <div class="mt-6 space-y-3" data-stagger>
                  <div
                    v-for="item in ['Approval handling', 'Transparent project costing', 'Professional supervision', 'Final delivery readiness']"
                    :key="item"
                    class="technical-meta flex items-center gap-3 text-white/56"
                  >
                    <span class="h-px w-8 bg-[rgba(0,218,248,0.45)]" />
                    {{ item }}
                  </div>
                </div>
              </div>

              <div class="relative hidden lg:block" data-depth-scene>
                <div data-depth-layer="0.06" class="absolute inset-y-8 right-0 left-10 glass-panel border border-[rgba(0,218,248,0.12)]" />
                <div data-depth-layer="0.12" class="absolute bottom-14 left-[4.5rem] right-[4.5rem] top-14 overflow-hidden border border-[rgba(175,198,255,0.1)]">
                  <NuxtImg
                    src="/images/commercial-office.jpg"
                    alt="Commercial construction building"
                    width="1200"
                    height="900"
                    class="h-full w-full object-cover"
                    sizes="40vw"
                  />
                  <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,20,36,0.12),rgba(6,20,36,0.62))]" />
                </div>
                <div data-depth-layer="0.2" class="hero-mini-stack right-10 top-12 h-40 w-40">
                  <NuxtImg
                    src="/images/residential-villa.jpg"
                    alt="Residential building facade"
                    width="700"
                    height="700"
                    class="h-full w-full object-cover"
                    sizes="180px"
                  />
                </div>
                <div data-depth-layer="0.26" class="hero-mini-stack bottom-10 left-16 h-28 w-44">
                  <NuxtImg
                    src="/images/industrial-warehouse.jpg"
                    alt="Industrial site building"
                    width="900"
                    height="560"
                    class="h-full w-full object-cover"
                    sizes="220px"
                  />
                </div>
              </div>
            </div>
            <div class="absolute inset-x-0 bottom-0 p-5 lg:p-6">
              <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <div
                  v-for="item in feedStats"
                  :key="item.label"
                  class="glass-panel p-4"
                  data-float
                >
                  <p class="technical-meta text-[var(--rk-tertiary)]">{{ item.label }}</p>
                  <p class="mt-3 font-heading text-2xl font-bold text-[var(--rk-primary)]">{{ item.value }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="site-section">
      <div class="layout-shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_0.9fr]">
        <div data-reveal>
          <SectionHeader
            eyebrow="Trusted Construction Services in Chennai"
            title="A construction command system built around clarity, quality, and proper execution."
            description="RK Elite Construction is committed to delivering strong, reliable, and professionally executed construction projects across Chennai. With 50+ projects delivered, the team provides end-to-end solutions for homes, offices, industrial buildings, and turnkey projects built on precision, quality materials, and proper planning."
          />
          <div class="mt-8">
            <div class="trace-line" data-blueprint-line />
            <div class="mt-3 flex flex-wrap gap-4 text-[0.72rem] font-heading uppercase tracking-[0.18em] text-white/40">
              <span>[ 50+ Projects Delivered ]</span>
              <span>[ Professional Team ]</span>
              <span>[ Transparent Pricing ]</span>
            </div>
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2" data-stagger>
          <div
            v-for="item in strengths"
            :key="item"
            class="panel p-5"
          >
            <p class="technical-meta">Core Strength</p>
            <p class="mt-4 font-heading text-2xl font-bold uppercase tracking-[-0.04em] text-[var(--rk-primary)]">{{ item }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="site-section">
      <div class="layout-shell">
        <SectionHeader
          eyebrow="Our Construction Services"
          title="Complete construction solutions tailored to residential, commercial, industrial, and turnkey requirements."
          description="The service deck follows the darker Stitch composition, but every headline and description stays grounded in your RK Elite source document."
        />

        <div class="mt-12 grid gap-6 xl:grid-cols-2">
          <article
            v-for="service in services"
            :key="service.slug"
            class="project-shard"
            data-reveal
            data-tilt
          >
            <div class="grid lg:grid-cols-[0.92fr_1.08fr]">
              <div class="relative min-h-[20rem] overflow-hidden">
                <NuxtImg
                  :src="service.image"
                  :alt="service.title"
                  width="1080"
                  height="920"
                  class="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 34vw"
                />
                <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,20,36,0.08),rgba(6,20,36,0.86))]" />
                <div class="absolute bottom-0 left-0 right-0 p-5">
                  <p class="technical-meta text-[var(--rk-tertiary)]">{{ service.metric }}</p>
                </div>
              </div>

              <div class="p-6 sm:p-8">
                <p class="technical-meta">{{ service.slug }}</p>
                <h3 class="mt-4 font-heading text-3xl font-bold uppercase tracking-[-0.05em] text-[var(--rk-primary)]">
                  {{ service.title }}
                </h3>
                <p class="mt-4 text-sm leading-8 text-[var(--rk-text-muted)]">{{ service.summary }}</p>
                <ul class="mt-6 grid gap-3 sm:grid-cols-2">
                  <li
                    v-for="detail in service.details"
                    :key="detail"
                    class="border-l border-[rgba(0,218,248,0.24)] bg-white/[0.02] px-4 py-3 text-sm font-medium text-[var(--rk-text)]"
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

    <section class="site-section">
      <div class="layout-shell">
        <div class="panel-dark blueprint-grid p-6 sm:p-8 lg:p-10" data-reveal>
          <div class="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <SectionHeader
              eyebrow="Reliable Construction Partner in Chennai"
              title="Structured workflows, quality workmanship, and professional supervision from start to finish."
              description="We focus on the things your copy emphasizes most: experienced teams, quality materials, transparent project costing, and dependable on-time execution."
              light
            />

            <div class="grid gap-4 sm:grid-cols-2" data-stagger>
              <div
                v-for="item in whyChooseUs"
                :key="item"
                class="glass-panel border-l border-[rgba(0,218,248,0.24)] p-5"
              >
                <p class="font-heading text-xl font-bold uppercase tracking-[-0.03em] text-[var(--rk-primary)]">{{ item }}</p>
                <p class="mt-3 text-sm leading-7 text-[var(--rk-text-muted)]">
                  Professional delivery systems designed to keep every milestone visible and under control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="site-section">
      <div class="layout-shell">
        <SectionHeader
          eyebrow="Simple and Transparent Workflow"
          title="Our construction process from consultation to final delivery."
          description="Each step below comes directly from your RK Elite document and is presented like a technical deployment sequence."
        />

        <div class="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="step in processSteps"
            :key="step.id"
            class="panel p-6"
            data-process-card
          >
            <div class="flex items-center justify-between">
              <span class="font-heading text-4xl font-bold text-[var(--rk-tertiary)]">{{ step.id }}</span>
              <span class="h-px w-16 bg-[linear-gradient(90deg,var(--rk-tertiary),transparent)]" />
            </div>
            <h3 class="mt-6 font-heading text-2xl font-bold uppercase tracking-[-0.05em] text-[var(--rk-primary)]">
              {{ step.title }}
            </h3>
            <p class="mt-4 text-sm leading-7 text-[var(--rk-text-muted)]">
              {{ step.body }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="site-section">
      <div class="layout-shell">
        <SectionHeader
          eyebrow="Project Categories"
          title="Representative sectors shown through credible build categories, not invented case studies."
          description="Private residences, business environments, and industrial facilities stay aligned with the actual RK Elite service scope."
        />

        <div class="mt-12 grid gap-6 xl:grid-cols-3">
          <article
            v-for="category in projectCategories"
            :key="category.title"
            class="project-shard overflow-hidden"
            data-reveal
          >
            <div class="relative h-80 overflow-hidden">
              <NuxtImg
                :src="category.image"
                :alt="category.title"
                width="1000"
                height="860"
                class="h-full w-full object-cover grayscale-[0.2]"
                sizes="(max-width: 1280px) 100vw, 30vw"
              />
              <div class="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(6,20,36,0.9))]" />
            </div>
            <div class="p-6">
              <p class="technical-meta">Representative Category</p>
              <h3 class="mt-3 font-heading text-3xl font-bold uppercase tracking-[-0.05em] text-[var(--rk-primary)]">{{ category.title }}</h3>
              <p class="mt-4 text-sm leading-7 text-[var(--rk-text-muted)]">{{ category.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="site-section pb-20">
      <div class="layout-shell">
        <div class="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div data-aos="fade-right">
            <p class="eyebrow">Planning to Build Your Dream Project?</p>
            <h2 class="section-title mt-5 text-[var(--rk-primary)]">Get expert guidance from our construction team.</h2>
            <p class="mt-5 max-w-xl text-[var(--rk-text-muted)] leading-8">
              Start your construction project today. Build your home, office, or industrial project with confidence and let the team walk you through the next steps.
            </p>
            <div class="mt-8 space-y-3 text-sm leading-7 text-[var(--rk-text-muted)]">
              <a :href="`tel:${contactDetails.phone}`" class="block">{{ contactDetails.phone }}</a>
              <p>{{ contactDetails.address }}</p>
            </div>
            <div class="mt-8 grid gap-4 sm:grid-cols-3">
              <div
                v-for="stat in heroStats"
                :key="stat.label"
                class="panel p-4"
              >
                <p
                  class="font-heading text-3xl font-bold text-[var(--rk-primary)]"
                  :data-counter="Number.parseInt(stat.value, 10)"
                  :data-suffix="stat.value.includes('+') ? '+' : ''"
                >
                  {{ stat.value }}
                </p>
                <p class="mt-2 technical-meta">{{ stat.label }}</p>
              </div>
            </div>
          </div>

          <LeadForm
            title="Start Your Construction Project Today"
            subtitle="Fill in your details and our team will get in touch to discuss your project requirements."
            :project-options="projectOptions"
            dark
            data-aos="fade-left"
          />
        </div>
      </div>
    </section>
  </div>
</template>
