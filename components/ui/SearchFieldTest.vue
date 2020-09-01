<template>
  <v-container>
    <v-row>

      <v-col cols="12">
        <v-text-field
          v-model="textsearch"
          :append-outer-icon="'mdi-search-web'"
          :prepend-icon="icon"
          clear-icon="mdi-close-circle"
          clearable
          placeholder="Search"
          type="text"
          @click:append="toggleMarker"
          @click:append-outer="sendMessage"
          @click:prepend="changeIcon"
          @click:clear="clearMessage"
        ></v-text-field>
      </v-col>

    </v-row>
  </v-container>
</template>
<script>
    export default {
        name: 'SearchFieldTest',
        data() {
            return {
                textsearch: '',
                // mdi-card-search mdi-card-search-outline
            }
        }
    }
</script>
