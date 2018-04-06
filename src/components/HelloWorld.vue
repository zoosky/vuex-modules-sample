<template>
  <div class="hello">
    <h2>The safely stored number: {{safelyStoredNumber}}</h2>
    <p>Modularized Number: {{safelyStoredNumberProperty}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "hello",
  computed: {
    safelyStoredNumberProperty() {
      return this.$store.getters.safelyStoredNumber;
    },
    ...mapGetters([
      // Mounts the "safelyStoredNumber" getter to the scope of your component.
      "safelyStoredNumber"
    ])
    // ...mapGetters("myModule", ["myModularizedNumber"])
  },
  methods: {
    ...mapMutations([
      // Mounts the "incrementStoredNumber" mutation to `this.incrementStoredNumber()`.
      "incrementStoredNumber",
      // Mounts the "setStoredNumber" mutation to `this.setStoredNumber(newNumber)`.
      "setStoredNumber"
    ])
    /*     ...mapActions([
      // Mounts the "setNumberToRemoteValue" action to `this.setNumberToRemoteValue()`.
      "setNumberToRemoteValue"
    ]) */
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
