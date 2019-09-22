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
import { mapActions, mapState } from 'vuex';
import DataTable from '@/components/data-table';

export default {
  name: 'AppCharacters',
  components: {
    DataTable,
  },
  computed: {
    ...mapState({ 
      dataArray: state => state.characters.allCharacters,
    }),
  },
  mounted() {
    this.fetchAllChars();
  },
  methods: {
    ...mapActions({
      fetchAllChars: 'characters/FETCH_ALL_CHARACTERS',
    }),
    handleRoute(uid) {
      this.$router.push(`/characters/${uid}`);
    },
  },
};
</script>

<style>
</style>