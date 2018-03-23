<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Home">
          <p>We have content!</p>
      </panel>
      <PanelTest thetitle="Testing..">
          <p>We have content here as well!</p>
      </PanelTest>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import PanelTest from '@/components/PanelTest'

export default {
  components: {
    Panel,
    PanelTest
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
