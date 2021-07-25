<template>
  <section class="header">
    <a href="/" class="logo">
      <img src="../assets/image/logo.png" />
    </a>
    <nav>
      <ul>
        <li v-for="nav in navs" :key="nav.title">
          <a target="_blank" :href="nav.url">{{ nav.title }}</a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
import { navs } from "../data/intro.json";

export default {
  data() {
    return {
      navs,
    };
  },
};
</script>

<style lang="less">
.header {
  display: flex;
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  img {
    height: 40px;
    margin-top: 12px;
  }

  nav {
    position: relative;
    text-align: right;
    line-height: 40px;

    li {
      list-style-type: none;
      display: inline-block;
      margin-left: 20px;

      a {
        text-decoration: none;
        color: #7d7d7d;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .header {
    flex-direction: column;
    text-align: center;
    nav{
        text-align: center;
        ul{
            padding: 0;
            li{
                margin: 0 10px;
            }
        }
    }
  }
}
</style>