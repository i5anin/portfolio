<template>
  <div>
    <h3>{{ title }}</h3>
    <div v-for="(skill, index) in sortedSkills" :key="index" class="mb-3">
      <label :for="skill.name">
        <svg-icon type="mdi" :path="skill.icon" class="me-2" />
        {{ skill.name }}
      </label>
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          :style="{ width: skill.percentage + '%' }"
          :aria-valuenow="skill.percentage"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {{ skill.percentage }}%
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { computed } from 'vue';

export default {
  name: 'SkillProgress',
  components: {
    SvgIcon
  },
  props: {
    title: {
      type: String,
      required: true
    },
    skills: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const sortedSkills = computed(() => {
      return [...props.skills].sort((a, b) => b.percentage - a.percentage);
    });

    return {
      sortedSkills
    };
  }
};
</script>

<style scoped>
.progress {
  height: 25px;
}

.me-2 {
  margin-right: 0.5rem;
}
</style>
