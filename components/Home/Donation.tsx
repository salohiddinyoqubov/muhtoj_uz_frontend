import React, { useState, useRef, useEffect } from 'react';
import { Switch } from '@mui/material';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import styles from './Payment.module.css';
import Swal from 'sweetalert2';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

interface DonationProps {
    onCloseModal: () => void;
    isOpen: boolean;
}

const Donation: React.FC<DonationProps> = ({ onCloseModal, isOpen }) => {
    const [amount, setAmount] = useState('');
    const [showPhoneNumberInput, setShowPhoneNumberInput] = useState(true);
    const [country, setCountry] = useState('UZ');
    const [phoneNumber, setPhoneNumber] = useState('');
    const amountInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Set the initial country code to 'UZ' (+998) when the component mounts
        setCountry('UZ');
    }, []);

    const handleDonate = async () => {
        // Check if amount is entered
        if (amount.trim() === '') {
            alert('Iltimos, summani kiriting');
            return;
        }

        // Optionally, you can check if the phone number is entered
        if (showPhoneNumberInput && !phoneNumber) {
            alert('Iltimos, telefon raqamingizni kiriting');
            return;
        }

        try {
            // Send donation data to the server using fetch
            const response = await fetch('http://localhost:8000/api/v1/donations/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: amount,
                    phone_number:  phoneNumber
                })
            });

            // Check if request was successful (status code 200-299)
            if (!response.ok) {
                throw new Error('Server response was not ok');
            }

            // Optionally, you can handle the response here
            const responseData = await response.json();
            console.log('Donation response:', responseData);

            // Show success message using SweetAlert
            Swal.fire({
                title: 'Ehsoningiz uchun tashakkur!',
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then(() => {
                // Close modal after successful donation
                onCloseModal();
            });
        } catch (error) {
            // Handle errors
            console.error('Error while donating: ' + error);
            alert('Xatolik yuz berdi, iltimos, qayta urinib ko\'ring.');
        }
        onCloseModal();
    };

    const handleAmountSelection = (selectedAmount: string) => {
        setAmount(selectedAmount);
    };

    const handleCancel = () => {
        // Close the modal when Cancel button is clicked
        onCloseModal();
    };

    const handleOtherAmount = () => {
        setAmount('');
        amountInputRef.current?.focus(); // Focus on amount input when "Boshqa summa" button is clicked
    };

    // Function to format the entered amount as money
    const formatAmount = (value: string) => {
        // Convert value to number
        const numberValue = parseFloat(value.replace(/[^\d.]/g, ''));
        // Check if value is a valid number
        if (!isNaN(numberValue)) {
            // Format as money
            const formattedAmount = numberValue.toLocaleString('uz-UZ', { style: 'currency', currency: 'UZS' });
            // Remove decimal part
            return formattedAmount.split('.')[0];
        }
        // Return empty string if value is not a valid number
        return '';
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onCloseModal}
            contentLabel="Payment Modal"
            className={styles.modal}
            overlayClassName={styles.modalOverlay}
        >
            <h2>Ehson qilish</h2>
            <div className={styles.amountButtons}>
                <button className={styles.amountButton} onClick={() => handleAmountSelection('25000')}>UZS 25 000</button>
                <button className={styles.amountButton} onClick={() => handleAmountSelection('50000')}>UZS 50 000</button>
                <button className={styles.amountButton} onClick={() => handleAmountSelection('100000')}>UZS 100 000</button>
                <button className={styles.amountButton} onClick={() => handleAmountSelection('200000')}>UZS 200 000</button>
                <button className={styles.amountButton} onClick={() => handleAmountSelection('500000')}>UZS 500 000</button>
                <button className={styles.amountButton} onClick={() => handleAmountSelection('1000000')}>UZS 1000 000</button>
                <button className={styles.amountButton} onClick={handleOtherAmount}>Boshqa summa</button>
            </div>
            {/* Toggle button for phone number input */}
            <div className={styles.toggle}>
                <span>Telefon raqamingiz</span>
                <Switch
                    checked={showPhoneNumberInput}
                    onChange={() => setShowPhoneNumberInput(!showPhoneNumberInput)}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </div>
            {showPhoneNumberInput && (
                <div className="flex items-center mb-4">
                    <PhoneInput
                        country={country}
                        countryCodeEditable
                        value='998'
                        onChange={(phone, countryData) => {
                            // Reset country to 'UZ' whenever a different country is selected
                            if (countryData?.iso2 !== 'UZ') {
                                setCountry('UZ');
                            } else {
                                setCountry(countryData?.dialCode || 'UZ');
                            }
                            // Update phone number
                            setPhoneNumber(phone);
                        }}
                    />
                </div>
            )}
            <input ref={amountInputRef} type="text" placeholder="Enter amount UZS" value={formatAmount(amount)} onChange={e => setAmount(e.target.value)} />
            {/* Donation and Cancel buttons */}
            <div className={styles.modalButtons}>
                <button className={styles.donateButton} onClick={handleDonate}>Donate</button>
                <button className={styles.cancelButton} onClick={handleCancel}>Yopish</button>
            </div>
        </Modal>
    );
};

export default Donation;
