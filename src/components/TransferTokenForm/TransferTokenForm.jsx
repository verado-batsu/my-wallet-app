import { useState } from 'react';
import { ethers, formatEther, parseEther } from 'ethers';

import { Button, Form, Input, Label } from './TransferTokenForm.styled';

import { useUser } from '../../context/UserAccountContext';

export function TransferTokenForm() {
    const { userAccount, setBalance, setStateOfTransaction } = useUser();

    const [walletAddress, setWalletAddress] = useState('');
    const [amount, setAmount] = useState('');

    async function transferTokenForm(e) {
        e.preventDefault();

        try {
            if (!userAccount) {
                alert('First you should connect your wallet');
                return;
            }

            if (!walletAddress || !amount) {
                alert('You should input address and number of token');
                return;
            }

            const tx = await userAccount.sendTransaction({
                to: walletAddress,
                value: parseEther(amount),
            });

            const receipt = await tx.wait();

            const provider = new ethers.BrowserProvider(window.ethereum);
            const balance = await provider.getBalance(userAccount.address);
            setBalance(Number(formatEther(balance)).toFixed(3));

            setStateOfTransaction(receipt);
        } catch (error) {
            console.log(error);
        }

        resetForm();
    }

    function resetForm() {
        setWalletAddress('');
        setAmount('');
    }

    return (
        <Form onSubmit={transferTokenForm}>
            <Label>
                <Input
                    onChange={e => setWalletAddress(e.target.value.trim())}
                    type="text"
                    placeholder="Wallet address"
                    value={walletAddress}
                />
            </Label>
            <Label>
                <Input
                    onChange={e => setAmount(e.target.value.trim())}
                    type="text"
                    placeholder="Amount"
                    value={amount}
                />
            </Label>
            <Button type="submit">Transfer</Button>
        </Form>
    );
}
