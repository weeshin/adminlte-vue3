<template>
  <div :class="[btnGroupType, groupToggleStyle]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps<{
  groupToggle?: boolean,
  vertical?: boolean
}>();

const groupToggleStyle = computed(() => {
  if (props.groupToggle) {
    return "btn-group-toggle";
  }
  return '';
});

const btnGroupType = computed(() => {
  if (props.vertical) {
    return 'btn-group-vertical';
  }
  return 'btn-group';
})
</script>