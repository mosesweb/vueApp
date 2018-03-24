<template>
<div></div>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    const song = await SongsService.show(songId)
    console.log(song)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
