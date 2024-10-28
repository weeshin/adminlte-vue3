<template>
  <Transition name="modal-fade">
    <div v-if="props.show" class="modal show" tabindex="-1" role="dialog" style="display: block;">
      <div :class="['modal-dialog', modalSize, 'modal-dialog-centered', 'modal-dialog-scrollable']" :style="{ width: props.width }" role="document">
        <div class="modal-content" :class="[modalStyle]">
          <!-- Modal Header -->
          <div class="modal-header">
            <h5 class="modal-title">{{ props.title }}</h5>
            <button type="button" class="close" @click="closeModal">×</button>
          </div>
          <!-- Modal Body -->
          <div class="modal-body">
            <slot name="body" />
          </div>
          <!-- Modal Footer -->
          <div class="modal-footer justify-content-between">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps<{
  show: boolean;
  title: string;
  width?: string;
  modalSize?: string;
  modalStyle?: string;
}>();

const modalSize = computed(() => {
  switch(props.modalSize) {
    case 'small':
      return 'modal-sm';
    case 'large':
      return 'modal-lg';
    case 'xlarge':
      return 'modal-xl';
    default:
      return '';
  }
});

const modalStyle = computed(() => {
  switch(props.modalStyle) {
    case 'primary':
      return 'bg-primary'
    case 'secondary':
      return 'bg-secondary'      
    case 'primary':
      return 'bg-info'
    case 'primary':
      return 'bg-danger'
    case 'primary':
      return 'bg-warning'
    case 'primary':
      return 'bg-success'
    default:
      return '';
  }
});

const emit = defineEmits(['close']);

// Emit close event
const closeModal = () => {
  emit('close');
};
</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
}
.modal-dialog {
  max-height: 90vh; /* Control max height */
}
.modal-body {
  overflow-y: auto;
  max-height: 60vh; /* Control scrollable area */
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter, .modal-fade-leave-to /* .modal-fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
