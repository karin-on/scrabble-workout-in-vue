export const generateId = (): string => `_${Math.random().toString(36).substr(2, 8)}`;
