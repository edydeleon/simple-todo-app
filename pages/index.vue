<template>
  <v-layout row wrap justify-center align-center>
    <v-flex xs12>
      <v-card>
        <v-card-text>
          <v-text-field auto-grow clearable autofocus textarea rows="1" label="what do you need to do?" v-model="toDo" single-line full-width hide-details type="text"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outline color="blue" @click="addToDoItem(toDo)">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

    <v-flex xs12>
      <v-card class="mt-3" v-for="(item, i) in toDoList" :key="i">
        <v-card-text>
          <p class="mb-0">{{item.listItem}}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outline color="orange">Edit</v-btn>
          <v-btn outline color="red" @click="removeToDoItem(i)">Remove</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      toDo: ''
    }
  },
  computed: {
    toDoList () {
      return this.$store.getters.getToDoList
    }
  },
  methods: {
    addToDoItem (item) {
      this.$store.dispatch('addToDoItem', item)
      this.toDo = ''
    },
    removeToDoItem (index) {
      this.$store.dispatch('removeToDoItem', index)
    }
  }
}
</script>
