export interface Box {
    id: string;
    name: string;
    iconUrl: string;
    cost: number;
}

export interface Wallet {
    id: string;
    amount: number;
    currency: string;
}

export interface currentUser {
    id: string;
    name: string;
    wallets: Wallet[];
}