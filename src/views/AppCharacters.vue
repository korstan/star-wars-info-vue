<template>
  <DataTable
    :dataArray="dataArray"
    :order="['uid', 'name', 'gender', 'birth_year', 'homeworld']"
    :headers="['ID', 'Name', 'Gender', 'Birth Year', 'Homeworld ID']"
    @setRoute="handleRoute"
  >
    Characters
  </DataTable>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import DataTable from '@/components/data/DataTable';

export default {
  name: 'AppCharacters',
  components: {
    DataTable,
  },
  computed: {
    ...mapState({
      dataArray: state => state.data.characters.allCharacters,
    }),
  },
  mounted() {
    this.fetchAllChars();
  },
  methods: {
    ...mapActions({
      fetchAllChars: 'data/characters/FETCH_ALL_CHARACTERS',
    }),
    handleRoute(uid) {
      this.$router.push(`/characters/${uid}`);
    },
  },
};
</script>

<style></style>
