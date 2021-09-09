Vue.createApp({
    data() {
      return {
        checkedNames: []
      }
    }
}).mount('#v-model-multiple-checkboxes')

Vue.createApp({
    data() {
      return {
        selected: 'A',
        options: [
          { text: 'One', value: 'A' },
          { text: 'Two', value: 'B' },
          { text: 'Three', value: 'C' }
        ]
      }
    }
}).mount('#v-model-select-dynamic')