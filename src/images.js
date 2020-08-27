new Vue({
    el: "#app",
    data: {
      images: [
        'file:///D:/infinity-war/src/assets/AnakinSkywalker.jpg',
        'file:///D:/infinity-war/src/assets/pro.jpg',
        'https://picsum.photos/600/200'
      ],
      selectedImage: null
    },
    methods: {
      randomItem (items) {
        return items[Math.floor(Math.random()*items.length)];
      }
    },
    created() {
      this.selectedImage = this.randomItem(this.images)
    }
  })