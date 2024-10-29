<template>
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Modals & Alerts</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active">Modals & Alerts</li>
          </ol>
        </div>
      </div>
    </div>
  </section>  
  <section class="content">
    <div class="content-fluid">
      <div class="row">
        <div class="col-md-12">
          <NixCard card-style="card-primary card-outline">
            <NixCardHeader>
              <h1 class="card-title">
                <i class="fas fa-edit"></i>
                Modal Examples
              </h1>
            </NixCardHeader>
            <NixCardBody>
              <NixButton @click="showModal = true">Launch Default Modal</NixButton>
              <NixButton @click="showPrimaryModal = true" btn-style="primary">Launch Primary Modal</NixButton>
              <NixButton @click="showSecondaryModal = true" btn-style="secondary">Launch Secondary Modal</NixButton>
              <NixButton @click="showInfoModal = true" btn-style="info">Launch Info Modal</NixButton>
              <NixButton @click="showDangerModal = true" btn-style="danger">Launch Danger Modal</NixButton>
              <NixButton @click="showWarningModal = true" btn-style="warning">Launch Warning Modal</NixButton>
              <NixButton @click="showSuccessModal = true" btn-style="success">Launch Success Modal</NixButton>
              <br><br>
              <NixButton @click="showSmallModal = true" >Launch Small Modal</NixButton>
              <NixButton @click="showLargeModal = true" >Launch Large Modal</NixButton>
              <NixButton @click="showXlargeModal = true" >Launch Extra Large Modal</NixButton>                            
            </NixCardBody>    
          </NixCard>

        </div>
      </div>
    </div>
    <NixModal 
      :show="showModal"
      title="Default Modal"
      @close="showModal = false"            
    >
      <template v-slot:body>
        <p>One fine body…</p>
      </template>

      <template v-slot:footer>        
        <NixButton btn-style="default" @click="showModal = false">Close</NixButton>
        <NixButton btn-style="primary" @click="showModal = false">Save changes</NixButton>
      </template>
    </NixModal> 
    <NixModal 
      :show="showPrimaryModal"
      title="Primary Modal"
      modal-style="primary"
      @close="showPrimaryModal = false"            
    >
      <template v-slot:body>
        <p>One fine body…</p>
      </template>

      <template v-slot:footer>        
        <NixButton btn-style="outline-light" @click="showPrimaryModal = false">Close</NixButton>
        <NixButton btn-style="outline-light" @click="showPrimaryModal = false">Save changes</NixButton>                  
      </template>
    </NixModal>         
    <NixModal 
      :show="showSecondaryModal"
      title="Secondary Modal"
      modal-style="secondary"
      @close="showSecondaryModal = false"            
    >
      <template v-slot:body>
        <p>One fine body…</p>
      </template>

      <template v-slot:footer>
        <NixButton btn-style="outline-light" @click="showSecondaryModal = false">Close</NixButton>
        <NixButton btn-style="outline-light" @click="showSecondaryModal = false">Save changes</NixButton>                  
      </template>
    </NixModal>   
    <NixModal 
      :show="showInfoModal"
      title="Info Modal"
      modal-style="info"
      @close="showInfoModal = false"            
    >
      <template v-slot:body>
        <p>One fine body…</p>
      </template>

      <template v-slot:footer>
        <NixButton btn-style="outline-light" @click="showInfoModal = false">Close</NixButton>
        <NixButton btn-style="outline-light" @click="showInfoModal = false">Save changes</NixButton>                  
      </template>
    </NixModal>
    <NixModal 
      :show="showDangerModal"
      title="Danger Modal"
      modal-style="danger"
      @close="showDangerModal = false"            
    >
      <template v-slot:body>
        <p>One fine body…</p>
      </template>

      <template v-slot:footer>
        <NixButton btn-style="outline-light" @click="showDangerModal = false">Close</NixButton>
        <NixButton btn-style="outline-light" @click="showDangerModal = false">Save changes</NixButton>                  
      </template>
    </NixModal>
    <NixModal 
      :show="showWarningModal"
      title="Warning Modal"
      modal-style="warning"
      @close="showWarningModal = false"            
    >
      <template v-slot:body>
        <p>One fine body…</p>
      </template>

      <template v-slot:footer>
        <NixButton btn-style="outline-dark" @click="showWarningModal = false">Close</NixButton>
        <NixButton btn-style="outline-dark" @click="showWarningModal = false">Save changes</NixButton>                  
      </template>
    </NixModal>
    <NixModal 
      :show="showSuccessModal"
      title="Success Modal"
      modal-style="success"
      @close="showSuccessModal = false"            
    >
      <template v-slot:body>
        <p>One fine body…</p>
      </template>

      <template v-slot:footer>
        <NixButton btn-style="outline-light" @click="showSuccessModal = false">Close</NixButton>
        <NixButton btn-style="outline-light" @click="showSuccessModal = false">Save changes</NixButton>                  
      </template>
    </NixModal>
    <NixModal 
      :show="showSmallModal"
      title="Small Modal"
      modal-style="default"
      modal-size="small"
      @close="showSmallModal = false"            
    >
      <template v-slot:body>
        <p>One fine body…</p>
      </template>

      <template v-slot:footer>
        <NixButton btn-style="default" @click="showSmallModal = false">Close</NixButton>
        <NixButton btn-style="primary" @click="showSmallModal = false">Save changes</NixButton>                  
      </template>
    </NixModal>
    <NixModal 
      :show="showLargeModal"
      title="Large Modal"
      modal-style="default"
      modal-size="large"
      @close="showLargeModal = false"            
    >
      <template v-slot:body>
        <p>One fine body…</p>
      </template>

      <template v-slot:footer>
        <NixButton btn-style="default" @click="showLargeModal = false">Close</NixButton>
        <NixButton btn-style="primary" @click="showLargeModal = false">Save changes</NixButton>                  
      </template>
    </NixModal>
    <NixModal 
      :show="showXlargeModal"
      title="Extra Large Modal"
      modal-style="default"
      modal-size="xlarge"
      @close="showXlargeModal = false"            
    >
      <template v-slot:body>
        <p>One fine body…</p>
      </template>

      <template v-slot:footer>
        <NixButton btn-style="default" @click="showXlargeModal = false">Close</NixButton>
        <NixButton btn-style="primary" @click="showXlargeModal = false">Save changes</NixButton>                  
      </template>
    </NixModal>
  </section>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import NixModal from '@/components/modal/NixModal.vue';
