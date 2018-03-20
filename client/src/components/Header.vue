<template>
    <v-toolbar class="cyan" fixed dark>
    <v-toolbar-title class="mr-4">
        <span class="home" @click="navigateTo({name:'root'})">
        Tabtracker
        </span>
    </v-toolbar-title>
    <!-- <v-toolbar-items>
        <v-btn flat dark>Browse</v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>
        <v-toolbar-items>
        <!-- <router-link to="register">
            <v-btn flat dark>Sign Up</v-btn>
        </router-link> -->
        <v-btn @click="navigateTo({name:'register'})" flat dark>Sign Up</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home
{
    cursor: pointer;
}
.home:hover{
    color:black;
}
</style>
