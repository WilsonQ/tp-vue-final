<template>
  <v-app-bar color="dark1" dark app clipped-left>
    <v-app-bar-nav-icon @click.stop="chanceDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data: () => ({
    miniNav: true
  }),
  computed: {
    ...mapState(["drawer"])
  },
  methods: {
    ...mapMutations(["chanceDrawer"])
  }
};
</script>

