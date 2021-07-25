<template>
  <section class="bbs">
    <el-carousel height="270px"  indicator-position="none">
      <el-carousel-item v-for="(quote, index) in quotes" :key="index">
        <div class="panel">
          <div class="quote">{{ quote.content }}</div>
          <div class="from">—— {{ quote.from }}</div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
import { quotes } from "../data/intro.json";
export default {
  data() {
    return {
      quotes,
    };
  },
};
</script>

<style lang="less">
.bbs {
  width: 70%;
  margin: 32px auto 0 auto;

  .panel {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    position: relative;

    .quote {
      font-size: 1.15rem;
      letter-spacing: 0.12rem;
    }

    .from {
      margin-top: 20px;
      font-size: 0.9rem;
      text-align: right;
      font-style: italic;
    }
  }
}
</style>