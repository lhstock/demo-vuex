<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li
        v-for="(nav,index) in arrNav"
        :key="index"
      >
          <!-- :href="nav.Link" -->
        <p @click="handleClick(index)">

          vuex- {{nav.Content}}
        </p>
      </li>
    </ul>

    <div>
      total:{{totalNav}}
    </div>
    <wrapper v-if="isClick" class="testWrapper">
    </wrapper>

  </div>
</template>

<script>
import wrapper from './wrapper.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  watch: {
  },
  components: {
    wrapper
  },
  computed: {
    ...mapGetters({
      arrNav: 'arrNavigation',
      totalNav: 'totalNav'
    }),
    totalOfNav () {
      return this.$store.state.totalOfClick
    }

  },
  // computed: {
  //   arrNav () {
  //     return this.$store.getters.arrNavigation
  //   },
  //   totalNav () {
  //     return this.$store.getters.totalNav
  //   }
  // },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isClick: false

    }
  },
  created () {
    let _this = this
    console.log('debug', this)
    setTimeout(() => {
      let testNav = [
        { link: 'https://www.baidu.com', content: '百度' },
        { link: 'http://bai.com', content: '百' }
      ]
      let arrNav = testNav
      _this.$store.dispatch('loadNavigation', arrNav)
    }, 1000 * 1)
  },
  methods: {
    ...mapActions(['clickNavigation']),
    handleClick (index) {
      this.isClick = true
      this.clickNavigation(index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.testWrapper{
  display: flex;

}

</style>
