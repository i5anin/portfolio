<!-- В файле app.vue -->
<template>
  <div data-bs-theme="dark" class="bg-dark text-light">
    <NuxtPage />
    <NuxtRouteAnnouncer />
    <noscript v-if="yandexMetrikaId">
      <div>
        <img :src="`https://mc.yandex.ru/watch/${yandexMetrikaId}`" style="position:absolute; left:-9999px;" alt="" />
      </div>
    </noscript>
  </div>
</template>

<script setup>
import { useRuntimeConfig } from '#imports';

const config = useRuntimeConfig();
const yandexMetrikaId = config.public.YANDEX_METRIKA_ID;
</script>
