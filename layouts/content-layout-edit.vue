<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-row
            v-if="item.heading"
            :key="item.heading"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-center"
            >
              <a
                href="#!"
                class="body-2 black--text"
              >EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            link
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                @click="goToRoute(item.link)"
              >
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="cyan darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">TheBooq</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-col class="d-flex" cols="1" sm="1">
        <v-select
          v-model="select_lang"
          :items="langs"
          @change="changeLang"
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="2" sm="2">
        <v-select
          :items="userstatus"
        ></v-select>
      </v-col>

    </v-app-bar>
    <v-main>
      <v-container
        fluid
      >
        <Nuxt/>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>

    import SearchField from "@/components/ui/SearchField";

    export default {
        name: 'content-layout-edit',
        components: {
            SearchField
        },
        data: () => ({
            select_lang: 'Es',
            drawer: null,
            items: [
                {icon: 'mdi-folder-home', text: 'Home', link: '/'},
                {icon: 'mdi-pencil', text: 'Edit', link: '/edit/test'},
                {icon: 'mdi-pencil', text: 'Editor', link: '/editor'},
                {icon: 'mdi-folder-information', text: 'About', link: '/about'},
                {icon: 'mdi-history', text: 'Frequently contacted', link: '/contacts'},
                {icon: 'mdi-content-copy', text: 'Duplicates'},
                {
                    icon: 'mdi-chevron-up',
                    'icon-alt': 'mdi-chevron-down',
                    text: 'Labels',
                    model: true,
                    children: [
                        {icon: 'mdi-plus', text: 'Create label'},
                    ],
                },
                {
                    icon: 'mdi-chevron-up',
                    'icon-alt': 'mdi-chevron-down',
                    text: 'More',
                    model: false,
                    children: [
                        {text: 'Import'},
                        {text: 'Export'},
                        {text: 'Print'},
                        {text: 'Undo changes'},
                        {text: 'Other contacts'},
                    ],
                },
                {icon: 'mdi-cog', text: 'Settings'},
                {icon: 'mdi-message', text: 'Send feedback'},
                {icon: 'mdi-help-circle', text: 'Help'},
                {icon: 'mdi-cellphone-link', text: 'App downloads'},
                {icon: 'mdi-keyboard', text: 'Go to the old version'},
            ],
            langs: ['En', 'Es', 'De', 'Ru', 'Fr'],
            userstatus: ['Login', 'Sign In'],
        }),
        methods: {
            goToRoute(link) {
                this.$router.push(link)
            },
            changeLang(){
                console.log('select_lang: ' + this.select_lang);
            }
        }
    }
</script>
