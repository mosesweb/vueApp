<template>
    <v-layout>
        <v-flex xs6 offset-xs3>
            <panel title="Songs">
              <div v-for="song in songs"
                :key="song.id">
                {{song.title}} .
                {{song.artist}} .
                {{song.album}} .
              </div>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    // do a request to the backend for all the songs
    this.songs = (await SongsService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
