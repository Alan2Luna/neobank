export function transformToKilo(valor: number): string {

    if(valor === 0) {
        return '0'
    }
    
    return `${ valor / 1000}K`;

}