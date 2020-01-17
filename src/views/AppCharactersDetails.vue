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
import DetailsForm from '@/components/data/DetailsForm';
import mapDetailsInfo from '@/utils/detailsService';

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
      character: state => state.data.characters.currentCharacter,
    }),
  },
  mounted() {
    this.fetchCharById(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      fetchCharById: 'data/characters/FETCH_CHARACTER_BY_ID'
    }),
  },
};
</script>

<style>
</style>