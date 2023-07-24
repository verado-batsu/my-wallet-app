import { ethers, formatEther } from 'ethers';
import { useState } from 'react';

import {
    ConnectWalletButton,
    UserWallet,
    WalletAddress,
    WalletBalance,
} from './ConnectWallet.styled';

import { Modal } from '../Modal/Modal';
import { useUser } from '../../context/UserAccountContext';

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
    const { userAccount, balance, setUserAccount, setBalance } = useUser();
    const [showModal, setShowModal] = useState(false);

    function isMetaMaskInstalled() {
        return Boolean(window.ethereum && window.ethereum.isMetaMask);
    }

    async function onConnect() {
        try {
            if (isMetaMaskInstalled()) {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();

                const balance = await provider.getBalance(signer.address);
                setBalance(Number(formatEther(balance)).toFixed(3));
                setUserAccount(signer);
                closeModal();
            } else {
                setShowModal(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    function closeModal() {
        setShowModal(false);
    }

    function transformAddress(address) {
        return `${address.slice(0, 5)}...${address.slice(
            address.length - 4,
            address.length - 1
        )}`;
    }

    return (
        <>
            {showModal && <Modal closeModal={closeModal} />}
            {userAccount ? (
                <UserWallet>
                    <WalletBalance>{balance}</WalletBalance>
                    <WalletAddress>
                        {transformAddress(userAccount.address)}
                    </WalletAddress>
                </UserWallet>
            ) : (
                <ConnectWalletButton type="button" onClick={onConnect}>
                    Connect Wallet
                </ConnectWalletButton>
            )}
        </>
    );
}
