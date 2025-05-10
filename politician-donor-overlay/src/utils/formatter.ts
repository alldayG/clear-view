import { format } from 'date-fns';

export const formatTimestamp = (timestamp: number): string => {
    return format(new Date(timestamp), 'yyyy-MM-dd HH:mm:ss');
};

export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(amount);
};

export const formatDonorData = (donor: { name: string; amount: number; industry: string }): string => {
    return `${donor.name} (${donor.industry}): ${formatCurrency(donor.amount)}`;
};