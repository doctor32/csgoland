<template>
        <div>
                <theError 
                :textError="'UNEXPECTED ERROR, YOU MUST HAVE A STEAM MOBILE AUTHENTICATION TO USE OUR PLATFORM.'"
                />
        </div>
</template>

<script>
import theError from '@/components/the-error.vue'
        export default {
  components: { theError },
                
        }
</script>

<style lang="scss" scoped>

</style>