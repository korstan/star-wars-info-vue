<template>
  <div>
    <h3>
      <slot>Details List</slot>
    </h3>
    <div v-if="fetchStatus === fetchStatusEnum.LOADING">
      Loading data...
    </div>
    <div v-if="fetchStatus === fetchStatusEnum.ERROR">
      Error!
    </div>
    <div
      v-if="fetchStatus === fetchStatusEnum.DONE"
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
import { mapState } from 'vuex';
import fetchStatusEnum from '@/utils/FetchStatusEnum';

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

<style module>
.detailsListWrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
