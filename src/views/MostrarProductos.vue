<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="12">
        <h1>{{$route.name}} </h1>
      </v-col>
    </v-row>

    <v-item-group>
      <v-container class="pa-0">
        <v-row>
          <v-col v-for="n in 3" :key="n" cols="12" md="4">
            <v-item v-slot:default="{ active, toggle }">
              <CardProducto />
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </v-container>
</template>

<script>
import CardProducto from "../components/ProductCard.vue";
export default {
  components: {
    CardProducto
  },
  data: () => ({
    types: ["cards", "images"],
    type: "cards",
    mandatory: false,
    multiple: true
  })
};
</script>

