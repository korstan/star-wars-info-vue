<template>
  <DetailsForm 
    :objectToDetail="planet"
    :detailsInfo="planetDetailsInfo"
  >
    Planet Details
  </DetailsForm>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import DetailsForm from '@/components/data/DetailsForm';
import mapDetailsInfo from '@/utils/detailsService';

export default {
  name: 'AppPlanetDetails',
  components: {
    DetailsForm,
  },
  data() {
    return {
      planetDetailsInfo: [
        mapDetailsInfo('Name','name'),
        mapDetailsInfo('Population', 'population'),
        mapDetailsInfo('Diameter', 'diameter'),
        mapDetailsInfo('Gravity', 'gravity'),
        mapDetailsInfo('Orbital period', 'orbital_period'),
        mapDetailsInfo('Rotation period', 'rotation_period'),
      ],
    };
  },
  computed: {
    ...mapState({
      planet: state => state.data.planets.currentPlanet,
    }),
  },
  mounted() {
    this.fetchPlanetById(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      fetchPlanetById: 'data/planets/FETCH_PLANET_BY_ID'
    }),
  },
};
</script>

<style>
</style>