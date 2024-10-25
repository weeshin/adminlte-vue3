<template>
<NixButtonGroup group-toggle>

  <NixButton 
    v-for="(item, index) in internalItems" 
    :key="index"
    :class="{ 'active': item.active }"
    :btn-style="btnStyle" 
    :flat="flat" 
    :size="size"
    @click="handleClick(index, item)">
    {{ item['label'] }}
  </NixButton>  
</NixButtonGroup>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
import NixButton from '@/components/button/NixButton.vue';
import NixButtonGroup from '@/components/button/NixButtonGroup.vue';

const props = defineProps<{
    btnStyle?: string,
    block?: boolean,
    flat?: boolean,
    disabled?: boolean,
    size?: string,
    icon?: string,
    items: { label: string; active?: boolean }[]
}>();

const emit = defineEmits<{
  (e: 'button-click', item: { label: string; active?: boolean }): void;
}>();

// Clone items to make them reactive
const internalItems = ref(props.items.map(item => ({ ...item })));

const setActive = (index: number) => {
  
  internalItems.value.forEach((item, i) => {
    item.active = i === index;    
  });
};

const handleClick = (index: number, item: { label: string; active?: boolean }) => {
  setActive(index);
  emit('button-click', item);
};
</script>