<template>
  <DetailsForm 
    :objectToDetail="character"
    :detailsInfo="characterDetailsInfo"
  >
    Character Details
  </DetailsForm>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import DetailsForm from '@/components/details/details-form';
import mapDetailsInfo from '@/app/core/services/detailsService';

export default {
  name: 'AppCharacterDetails',
  components: {
    DetailsForm,
  },
  data() {
    return {
      characterDetailsInfo: [
        mapDetailsInfo('Name','name'),
        mapDetailsInfo('Gender', 'gender'),
        mapDetailsInfo('Birth Year', 'birth_year'),
        mapDetailsInfo('Height', 'height'),
        mapDetailsInfo('Mass', 'mass'),
        mapDetailsInfo('Eye Color', 'eye_color'),
        mapDetailsInfo('Hair Color', 'hair_color'),
        mapDetailsInfo('Skin Color', 'skin_color'),
        mapDetailsInfo('Homeworld', 'homeworld'),
      ],
    };
  },
  computed: {
    ...mapState({
      character: state => state.characters.currentCharacter,
    }),
  },
  mounted() {
    this.fetchCharById(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      fetchCharById: 'characters/FETCH_CHARACTER_BY_ID'
    }),
  },
};
</script>

<style>
</style>