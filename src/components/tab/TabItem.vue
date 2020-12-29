<template>
  <div class="tabItem" @click="linkToHandle" :class="{active:isActive}">
    <div v-if="!isActive"><slot name="tabImg"></slot></div>
    <div v-else><slot name="tabImgActive"></slot></div>
    <slot name="tabText"></slot>
  </div>

</template>

<script>
  export default {
    name: "tab-item",
    props:['link'],
    methods:{
      linkToHandle(){
        this.$router.push(this.link);
      }
    },
    computed:{
      isActive(){
        console.log(this.$route.path);
        return this.$route.path.indexOf(this.link) !== -1
      }
    }
  }
</script>

<style scoped>
  .tabItem{
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .active{
    color: blue;
  }

</style>