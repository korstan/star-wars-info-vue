<template>
  <DataTable
    :dataArray="dataArray"
    :order="['uid', 'name']"
    :headers="['ID', 'Name']"
    @setRoute="handleRoute"
  >
    Characters 
  </DataTable>
</template>

<script>
import { mapActions } from 'vuex';
import { FETCH_ALL_CHARACTERS } from '@/app/characters/store/types';
import DataTable from '@/components/data-table';

export default {
  name: 'AppCharacters',
  components: {
    DataTable,
  },
  computed: {
    dataArray() {
      return this.$store.getters.getAllCharacters;
    },
  },
  mounted() {
    this.FETCH_ALL_CHARACTERS();
  },
  methods: {
    ...mapActions([FETCH_ALL_CHARACTERS]),
    handleRoute(uid) {
      this.$router.push(`/characters/${uid}`);
    },
  },
};
</script>

<style>
</style>