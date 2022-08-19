<template>

  <TheNavbar />

  <router-view></router-view>
    
  <TheFooter />
  <div class="end" v-if="$route.path === '/' "></div>
</template>



<script>
import TheNavbar from '@/components/the-navbar.vue'
import TheFooter from '@/components/the-footer.vue'

  export default {
    components: { TheNavbar, TheFooter},
    data() {
      return {
        
      }
    },
    created() {
      console.log(this.$route);
    }
  }
</script>

<style lang="scss" scoped>
.end {
  margin-bottom: 5rem;
}
</style>