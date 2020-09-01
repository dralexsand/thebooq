<template>
  <div class="wrap">

    <v-container>
      <v-row>

        <v-col cols="12">

          <div class="search">

            <v-text-field
              id="s"
              type="text"
              class="searchTerm"
              v-model="textsearch"
              placeholder="Search"
              autocomplete="off"
              v-on:keyup.enter="onSearch"
            >
            </v-text-field>

            <v-btn
              depressed
              color="primary"
              @click="onSearch"
              id="s_button"
              class="searchButton"
            >
              <i class="fa fa-search"></i>
            </v-btn>

          </div>
        </v-col>

      </v-row>

    </v-container>

  </div>
</template>

<script>
    export default {
        name: 'SearchField',
        data() {
            return {
                textsearch: '',
            }
        },
        methods: {
            onSearch() {
                if (this.textsearch.length > 0) {
                    this.$router.push('/search/' + this.textsearch)
                }
            }
        }
    }
</script>

<style>

  #title_home_page {
    font-family: Roboto, Impact, sans-serif;
    font-size: 4em;
  }

  .search {
    width: 100%;
    position: relative;
    display: flex;
  }

  .searchTerm {
    width: 100%;
    /* border: 1px solid rgba(0, 180, 204, 0.38);*/
    border-right: none;
    padding: 5px;
    height: 45px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #9dbfaf;
  }

  .searchTerm:focus {
    color: #00b4cc;
  }

  .searchButton {
    width: 45px;
    height: 45px;
    /* border: 1px solid #00b4cc;
     background: #00b4cc;*/
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
  }

  .searchButton:hover {
    background: #007b91;;
  }

  /*Resize the wrap to see the search bar change!*/
  .wrap {
    width: 75%;
  }

  #s placeholder {
    color: rgba(0, 180, 204, 0.37);
  }

  #s_button {
    background: #00b4cc;
    color: white;
  }

</style>
