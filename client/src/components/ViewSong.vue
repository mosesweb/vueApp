<template>
<v-layout>
  <v-flex xs4>
    <panel title="Song metadata">
       {{song.title}}
    </panel>
  </v-flex>
</v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'


export default {
  data () {
    return {
      song: {}
    }
  },
  components: {
    Panel
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
