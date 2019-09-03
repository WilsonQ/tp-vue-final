<template>
  <v-form v-model="valid" @submit.prevent="submitQuery">
    <v-container>
      <v-row no-gutters>
        <v-col class="title" md="9">
          <h1 class="title">{{$route.name}} producto</h1>
 <v-col class="title" md="3">
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          </v-col>
        </v-col>

        <v-col md="2" offset-md="1">
          <v-btn @click="clear" tile outlined color="warning">
            <v-icon left>clear_all</v-icon>Limpiar
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <v-text-field
            ref="cod"
            type="number"
            v-model="getProductoData.codigo"
            label="Codigo"
            required
            placeholder="79938"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            v-model="getProductoData.nombre"
            :rules="nameRules"
            :counter="10"
            label="Nombre"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-textarea
            v-model="getProductoData.descripcion"
            filled
            auto-grow
            label="Descripcion"
            rows="1"
            row-height="20"
          ></v-textarea>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field
            ref="cod"
            type="number"
            v-model="getProductoData.stock"
            label="Stock Inicial"
            required
            placeholder="000"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <v-select :items="items" v-model="getProductoData.select" label="Categoria"></v-select>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            v-model="getProductoData.marca"
            :rules="nameRules"
            :counter="10"
            label="Marca"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3"></v-col>
        <v-col cols="12" md="3">
          <v-text-field
            ref="cod"
            type="number"
            v-if="$route.name !== 'modificar'"
            v-model="getProductoData.costo"
            label="Costo"
            required
            placeholder="10"
            prefix="$"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <v-text-field
            type="number"
            v-model="getProductoData.precio1"
            label="Precio 1"
            placeholder="ingrese un precio"
            prefix="$"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            type="number"
            v-model="getProductoData.precio2"
            label="Precio 2"
            placeholder="ingrese un precio"
            prefix="$"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            type="number"
            v-model="getProductoData.precio3"
            label="Precio 3"
            placeholder="ingrese un precio"
            prefix="$"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field
            type="number"
            v-model="getProductoData.precio4"
            label="Precio 4"
            placeholder="ingrese un precio"
            prefix="$"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col class="title" md="6">
          <v-file-input accept="image/*" label="Buscar Imagen"></v-file-input>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="title" md></v-col>
        <v-col md="2" offset-md="4">
          <v-btn tile outlined @click="clear" color="accent">Carcelar</v-btn>
        </v-col>
        <v-col md="2" offset-md="0">
          <v-btn type="submit" tile outlined color="primary">Guardar Producto</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "producto",
  data: () => ({
    valid: false,
    cod: false,
    modificar: false,
    nuevo: false,
    nameRules: [
      v => !!v || "El nombre es requerido",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    marcaRules: [v => !!v || "La marca es requerida"],
    items: ["Foo", "Bar", "Fizz", "Buzz"]
  }),
  methods: {
    submitQuery() {
      console.log(this.getProductoData);
      this.$store.dispatch("productoData", this.getProductoData);
    },
    clear() {
      (this.cod = false),
        (this.getProductoData.codigo = ""),
        (this.getProductoData.stock = ""),
        (this.getProductoData.nombre = ""),
        (this.getProductoData.descripcion = ""),
        (this.getProductoData.marca = ""),
        (this.getProductoData.costo = ""),
        (this.getProductoData.select = null),
        (this.getProductoData.precio1 = ""),
        (this.getProductoData.precio2 = ""),
        (this.getProductoData.precio3 = ""),
        (this.getProductoData.precio4 = "");
    }
  },
  computed: {
    ...mapGetters(["getProductoData"])
  }
};
</script>

