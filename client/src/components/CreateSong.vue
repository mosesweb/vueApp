<template>
<v-layout>
  <v-flex xs4>
    <panel title="Song metadata">
        <form
        name="tab-tracker-form"
        autocomplete="off">

        <v-text-field
          label="Title"
          v-model="song.title"
          required
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          label="Artist"
          v-model="song.artist"
          required
          :rules="[required]"
        ></v-text-field>

              <v-text-field
          label="Genre"
          required
          :rules="[required]"
          v-model="song.genre"
        ></v-text-field>

              <v-text-field
          label="Album"
          required
          :rules="[required]"
          v-model="song.album"
        ></v-text-field>

              <v-text-field
          label="Album Image URL"
          v-model="song.albumImageUrl"
        ></v-text-field>
              <v-text-field
          label="YouTube ID"
          v-model="song.youtubeId"
        ></v-text-field>

      </form>
    </panel>
  </v-flex>
  <v-flex xs8 class="ml-2">
    <panel title="Song">
  <v-text-field
    label="Tab"
    v-model="song.tab"
    multi-line
  ></v-text-field>
    <v-text-field
    label="Lyrics"
    multi-line
    v-model="song.lyrics"
  >
  </v-text-field>
    </panel>
    <v-alert
        class="ml-4"
        :value="error"
        transition="scale-transition"
        error>
        {{error}}
    </v-alert>

  <v-btn
  dark
  class="cyan"
  @click="create">
  Create song
  </v-btn>

  </v-flex>
</v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsServices from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object.keys(this.song).every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all fields'
        return
      }
      try {
        await SongsServices.post(this.song)
        this.$router.push({
          name: 'songs'
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
