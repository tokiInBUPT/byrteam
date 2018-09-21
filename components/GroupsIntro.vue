<template>
	<section class="GroupsIntro">
		<ul class="groups">
			<li class="group" v-for="(group,index) in groups" :key="index">

				<div class="info">
					<h3>{{ group.name }}</h3>
					<h4>{{ group.name_en }}</h4>
					<p v-html="'<p>'+group.intro.replace(/\<br\>/g,'</p><p>')+'</p>'" :style="'text-align-last:'+(index%2==0)?'left':'right'"></p>
					<ul class="links">
						<li v-for="(link,index) in group.links" :key="index">
							<a target="_blank"  :href="link.url">{{ link.title }}</a>
						</li>
					</ul>
				</div>

				<div class="slideCtn">
					<swiper-arrows 
						class="arrows" 	
						:isFirst="group.slideCurrentIdx == 0" 
						:isLast=" group.slideCurrentIdx == (group.slides.length - 1)" 
						@next="group.slideCurrentIdx++" 
						@prev="group.slideCurrentIdx--"
						@first="group.slideCurrentIdx=0"
						@last="group.slideCurrentIdx = (group.slides.length - 1)" />
					<swiper>
						<swiper-item v-for="(slide,$index) in group.slides" :key="$index" :show="group.slideCurrentIdx == $index">
							<div v-html="'<p>'+slide.text.replace(/\<br\>/g,'</p><p>')+'</p>'"></div>
							<a target="_blank" :href="slide.link">
								<img :src="slide.img" />
							</a>
						</swiper-item>
					</swiper>
				</div>
			</li>
		</ul>
	</section>
</template>


<script>
import Swiper from "~/components/Swiper";
import SwiperItem from "~/components/SwiperItem";
import SwiperArrows from "~/components/SwiperArrows";
import { groups } from "~/data/groups.json";
export default {
  mounted() {
    if (window.location.hash == '#groups') {
      var anchor = this.$el
      window.scrollTo(0,anchor.offsetTop)
    }
  },
  components: {
    Swiper,
    SwiperItem,
    SwiperArrows
  },
  data() {
    return { groups: groups.map(_ => ({ ..._, slideCurrentIdx: 0 })) };
  }
};
</script>

<style lang="stylus" scoped>
.GroupsIntro
	margin-top 200px
	ul.groups
		position relative
		margin 10px 0
		padding 0
		li.group
			display block
			position relative
			height 380px
			box-sizing border-box
			&:nth-child(even)
				.info
					padding 30px 360px 0 0
					text-align right 
					p
						padding-right 0
						padding-left 100px
						text-align-last right
				.slideCtn
					left auto
					right -60px
					text-align left
				&::before
					left auto
					right -100px
					top -150px
			.info
				// border 1px solid #000
				padding 30px 0 0 360px
				text-align left 
				h3, h4
					font-weight normal
				h3
					font-size 20px
					margin 0
				h4
					margin 0.4em 0
					font-size 14px
					color #7d7d7d
				p
					margin 20px 0 28px 0
					padding-right 100px
					text-align justify
					// max-width 400px
				ul
					padding 0
					li
						display inline-block
						a
							text-decoration none
							border 1px solid #49b1ff
							border-radius 9999px
							padding 6px 18px
							color #7d7d7d
							font-size 14px
							margin-right 16px
			.slideCtn
				position absolute
				width 300px
				left -60px
				top 0
				text-align right 
				&::before
					z-index -100
					content ''
					display block
					position absolute
					left -100px
					top -140px
					width 500px
					height 500px
					background-image url('~static/box.png')
					background-size contain
					background-repeat no-repeat
					background-position center
				.arrows
					position absolute
					top -40px
					right 0
				img 
					width 100%
					border-radius: 3px
					margin: 10px 0
					max-height: 150px
					object-fit: cover
@media screen and (max-width: 600px)
	.GroupsIntro
		ul.groups
			li.group, li.group:nth-child(even) 
				height auto
				padding-bottom 300px
				margin-left 30px
				margin-right 30px
				.info
					padding 0
					text-align left
					p
						padding-right 0
						padding-left 0
						text-align-last left
					ul
						li
							margin-bottom 18px
				.slideCtn
					left auto
					right auto
					text-align left 
					position relative
					margin 50px -30px 180px 10px
				&::before
					right auto
					top auto 
					left auto
</style>
