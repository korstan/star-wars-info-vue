<template>
  <div>
    <h3>
      <slot>
        Details Form
      </slot>
    </h3>
    <div v-if="fetchStatus === fetchStatusEnum.LOADING">
      Loading data...
    </div>
    <div v-if="fetchStatus === fetchStatusEnum.ERROR">
      Error!
    </div>
    <div v-if="fetchStatus === fetchStatusEnum.DONE">
      <p v-for="(detail, index) in detailsInfo" :key="index">
        <span>
          <strong>{{ detail.label }}</strong
          >: {{ objectToDetail[detail.field] }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import fetchStatusEnum from '@/utils/FetchStatusEnum';

export default {
  name: 'DetailsForm',
  props: {
    objectToDetail: {
      type: Object,
      required: true,
    },
    detailsInfo: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      fetchStatusEnum,
    };
  },
  computed: {
    ...mapState({
      fetchStatus: state => state.data.fetchStatus,
    }),
  },
};
</script>

<style></style>
