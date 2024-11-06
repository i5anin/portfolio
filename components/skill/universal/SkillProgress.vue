<template>
  <div>
    <h3>{{ title }}</h3>

    <div v-for="(skill, index) in skillsWithIcons" :key="index" class="mb-3">
      <div class="d-flex align-items-center">
        <button
          @click="toggleSubskills(index)"
          class="btn btn-link p-0 me-2"
          :aria-expanded="expandedIndexes.includes(index)"
          aria-controls="subskills-list"
        >
          <svg-icon type="mdi" :path="expandedIndexes.includes(index) ? mdiIcons.mdiChevronUp : mdiIcons.mdiChevronDown" />
        </button>

        <label :for="skill.name" class="skill-name d-flex align-items-center mb-0">
          <svg-icon type="mdi" :path="skill.icon" class="me-2" />
          {{ skill.name }}
        </label>

        <div class="progress flex-grow-1 ms-2">
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

      <ul v-if="expandedIndexes.includes(index)" id="subskills-list" class="mt-2">
        <li v-for="(subskill, subIndex) in skill.subskills" :key="subIndex">
          <a :href="subskill.link" target="_blank" rel="noopener noreferrer">{{ subskill.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import * as mdiIcons from '@mdi/js';
import { computed, ref } from 'vue';

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
    const expandedIndexes = ref([]);

    const toggleSubskills = index => {
      if (expandedIndexes.value.includes(index)) {
        expandedIndexes.value = expandedIndexes.value.filter(i => i !== index);
      } else {
        expandedIndexes.value.push(index);
      }
    };

    const skillsWithIcons = computed(() => {
      return props.skills.map(skill => ({
        ...skill,
        icon: mdiIcons[skill.icon] || mdiIcons.mdiHelp
      }));
    });

    const sortedSkills = computed(() => {
      return skillsWithIcons.value.sort((a, b) => b.percentage - a.percentage);
    });

    return {
      skillsWithIcons: sortedSkills,
      expandedIndexes,
      toggleSubskills,
      mdiIcons
    };
  }
};
</script>

<style scoped>
.progress {
  height: 25px;
}

.skill-name {
  min-width: 100px; /* Фиксированная ширина для выравнивания */
}

.me-2 {
  margin-right: 0.5rem;
}

ul {
  padding-left: 1.25rem;
}

ul li {
  list-style: none;
}

button {
  background: none;
  border: none;
  outline: none;
}

button:focus {
  outline: none;
}
</style>
