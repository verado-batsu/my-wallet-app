import { useState } from 'react';
import { ethers, formatEther, parseEther } from 'ethers';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Oval } from 'react-loader-spinner';

import { Button, Form, Input, Label } from './TransferTokenForm.styled';

import { useUser } from '../../context/UserAccountContext';

export function TransferTokenForm() {
    const { userAccount, isLoading, setBalance, setIsLoading } = useUser();

    const [walletAddress, setWalletAddress] = useState('');
    const [amount, setAmount] = useState('');

    async function transferTokenForm(e) {
        e.preventDefault();

        try {
            if (!userAccount) {
                Notify.failure('First you should connect your wallet');
                return;
            }

            if (!walletAddress || !amount) {
                Notify.failure(
                    'You should input wallet address and number of token'
                );
                return;
            }
            setIsLoading(true);

            const tx = await userAccount.sendTransaction({
                to: walletAddress,
                value: parseEther(amount),
            });

            await tx.wait();

            const provider = new ethers.BrowserProvider(window.ethereum);
            const balance = await provider.getBalance(userAccount.address);
            setBalance(Number(formatEther(balance)).toFixed(3));

            Notify.success('Transaction was successful');

            setIsLoading(false);
        } catch (error) {
            Notify.failure(error.message);
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
            <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                    <Oval
                        height={40}
                        width={40}
                        color="#5cd4f1"
                        visible={true}
                        wrapperClass="loader"
                        ariaLabel="oval-loading"
                        secondaryColor="#5cd4f1"
                        strokeWidth={6}
                        strokeWidthSecondary={6}
                    />
                ) : (
                    'Transfer'
                )}
            </Button>
        </Form>
    );
}
