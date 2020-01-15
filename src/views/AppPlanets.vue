<template>
  <DataTable
    :dataArray="dataArray"
    :order="['uid', 'name']"
    :headers="['ID', 'Name']"
    @setRoute="handleRoute"
  >
    Planets
  </DataTable>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import DataTable from '@/components/data/DataTable';

export default {
  name: 'AppPlanets',
  components: {
    DataTable,
  },
  computed: {
    ...mapState({ 
      dataArray: state => state.planets.allPlanets,
    }),
  },
  mounted() {
    this.fetchAllPlanets();
  },
  methods: {
    ...mapActions({
      fetchAllPlanets: 'planets/FETCH_ALL_PLANETS',
    }),
    handleRoute(uid) {
      this.$router.push(`/planets/${uid}`);
    },
  },
};
</script>

<style>
</style>