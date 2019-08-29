<template>
  <div>
    <h3>
      <slot>
        Details Form
      </slot>
    </h3>
    <p
      v-for="(detail, index) in detailsInfo"
      :key="index"
    >
      <span>
        <strong>{{ detail.label }}</strong>: {{ objectToDetail[detail.field] }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'DetailsForm',
  props: {
    objectToDetail: {
      type: Object,
      required: true,
    },
    detailsInfo: {
      type: Array,
      required: true
    }
  },
  computed: {},
};
</script>

<style>
</style>