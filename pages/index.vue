<template>
  <div>
    <div class="page">
      <section class="header">
        <a href="/" class="logo">
          <img src="logo.png" />
        </a>
        <nav class="nav">
          <ul>
            <li v-for="nav in navs" :key="nav.title">
              <a :href="nav.url">{{nav.title}}</a>
            </li>
          </ul>
        </nav>
      </section>

      <intro-section />
      <service />
      <QuoteByrbbs/>
      <enroll id="joinus" />
      <groups-intro id="groups" />
    </div>
    <Footer />
    <footer-article />
  </div>
</template>

<script>
import FooterArticle from "~/components/FooterArticle.vue";
import GroupsIntro from "~/components/GroupsIntro.vue";
import Swiper from "~/components/Swiper";
import SwiperItem from "~/components/SwiperItem";
import Btn from "~/components/Btn";
import IntroSection from "~/components/IntroSection.vue";
import Enroll from "~/components/Enroll.vue";
import Footer from "~/components/Footer.vue";
import Service from "~/components/Service.vue";
import QuoteByrbbs from "~/components/QuoteByrbbs.vue";
import {navs} from "~/data/intro.json";
export default {
  components: {
    Swiper,
    SwiperItem,
    Btn,
    IntroSection,
    FooterArticle,
    GroupsIntro,
    Enroll,
    Footer,
    Service,
    QuoteByrbbs
  },
  data() {
    return {
      navs
    };
  }
};
</script>

<style lang="stylus" scoped>
$width-screen = 900px;
$color-grey-middle = #7d7d7d;

a-clear() {
  text-decoration: none;
}

ul-clear() {
  padding: 0;
}

li-clear() {
  display: inline-block;
}

.page {
  max-width: $width-screen;
  margin: 0 auto;
  font-size: 14px;
}

.header {
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  a.logo {
    img {
      height: 40px;
      margin-top 12px
    }
  }

  .nav {
    position relative
    z-index 10
    flex-grow: 1;
    ul-clear();
    text-align: right;
    line-height: 40px;

    li {
      li-clear();
      margin-left: 20px;

      a {
        a-clear();
        color: $color-grey-middle;
      }
    }
  }
}

section.intro {
  .swiper {
    width: 200px;
    height: 200px;
  }
}

@media screen and (max-width: 600px) {
  .header {
    flex-direction: column;
    text-align center
    .nav {
      text-align center
      ul {
        padding 0
        li {
          margin 0 10px
        }
      }
        
    }
  }
}
</style>

