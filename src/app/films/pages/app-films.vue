<template>
  <DataTable
    :dataArray="dataArray"
    :order="['release_date', 'episode_id', 'title', 'director']"
    :headers="['Release Date', 'Episode', 'Title', 'Director']"
    @setRoute="handleRoute"
  >
    Films
  </DataTable>
</template>

<script>
import { mapActions } from 'vuex';
import { FETCH_ALL_FILMS } from '@/app/films/store/types';
import DataTable from '@/components/data-table';

export default {
  name: 'AppFilms',
  components: {
    DataTable,
  },
  computed: {
    dataArray() {
      return this.$store.getters.getAllFilms;
    },
  },
  mounted() {
    this.FETCH_ALL_FILMS();
  },
  methods: {
    ...mapActions([FETCH_ALL_FILMS]),
    handleRoute(uid) {
      this.$router.push(`/films/${uid}`);
    },
  },
};
</script>
