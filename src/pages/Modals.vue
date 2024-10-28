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
              <NixButton @click="showPrimayModal = true" btn-style="primary">Launch Primary Modal</NixButton>
              <NixButton @click="showModal = true" btn-style="secondary">Launch Secondary Modal</NixButton>
              <NixButton @click="showModal = true" btn-style="info">Launch Info Modal</NixButton>
              <NixButton @click="showModal = true" btn-style="danger">Launch Danger Modal</NixButton>
              <NixButton @click="showModal = true" btn-style="warning">Launch Warning Modal</NixButton>
              <NixButton @click="showModal = true" btn-style="success">Launch Success Modal</NixButton>
              <br><br>
              <NixButton @click="showModal = true" >Launch Small Modal</NixButton>
              <NixButton @click="showModal = true" >Launch Large Modal</NixButton>
              <NixButton @click="showModal = true" >Launch Extra Large Modal</NixButton>
              <br><br>
              <NixButton @click="showModal = true" >Launch Modal with Overlay</NixButton>
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
        <NixForm
            @submit="handleSubmit"
            @reset="handleReset" 
            @validation-success="handleValidationSuccess" 
            @validation-error="handleValidationError">
          <NixFormGroup :columns="2" caption="Personal Information">
            <template #default>
              <NixTextField
                :modelValue="formData.firstName"
                @update:modelValue="formData.firstName = $event"
                label="First Name"
                id="first-name"
                :validateField="validateFirstName"
              />
              <NixTextField 
                :modelValue="formData.lastName"
                @update:modelValue="formData.lastName = $event"
                label="Last Name"
                id="last-name"
                :validate-field="validateLastName"/>
            </template>
          </NixFormGroup>
          <NixFormGroup :columns="2" caption="Contact Information">
            <div class="form-group">
              <label for="address">Address</label>
              <input type="text" id="address" class="form-control" v-model="formData.address" />
            </div>
            <div class="form-group">
              <label for="country">Country</label>
              <input type="text" id="country" class="form-control" v-model="formData.country" />
            </div>
            <div class="form-group">
              <label for="state">State</label>
              <input type="text" id="state" class="form-control" v-model="formData.state" />
            </div>              
            <div class="form-group">
              <label for="city">City</label>
              <input type="text" id="city" class="form-control" v-model="formData.city" />
            </div>
          </NixFormGroup>

          <NixFormGroup :columns="2" caption="Options components">
            <NixOptionGroup
              :modelValue="formData.selectedOption"
              @update:modelValue="(value: any) => formData.selectedOption = value"
              :options="radioOptions"
              label="Choose an option"
              type="radio"
              name="exampleRadio"
              :validateField="validateSelection"
            />
            <NixOptionGroup
              :modelValue="formData.selectedCheckboxes"
              @update:modelValue="(value: any) => formData.selectedCheckboxes = value"
              :options="checkboxOptions"
              label="Choose multiple options"
              type="checkbox"
              name="exampleCheckbox"
              :validateField="validateSelection"
            />

            <NixDropDown
              :modelValue="formData.dropdownOption"
              @update:modelValue="(value: any) => formData.dropdownOption = value"
              :options="dropdownOptions"
              label="Choose an option"
              :validateField="validateSelection"
            />
          </NixFormGroup>
          <div class="text-right">            
            <NixButton type="submit" btn-style="outline-light">Submit</NixButton>
          </div>
        </NixForm>
      </template>

      <template v-slot:footer>        
        <NixButton btn-style="default" @click="showModal = false">Close</NixButton>
        <NixButton type="submit" btn-style="primary" @click="showModal = false">Save changes</NixButton>
      </template>
    </NixModal> 
    <NixModal 
      :show="showPrimayModal"
      title="Primary Modal"
      modal-style="primary"
      @close="showPrimayModal = false"            
    >
      <template v-slot:body>
        <NixForm
            @submit="handleSubmit"
            @reset="handleReset" 
            @validation-success="handleValidationSuccess" 
            @validation-error="handleValidationError">
          <NixFormGroup :columns="2" caption="Personal Information">
            <template #default>
              <NixTextField
                :modelValue="formData.firstName"
                @update:modelValue="formData.firstName = $event"
                label="First Name"
                id="first-name"
                :validateField="validateFirstName"
              />
              <NixTextField 
                :modelValue="formData.lastName"
                @update:modelValue="formData.lastName = $event"
                label="Last Name"
                id="last-name"
                :validate-field="validateLastName"/>
            </template>
          </NixFormGroup>
          <NixFormGroup :columns="2" caption="Contact Information">
            <div class="form-group">
              <label for="address">Address</label>
              <input type="text" id="address" class="form-control" v-model="formData.address" />
            </div>
            <div class="form-group">
              <label for="country">Country</label>
              <input type="text" id="country" class="form-control" v-model="formData.country" />
            </div>
            <div class="form-group">
              <label for="state">State</label>
              <input type="text" id="state" class="form-control" v-model="formData.state" />
            </div>              
            <div class="form-group">
              <label for="city">City</label>
              <input type="text" id="city" class="form-control" v-model="formData.city" />
            </div>
          </NixFormGroup>

          <NixFormGroup :columns="2" caption="Options components">
            <NixOptionGroup
              :modelValue="formData.selectedOption"
              @update:modelValue="(value: any) => formData.selectedOption = value"
              :options="radioOptions"
              label="Choose an option"
              type="radio"
              name="exampleRadio"
              :validateField="validateSelection"
            />
            <NixOptionGroup
              :modelValue="formData.selectedCheckboxes"
              @update:modelValue="(value: any) => formData.selectedCheckboxes = value"
              :options="checkboxOptions"
              label="Choose multiple options"
              type="checkbox"
              name="exampleCheckbox"
              :validateField="validateSelection"
            />

            <NixDropDown
              :modelValue="formData.dropdownOption"
              @update:modelValue="(value: any) => formData.dropdownOption = value"
              :options="dropdownOptions"
              label="Choose an option"
              :validateField="validateSelection"
            />
          </NixFormGroup>
          <div class="text-right">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </NixForm>
      </template>

      <template v-slot:footer>
        <div>
          <button class="btn btn-secondary" @click="showModal = false">Close</button>
        </div>
      </template>
    </NixModal>         
  </section>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import NixForm from '@/components/form/NixForm.vue';
import NixFormGroup from '@/components/form/NixFormGroup.vue';
import NixModal from '@/components/modal/NixModal.vue';
import NixTextField from '@/components/field/NixTextField.vue';
import NixOptionGroup from '@/components/field/NixOptionGroup.vue';
import NixDropDown from '@/components/field/NixDropDown.vue';
import NixCard from '@/components/card/NixCard.vue';
import NixCardHeader from '@/components/card/NixCardHeader.vue';
import NixCardBody from '@/components/card/NixCardBody.vue';
import NixButton from '@/components/button/NixButton.vue';

const showModal = ref(false);
const showPrimayModal = ref(false);

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
  