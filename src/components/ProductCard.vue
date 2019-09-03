<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text"
      height="200px"
      src="https://mauricomputacion.com.ar/web/images/pc3.png"
    >
      <v-card-title class="align-end fill-height">Pc Gamer Completa Intel</v-card-title>
    </v-img>

    <v-card-text>
      <span>Codigo = MLA-728635398</span>
      <br />
      <span class="text--primary">
        <span>Descripcion:</span>
        <br />
        <span>
          GABINETE: Sentey x10 RGB II...
          <br />
          FUENTE: SENTEY XCP630 REALES...
        </span>
      </span>
    </v-card-text>

    <v-card-actions>
      <v-btn text color="orange">Share</v-btn>
      <v-btn text color="orange">ver mas</v-btn>
      <div class="flex-grow-1"></div>
      <div class="text-center">
        <v-menu bottom>
          <template v-slot:activator="{ on: menu }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on: tooltip }">
                <v-btn dark icon v-on="{ ...tooltip, ...menu }">
                  <v-icon>more_vert</v-icon>
                </v-btn>
              </template>
              <span>Opciones</span>
            </v-tooltip>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" @click>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [{ title: "Eliminar" }, { title: "Modificar" }, { title: "Nuevo" }]
  })
};
</script>
