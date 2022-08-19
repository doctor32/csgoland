<template>
<header class="text-white pt-20">
    
      <div class="container">
      <main class="flex">
        <div class="main__left">

          <h1>FIND <span>EVERYTHING</span> YOU NEED</h1>
          <h3 class="text-4xl pt-10 max-w-5xl	leading-normal">It's simple: You can find all the tools here which will help you trade your skins at a profit for you.</h3>
          <h3 class="text-5xl pt-20 max-w-5xl	leading-normal font-bold">Inventory Checker</h3>
          <p class="text-3xl max-w-5xl pt-4	leading-normal trade__url_text">ENTER YOUR STEAM ID 64 OR STEAM TRADE LINK</p>
          <div class="trade__url flex  gap-x-4 mt-4">
            <input type="text" placeholder="https://steamcommunity.com/tradeoffer/new/?partner=103..." v-model="tradeUrl">
            <button class="login__btn start__btn authBtn" @click="$store.state.openModal = true">Start</button>
          </div>
          <p class="max-w-4xl leading-normal text-gray-500 pt-8">By using our service, you automatically accept the terms of our site. By signing up, you agree to our terms and conditions Terms of Use and Privacy Policy.</p>
        </div>
        <div class="main__right" >
          <img class="main__right_blue" src="@/assets/img/blur.png" alt="">
          <img class="main__right_ball" src="@/assets/img/ball.png" alt="">
          <img class="main__right_awp-black" src="@/assets/img/black_awp.png" alt="">
          <img class="main__right_awp" src="@/assets/img/awp.png" alt="">
          
        </div>
      </main>
    </div>
    <div class="faq">
      <p>1. Copy your Trade link from your Steam Account</p>
      <p>2. Paste it into the form</p>
      <p>3. Click "Start"</p>
      <p>4. Great! You can get your information now</p>
    </div>
  </header>


  <div class="container">
    <div class="statistic">
      <h3 class="title">Steam statistic</h3>
      <div class="statistic__items">
        <div class="statistic__item">
          <p class="statistic__item_num">53,6K</p>
          <p class="statistic__item_text">UPDATED ITEMS IN THE STEAM MARKET IN THE LAST 24 HOURS.</p>
        </div>
        <div class="statistic__item">
          <p class="statistic__item_num">299,2K</p>
          <p class="statistic__item_text">CURRENTLY, MARKET ITEMS ARE TRACKED AND UPDATED DAILY.</p>
        </div>
        <div class="statistic__item">
          <p class="statistic__item_num">$2,8KK</p>
          <p class="statistic__item_text">WAS SPENDED BY USERS ON THE STEAM MARKET SO PERIOD.</p>
        </div>
        <div class="statistic__item">
          <p class="statistic__item_num">$3,4KK</p>
          <p class="statistic__item_text">CONNECTED PURCHASES AND SALES IN THE STEAM SHOPPING AREA.</p>
        </div>
      </div>
    </div>
  </div>
  

    <div class="skins pt-36" id="skins">
      <div class="container">
        <h3 class="title">The most popular skins</h3>
        <div class="skins__buttons">
          <button class="skins__btn uppercase" 
            v-for="item, i in btns" 
            :class="currentIndex === i ? 'active' : ''"
            @click="clickOnSwitchBtn(item.name, i)" 
            :key="i" >
            {{item.name}}
          </button>
        </div>
      </div>

      <div class="skins__body flex flex-wrap justify-between">
        <button class="skins__arrow_btn skins__prev" @click="prev" :disabled="startSlicing === 0">
          <svg width="42" height="24" viewBox="0 0 42 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.7396 10.6248H5.8829L14.1325 2.37519L12.188 0.430683L0.618801 11.9998L12.188 23.569L14.1325 21.6245L5.88273 13.3748H41.7396V10.6248Z" fill="white"/>
          </svg>
        </button>
        <div class="skins__item mt-6" v-for="item in $store.state.itemsPagination" :key="item.id">
          <p class="skins__item_price">
            <img src="@/assets/img/steam-icon.png" alt="">
            ${{item.price}}
          </p>
          <img class="skins__item_img" :src="item.img" alt="">
          <p class="skins__item_name">{{item.name}}</p>
        </div>
        <button class="skins__arrow_btn skins__next" @click="next" :disabled="startSlicing === this.$store.state.sortedItems.length - 3">
          <svg width="42" height="24" viewBox="0 0 42 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.7396 10.6248H5.8829L14.1325 2.37519L12.188 0.430683L0.618801 11.9998L12.188 23.569L14.1325 21.6245L5.88273 13.3748H41.7396V10.6248Z" fill="white"/>
          </svg>
        </button>
      </div>
    </div>
  
    <div class="question" id="contacts">
      <img class="question__blur" src="@/assets/img/blur.png" alt="">
      <h3 class="title question__title">DO YOU HAVE A QUESTION?</h3>
      <div class="question__circle"></div>
      <a :href="'mailto:support@' + $store.state.domainName +'.com'"><button class="question__btn">Send</button></a>
      
      <p class="question__subtitle">If you have a question, you can send us an mail. We will reply as quickly as we can. This includes issues related to cooperation, problems with the work of the site, advertising.</p>
    </div>

    <div class="why container">
      <div class="why__lef">
        <h3 class="title">Why {{$store.state.domainName}}</h3>
        <p class="why__subtitle"> 
          The skins market is getting stronger every year. The steam marketplace is by far the worst place to sell skins because you can't put a price higher than $2,000, so there are many off-site marketplaces. SKINCHAR solves the problem of assessing your skins, we give the most accurate assessment in any currency in the world. You can choose 3 valuation modes and skins, from fast sale to the highest price on the market. SKINCHAR analyzes all sites outside of Steam, and our employees are very avid traders. SKINCHAR is developed by a team of traders who are tired of inaccurate pricing of skins and losing money on it, our databases are updated every millisecond, so thanks to us you can buy and sell skins at a good price.
          <br><br>
          Рынок скинов становится могущественнее с каждым годом. Торговая площадка стим отнюдь худшее место для продажи скинов, ибо нельзя поставить цену больше 2000 долларов, поэтому существует много маркетплейсов вне площадки. СКИНЧАР решает проблему оценки ваших скинов, мы даем максимально точную оценку в любой валюте мира. Вы можете выбрать 3 режима оценки и скинов: от быстрой продажи до самой большой цены на рынке. СКИНЧАР анализирует все сайты вне Стима, так же наши сотрудники являются очень заядлыми трейдерами. СКИНЧАР разработан командой трейдеров, уставших от неточной оценки скинов и теряющих на этом деньги, наши базы данных обновляются каждую миллисекунду, значит благодаря нам вы можете покупать и продавать скины по хорошей цене.
          <br><br>
          Der Markt für Skins wird von Jahr zu Jahr stärker. Der Steam-Marktplatz ist bei weitem der schlechteste Ort, um Skins zu verkaufen, da Sie keinen höheren Preis als 2.000 US-Dollar festlegen können. Daher gibt es viele Off-Site-Marktplätze. SKINCHAR löst das Problem der Bewertung Ihrer Skins, wir geben die genaueste Bewertung in jeder Währung der Welt. Sie können 3 Bewertungsmodi und Skins wählen, vom schnellen Verkauf bis zum höchsten Preis auf dem Markt. SKINCHAR analysiert alle Seiten außerhalb von Steam und unsere Mitarbeiter sind sehr eifrige Händler. SKINCHAR wird von einem Team von Händlern entwickelt, die es leid sind, ungenaue Preise für Skins zu vergeben und damit Geld zu verlieren. Unsere Datenbanken werden jede Millisekunde aktualisiert, sodass Sie dank uns Skins zu einem guten Preis kaufen und verkaufen können.
          <br><br>
          El mercado de las pieles se fortalece cada año. El mercado de vapor es, con mucho, el peor lugar para vender máscaras porque no se puede poner un precio superior a $ 2,000, por lo que hay muchos mercados fuera del sitio. SKINCHAR resuelve el problema de evaluar tus skins, damos la evaluación más precisa en cualquier moneda del mundo. Puedes elegir 3 modos de evaluación y skins, desde venta rápida hasta el precio más alto del mercado. SKINCHAR analiza todos los sitios fuera de Steam y nuestros empleados son comerciantes muy ávidos. SKINCHAR está desarrollado por un equipo de comerciantes que están cansado los precios inexactos de las máscaras y de perder dinero. Nuestras bases de datos se actualizan cada milisegundo, por lo que gracias a nosotros puede comprar y vender máscaras a un buen precio.
          <br><br>
          皮革市场每年都在增长。蒸汽市场是迄今为止销售皮肤最差的地方，因为你不能把价格高于 2,000 美元，所以有很多场外市场。 SKINCHAR 解决了评估您的皮肤的问题，我们以世界上任何货币提供最准确的评估。您可以选择 3 种评估模式和皮肤，从快速销售到市场上的最高价格。 SKINCHAR 分析 Steam 以外的所有网站，我们的员工是非常狂热的交易者。 SKINCHAR 是由一群厌倦了皮肤定价不准确并因此而蒙受损失的交易者开发的，我们的数据库每毫秒更新一次，因此感谢我们，您可以以优惠的价格买卖皮肤。
        </p>
      </div>
      <img src="@/assets/img/char.png" alt="" class="why__img">
    </div>

    <div @click="clickOnModal" class="modal__body" :class="$store.state.openModal === true ? 'active' : ''">
      <div class="modal flex flex-col items-center" :class="$store.state.openModal === true ? 'active' : ''">
        <h4 class="text-8xl text-white font-bold italic pt-8">Ooops!</h4>
        <p class="text-4xl text-center text-white pt-20 leading-normal	">Unfortunately, the functionality that you want to use is available only to authorized users. You can go through authorization follow the link below.</p>
        <button class="login__btn modal__btn mt-32" href="">
          <svg width="37" height="44" viewBox="0 0 37 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.25 8.25C18.7758 8.25 15.1306 11.8305 15.011 16.2773L9.96475 23.4905C9.58513 23.416 9.19935 23.3773 8.8125 23.375C7.509 23.375 6.30175 23.7847 5.30212 24.475L-1.5 21.7869V29.1803L2.76938 30.8688C3.06867 32.2497 3.83121 33.4868 4.93044 34.3747C6.02967 35.2626 7.39948 35.7479 8.8125 35.75C10.2583 35.7473 11.6575 35.2383 12.7672 34.3115C13.8769 33.3846 14.627 32.0985 14.8873 30.6762L22.8251 24.728C22.9667 24.7362 23.107 24.75 23.25 24.75C27.7999 24.75 31.5 21.0499 31.5 16.5C31.5 11.9501 27.7999 8.25 23.25 8.25V8.25ZM23.25 11C26.2833 11 28.75 13.4667 28.75 16.5C28.75 19.5333 26.2833 22 23.25 22C20.2167 22 17.75 19.5333 17.75 16.5C17.75 13.4667 20.2167 11 23.25 11ZM23.25 12.375C22.156 12.375 21.1068 12.8096 20.3332 13.5832C19.5596 14.3568 19.125 15.406 19.125 16.5C19.125 17.594 19.5596 18.6432 20.3332 19.4168C21.1068 20.1904 22.156 20.625 23.25 20.625C24.344 20.625 25.3932 20.1904 26.1668 19.4168C26.9404 18.6432 27.375 17.594 27.375 16.5C27.375 15.406 26.9404 14.3568 26.1668 13.5832C25.3932 12.8096 24.344 12.375 23.25 12.375ZM8.8125 24.75C11.4662 24.75 13.625 26.9088 13.625 29.5625C13.625 32.2162 11.4662 34.375 8.8125 34.375C7.88423 34.3733 6.97625 34.1032 6.19801 33.5972C5.41976 33.0912 4.80445 32.371 4.42625 31.5233L7.5475 32.758C7.96275 32.923 8.389 33.0028 8.80975 33.0028C9.61084 33.0046 10.3874 32.7265 11.0053 32.2167C11.6232 31.7068 12.0436 30.9972 12.194 30.2103C12.3443 29.4235 12.2151 28.6088 11.8286 27.9071C11.4422 27.2054 10.8228 26.6606 10.0775 26.367L6.94662 25.1254C7.53719 24.8766 8.17169 24.749 8.8125 24.75Z" fill="white"/>
          </svg>
          <p>Sign In</p>          
        </button>
        <svg @click="$store.state.openModal = false" class="modal__close" width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.11601 7.99998L2.55801 12.558L3.44201 13.442L8.00001 8.88398L12.558 13.442L13.442 12.558L8.88401 7.99998L13.442 3.44198L12.558 2.55798L8.00001 7.11598L3.44201 2.55798L2.55801 3.44198L7.11601 7.99998Z" fill="white"/>
        </svg>
      </div>
    </div>

