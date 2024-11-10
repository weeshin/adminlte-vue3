<template>
  <div class="toast fade" :class="{ 'show': toastShow }">
    <div class="toast-header">
      <strong class="mr-auto">{{ title }}</strong>
      <small v-if="subMessage">{{ subMessage }}</small>
      <NixButton class="ml-2 mb-1 close" @click="closeToast">
        <span aria-hidden="true">×</span>
      </NixButton>
    </div>
    <div class="toast-body">{{ message }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, watch, ref } from 'vue';
import NixButton from '@/components/button/NixButton.vue';

const props = defineProps<{
  show: boolean;  
  title: string;
  message?: string;
  subMessage?: string;
}>();

const emit = defineEmits(['close']);
const toastShow = ref(props.show);

watch(
  () => props.show,
  (newVal) => {
    toastShow.value = newVal;
  }
);

const closeToast = () => {
  toastShow.value = false;
  emit('close');
};
</script>
