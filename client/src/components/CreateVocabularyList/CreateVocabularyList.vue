<template>
<v-layout>
  <v-flex xs12>
  <CurrentWordsInList v-if="this.VocabularyList.id !== null && this.IsCreated" :vocabularylistId="this.VocabularyList.data.id"></CurrentWordsInList>
  <CreateForm v-if="!this.IsCreated"></CreateForm>
  </v-flex>
  <VocabularySearch v-if="this.IsCreated" title="VocabularyList">
  </VocabularySearch>
</v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import CreateForm from './CreateForm'
import CurrentWordsInList from './CurrentWordsInList'
import VocabularySearch from '@/components/VocabularySearch/'
import VocabularyListsServices from '@/services/VocabularyListsService'

export default {
  data () {
    return {
      VocabularyList: {
        id: null,
        title: null,
        mainText: null,
        difficulty: null,
        UserId: this.$store.state.user.id
      },
      error: null,
      IsCreated: false,
      required: (value) => !!value || 'Required.'
    }
  },
  components: {
    Panel,
    VocabularySearch,
    CreateForm,
    CurrentWordsInList
  },
  methods: {
    updateCreatedStage (iscreated) {
      this.IsCreated = iscreated
    },
    SetCreatedList (vocabularylist) {
      this.VocabularyList = vocabularylist
    },
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object.keys(this.VocabularyList).every(key => !!this.VocabularyList[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all fields'
        return
      }
      try {
        await VocabularyListsServices.post(this.VocabularyList)
        this.$router.push({
          name: 'vocabularylist-create'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
