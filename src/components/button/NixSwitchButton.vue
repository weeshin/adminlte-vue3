<template>
  <div
    :class="['bootstrap-switch', 'bootstrap-switch-wrapper', 'bootstrap-switch-animate', switchState.state ? 'bootstrap-switch-off' : 'bootstrap-switch-on']"
    @click="toggleSwitch"
    style="width: 86px;"
  >
    <div class="bootstrap-switch-container" style="width: 126px;" :style="[switchState.state ? 'margin-left: 0px;' : 'margin-left: -42px;']">
      <span class="bootstrap-switch-handle-on" :class="[onButtonStyle]" style="width: 42px;">ON</span>
      <span class="bootstrap-switch-label" style="width: 42px;">&nbsp;</span>
      <span class="bootstrap-switch-handle-off" :class="[offButtonStyle]" style="width: 42px;">OFF</span>
      <input type="checkbox" v-model="switchState" @change="emitSwitchState" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch, computed } from 'vue';

// Define the switch state prop and emit
const props = defineProps<{
  modelValue: { state: boolean };
  onBtnStyle?: string;
  offBtnStyle?: string;
}>();

const onButtonStyle = computed(() => {
  switch(props.onBtnStyle) {
    case "primary":
      return "bootstrap-switch-primary";
    case "secondary":
      return "bootstrap-switch-secondary";
    case "success":
      return "bootstrap-switch-success";
    case "info":
      return "bootstrap-switch-info";
    case "danger":
      return "bootstrap-switch-danger";     
    case "warning":
      return "bootstrap-switch-warning";
    default:
      return "bootstrap-switch-default";
  }
});

const offButtonStyle = computed(() => {
  switch(props.offBtnStyle) {
    case "primary":
      return "bootstrap-switch-primary";
    case "secondary":
      return "bootstrap-switch-secondary";
    case "success":
      return "bootstrap-switch-success";
    case "info":
      return "bootstrap-switch-info";
    case "danger":
      return "bootstrap-switch-danger";     
    case "warning":
      return "bootstrap-switch-warning";
    default:
      return "bootstrap-switch-default";
  }
});

const emit = defineEmits<{
  (e: 'toggle', value: any): void;
}>();

const switchState = ref(props.modelValue);

// Watch for prop changes to update internal state
watch(() => props.modelValue.state, (newVal) => {
  switchState.value.state = newVal;
});


// Toggle the switch state and emit the new value
const toggleSwitch = () => {
  switchState.value.state = !switchState.value.state;
  emitSwitchState();
};

const emitSwitchState = () => {
  emit('toggle', switchState.value);
};
</script>
