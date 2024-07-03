<template>
  <div id="join-wishlist-popup">
    <NuxtPage></NuxtPage>
  </div>
  <div id="alert" class="bg-black text-white -m-5 lg:-mx-8 lg:-mt-6 mb-8 p-2 centered text-sm"><p>We are launching soon 🔥</p></div>
  <div class="text-[18px] max-w-[1440px] m-auto xl:px-20">
    <Navbar></Navbar>
    <section id="hero" class="lg:flex gap-12">
      <waitlist-hero></waitlist-hero>
    </section>
    <section id="features" class="md:flex gap-8">
      <waitlist-feature></waitlist-feature>
      <waitlist-feature></waitlist-feature>
      <waitlist-feature></waitlist-feature>
    </section>
    <section id="benefits">
      <waitlist-benefit></waitlist-benefit>
      <waitlist-benefit></waitlist-benefit>
    </section>
    <section id="social-proof" class="lg:flex gap-8">
      <waitlist-testimonial></waitlist-testimonial>
      <waitlist-testimonial></waitlist-testimonial>
      <waitlist-testimonial></waitlist-testimonial>
    </section>
    <section id="faq">
      <h2 class="text-3xl font-medium mb-8">You may ask</h2>
      <p class="mb-8">Acme automates your subscription revenue and customer reporting. Just connect your data and Acme will calculate and visualize your most important metrics.</p>
      <waitlist-faq></waitlist-faq>
      <waitlist-faq></waitlist-faq>
      <waitlist-faq></waitlist-faq>
      <waitlist-faq></waitlist-faq>
    </section>

    <section id="cta">
      <div class="text-center centered flex-col">
        <h5 class="text-lg mb-2">Tagline</h5>
        <h2 class="text-3xl font-medium mb-8">Long headline to turn your visitors into users</h2>
        <div class="bg-black text-white centered p-4 px-8 w-1/3">
          <p class="whitespace-nowrap">CTA action</p>
        </div>
      </div>
    </section>
    <FooterBase></FooterBase>
  </div>
</template>

<script setup></script>
<style>
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background-color: gray;
}

section {
  margin: 5rem 0rem;
}
</style>

<!-- sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... } -->
