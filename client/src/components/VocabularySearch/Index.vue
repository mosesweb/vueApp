<template>
  <v-layout>
    <v-flex xs12 ml-3>
      <Panel title="Search">
          <p>We have content here as well!</p>
        <form v-on:submit.prevent v-on:keyup.enter="searchOnWord">
         <v-text-field
        label="Json search"
        v-model="searchString"
        ></v-text-field>
        <v-btn id="searchbtn" @click="searchOnWord">Search</v-btn>
        </form>
        <div class="json-status">{{this.status}}</div>
        <div class="json-result">{{this.data}}</div>
      </Panel>
    <ResultRow :items="this.items">
    </ResultRow>
    </v-flex>
  </v-layout>
</template>

<script>
/* eslint-disable */
import Panel from '@/components/Panel'
import ResultRow from './ResultRow'

import JapaneseDictonarySearch from '@/services/JapaneseDictonarySearch'
import VocabularyListsServices from '@/services/VocabularyListsService'

export default {
  data () {
    return {
      sortCol: 'fat',
      searchString: null,
      status: null,
      data: null,
      items: [
        {
          common: 'yes',
          name: 'Frozen Yogurt',
          calories: 159,
          kanji: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
      ]
    }
  },
  methods: {
    addWord: async function(data) {
      alert(data.kanji + ' got the id: ' + this.vocabularylistId) // pass through
      try {
        await VocabularyListsServices.addWord(data.kanji, this.vocabularylistId)
      } catch (err) {
        console.log(err)
      }
    },
    fixSomething () {
      console.log('hej')
    },
    loopThrough(arr) {
        var l = 0
        while ( console.log(l)
            , ++l
            , l < arr.length) {}
    },
    async searchOnWord () {
      this.fixSomething()
      this.status = 'loading..'
      const searchResultItems = (await (JapaneseDictonarySearch.getResult(this.searchString))).data
          var l = 0
          var j = 0
          this.items = []

          while ( 
               this.items.push({
                common: searchResultItems.data[l].is_common == true ? 'yes' : 'no',
                name: searchResultItems.data[l].japanese.join(','),
                calories: searchResultItems.data[l].senses[0].english_definitions.join(','),
                kanji: searchResultItems.data[l].japanese[0].word,
                carbs: searchResultItems.data[l].japanese[0].reading,
                protein: 4.0,
                iron: '1%'})
              , ++l
              , l < searchResultItems.data.length) {
              }
     this.status = ''
     this.items    
    }
  },
  components: {
    Panel,
    ResultRow
  },
  props: [
    'title', 'vocabularylistId'
  ]
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
