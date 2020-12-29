<template>
  <div class="tab" >
    <!--要添加 tab  的内容只需将 tab-item  复制一份放到下面即可，将路由和图片改变就好-->
    <tab-item link="/home">
      <template v-slot:tabImg><img src="../../assets/tab/profile.png" alt=""></template>
      <template v-slot:tabImgActive><img src="../../assets/tab/profileActive.png" alt=""></template>
      <template v-slot:tabText>首页</template>
    </tab-item>
    <tab-item link="/profile">
      <template v-slot:tabImg><img src="../../assets/tab/profile.png" alt=""></template>
      <template v-slot:tabImgActive><img src="../../assets/tab/profileActive.png" alt=""></template>
      <template v-slot:tabText>我的</template>
    </tab-item>
  </div>
  <router-view></router-view>
</template>

<script>
  import tabItem from './TabItem'
  export default {
    name: "tab",
    components:{
      tabItem
    }
  }
</script>

<style scoped>
  .tab{
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 49px;
    background-color: #999;
  }
 img{
    width: 20px;
  }
</style>