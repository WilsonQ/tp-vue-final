<template>
  <v-navigation-drawer  v-model="drawer" app clipped>
    <v-list>
      <v-list-item to="/">
        <v-list-item-action>
          <v-icon>home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

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

        <v-list-item v-for="subItem in item.items" :key="subItem.title" :to="subItem.path">
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
        path: "producto",
        active: false,
        items: [
          { title: "Listar Producto", path: "listarProducto" },
          { title: "Nuevo Producto", path: "nuevoProducto" },
          { title: "Modificar Producto", path: "modificarProducto" }
        ]
      }
    ]
  }),
  computed: {
    ...mapState(["drawer"])
  }
};
</script>

