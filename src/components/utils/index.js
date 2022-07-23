export const getPrice =(price) => {
    return new Intl.NumberFormat('id-ID', {
       style:'currency',
       currency:'IDR', 
    }).format(price);
}