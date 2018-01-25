<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      :hide-overlay="hideOverlay"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed flat :color="themeColor" app :clipped-left="clipped">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.native.stop="dialog = true">
        <v-icon>color_lens</v-icon>
      </v-btn>

      <v-menu bottom offset-y left>
        <v-btn icon slot="activator">
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile href="https://google.com">
            <v-list-tile-title>
              <a>View on GitHub</a>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-dialog v-model="dialog" max-width="500">
          <v-card>
            <v-card-title class="text-xs-center">
              <h1 class="title">Choose theme color</h1>
            </v-card-title>
            <v-card-text>
              <v-btn v-for="(colors, i) in themeColors" :key="i" fab small dark :color="colors.color" @click.stop="changeThemeColor(colors.color)"></v-btn>
            </v-card-text>
          </v-card>
        </v-dialog>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: true,
        drawer: false,
        fixed: false,
        hideOverlay: true,
        dialog: false,
        items: [
          { icon: 'list', title: 'To Do List', to: '/' }
        ],
        miniVariant: false,
        title: 'To Do List'
      }
    },
    computed: {
      themeColor () {
        return this.$store.getters.getThemeColor
      },
      themeColors () {
        return this.$store.getters.getThemeColors
      }
    },
    methods: {
      changeThemeColor (color) {
        this.$store.dispatch('changeThemeColor', color)
      }
    }
  }
</script>
