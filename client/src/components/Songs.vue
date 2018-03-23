<template>
    <v-layout>
        <v-flex xs6 offset-xs3>
            <panel title="Songs">
              <div v-for="song in songs"
                :key="song.title">
                {{song.title}}
                {{song.artist}}
                {{song.album}}
              </div>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: [
        {
          title: 'Music Title',
          artist: 'Underoath',
          album: 'A boy brushed in red..'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
