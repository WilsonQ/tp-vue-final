<template>
  <v-navigation-drawer v-model="drawer" app clipped>
    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="subItem in item.items" :key="subItem.title" @click>
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    items: [
      {
        action: "local_activity",
        title: "Producto",
        active: false,
        items: [
          { title: "Nuevo Producto" },
          { title: "Modificar Producto" },
          { title: "Eliminar Producto" }
        ]
      }
    ]
  }),
  computed: {
    ...mapState(["drawer"])
  }
};
</script>

