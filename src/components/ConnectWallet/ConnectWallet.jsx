import { ethers } from 'ethers';
import { useState } from 'react';

import {
    ConnectWalletButton,
    UserWallet,
    WalletAddress,
    WalletBalance,
} from './ConnectWallet.styled';

import { Modal } from '../Modal/Modal';

/**
	depend
	parrot
	yellow
	crater
	regret
	approve
	crucial
	clarify
	army
	violin
	first
	rent
 */

export function ConnectWallet() {
    const [userAccount, setUserAccount] = useState(null);
    const [showModal, setShowModal] = useState(false);

    async function onConnect() {
        if (window.ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();

            console.log(signer);
            setUserAccount(signer);
            closeModal();
        } else {
            setShowModal(true);
        }
    }

    function closeModal() {
        setShowModal(false);
    }

    return (
        <>
            {showModal && <Modal closeModal={closeModal} />}
            {userAccount ? (
                <UserWallet>
                    <WalletBalance>0</WalletBalance>
                    <WalletAddress>{userAccount.address}</WalletAddress>
                </UserWallet>
            ) : (
                <ConnectWalletButton type="button" onClick={onConnect}>
                    Connect Wallet
                </ConnectWalletButton>
            )}
        </>
    );
}
