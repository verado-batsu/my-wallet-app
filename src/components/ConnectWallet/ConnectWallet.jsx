import { ethers, formatEther } from 'ethers';
import { useState } from 'react';
import { MetaMaskSDK } from '@metamask/sdk';

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
    const [showModal, setShowModal] = useState(false);
    const [userAccount, setUserAccount] = useState(null);
    const [balance, setBalance] = useState(0);

    function isMetaMaskInstalled() {
        return Boolean(window.ethereum && window.ethereum.isMetaMask);
    }

    async function onConnect() {
        if (isMetaMaskInstalled()) {
            new MetaMaskSDK({
                useDeeplink: false,
                communicationLayerPreference: 'socket',
            });
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();

            const balance = await provider.getBalance(signer.address);
            setBalance(Number(formatEther(balance)).toFixed(3));
            setUserAccount(signer);
            closeModal();
        } else {
            setShowModal(true);
        }
    }

    function closeModal() {
        setShowModal(false);
    }

    function transformAddress(address) {
        return `${address.slice(0, 3)}...${address.slice(
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
