<template>
<panel title="VocabularyList">
      <form
      name="tab-tracker-form"
      autocomplete="off">

      <v-text-field
        label="Title"
        v-model="VocabularyList.title"
        required
        :rules="[required]"
      ></v-text-field>

        <v-text-field
        label="MainText"
        v-model="VocabularyList.mainText"
        required
        :rules="[required]"
      ></v-text-field>

        <v-text-field
        label="Difficulty"
        v-model="VocabularyList.difficulty"
        required
        :rules="[required]"
      ></v-text-field>

        <v-btn
        v-if="$store.state.isUserLoggedIn"
        dark
        class="cyan"
        @click="create">
        Create VocabularyList
        </v-btn>
        </form>
        </panel>
        </template>
<script>
import Panel from '@/components/Panel'
import VocabularySearch from '@/components/VocabularySearch/'
import VocabularyListsServices from '@/services/VocabularyListsService'

export default {
  data () {
    return {
      VocabularyList: {
        title: null,
        mainText: null,
        difficulty: null,
        UserId: this.$store.state.user.id
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  components: {
    Panel,
    VocabularySearch
  },
  methods: {
    async create () {
      this.$parent.updateCreatedStage(true)
      this.error = null
      const areAllFieldsFilledIn = Object.keys(this.VocabularyList).every(key => !!this.VocabularyList[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all fields'
        return
      }
      try {
        this.VocabularyList = await VocabularyListsServices.post(this.VocabularyList)
        this.$parent.SetCreatedList(this.VocabularyList)
        this.$router.push({
          name: 'vocabularylist-create'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  props: ['vocabularyList']
}
</script>
