const bmiMetric = (cm, kg) => {
    let meter = cm / 100;
    return (kg / Math.pow(meter, 2)).toFixed(2);
   }
   const bmiImperial = (inch, pound) => {
    let cm = inch * 2.54;
    let kg = pound * 0.45;
    return bmiMetric(cm, kg);
   }

   //metric unit
   console.log('BMI = ' + bmiMetric(170,54));
   //imperial unit
   console.log('BMI = ' + bmiImperial(39,36.5));