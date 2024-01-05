export function myAdd(lhs, rhs){
    if(typeof lhs === 'number' && typeof rhs === 'number')
        return lhs + rhs;
    return NaN;
}