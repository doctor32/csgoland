<template>
        <div>
                <theError 
                :textError="'UNFORTUNELY, OUR SERVERS ARE DISABLED FOR YOUR COUNTRY IN THIS MOMENT. TRY LATER!'"
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