<template>
  <button type="button" class="btn" :class="[buttonStyle, buttonBlock, buttonSize, flatButton, disabledButton]" >
    <span v-if="badge" class="badge" :class="[theBadgeStyle]">{{ badge }}</span>
    <i v-if="icon" :class="icon"></i>
    <slot></slot>      
  </button>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps<{
    btnStyle?: string,
    block?: boolean,
    flat?: boolean,
    disabled?: boolean,
    size?: string,
    icon?: string,
    badge?: string,
    badgeStyle?: string,
}>();

const buttonStyle = computed(() => {
  switch (props.btnStyle) {
    case "app":
      return "btn-app";
    case 'primary':
      return 'btn-primary';
    case 'outline-primary':
      return 'btn-outline-primary';  
    case 'gradient-primary':
      return 'bg-gradient-primary';
    case 'secondary':
      return 'btn-secondary';    
    case 'outline-secondary':
      return 'btn-outline-secondary';     
    case 'gradient-secondary':
      return 'bg-gradient-secondary';
    case 'success':
      return 'btn-success';
    case 'outline-success':
      return 'btn-outline-success';      
    case 'gradient-success':
      return 'bg-gradient-success';      
    case 'info':
      return 'btn-info';
    case 'outline-info':
      return 'btn-outline-info';      
    case 'gradient-info':
      return 'bg-gradient-info';
    case 'danger':
      return 'btn-danger';    
    case 'outline-danger':
      return 'btn-outline-danger';      
    case 'gradient-danger':
      return 'bg-gradient-danger';
    case 'warning':
      return 'btn-warning';
    case 'outline-warning':
      return 'btn-outline-warning';      
    case 'gradient-warning':
      return 'bg-gradient-warning';      
    case 'light':
      return 'btn-light';
    case 'outline-light':
      return 'btn-outline-light';      
    case 'dark':
      return 'btn-dark';  
    case 'outline-dark':
      return 'btn-outline-dark';      
    default:
      return 'btn-default';
  }
});

const buttonBlock = computed(() => {
  if (props.block) {
    return "btn-block";
  }
  return '';
});

const buttonSize = computed(() => {
  switch (props.size) {
    case 'large':
      return 'btn-lg';
    case 'small':
      return 'btn-sm';
    case 'x-small':
      return "btn-xs";
    default:
      return '';
  }
});

const flatButton = computed(() => {
    if (props.flat) {
        return 'btn-flat';
    }
    return '';
});

const disabledButton = computed(() => {
  if (props.disabled) {
    return 'disabled';
  }
  return '';
});

const theBadgeStyle = computed(() => {
  switch(props.badgeStyle) {
    case 'primary':
      return 'bg-primary';
    case 'secondary':
      return 'bg-secondary';
    case 'success':
      return 'bg-success';
    case 'info':
      return 'bg-info';
    case 'danger':
      return 'bg-danger';
    case 'warning':
      return 'bg-warning';
    default:
      return "bg-default";
  }
});
</script>