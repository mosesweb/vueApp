<template>
    <v-layout>
        <v-flex xs6 offset-xs3>
            <panel title="VocabularyLists">
                <v-btn
                :to="{name: 'vocabularylist-create'}"
                class="cyan accent-2"
                slot="action"
                light
                small
                fab
                absolute
                right
                middle
                >
                <v-icon>add</v-icon>
                </v-btn>
                <div class="vocabularylist">
                  <v-layout>
                    <v-flex xs6>
                      <ListTitle :listtitle="vocabularylist.title"></ListTitle>
                      <div class="vocabularylist-mainText">{{vocabularylist.mainText}}</div>
                      <div class="vocabularylist-difficulty">{{vocabularylist.difficulty}}</div>
                      {{vocabularylist}}
                    </v-flex>
                    <v-flex xs6>
                      <!-- <img class="difficulty-image" :src="vocabularylist.difficultyImageUrl" /> -->
                    </v-flex>
                  </v-layout>
                </div>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import ListTitle from './ListTitle'

import VocabularyListsService from '@/services/VocabularyListsService'

export default {
  components: {
    Panel,
    ListTitle
  },
  data () {
    return {
      vocabularylist: {}
    }
  },
  async mounted () {
    // do a request to the backend for all the vocabularylists
    const vocabularyListId = this.$store.state.route.params.vocabularyListId
    this.vocabularylist = (await VocabularyListsService.show(vocabularyListId)).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vocabularylist {
  padding: 20px;
}
.vocabularylist-title {
  font-size: 30px;
}
.vocabularylist-mainText {
 font-size: 16px;
}
.vocabularylist-difficulty {
 font-size: 16px;
}
.difficulty-image
{
  width: 80%;
  margin: 0 auto;
}
</style>