import NixCard from '@/components/card/NixCard.vue';
import NixCardHeader from '@/components/card/NixCardHeader.vue';
import NixCardBody from '@/components/card/NixCardBody.vue';
import NixButton from '@/components/button/NixButton.vue';

const showModal = ref(false);
const showPrimaryModal = ref(false);
const showSecondaryModal = ref(false);
const showInfoModal = ref(false);
const showDangerModal = ref(false);
const showWarningModal = ref(false);
const showSuccessModal = ref(false);
const showSmallModal = ref(false);
const showLargeModal = ref(false);
const showXlargeModal = ref(false);

const formData = ref({
	firstName: '',
	lastName: '',
	address: '',
	country: '',
  state: '',
  city: '',
  selectedOption: '',
  selectedCheckboxes: [] as string[],
  dropdownOption: ''
});

const handleSubmit = () => {
  console.log('Form submitted:', JSON.stringify(formData.value));
  showModal.value = false;
};

const handleReset = () => {
  console.log('Form reset');
  formData.value = {
    firstName: '',
    lastName: '',
    address: '',
    country: '',
    state: '',
    city: '',
    selectedOption: '',
    selectedCheckboxes: [],
    dropdownOption: ''
  };
};

const handleValidationSuccess = () => {
  console.log('Validation successful');
};

const handleValidationError = () => {
  console.log('Validation error');
};

const validateFirstName = (value: string) => {
  if (!value) {
    return 'First name is required';
  }
  if (value.length < 2) {
    return 'First name must be at least 2 characters';
  }
  return null;
};

const validateLastName = (value: string) => {
  if (!value) {
    return 'Last name is required';
  }
  if (value.length < 3) {
    return 'Last name must be at least 3 characters';
  }
  return null;  
};

const radioOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const checkboxOptions = [
  { value: 'checkbox1', label: 'Checkbox 1' },
  { value: 'checkbox2', label: 'Checkbox 2' },
  { value: 'checkbox3', label: 'Checkbox 3' },
  { value: 'checkbox4', label: 'Checkbox 4' },
];

const dropdownOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
];

const validateSelection = (value: string | string[]) => {
  if (Array.isArray(value)) {
    return value.length > 0 ? null : 'At least one option must be selected';
  } else {
    return value ? null : 'An option must be selected';
  }
};
</script>
  
<style scoped>
.form-component {
	margin-bottom: 1rem;
}
</style>
  