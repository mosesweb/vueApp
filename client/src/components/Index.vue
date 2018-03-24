<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Home">
          <p>We have content!</p>
      </panel>
      <PanelTest thetitle="Testing..">
          <p>We have content here as well!</p>
           <v-text-field
          label="Json search"
          v-model="searchString"
        ></v-text-field>
        <v-btn @click="searchOnWord">Search</v-btn>
        <div class="json-status">{{this.status}}</div>
        <div class="json-result">{{this.data}}</div>
      </PanelTest>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import PanelTest from '@/components/PanelTest'
import JapaneseDictonarySearch from '@/services/JapaneseDictonarySearch'

export default {
  data () {
    return {
      searchString: null,
      status: null,
      data: null
    }
  },
  methods: {
    async searchOnWord () {
      this.status = 'loading..'
      this.data = await (JapaneseDictonarySearch.getResult(this.searchString))
    }
  },
  components: {
    Panel,
    PanelTest
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
