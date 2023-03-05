<template>
  <div class="container">
    <div class="field">

      <label for="password">Password</label>
      <input type="text"
             id="password"
             v-model="input.password"
             @change="$emit('input-evt', {
               key: 'password',
               value: input.password
             })"
      />

    </div>
    <div class="field">
      <label for="confirmation">Confirmation</label>
      <input type="text"
             id="confirmation"
             v-model="input.confirmation"
             @change="$emit('input-evt', {
               key: 'confirmation',
               value: input.confirmation
             })"
      />
    </div>
    <div class="complexity-field">
      <div :class="['complexity', getComplexityStyle]"></div>
    </div>

    <div class="wrapper">
      <div class="field">
        <button :disabled="!valid">Submit</button>
      </div>
    </div>

    <p>is valid: {{valid}}</p>

    <p>Matches: {{ matching }}</p>
    <p>Complexity: {{ complexity }}</p>

  </div>
</template>

<script>
export default {
  name: "RenderlessPassword",
  props: {
    minComplexity: {
      type: Number,
      default: 3
    },
    matching: {
      type: Boolean
    },
    complexity: {
      type: Number
    },
    complexityStyle: {
      type: String
    },
    valid: {
      type: Boolean
    }
  },
  data() {
    return {
      input: {
        password: '',
        confirmation: ''
      }
    }
  },
  computed: {

  },
  mounted() {

  }
}



</script>

<style scoped lang="scss">
.complexity { transition: 0.2s; height: 10px;}
.high {
  width: 100%; background: lime;
}
.mid {
  width: 66%; background: yellow;
}
.low {
  width: 33%; background: red;
}
</style>