</template>

<script>

  export default {
    data() {
      return {
        btns: [{name: 'csgo', id: 0}, {name: 'dota', id: 1}, {name: 'tf2', id: 2},],
        currentIndex: 0,
        startSlicing: 0,
      }
    },
    methods: {
      clickOnSwitchBtn(type, i) {
        this.startSlicing = 0
        this.$store.commit('SORT__ITEMS', type)
        this.$store.commit('PAGINATION', this.startSlicing)
        this.currentIndex = i
      },
      next(){
        if (this.startSlicing < this.$store.state.sortedItems.length - 3) {
          this.startSlicing += 3
          console.log(this.$store.state.sortedItems.length);
          this.$store.commit('PAGINATION', this.startSlicing)
        }
      },
      prev() {
        if (this.startSlicing > 0) {
          this.startSlicing -= 3
          this.$store.commit('PAGINATION', this.startSlicing)        
        }
      },
      clickOnModal(e) {
        if (e.target.classList.contains('modal__body')) {
          this.$store.state.openModal = false
        }
      }
    },
    created() {
      this.$store.commit('SORT__ITEMS', 'csgo')
      this.$store.commit('PAGINATION', 0)
    },
    mounted() {
      document.title = this.$store.state.domainName + ' — The best inventory checker'
    }
  }
