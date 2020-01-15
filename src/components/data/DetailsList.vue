<template>
  <div>
    <h3>
      <slot>Details List</slot>
    </h3>
    <div
      :class="$style.detailsListWrapper"
    >
      <a
        v-for="obj in objectsArray"
        :key="obj.uid"
        href=""
        @click.prevent="$emit('setRoute', obj.uid)"
      >
        {{ obj[field] }},
      </a>
    </div>
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

<style module>
  .detailsListWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>