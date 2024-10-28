function BMI(weight, height) {
    let heightInMeters = height / 100;
    let bmi = weight / (heightInMeters * heightInMeters);
    return Math.floor(bmi); // ปัดเศษลง
    
}

function rate(electricity,water,zipphone){
    let sumelectricity = electricity*10;
    let sumwater = water*25;
    let sumzipphone = zipphone*5

    let sumrate = sumelectricity + sumwater + sumzipphone;
    
    return sumrate;
}