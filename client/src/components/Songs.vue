<template>
    <v-layout>
        <v-flex xs6 offset-xs3>
            <panel title="Songs">
                <v-btn
                :to="{name: 'songs-create'}"
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

              <div class="song" v-for="song in songs"
                :key="song.id">
                <v-layout>
                  <v-flex xs6>
                    <div class="song-title">{{song.title}}</div>
                    <div class="song-artist">{{song.artist}}</div>
                    <div class="song-album">{{song.album}}</div>
                  </v-flex>
                  <v-flex xs6>
                    <img class="album-image" :src="song.albumImageUrl" />
                  </v-flex>
                    <v-btn
                    dark
                    class="cyan"
                    :to="{name: 'song', params: {songId: song.id}}"
                    >
                    View song
                    </v-btn>
                </v-layout>
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
.song {
  padding: 20px;
}
.song-title {
  font-size: 30px;
}
.song-artist {
 font-size: 16px;
}
.song-album {
 font-size: 16px;
}
.album-image
{
  width: 80%;
  margin: 0 auto;
}
</style>
