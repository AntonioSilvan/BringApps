
export const sanitResult = (result: number) => {
    if(isNaN(result)) return 'Error';
    const validation = !! (result % 1);

    if(!validation) return result.toString();

    return result.toFixed(3);
}