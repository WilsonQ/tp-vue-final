<template>
  <div id="app">
    <v-app id="inspire">
      <Drawer />
      <Navbar />
      <v-content>
        <v-container fluid grid-list-lg>
          <router-view></router-view>
        </v-container>
      </v-content>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Drawer from "./components/layout/Drawer";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
export default {
  name: "App",
  components: {
    Drawer,
    Navbar,
    Footer
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
