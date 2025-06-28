/**
 * Utility functions for date and time operations
 */

/**
 * Checks if a given date is today
 */
export const isDateToday = (date: Date): boolean => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
};

/**
 * Formats a date for display - shows "TODAY" for today, otherwise DD/MM/YYYY
 */
export const formatDateDisplay = (date: Date): string => {
    if (isDateToday(date)) {
        return "TODAY";
    }
    return date.toLocaleDateString('en-GB'); // DD/MM/YYYY format
};

/**
 * Returns the previous day from a given date
 */
export const getPreviousDate = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 1);
    return newDate;
};

/**
 * Returns the next day from a given date
 */
export const getNextDate = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    return newDate;
};
