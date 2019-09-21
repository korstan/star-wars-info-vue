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
import { mapActions, mapState } from 'vuex';
import DataTable from '@/components/data-table';

export default {
  name: 'AppFilms',
  components: {
    DataTable,
  },
  computed: {
    ...mapState({ 
      dataArray: state => state.films.allFilms, 
    }),
  },
  mounted() {
    this.fetchAllFilms();
  },
  methods: {
    ...mapActions({fetchAllFilms: 'films/FETCH_ALL_FILMS'}),
    handleRoute(uid) {
      this.$router.push(`/films/${uid}`);
    },
  },
};
</script>
