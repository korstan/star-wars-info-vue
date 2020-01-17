<template>
  <div :class="$style.tableWrapper">
    <h2>
      <slot>
        Data Table
      </slot>
    </h2>
    <div v-if="fetchStatus === fetchStatusEnum.LOADING">
      Loading data...
    </div>
    <div v-if="fetchStatus === fetchStatusEnum.ERROR">
      Error!
    </div>
    <table v-if="fetchStatus === fetchStatusEnum.DONE">
      <thead>
        <tr>
          <th
            v-for="(header, index) in headers"
            :key="index"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="obj in dataArray"
          :key="obj.uid"
          @click="$emit('setRoute', obj.uid)"
        >
          <td
            v-for="item in order"
            :key="item"
          >
            {{ obj[item] }}
          </td>  
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import fetchStatusEnum from '@/utils/FetchStatusEnum';

export default {
  name: 'DataTable',
  props: {
    dataArray: {
      type: Array,
      required: true,
    },
    headers: {
      type: Array,
      required: true,
    },
    order: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      fetchStatusEnum,
    }
  },
  computed: {
    ...mapState({
      fetchStatus: state => state.data.fetchStatus,
    }),
  },
  methods: {
    routeTo(str) {
      this.$router.push(str);
    }
  },
};
</script>

<style module>
.tableWrapper {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
table {
  width: auto;
  border-collapse: collapse;
}
table td {
  text-align: center;
  padding: 12px 16px;
}
table thead tr {
  font-weight: bold;
  border-top: 1px solid #e8e9eb;
}
table tr {
  border-bottom: 1px solid #e8e9eb;
}
table tbody tr:hover {
  cursor: pointer;
  background: #9b9b9b;
}
</style>