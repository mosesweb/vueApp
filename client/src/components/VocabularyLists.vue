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

              <div class="vocabularylist" v-for="vocabularylist in vocabularylists"
                :key="vocabularylist.id">
                <v-layout>
                  <v-flex xs6>
                    <div class="vocabularylist-title">{{vocabularylist.title}}</div>
                    <div class="vocabularylist-mainText">{{vocabularylist.mainText}}</div>
                    <div class="vocabularylist-difficulty">{{vocabularylist.difficulty}}</div>
                  </v-flex>
                  <v-flex xs6>
                    <!-- <img class="difficulty-image" :src="vocabularylist.difficultyImageUrl" /> -->
                  </v-flex>
                    <v-btn
                    dark
                    class="cyan"
                    :to="{name: 'vocabularylist', params: {vocabularyListId: vocabularylist.id}}"
                    >
                    View vocabularylist {{vocabularylist.id}}
                    </v-btn>
                </v-layout>
              </div>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import VocabularyListsService from '@/services/VocabularyListsService'

export default {
  components: {
    Panel
  },
  data () {
    return {
      vocabularylists: null
    }
  },
  async mounted () {
    // do a request to the backend for all the vocabularylists
    this.vocabularylists = (await VocabularyListsService.index()).data
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
