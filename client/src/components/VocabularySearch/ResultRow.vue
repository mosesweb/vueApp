<template>
  <v-data-table
    :headers="headers"
    :items="items"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td v-on:click="addWord(props.item)">ADD</td>
      <td class="text-xs-right">{{ props.item.common }}</td>
      <td class="text-xs-right">{{ props.item.calories }}</td>
      <td class="text-xs-right">{{ props.item.kanji }}</td>
      <td class="text-xs-right">{{ props.item.kanji }}</td>
      <td class="text-xs-right">{{ props.item.carbs }}</td>
      <td class="text-xs-right">{{ props.item.protein }}</td>
      <td class="text-xs-right">{{ props.item.iron }}</td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: ['items', 'vocabularylistId'],
  methods: {
    async addWord (word) {
      await this.$parent.addWord(word)
    }
  },
  data () {
    return {
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Common', value: 'common', sortable: true },
        { text: 'Calories', value: 'calories', sortable: false },
        { text: 'kanji (g)', value: 'kanji', sortable: false },
        { text: 'Carbs (g)', value: 'carbs', sortable: false },
        { text: 'Protein (g)', value: 'protein', sortable: false },
        { text: 'Iron (%)', value: 'iron', sortable: false }
      ]
    }
  }
}
</script>
