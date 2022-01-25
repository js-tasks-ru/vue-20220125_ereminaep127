import { createApp } from './vendor/vue.esm-browser.js';

// From https://jsonplaceholder.typicode.com/comments
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

// Требуется создать Vue приложение

const Counter = {
  data() {
    return {
      search: '',
      emails: emails,
    };
  },
  computed: {
    filtered() {
      let result = [];
      let search = this.search;
      this.emails.forEach(function (item, index, array) {
        result.push({
          name: item,
          active: !search ? false : Boolean(item.indexOf(search) + 1),
        });
      });
      return result;
    },
  },
  methods: {
    calc() {
      switch (this.motion) {
        case 'sum':
          this.result = this.number1 + this.number2;
          break;
        case 'subtract':
          this.result = this.number1 - this.number2;
          break;
        case 'divide':
          this.result = this.number1 / this.number2;
          break;
        case 'multiply':
          this.result = this.number1 * this.number2;
          break;
      }
    },
  },
};

createApp(Counter).mount('#app');
