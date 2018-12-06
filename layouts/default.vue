<template>
  <div>
    <site-header/>
    <site-main>
      <nuxt/>
    </site-main>
    <site-footer/>
  </div>
</template>

<script>
import SiteHeader from '@/components/layouts/SiteHeader.vue'
import SiteMain from '@/components/layouts/SiteMain.vue'
import SiteFooter from '@/components/layouts/SiteFooter.vue'

export default {
  name: 'LayoutDefault',
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter
  }
}
</script>

<style lang="scss" scoped>
</style>
