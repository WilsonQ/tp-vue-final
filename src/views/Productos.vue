<template>
  <v-container wrap>
    <v-form ref="form" @submit.prevent="submit">
      <v-row>
        <v-col cols="9" md="4">
          <h2 class="headline font-weight-bold mb-3">{{$route.name}} Producto</h2>
        </v-col>
        <v-col cols="3" offset-md="7" class="pb-0 icon" md="1">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn @click="reset" color="warning" fab dark v-on="on">
                <v-icon>delete</v-icon>
              </v-btn>
            </template>
            <span>Limpiar Formulario</span>
          </v-tooltip>
        </v-col>
      </v-row>

      <v-row>
        <v-col v-if="$route.name === 'Modificar'" cols="12" class="pb-0 input" md="4">
          <v-text-field
            solo
            label="Buscar Producto"
            v-model="searchQuery"
            v-on:keydown.enter.prevent="query()"
            prepend-inner-icon="search"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row v-if="guardado" align="center" justify="center">
        <v-col cols="12" md="12">
          <v-alert type="success">Se creo un nuevo Producto.</v-alert>
        </v-col>
      </v-row>

      <v-container v-if="searchCondicion || search ">
        <v-row>
          <v-col cols="12" md="12">
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  label="Codigo"
                  v-model="getProductoData.codigo"
                  placeholder="XXX-XXX-XXX"
                  hint="Por favor ingrese un codigo"
                  counter
                  maxlength="11"
                  filled
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  label="Nombre"
                  v-model="getProductoData.nombre"
                  placeholder="celular"
                  hint="Por favor ingrese el nombre"
                  counter
                  maxlength="30"
                  filled
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  label="Marca"
                  v-model="getProductoData.celular"
                  placeholder="samsung"
                  hint="Por favor ingrese la marca"
                  counter
                  maxlength="30"
                  filled
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-combobox
                  v-model="getProductoData.categoria"
                  :items="items"
                  :search-input.sync="noData"
                  hide-selected
                  hint="Seleccione una categoria"
                  label="Categoria"
                  multiple
                  clearable
                  filled
                  persistent-hint
                  small-chips
                >
                  <template v-slot:no-data>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          "No se encuentra el resultado buscado "
                          <!-- <strong>{{ noData }}</strong>". Press
                          <kbd>enter</kbd> to create a new one-->
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-combobox>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  label="Costo(USD)"
                  v-model="getProductoData.costo"
                  type="number"
                  placeholder="10.00"
                  prefix="$"
                  clearable
                  filled
                  hint="Por favor, ingrese un costo"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  label="Precio"
                  v-model="getProductoData.precio"
                  type="number"
                  placeholder="10.00"
                  prefix="$"
                  clearable
                  filled
                  hint="Por favor, ingrese un precio"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  label="Precio1"
                  v-model="getProductoData.precio1"
                  type="number"
                  placeholder="10.00"
                  prefix="$"
                  clearable
                  filled
                  hint="Por favor, ingrese un precio"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  label="Precio2"
                  v-model="getProductoData.precio2"
                  type="number"
                  placeholder="10.00"
                  prefix="$"
                  clearable
                  filled
                  hint="Por favor, ingrese un precio"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  label="Precio3"
                  v-model="getProductoData.precio3"
                  type="number"
                  placeholder="10.00"
                  prefix="$"
                  clearable
                  filled
                  hint="Por favor, ingrese un precio"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  label="Stock"
                  v-model="getProductoData.stock"
                  type="number"
                  placeholder="10.00"
                  clearable
                  filled
                  hint="Por favor, ingrese un Stock"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="8">
                <v-file-input
                  label="File input"
                  placeholder="Busca una imagen"
                  filled
                  prepend-icon="camera_alt"
                ></v-file-input>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="8">
                <v-textarea
                  filled
                  clearable
                  counter
                  hint="Por favor, ingrese una descripcion"
                  maxlength="50"
                  auto-grow
                  label="Descripcion"
                  v-model="getProductoData.Descripcion"
                  rows="4"
                  row-height="30"
                  shaped
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-snackbar v-model="snackbar" top color="success" :timeout="timeout">
                  {{ lorem.slice(0, 80) }}
                  <v-btn dark text @click="snackbar = false">Close</v-btn>
                </v-snackbar>
              </v-col>
              <v-col cols="12" offset-md="5" md="3">
                <v-btn class="ma-2" type="submit" outlined x-large block color="indigo">{{boton}}</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "producto",
  data() {
    return {
      autoUpdate: true,
      friends: ["Sandra Adams", "Britta Holt"],
      isUpdating: false,
      name: "Midnight Crew",
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
      items: ["Gaming", "Programming", "Vue", "Vuetify"],
      model: ["Vuetify"],
      noData: null,
      search: false,
      searchQuery: "",
      offsetData: 7,
      guardado: false,
      snackbar: false,
      timeout: 2000
    };
  },

  watch: {
    model(val) {
      if (val.length > 5) {
        this.$nextTick(() => this.model.pop());
      }
    }
  },
  methods: {
    submit() {
      this.$store.dispatch("productoData", this.getProductoData);
      this.snackbar = true;
    },
    query() {
      this.search = true;
      console.log("data", this.searchQuery + " form:", this.search);
    },
    reset() {
      this.$refs.form.reset();
      console.log("reset");
      this.$refs.form.resetValidation();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  },
  computed: {
    ...mapGetters(["getProductoData"]),
    searchCondicion() {
      if (this.$route.name === "Modificar") {
        return (this.search = false);
      }

      return true;
    },
    boton() {
      return this.$route.name === "Modificar" ? "Modificar" : "Nuevo";
    }
  }
};
</script>

<style  scoped>
.icon {
  height: 70px;
  width: 56px;
}
.input {
  height: 70px;
}
</style>