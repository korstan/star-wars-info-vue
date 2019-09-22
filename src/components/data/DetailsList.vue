<template>
  <div>
    <h3>
      <slot>Details List</slot>
    </h3>
    <ol>
      <li
        v-for="obj in objectsArray"
        :key="obj.uid"
      >
        <a
          href=""
          @click.prevent="$emit('setRoute', obj.uid)"
        >
          {{ obj[field] }}
        </a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'DetailsList',
  props: {
    objectsArray: {
      type: Array,
      required: true,
    },
    field: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>