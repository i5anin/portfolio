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
          <SvgIcon
            color="green"
            type="mdi"
            :path="expandedIndexes.includes(index) ? mdiIcons.mdiChevronUp : mdiIcons.mdiChevronDown"
          />
        </button>

        <label :for="skill.name" class="skill-name d-flex align-items-center mb-0">
          <SvgIcon type="mdi" :path="skill.icon" class="me-2" />
          {{ skill.name }}
        </label>

        <div class="progress flex-grow-1 ms-2">
          <div
            class="progress-bar bg-success"
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

      <!-- Поднавыки отображаются как badge-значки с кликабельной ссылкой и иконкой -->
      <div v-if="expandedIndexes.includes(index)" id="subskills-list" class="mt-2 d-flex flex-wrap gap-2">
        <a
          v-for="(subskill, subIndex) in skill.subskills"
          :key="subIndex"
          :href="subskill.link"
          target="_blank"
          rel="noopener noreferrer"
          class="badge rounded-pill text-bg-secondary d-flex align-items-center text-decoration-none"
        >
          {{ subskill.title }}
          <SvgIcon color="black" type="mdi" :path="mdiIcons.mdiLink" class="small-icon ms-1" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import * as mdiIcons from '@mdi/js';

// Props
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});

// Reactive state for expanded indexes
const expandedIndexes = ref([]);

// Method to toggle expanded subskills
const toggleSubskills = (index) => {
  if (expandedIndexes.value.includes(index)) {
    expandedIndexes.value = expandedIndexes.value.filter((i) => i !== index);
  } else {
    expandedIndexes.value.push(index);
  }
};

// Computed properties to process skills data
const skillsWithIcons = computed(() => {
  return props.skills.map((skill) => ({
    ...skill,
    icon: mdiIcons[skill.icon] || mdiIcons.mdiHelp,
  }));
});

const sortedSkills = computed(() => {
  return skillsWithIcons.value.sort((a, b) => b.percentage - a.percentage);
});

// Expose necessary variables to the template
const mdiIconsRef = mdiIcons;

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

/* Уменьшение размера иконки */
.small-icon {
  opacity: 0.5;
  width: 16px;
  height: 16px;
}

#subskills-list {
  display: flex;
  flex-wrap: wrap; /* Перенос на новую строку при переполнении */
  gap: 0.5rem;
}

button {
  background: none;
  border: none;
  outline: none;
}

button:focus {
  outline: none;
}

/* Стилизация ссылки внутри badge */
.badge a {
  color: inherit;
  text-decoration: none;
}
</style>
