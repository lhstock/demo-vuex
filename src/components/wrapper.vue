<template>
  <div>
    <iframe :src="activeUrl"></iframe>
    <div class="rightWrapper">
      <p>
        统计
        {{totalOfNav}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    totalOfNav () {
      return this.$store.state.totalOfClick
    },
    activeUrl () {
      console.log(this.$store.getters.activeOfUrl)
      return this.$store.getters.activeOfUrl
    }
  }
}
</script>
<style>
iframe{
  flex:1 1 auto;
  height: 400px;
  padding: 0;
  margin: 0;
  display:block;
}
.testWrapper .rightWrapper{
  width: 100px;
  flex:0 0 auto;
}

</style>
