Vue.component('prompt-compo', {
    template: '<div><p>${message}</p><button @click="sayHi">say Hi!</button></div>',
    delimiters: ['${','}'],
    data: function(){
      return {
        message: 'Hi , test'
      }
    },
    methods: {
      sayHi: function() {
        alert('Hi');
      }
    }
});
  
let vm = new Vue({
    el:'#app',
    template: `<prompt-compo/>`
});

const PromptComponent = {
    template:'<div><p>${message}</p><button @click="sayHi">say Hi!</button></div>',
    delimiters: ['${','}'],
    data: function() {
      return {
        message: 'say hi test'
      }
    },
    methods: {
      sayHi: function(){
        alert('hi test');
      }
    }
};
let vm = new Vue({
    el:'#app',
    components: {
      'prompt-component':PromptComponent
    },
    data: {
      num: 1
    },
    template: `<prompt-component/>`
});

Vue.component('child',{
    props: {
      text: {
        type: String,
        required: true
      }
    },
    template: `<div>{{ text }}</div>`
});
  
new Vue({
    el: '#app',
    data() {
      return {
        message: 'hello mr. VUE'
      }
    }
})

const UserName = {
    props: {
      firstName: String,
      lastName: String
    },
    template: `
      <input 
        type="text"
        :value="firstName"
        @input="$emit('update:firstName', $event.target.value)">
  
      <input
        type="text"
        :value="lastName"
        @input="$emit('update:lastName', $event.target.value)">
    `
};
  
const HelloVueApp = {
    components: {
      UserName,
    },
    data() {
      return {
        firstName: 'John',
        lastName: 'Doe',
      };
    },
};
  
Vue.createApp(HelloVueApp).mount('#v-model-example')

Vue.component('child-component', {
    template: '#child-component',
    data() {
        return {
          childTitle: 'title from child component',
          childSubtitle: 'subtitle from child component'
        }
    },
    props:{
      subtitle: {
        type: String,
        required: true
      }
    }
})
  
new Vue ({
    el: '#app',
    data() {
        return {
          title: 'Hello Vue',
          subtitle: 'how to use slots'
      }
    }
})