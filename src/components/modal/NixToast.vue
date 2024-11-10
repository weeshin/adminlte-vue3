<template>
  <div :class="['fixed', positionClass]">
    <NixToastItem
      v-for="toast in toasts"
      :key="toast.id"
      :show="toast.show"
      :title="toast.title"
      :message="toast.message"
      :subMessage="toast.subMessage"
      @close="removeToast(toast.id)"
    />
  </div>
</template>
  
<script setup lang="ts">
import { ref, computed, defineProps, defineExpose } from 'vue';
import NixToastItem from './NixToastItem.vue';

const props = defineProps<{
  positionClass?: string;
}>();

interface Toast {
  id: number; 
  show: boolean;
  title: string;
  message: string;
  subMessage: string;
}

const toasts = ref<Toast[]>([]);

const positionClass = computed(() => {
  switch(props.positionClass) {
    case 'top-left':
      return 'toasts-top-left';
    case 'bottom-right':
      return 'toasts-bottom-right';
    case 'bottom-left':
      return 'toasts-bottom-left';
    case 'top-right':
    default:  
      return 'toasts-top-right'
  }
});


const addToast = (title: string, message: string, subMessage: string = '') => {
  const id = Date.now();
  toasts.value.push({
    id,
    show: true,
    title,
    message,
    subMessage,
  });
};

const removeToast = (id: number) => {
  const index = toasts.value.findIndex(toast => toast.id === id);
  if (index !== -1) {
    toasts.value.splice(index, 1);
  }
};

defineExpose({ addToast });
</script>

<style scoped>
.fixed {
  position: fixed;
  z-index: 1050;
}
.toasts-top-right {
  top: 1rem;
  right: 1rem;
}
.toasts-top-left {
  top: 1rem;
  left: 1rem;
}
.toasts-bottom-right {
  bottom: 1rem;
  right: 1rem;
}
.toasts-bottom-left {
  bottom: 1rem;
  left: 1rem;
}
</style>
  