<template>
  <div class="root">
    <div class="join-us">
      <div class="join-us-cn">加入我们</div>
      <div class="join-us-en">JOIN US</div>
    </div>
    <div class="form">
      <div class="inputs">
        <input class="input" placeholder="姓名" v-model="inputs.name" />
        <input class="input" placeholder="手机" v-model="inputs.phone" />
        <input class="input" placeholder="年级" v-model="inputs.year" />
        <!-- <input class="input" placeholder="学院" v-model="inputs.school" /> -->
        <select class="input select" v-model="inputs.school">
          <option disabled selected="selected" value="学院">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学院</option>
          <option value="信息与通信工程学院">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信息与通信工程学院</option>
          <option value="电子工程学院">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电子工程学院</option>
          <option value="计算机学院">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;计算机学院</option>
          <option value="自动化学院">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自动化学院</option>
          <option value="软件学院">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;软件学院</option>
          <option value="数字媒体与设计艺术学院">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数字媒体与设计艺术学院</option>
          <option value="现代邮政学院">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现代邮政学院</option>
          <option value="网络空间安全学院">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网络空间安全学院</option>
          <option value="光电信息学院">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;光电信息学院</option>
          <option value="理学院">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;理学院</option>
          <option value="经济管理学院">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经济管理学院</option>
          <option value="公共管理学院">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公共管理学院</option>
          <option value="人文学院">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人文学院</option>
          <option value="马克思主义学院">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;马克思主义学院</option>
          <option value="国际学院">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;国际学院</option>
          <option value="网络教育学院">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网络教育学院</option>
          <option value="民族教育学院">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;民族教育学院</option>
          <option value="网络技术研究院">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网络技术研究院</option>
          <option value="信息光子学与光通信研究院">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信息光子学与光通信研究院</option>
          <option value="感知技术与产业研究院">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;感知技术与产业研究院</option>
        </select>
      </div>
      <div class="department">
        <span class="title">部门</span>
        <span @click="()=>OnJobClick(index)" class="job" :class="{'job-sel':item.selected}" v-for="(item,index) in jobList" :key="index">{{item.title}}</span>
      </div>
      <button class="enroll" type="button" @click="()=>handleSubmit()">立即报名</button>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    if (window.location.hash == '#joinus') {
      var anchor = this.$el
      window.scrollTo(0,anchor.offsetTop)
    }
  },
  methods: {
    OnJobClick(index) {
      this.jobList[index].selected ^= 1;
    },
    handleSubmit() {
      localStorage.setItem(`byr-inputs`, JSON.stringify(this.inputs));
      localStorage.setItem(`byr-department`, JSON.stringify(this.jobList));
      localStorage.setItem(`byr-trans-session`, 'true');
      // window.location.href = "/joinus";
      window.location.href = "https://wj.qq.com/s/2711310/d62d";
    }
  },
  data: function() {
    return {
      inputs: {
        name: '',
        phone: '',
        year: '',
        school: '学院'
      },
    };
  },
  props: {
    jobList: {
      type: Array,
      default: () => {
        return [
          { title: "技术方向-技术组", selected: true },
          { title: "UI方向-技术组", selected: false },
          { title: "美工组", selected: false },
          { title: "文宣组", selected: false },
          { title: "站务组", selected: false },
          { title: "新媒体组", selected: false },
          { title: "产品运营组", selected: true },
        ];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$theme: #66ccff;
$author: jasonwu;
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .join-us {
    padding: 0.7rem 1rem;
    border: {
      top: 0.3rem solid $theme;
      bottom: 0.3rem solid $theme;
    }
    .join-us-cn {
      font-size: 1.2rem;
    }
    .join-us-en {
      font-size: 1.1rem;
      font-weight: 500;
      color: #666;
    }
  }
  .form {
    margin-top: 3.1rem;
    width: 28rem;
    .inputs {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .input {
        width: 11.8rem;
        margin: 0.2rem 0;
        height: 3rem;
        line-height: 150%;
        padding-left: 2rem;
        font-size: 13px;
        background-color: #f8f8f8;
        border: none;
        outline: none;
        transition: all 0.25s;
        &:focus{
          background-color: #f3f3f3;
        }
        &.select{
          width: 13.8rem;
        }
      }
    }
    .department {
      padding: 0.95rem 0;
      .title {
        font-size: 0.85rem;
        margin: 25px 1.55rem 0 1.85rem;
        color: #666;
        float: left;
      }
      .job {
        font-size: 13px;
        padding: 0.55rem 0.55rem;
        margin: 0.2em 0.31rem;
        transition: all 0.1s;
        display: inline-block;
        border: 1px solid transparent;
      }
      .job:hover {
        cursor: pointer;
      }
      .job-sel {
        background-color: #f8f8f8;
        border: 1px solid $theme;
      }
    }
    .enroll {
      border: none;
      background-color: #66ccff;
      width: 100%;
      height: 3rem;
      color: #fff;
      font-size: 0.85rem;
      outline: none;
      transition: all 0.25s;
      &:hover {
        background-color: #5fbbe9;
      }
      &:active {
        background-color: #57acd6;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .root {
    margin-top: 130px;
    .form {
      width: auto;
      text-align: center;
      .inputs {
        .input {
          // width: 80%;
          margin: 0 auto;
        }
      }
      .department {
        .title {
          margin: 12px 0 0 12px;
        }
      }
    }
  }
}
</style>

