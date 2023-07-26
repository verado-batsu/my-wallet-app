import { useState } from 'react';
import { ethers, formatEther, parseEther } from 'ethers';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Oval } from 'react-loader-spinner';

import {
    Button,
    ErrorMessage,
    Form,
    Input,
    Label,
} from './TransferTokenForm.styled';

import { useUser } from '../../context/UserAccountContext';
import { checkAddressRegexp } from '../../helpers/checkAddressRegexp';

export function TransferTokenForm() {
    const { userAccount, balance, isLoading, setBalance, setIsLoading } =
        useUser();

    const [walletAddress, setWalletAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [isError, serIsError] = useState('');

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

            if (!checkAddressRegexp(walletAddress)) {
                serIsError(
                    'Wrong wallet address entered, please check that the address starts with "0x" and ends with 40 characters [0-9A-F]'
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
            setIsLoading(false);
            Notify.failure('Something went wrong');
            console.log(error.message);
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
                    $isError={isError}
                />
                {isError && <ErrorMessage>{isError}</ErrorMessage>}
            </Label>
            <Label>
                <Input
                    onChange={e => setAmount(e.target.value.trim())}
                    type="number"
                    placeholder="Amount of token"
                    value={amount}
                    min={0.0001}
                    max={balance}
                    step={0.0001}
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
