<template>
        <div class="div">
                <nav class="flex justify-between">
                <router-link to="/">
                  <div class="header__logo">
                    <div class="header__logo_top relative">
                    <p class="text-7xl font-bold uppercase">{{$store.state.domainName}}</p>
                    <img src="@/assets/img/logo.png" alt="" class="header__logo_img">
                    </div>
                    <p class="header__logo_bottom">The best inventory checker</p>
                  </div>
                </router-link>
                <ul class="navigation flex justify-between">
                  <div @click="clickOnLink(850)"><router-link to="/">Top Skins</router-link></div>
                  <div @click="clickOnLink(1200)"><router-link to="/">Contacts</router-link></div>
                  <li><p href="" class="market" @click="$store.state.openModal = true">Market</p></li>
                  <li>
                    <button class="login__btn authBtn" href="">
                    <svg width="37" height="44" viewBox="0 0 37 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.25 8.25C18.7758 8.25 15.1306 11.8305 15.011 16.2773L9.96475 23.4905C9.58513 23.416 9.19935 23.3773 8.8125 23.375C7.509 23.375 6.30175 23.7847 5.30212 24.475L-1.5 21.7869V29.1803L2.76938 30.8688C3.06867 32.2497 3.83121 33.4868 4.93044 34.3747C6.02967 35.2626 7.39948 35.7479 8.8125 35.75C10.2583 35.7473 11.6575 35.2383 12.7672 34.3115C13.8769 33.3846 14.627 32.0985 14.8873 30.6762L22.8251 24.728C22.9667 24.7362 23.107 24.75 23.25 24.75C27.7999 24.75 31.5 21.0499 31.5 16.5C31.5 11.9501 27.7999 8.25 23.25 8.25V8.25ZM23.25 11C26.2833 11 28.75 13.4667 28.75 16.5C28.75 19.5333 26.2833 22 23.25 22C20.2167 22 17.75 19.5333 17.75 16.5C17.75 13.4667 20.2167 11 23.25 11ZM23.25 12.375C22.156 12.375 21.1068 12.8096 20.3332 13.5832C19.5596 14.3568 19.125 15.406 19.125 16.5C19.125 17.594 19.5596 18.6432 20.3332 19.4168C21.1068 20.1904 22.156 20.625 23.25 20.625C24.344 20.625 25.3932 20.1904 26.1668 19.4168C26.9404 18.6432 27.375 17.594 27.375 16.5C27.375 15.406 26.9404 14.3568 26.1668 13.5832C25.3932 12.8096 24.344 12.375 23.25 12.375ZM8.8125 24.75C11.4662 24.75 13.625 26.9088 13.625 29.5625C13.625 32.2162 11.4662 34.375 8.8125 34.375C7.88423 34.3733 6.97625 34.1032 6.19801 33.5972C5.41976 33.0912 4.80445 32.371 4.42625 31.5233L7.5475 32.758C7.96275 32.923 8.389 33.0028 8.80975 33.0028C9.61084 33.0046 10.3874 32.7265 11.0053 32.2167C11.6232 31.7068 12.0436 30.9972 12.194 30.2103C12.3443 29.4235 12.2151 28.6088 11.8286 27.9071C11.4422 27.2054 10.8228 26.6606 10.0775 26.367L6.94662 25.1254C7.53719 24.8766 8.17169 24.749 8.8125 24.75Z" fill="white"/>
                    </svg>
                    <p>Sign In</p>          
                    </button>
                  </li>
                </ul>   
                </nav>  
                <div class="hr__nav"></div>
        </div>

</template>

<script>
        export default {
            data() {
              return {
              }
            },
            created() {
              console.log(this.$store.state.domainName + '.com');
            },
            methods: {
              clickOnLink(numberOfScroll) {
                window.scrollTo({
                top: numberOfScroll,
                behavior: 'smooth'
                })
              }
            }
        }
</script>

<style lang="scss" scoped>
.hr__nav {
  margin: 0 auto;
  width: 170rem;
  height: .1rem;
  background: white;
  opacity: .15;
}
nav {
  padding: 3rem 0 3rem 0;
  color: white;
  width: 160rem;
  margin: 0 auto;
}
.header__logo_bottom {
  font-size: 1.4rem;
  opacity: .7;
}
.header__logo_img {
  position: absolute;
  top: -3rem;
  left: 22rem;
  width: 9rem;
}
.navigation {
  z-index: 2;
  width: 50rem;
  font-size: 1.8rem;
  align-items: center;
  a {
    transition: .3s;
  }
  a:hover, .market:hover {
    transition: .3s;
    color: #1478ED;
  }
  p {
    cursor: pointer;
  }
  .market {
    transition: .3s;
  }
}
button {
  width: 12rem;
  height: 5.3rem;
  padding: 0;
  position: relative;
  svg {
    transition: .5s;
    opacity: .6;
    width: 3.5rem;
    height: 5rem;
    position: absolute;
    left: 0;
    bottom: 0.2rem;
  }
  p {
    padding-left: 2.5rem;
  }
  p:hover {
    color: white;
  }
  &:hover {
    svg {
      transition: .5s;
      opacity: 1;
    }
  }
}
</style>