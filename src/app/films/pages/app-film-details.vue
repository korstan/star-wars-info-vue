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
import { mapGetters, mapActions } from 'vuex';
import DetailsForm from '@/components/details/details-form';
import DetailsList from '@/components/details/details-list';
import { FETCH_FILM_BY_ID } from '@/app/films/store/types';
import mapDetailsInfo from '@/app/core/services/detailsService';
import { FETCH_ALL_CHARACTERS } from '@/app/characters/store/types';

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
    ...mapGetters({
      film: 'getCurrentFilm',
      getFilmCharacters: 'getSelectedCharacters',
    }),
  },
  mounted() {
    this.FETCH_FILM_BY_ID(this.$route.params.id);
    this.FETCH_ALL_CHARACTERS();
  },
  methods: {
    ...mapActions([FETCH_FILM_BY_ID, FETCH_ALL_CHARACTERS]),
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
