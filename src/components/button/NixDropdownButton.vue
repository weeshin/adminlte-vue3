<template>
  <div class="btn-group" :class="{ open: isOpen }">
    <NixButton type="button"
      class="btn dropdown-toggle"
      :btn-style="btnStyle" 
      :flat="flat" 
      :size="size"      
      @click="toggleDropdown"
      :aria-expanded="isOpen">
      {{ label }}
      <span class="caret"></span>
    </NixButton>
    <ul class="dropdown-menu" v-if="isOpen">
      <li v-for="(item, index) in items" :key="index">
        <a class="dropdown-item" href="#" @click="handleClick(item)">
          {{ item }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import NixButton from '@/components/button/NixButton.vue';

const props = defineProps<{
  btnStyle?: string,
  block?: boolean,
  flat?: boolean,
  disabled?: boolean,
  size?: string,
  icon?: string,
  label?: string,
  items: { label: string; active?: boolean }[]
}>();

const isOpen = ref(false);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function handleClick(item: any) {
  // Handle item click
  console.log(`Clicked on: ${item}`);
}
</script>

<style scoped>
.btn-group {
  position: relative;
}
.open .dropdown-menu {
  display: block;
}
</style>
