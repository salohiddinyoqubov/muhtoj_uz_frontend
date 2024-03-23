import React, { useState } from 'react';
import Donation from './Donation';

const DonationButton: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <ul className="cart">
                <li className="cart-list d-lg-inline-block">
                    <button className="btn-primary-fill text-uppercase" onClick={openModal}>
                        <span className="pera">Ehson qilish</span>
                    </button>
                </li>
            </ul>
            <Donation isOpen={isModalOpen} onCloseModal={closeModal} />
        </>
    );
};

export default DonationButton;
