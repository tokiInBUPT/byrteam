<template>
  <section class="root">
    <div class="quotes">
      <swiper>
        <swiper-item class="quote" v-for="(item,$index) in quotes" :key="$index" :show="curIdx == $index">
          {{item.content}}
        </swiper-item>
      </swiper>
      <div class="arrows-box">
        <swiper class="from">
          <swiper-item v-for="(item,$index) in quotes" :key="$index" :show="$index == curIdx">
            ——{{item.from}}
          </swiper-item>
        </swiper>
        <swiper-arrows 
          :isFirst="curIdx == 0" 
          :isLast=" curIdx == (quotes.length - 1)" 
          @next="curIdx++" 
          @prev="curIdx--"
          @last="curIdx=(quotes.length - 1)"
          @first="curIdx=0" />
      </div>
    </div>
  </section>
</template>
<script>
import Swiper from "~/components/Swiper";
import SwiperItem from "~/components/SwiperItem";
import SwiperArrows from "~/components/SwiperArrows";
import {quotes} from "~/data/intro.json";
console.log(quotes)
export default {
  components: {
    Swiper,
    SwiperItem,
    SwiperArrows
  },
  data() {
    return {
      curIdx: 0,
      quotes
    };
  }
};
</script>
<style lang="scss" scoped>
$author:jasonwu;
.root {
  margin: 80px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  .quotes {
    width: 32rem;
    position: relative;
    &>.swiper {
      height: 100%;
      margin-bottom: 0.5rem;
    }
    .quote {
      font-size: 1.3rem;
      letter-spacing: 0.03rem;
      text-align: center;
      font-weight: 300;
    }
    .arrows-box {
      height: 3rem;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      &>.swiper{
        width: 100%;
        text-align: right;
        margin-right: 0.5rem;
        margin-top: 0.6rem;
        color: #999;
        font-size: 0.8rem;
        font-weight: 300;
      }
    }
  }
  padding-bottom: 3rem;
}
</style>
