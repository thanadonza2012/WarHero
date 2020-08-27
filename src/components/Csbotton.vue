<template>
  <div class="alert" role="alert">
    <div class="container">
      <div class="row">
        <div class="col-sm">
        </div>
        <div class="col-sm">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a3f544f1-f07b-4aa9-b6f9-824148c31a10/daqrpoq-f7ee01ed-ac8e-4c47-86c9-360f670365d2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTNmNTQ0ZjEtZjA3Yi00YWE5LWI2ZjktODI0MTQ4YzMxYTEwXC9kYXFycG9xLWY3ZWUwMWVkLWFjOGUtNGM0Ny04NmM5LTM2MGY2NzAzNjVkMi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.37GhMgHrxdiLQPB8OPtK_04vGDSUum7EM4vxWzmkzYY"
            alt
          />
          <br>
          <br>
<br>
              <button @click="s()" class="btn btn-success ml-3">start</button>
    <button @click="atk()" class="btn btn-warning ml-3">attack</button>
    <button @click="spatk()" class="btn btn-danger ml-3">special attack</button>
    <br>
    <br>
    <button @click="reset()" class="btn btn-info ml-3">New Game</button>

        </div>
        <div class="col-sm"></div>
      </div>
    </div>

<div class="container">
  <div class="row">
    <div class="col-sm">
      <div class="col-sm">
      <p style="font-size: 150%">{{amonster.name}}</p>
      <p>
        <img v-bind:style="{width: amonster.hp + 'px'}" :src="hp2" alt height="20px" />
      </p>
      <p style="font-size: 150%">{{thp}}{{amonster.hp}}</p>
      <p>
        <img style="width:100%" :src="amonster.image" />
      </p>
    </div>
  </div>

    <div class="col-sm">
    </div>
    <div class="col-sm">
      <div class="row">
      <div class="col-sm">
        <p style="font-size: 150%">{{aplayer.name}}</p>
        <p>
          <img v-bind:style="{width: aplayer.hp + 'px'}" :src="hp1" alt height="20px" />
        </p>
        <p style="font-size: 150%">{{thp}}{{aplayer.hp}}</p>
        <p>
          <img style="width:100%" :src="aplayer.image" />
        </p>
      </div>
</div>
    </div>
  </div>
</div>


    <div class="row">
      <div class="col-sm"></div>
      <div class="col-sm">
        <div id="score">
          <div v-if="aplayer.hp <= 0"><h1>You Win</h1></div>
          <div v-else-if="amonster.hp <= 0"><h1>You Lose</h1> </div>
        </div>
      </div>
      <div class="col-sm"></div>
    </div>
<br><br><br><br><br><br>




  </div>
</template>

<script>
export default {
  name: "CsBotton",
  data: function () {
    return {
      thp: "HP:",
      end: false,
      hp2:
        "https://i.ppy.sh/bca61e3c2183a86ddb4c1d75914fab845e2b128f/687474703a2f2f692e696d6775722e636f6d2f6953766c5662432e706e67",
      hp1:
        "https://i.ppy.sh/bca61e3c2183a86ddb4c1d75914fab845e2b128f/687474703a2f2f692e696d6775722e636f6d2f6953766c5662432e706e67",

      aplayer: { name: "", hp: 1, image: "" },
      player: [
        {
          name: "Thanos",
          hp: 150,
          image:
            "https://www.freepngimg.com/thumb/avengers/80688-alliance-comics-figurine-toy-thanos-avengers-marvel-thumb.png",
        },
        {
          name: "Darth vader",
          hp: 100,
          image:
            "https://www.freepngimg.com/thumb/star_wars/6-2-star-wars-darth-vader-png-thumb.png",
        },
        {
          name: "Cell",
          hp: 130,
          image:
            "https://www.uokpl.rs/fpng/f/500-5005644_villains-wiki-dragon.png",
        },
      ],

      amonster: { name: "", hp: 1, image: "" },
      monster: [
        {
          name: "Skywalker",
          hp: 110,
          image:
            "http://www.pngmart.com/files/2/Luke-Skywalker-Transparent-PNG.png",
        },
        {
          name: "Iron man",
          hp: 120,
          image:
            "http://www.pngmart.com/files/3/Iron-Man-PNG-File.png",
        },
        {
          name: "Doraemon",
          hp: 140,
          image:
            "https://www.freepngimg.com/thumb/artwork/80290-canvas-art-doraemon-print-line-organism-thumb.png",
        },
      ],
      pmax: "",
      mmax: "",
    };
  },
  props: {
    label: String,
  },
  methods: {
    randomDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    s: function () {
      this.aplayer = this.player[this.randomDamage(1, 3) - 1];
      this.amonster = this.monster[this.randomDamage(1, 3) - 1];
    },

    atk: function () {
      this.pmax = Math.floor(Math.random() * 10 + 4);
      this.amonster.hp = this.amonster.hp - this.pmax;
      this.mmax = Math.floor(Math.random() * 10 + 4);
      this.aplayer.hp = this.aplayer.hp - this.mmax;
      if (this.aplayer.hp <= 0) {
        this.aplayer.hp = 0;
        this.end = true;
      } else if (this.amonster.hp <= 0) {
        this.amonster.hp = 0;
        this.end = true;
      }
    },

    spatk: function () {
      this.pmax = Math.floor(Math.random() * 15 + 6);
      this.amonster.hp = this.amonster.hp - this.pmax;
      this.mmax = Math.floor(Math.random() * 15 + 6);
      this.aplayer.hp = this.aplayer.hp - this.mmax;
      if (this.aplayer.hp <= 0) {
        this.aplayer.hp = 0;
        this.end = true;
      } else if (this.amonster.hp <= 0) {
        this.amonster.hp = 0;
        this.end = true;
      }
    },
    reset: function () {
      window.location.reload();
    },
  },
};
</script>

<style>

</style>