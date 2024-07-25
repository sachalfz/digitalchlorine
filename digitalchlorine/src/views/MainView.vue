<script setup >
import HeaderComponent from '../components/HeaderComponent.vue'
import HeroBannerComponent from '../components/HeroBannerComponent.vue'
import AboutComponent from '../components/AboutComponent.vue'
import WorkComponent from '../components/WorkComponent.vue'
import ContactComponent from '../components/ContactComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
</script>

<template>
    <HeaderComponent />
    <main>
        <HeroBannerComponent />
        <AboutComponent />
        <WorkComponent />
        <ContactComponent />
    </main>
    <FooterComponent />
</template>