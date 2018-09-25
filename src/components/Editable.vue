<template>
  <span class="align-middle mt-2" contenteditable="true" @blur="update">
    {{content}}
  </span>
</template>

<script>
export default {
  name: 'Editable',
  props: ['content'],
  methods: {
    update (event) {
      this.$emit('update', event.target.innerText)
    }
  }
}
</script>
