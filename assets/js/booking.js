/**
 * Debbiehair Booking Form JavaScript
 * Handles form validation and submission
 */

(function() {
    'use strict';

    const BookingForm = {
        init: function() {
            this.form = document.getElementById('bookingForm');
            this.successMessage = document.getElementById('successMessage');
            
            if (!this.form) {
                return;
            }

            this.setupFormValidation();
            this.setupDateValidation();
        },

        setupFormValidation: function() {
            const self = this;
            
            this.form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                if (self.validateForm()) {
                    self.submitForm();
                }
            });

            const inputs = this.form.querySelectorAll('.form-input, .radio-input');
            inputs.forEach(function(input) {
                input.addEventListener('blur', function() {
                    self.validateField(this);
                });

                input.addEventListener('input', function() {
                    if (this.classList.contains('error')) {
                        self.validateField(this);
                    }
                });
            });
        },

        setupDateValidation: function() {
            const dateInput = document.getElementById('appointmentDate');
            if (!dateInput) {
                return;
            }

            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            const minDate = tomorrow.toISOString().split('T')[0];
            dateInput.setAttribute('min', minDate);

            const maxDate = new Date(today);
            maxDate.setMonth(maxDate.getMonth() + 3);
            dateInput.setAttribute('max', maxDate.toISOString().split('T')[0]);
        },

        validateField: function(field) {
            const fieldName = field.name;
            const fieldValue = field.value.trim();
            const errorElement = document.getElementById(fieldName + 'Error');
            
            let errorMessage = '';

            if (field.hasAttribute('required') && !fieldValue) {
                errorMessage = 'This field is required';
            } else if (fieldName === 'email' && fieldValue) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(fieldValue)) {
                    errorMessage = 'Please enter a valid email address';
                }
            } else if (fieldName === 'phone' && fieldValue) {
                const phonePattern = /^[\d\s\-\(\)]+$/;
                if (!phonePattern.test(fieldValue) || fieldValue.replace(/\D/g, '').length < 10) {
                    errorMessage = 'Please enter a valid phone number';
                }
            } else if (fieldName === 'appointmentDate' && fieldValue) {
                const selectedDate = new Date(fieldValue);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                
                if (selectedDate <= today) {
                    errorMessage = 'Please select a future date';
                }
            } else if (fieldName === 'serviceLocation') {
                const checkedRadio = this.form.querySelector('input[name="serviceLocation"]:checked');
                if (!checkedRadio) {
                    errorMessage = 'Please select a service location';
                }
            }

            if (errorElement) {
                errorElement.textContent = errorMessage;
            }

            if (errorMessage) {
                field.classList.add('error');
                return false;
            } else {
                field.classList.remove('error');
                return true;
            }
        },

        validateForm: function() {
            let isValid = true;
            const requiredFields = this.form.querySelectorAll('[required]');
            
            requiredFields.forEach((field) => {
                if (field.type === 'radio') {
                    const radioGroup = this.form.querySelectorAll(`input[name="${field.name}"]`);
                    const isChecked = Array.from(radioGroup).some(radio => radio.checked);
                    
                    if (!isChecked) {
                        const errorElement = document.getElementById(field.name + 'Error');
                        if (errorElement) {
                            errorElement.textContent = 'Please select an option';
                        }
                        isValid = false;
                    }
                } else {
                    if (!this.validateField(field)) {
                        isValid = false;
                    }
                }
            });

            if (!isValid) {
                const firstError = this.form.querySelector('.form-input.error, .radio-input');
                if (firstError) {
                    const formGroup = firstError.closest('.form-group');
                    if (formGroup) {
                        formGroup.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }
            }

            return isValid;
        },

        submitForm: function() {
            const formData = new FormData(this.form);
            const data = {};
            
            formData.forEach(function(value, key) {
                data[key] = value;
            });

            console.log('Booking Data:', data);

            this.form.style.display = 'none';
            this.successMessage.style.display = 'block';

            this.successMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            BookingForm.init();
        });
    } else {
        BookingForm.init();
    }

    window.BookingForm = BookingForm;

})();
