<template>
  <component :is="render"/>
</template>

<script setup lang="ts">
import { h, defineSlots, defineProps } from 'vue';
import { hSlot } from '@/utils/render';

const props = defineProps<{
  cardStyle?: string
}>();
const slots = defineSlots();

const render = () => {
  return h('div', { class: ['card-body', props.cardStyle] }, hSlot(slots.default))
};
</script>