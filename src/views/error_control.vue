<template>
        <div>
                <theError 
                :textError="'UNEXPECTED ERROR, FAMILY CONTROL IS ENABLED ON YOUR STEAM ACCOUNT. TO CONTINUE USING THE SITE, DISABLE FAMILY CONTROL IN YOUR ACCOUNT SETTINGS.'"
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