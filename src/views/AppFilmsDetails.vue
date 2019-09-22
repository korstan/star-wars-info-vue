<template>
  <div :class="$style.detailsWrapper">
    <DetailsForm 
      :objectToDetail="film" 
      :detailsInfo="filmDetailsInfo"
    >
      Film Details
    </DetailsForm>
    <DetailsList
      :objectsArray="getFilmCharacters(film.characters)"
      :field="'name'"
      @setRoute="handleRoute"
    >
      Characters List
    </DetailsList>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import DetailsForm from '@/components/data/DetailsForm';
import DetailsList from '@/components/data/DetailsList';
import mapDetailsInfo from '@/app/core/services/detailsService';

export default {
  name: 'FilmDetails',
  components: {
    DetailsForm,
    DetailsList,
  },
  data() {
    return {
      filmDetailsInfo: [
        mapDetailsInfo('Episode', 'episode_id'),
        mapDetailsInfo('Title', 'title'),
        mapDetailsInfo('Release date', 'release_date'),
        mapDetailsInfo('Director', 'director'),
        mapDetailsInfo('Producer', 'producer'),
        mapDetailsInfo('Opening crawl', 'opening_crawl'),
      ],
    };
  },
  computed: {
    ...mapState({
      film: state => state.films.currentFilm,
    }),
    ...mapGetters({
      getFilmCharacters: 'characters/getSelectedCharacters',
    }),
  },
  mounted() {
    this.FETCH_FILM_BY_ID(this.$route.params.id);
    this.fetchAllChars();
  },
  methods: {
    ...mapActions({
      FETCH_FILM_BY_ID: 'films/FETCH_FILM_BY_ID',
      fetchAllChars: 'characters/FETCH_ALL_CHARACTERS',
    }),
    handleRoute(uid) {
      this.$router.push(`/characters/${uid}`);
    },
  },
};
</script>

<style module>
.detailsWrapper {
  margin: 0 auto;
  width: 30%;
}
</style>
