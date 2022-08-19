<template>
        <footer>
                <div @click="clickOnLink"><router-link to="/privacy">Privacy Policy</router-link></div>
                <div @click="clickOnLink"><router-link to="/terms">Terms of Use</router-link></div>
                
                <a class="lowercase" :href="'mailto:support@' + $store.state.domainName +'.com'">support@{{$store.state.domainName}}.com</a>
                <p class="first__p">© 2022 Created by HurryUp. All rights reserved. Powered by Steam.</p>
                <p>Valve and Steam are registered trademarks of Valve Corporation. {{$store.state.domainName}} is not affiliated with Valve in any way.</p>
        </footer>
</template>

<script>
        export default {
                methods: {
                        clickOnLink() {
                                window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                                })
                        }
                }
        }
</script>

<style lang="scss" scoped>
footer {
        padding: 2rem 0 3rem 0;
        margin-top: 5rem;
        background: #0C0C0C;
        color: white;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        font-size: 1.6rem;
        a, p {
                opacity: .85;
        }
        .first__p {
                padding-top: 2rem;
        }
        a:hover {
                transition: .3s;
                opacity: 1;
                color: #1478ED;
        }
}
</style>