import { Button, Form, Input, Label } from './TransferTokenForm.styled';

export function TransferTokenForm() {
    return (
        <Form>
            <Label>
                <Input type="text" placeholder="Wallet address" />
            </Label>
            <Label>
                <Input type="number" placeholder="Amount" />
            </Label>
            <Button type="submit">Transfer</Button>
        </Form>
    );
}
