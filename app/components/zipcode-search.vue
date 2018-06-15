<template>
  <div>
    <h1>Sample</h1>
    <div class="zipcode">
      <input type="text" v-model="zipcode">
      <button @click='search'>
        | 検索
      </button>
      <p>
        {{zipcode}}の住所は
        <br>
        {{addre1}}
        <br>
        {{addre2}}
        <br>
        {{addre3}}
      </p>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return {
      zipcode: '',
      addre1: '',
      addre2: '',
      addre3: ''
    }
  },
  methods:{
    search: function(){
      this.$jsonp('http://zipcloud.ibsnet.co.jp/api/search', {zipcode: this.zipcode})
        .then(res => {
          // Success.
          this.addre1 = res.results[0].address1
          this.addre2 = res.results[0].address2
          this.addre3 = res.results[0].address3
        }).catch(err => {
          // Failed.
        })
    }
  }
}
</script>
<style>
</style>
