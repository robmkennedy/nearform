/**
 * Used to throttle a function. The supplied callback function will only be called
 * after a delay of the specified number (default 250).
 */
export const throttle = (callback: (args?: any[]) => void, delay: number = 250) => {
    let shouldWait = false;

    return (...args: any[]) => {
        if (shouldWait) {
            return;
        }
        shouldWait = true;

        callback(...args);

        setTimeout(() => {
            shouldWait = false;
        }, delay);
    };
};
