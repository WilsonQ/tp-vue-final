<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="12">
        <h1>{{$route.name}}</h1>
      </v-col>
      <v-row justify="space-around">
        <v-switch v-model="card" label="card"></v-switch>
      </v-row>
    </v-row>

    <v-item-group>
      <v-container v-if="card" class="pa-0">
        <v-row>
          <v-col v-for="n in 3" :key="n" cols="12" md="4">
            <v-item v-slot:default="{ active, toggle }">
              <CardProducto />
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>

    <v-item-group>
      <v-container v-if="!card" class="pa-0">
        <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>Productos</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <div class="flex-grow-1"></div>
              <v-dialog v-model="dialog" max-width="500px">
                <!-- <template v-slot:activator="{ on }"> -->
                <template to="/nuevoProducto">
                  <v-btn color="primary" dark class="mb-2">Nuevo Producto</v-btn>
                  <!-- <v-btn color="primary" dark class="mb-2" v-on="on">Nuevo Producto</v-btn> -->
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.calories" label="Codigo"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.name" label="Nombre"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.fat" label="Precio"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.carbs" label="Costo(USD)"></v-text-field>
                        </v-col>
                        <!-- <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                        </v-col>-->
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <div class="flex-grow-1"></div>
                    <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.action="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
            <v-icon small @click="deleteItem(item)">delete</v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
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
    multiple: true,
    card: false,
    dialog: false,
    headers: [
      {
        text: "Codigo",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "Nombre", value: "calories" },
      { text: "Precio ", value: "fat" },
      { text: "Costo (USD)", value: "carbs" },
      // { text: "Protein (g)", value: "protein" },
      { text: "Actions", value: "action", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      Nombre: "",
      calories: 0,
      fat: 0,
      carbs: 0
      // protein: 0
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0
      // protein: 0
    }
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          calories: 159,
          name: "Frozen Yogurt",
          fat: 6.0,
          carbs: 24,
          protein: 4.0
        },
        {
          calories: 237,
          name: "Ice cream sandwich",
          fat: 9.0,
          carbs: 37,
          protein: 4.3
        },
        {
          calories: 262,
          name: "Eclair",
          fat: 16.0,
          carbs: 23,
          protein: 6.0
        },
        {
          calories: 305,
          name: "Cupcake",
          fat: 3.7,
          carbs: 67,
          protein: 4.3
        },
        {
          calories: 356,
          name: "Gingerbread",
          fat: 16.0,
          carbs: 49,
          protein: 3.9
        },
        {
          calories: 375,
          name: "Jelly bean",
          fat: 0.0,
          carbs: 94,
          protein: 0.0
        },
        {
          calories: 392,
          name: "Lollipop",
          fat: 0.2,
          carbs: 98,
          protein: 0
        },
        {
          calories: 408,
          name: "Honeycomb",
          fat: 3.2,
          carbs: 87,
          protein: 6.5
        },
        {
          calories: 452,
          name: "Donut",
          fat: 25.0,
          carbs: 51,
          protein: 4.9
        },
        {
          calories: 518,
          name: "KitKat",
          fat: 26.0,
          carbs: 65,
          protein: 7
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>


