"use strict";

// const app = Vue.createApp({
//   data: () => ({
//     newItem: "",
//     todos: [],
//   }),
//   methods: {
//     addItem: function () {
//       if (this.newItem === "") return;
//       let todo = {
//         item: this.newItem,
//         isDone: false,
//       };
//       this.todos.push(todo);
//       this.newItem = "";
//     },
//     deleteItem: function (index) {
//       this.todos.splice(index, 1);
//     },
//   },
// });

// const app = Vue.createApp({
//   data: () => ({
//     message: "Hello Vue.js!",
//     number: 1,
//     ok: true,
//     url: "https://www.apple.com/jp/",
//   }),
//   methods: {
//     textChange: function () {
//       this.message = this.message.split("").reverse().join("");
//     },
//   },
// });

// app.mount("#app");

// console.log(1);

// let message = "yoichi";

// console.log(message.split('').reverse().join(''))

// const app = Vue.createApp({
//   data: () => ({
//     message: "Hello Vue.js!",
//   }),
//   computed: {
//     reversedMessage: function () {
//       console.log("computed");
//       return this.message.split("").reverse().join("");
//     },
//   },
//   methods: {
//     reversedMessageMethod: function () {
//       console.log("methods");
//       return this.message.split("").reverse().join("");
//     },
//   },
// });

// const app = Vue.createApp({
//   data: () => ({
//     basePrice: 100,
//   }),
//   computed: {
//     taxincludedPrice: {
//       get: function () {
//         return this.basePrice * 1.1;
//       },
//       set: function () {
//         return this.basePrice / 1.1;
//       },
//     },
//   },
//   methods: {},
// });
// const app = Vue.createApp({
//   data: () => ({
//     km: 0,
//     m: 0,
//   }),
//   watch: {
//     km: function (value) {
//       console.log(value);
//       this.km = value;
//       this.m = value * 1000;
//     },
//     m: function (value) {
//       console.log(value);
//       this.m = value;
//       this.km = value / 1000;
//     },
//   },
//   // computed: {
//   //   computedNumber: function () {
//   //     console.log("computed");
//   //     return Math.ceil(Math.random() * 2);
//   //   },
//   // },
//   // methods: {
//   //   methodsNumaber: function () {
//   //     console.log("methods");
//   //     return Math.random();
//   //   },
//   // },
// });

// const helloComponent = {
//   template: "<p>Hello</p>",
// };
const buttonCounter = {
  template:
    "<div><span>count:</span><button v-on:click='countUp'>{{counter}}</button></div>",
  data: () => ({
    counter: 0,
  }),
  methods: {
    countUp: function () {
      this.counter++;
    },
  },
};

const app = Vue.createApp({
  data: () => ({
    show: true,
    // age: "",
    // message: "",
    // count: 0,
    // checked: true,
    // message: "Hello Vue.js",
    // message: "",
    // toggle: false,
    // color: "blue",
    // toggle: true,
    // styleObject: {
    //   color: "red",
    //   fontSize: "80px",
    // },
    // color: "blue",
    // fontSize: "36",
    // largeClass: {
    //   large: true,
    //   "bg-gray": true,
    // },
    // dangerClass: {
    //   "text-danger": true,
    // },
    // isLarge: true,
  }),
  // components: {
  //   'button-counter': buttonCounter,
  // },
  // components: {
  //   "hello-component": helloComponent,
  // },
  // methods: {
  //   clickHandler: function ($event, message) {
  //     this.message = new Date().toLocaleTimeString();
  //   },
  //   colorChange: function () {
  //     this.color = !this.color;
  //   },
  // },
  // watch: {
  //   colors: {
  //     handler: function (newValue, oldValue) {
  //       console.log("Update!");
  //     },
  //     deep: true,
  //   },
  // },
  // methods: {
  //   onClick: function (event) {
  //     this.colors[1].name = " White";
  //   },
  // },
  // watch: {
  //   firstName: function (value) {
  //     this.firstName = value;
  //     this.fullName = this.firstName + "" + this.lastName;
  //   },
  //   lastName: function (value) {
  //     this.lastName = value;
  //     this.fullName = this.firstName + "" + this.lastName;
  //   },
  // },
  // computed: {
  //   computedNumber: function () {
  //     console.log("computed");
  //     return Math.ceil(Math.random() * 2);
  //   },
  // },
  // methods: {
  //   methodsNumaber: function () {
  //     console.log("methods");
  //     return Math.random();
  //   },
  // },
});

// app.component("hello-component", {
//   template: "<p>Hello</p>",
// });
app.component("countup-button", {
  template: "<button v-on:click='count++'>countUp!</button>:{{count}}",
});
app.mount("#app");