</script>

<style lang="scss" scoped>
.modal__body {
  background: rgba(0, 0, 0, 0.0);
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .5s;
  &.active {
    z-index: 100;
    background: rgba(0, 0, 0, 0.92);
    transition: .5s;
  }
  .modal {
    right: 150rem;
    transition: .5s;
    &.active {
      right: 0;
      transition: .5s;
    }
    border: .5rem solid #137aef21;
    background: linear-gradient(180deg, #1F1F1F 0%, #282828 55.71%, #1F1F1F 100%);
    width: 70rem;
    height: 40rem;
    border-radius: 1.5rem;
    h4 {
      color: #1378EF;
    }
    position: relative;
    .modal__close {
      position: absolute;
      top: 2rem; 
      right: 2rem;
      height: 2.5rem;
      width: 2.5rem;
      cursor: pointer;
      transition: .75s;
      &:hover {
        transform: rotate(360deg);
        transition: .75s;
        path {
          fill: #1378EF;
        }
      }
    }
  }
  .modal__btn {
  width: 15rem;
  color:white;
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
}
.end {
  margin-bottom: 5rem;
}
header{
  overflow: hidden;
}
main {
  padding-top: 3rem;
  min-height: 77rem;
  h1 {
    font-weight: 700;
    font-size: 7rem;
    line-height: 116%;
    max-width: 77rem;
    span {
      color: #1478ED;
    }
  }
}
.header__hr {
  width: 175rem;
  margin: 0 auto;
  margin-top: 4rem;
  opacity: .2;
}
.trade__url {
  align-items: center;
}
.trade__url_text {
  color: #1478ED;
}
input {
  background: #1F1F1F;
  border: .1rem solid white;
  border-radius: 1.5rem;
  width: 53rem;
  height: 5.5rem;
  outline: none;
  padding: 0 2rem;
  transition: .5s;
  &:focus {
    border: .1rem solid #1478ED;
  }
  &::placeholder {
    color: gray;
  }
}
.start__btn {
  height: 5.5rem;
  font-size: 2rem;
}
.faq {

  z-index: 20;
  position: fixed;
  width: 100%;
  bottom: 0;
  background: #1478ED;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 1.8rem;
  }
  padding: 2rem 15rem;
}
.main__left {
  min-width: 70rem;
}
.main__right {
  position: relative;
  .main__right_ball {
    top: 0;
    width: 50rem;
    right: 0;
    position: absolute;
    animation-duration: 400s;
    animation-name: rotation;
  }
  .main__right_awp-black {
    position: absolute;
    top: -25rem;
    left: -20rem;
    min-width: 118rem;
  }
  .main__right_awp {
    position: absolute;
    top: -24rem;
    left: -19.5rem;
    min-width: 118rem;
    animation-duration: 1.3s;
    animation-name: black-to-blue;
  }
}
.statistic{
  .statistic__items {
    padding-top: 4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 2rem;
    .statistic__item {
      background: rgba(24, 24, 24, 0.59);
      width: 65rem;
      height: 16rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      padding: 0 3.5rem;
    }
    .statistic__item_num {
      font-weight: 700;
      font-size: 4.5rem;
      line-height: 170%;
      color: #1378EF;
    }
    .statistic__item_text {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 170%;
      color: white;
      text-align: center;
    }
  }
}
.skins__body {
  margin: 0 auto;
  display: flex;
  width: 160rem;
  align-items: center;
  z-index: 2;
}
.skins__item {
  z-index: 2;
  width: 42rem;
  height: 34.1rem;
  background: rgba(24, 24, 24, 0.59);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: .3s;
  &:hover {
    background: #121212;
    .skins__item_img {
      transition: .3s;
      transform: rotate(5deg);
    }
    
  }
  .skins__item_img {
    transition: .3s;
    position: absolute;
    width: 30rem;
    top: 1rem;
  }
  .skins__item_price {
    display: flex;
    align-items: center;
    color: white;
    font-size: 2rem;
    gap: 1rem;
    img {
      width: 7.2rem;
    }
  }
  .skins__item_name {
    color: white;
    font-size: 2rem;
    text-align: center;
    padding-top: 22rem;
    max-width: 35rem;
    line-height: 150%;
  }
}
.skins__buttons {
  z-index: 2;
  margin: 2rem 0 1rem 0;
  display: flex;
  gap: 3rem;
}
.skins__btn {
  z-index: 2;
  background: #1B1B1B;
  width: 12rem;
  height: 4rem;
  color: white;
  font-weight: 700;
  font-size: 1.8rem;
  &:hover {
    background: #1378EF;
    transition: .3s;
  }
  &.active {
    background: #1378EF;
  }
}
.skins__arrow_btn {
  position: relative;
  width: 7rem;
  height: 7rem;
  background: #1378EF;
  border-radius: 50%;
  svg {
    width: 4.4rem;
    position: absolute;
  }
}
.skins__prev {
  margin-right: 4rem;
  svg {
    top: 2rem;
    left: 4rem;
    transition: .3s;
  }
  &:hover {
      background: #0f5aaf;
      transition: .3s;
      svg {
        transition: .3s;
        left: 1.5rem;
      }
  }
  &:disabled {
    background: #1B1B1B;
  }
}
.skins__next {
  margin-left: 4rem;
  svg {
    top: 2rem;
    right: 4rem;
    transform: rotate(180deg);
    transition: .3s;
  }
  &:hover {
      background: #0f5aaf;
      transition: .3s;
      svg {
        transition: .3s;
        right: 1.3rem;
      }
  }
  &:disabled {
    background: #1B1B1B;
  }
}
.question {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 10rem 0;
  .question__btn {
    position: relative;
    color: white;
    font-size: 1.6rem;
    width: 12rem;
    height: 4rem;
    z-index: 2;
    margin-top: 5.5rem;
    border: .1rem solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.5rem;
    overflow: hidden;
    &:hover::before {
      width: 100%;
      transition: .5s;
    }
    &:hover {
      transition: .5s;
      color: #1378EF;
    }
    &::before {
      z-index: -1;
      content: '';
      position: absolute;
      width: 0;
      height: 100%;
      left: 0;
      bottom: 0;
      background: white;
    }
  }
}
.question__title {
  max-width: 66rem;
  text-align: center;
  z-index: 2;
}
.question__circle {
  width: 26rem;
  height: 26rem;
  border-radius: 50%;
  background: #1378EF;
  position: absolute;
  top: 5rem;
}
.question__subtitle {
  z-index: 2;
  margin-top: 12rem;
  font-size: 1.6rem;
  line-height: 150%;
  text-align: center;
  color: #FFFFFF;
  max-width: 58rem;
}
.question__blur {
  position: absolute;
  z-index: -1;
  top: -50rem;
  opacity: .5;
}
.why {
  display: flex;
}
.why__lef {
}
.title {
}
.why__subtitle {
  padding-top: 4rem;
  padding-right: 3rem;
  font-size: 1.2rem;
  line-height: 150%;
  text-align: justify;
  color: #4E4E4E;
}
.why__img {
  height: 70rem;
}




@keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(3600deg);
  }
}
@keyframes black-to-blue {
  0% {
    top: -100rem;
  }
  30% {
    top: -5rem;
    transform: rotate(30deg);
  }
  70% {
    top: -30rem;
    transform: rotate(-10deg);
    left: -30rem;
  }
  100% {
    top: -24rem;
  }
}
</style>