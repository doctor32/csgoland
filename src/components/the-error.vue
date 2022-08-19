<template>
        <div class="error__body">
                <div class="error">{{textError}}</div>
                <router-link to="/"><button class="login__btn">Home</button></router-link>
                
        </div>
</template>

<script>
        export default {
                props: ['textError'],
                
                mounted() {
                        document.title = this.$store.state.domainName + ' — Ooops, Error'
                }
        }
</script>

<style lang="scss" scoped>
.error__body {
        display: flex;
        flex-direction: column;
        height: 57vh;
        align-items: center;
        gap: 10rem;
        justify-content: center;
        .error {
                font-weight: 600;
                line-height: 150%;
                max-width: 150rem;
                text-align: center;
                color: white;
                font-size: 3rem;
                border: .1rem solid #1478ED;
                padding: 4rem 8rem;
                border-radius: 1.5rem;
        }
        button {
                width: 18rem;
                color: white;
        }
}
</style>