<template>
  <section class="intro">
    <el-carousel height="400px" :interval="0" >
      <el-carousel-item
        v-for="(intro, index) in intros"
        :key="index"
        class="intro-slide"
      >
        <div class="intro-left">
          <div class="intro-left-title">
            {{ intro.title }}
          </div>
          <div
            class="intro-left-desc"
            v-html="'<p>' + intro.content.replace(/<br>/g, '</p><p>') + '</p>'"
          ></div>
        </div>
        <div class="intro-right">
          <img :src="require('../assets/image/' + intro.img)" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
import { intros } from "../data/intro.json";

export default {
  data() {
    return {
      intros,
    };
  },
};
</script>

<style lang="less">
.intro {
  &-slide {
    display: flex;
  }
  &-left {
    display: block;
    width: 27rem;
    margin-top: 7rem;
    text-align: left;
    padding-right: 16px;
    &-title{
        font-size: 1.9rem;
    }
    &-desc {
      width: 80%;
      margin-top: 16px;
      color: #7d7d7d;
    }
  }
  &-right {
    height: 100%;
    flex: 1;
    img {
      height: 380px;
      width: 100%;
      margin-right: 0;
      object-fit: cover;
      border-radius: 70% 30% 70% 30%;
    }
  }
}

@media screen and(max-width:600px) {
  .intro {
    &-slide {
      flex-direction: column-reverse;
      width: 95%;
    }
    &-left {
      margin-top: 10px;
      padding-left: 1.7rem;
      width: auto;
      &-title{
          font-size: 1.7rem;
      }
      &-desc {
          width: 100%;
      }
    }
    &-right{
        height: auto;
        img {
            height: 100px;
        }
    }
  }
}
</style>