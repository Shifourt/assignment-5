function automatedStringToNumberGivingProgram(valueId){
    const valueTag = document.getElementById(valueId);
    const valueString = valueTag.innerText;
    const value = parseInt(valueString);
    return value;
}
// triangle
document.getElementById('triangle-submit-btn').addEventListener('click', function(){
    const outputList = document.getElementById('output-list');
    const CalculationFieldFirstValue = automatedStringToNumberGivingProgram('triangle-first-number-calculation-field-value');
    const CalculationFieldSecondValue = automatedStringToNumberGivingProgram('triangle-second-number-calculation-field-value');
    const areaCalculation = 0.5 * CalculationFieldFirstValue * CalculationFieldSecondValue;
    if(isNaN(areaCalculation)){
        alert('Please put a number!')
    }else{
        const li = document.createElement("li");
        li.className = 'mb-2 ml-10'
        li.innerHTML = `
            <div class='flex justify-between'>
                <div>
                <p class='flex'>Triangle<span class='ml-2' id='centimeter-value'>${areaCalculation}</span><span id='centimeter'>cm</span>&sup2</p>
                </div>
                <div class='flex'>
                <button id='convert-meter' class="bg-blue-700 text-white py-1 rounded">Convert to m&sup2</button>
                <button class='text-2xl ml-2' onclick="this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode);"><i class="fa-regular fa-circle-xmark"></i></button>
                </div>
            </div>
        `;
        
        // initial output
        outputList.appendChild(li);

        document.getElementById('convert-meter').addEventListener('click', function(){
            const centimeterToMeter = areaCalculation * 0.01;
            const meterValue = centimeterToMeter;
            const centimeterValue = document.getElementById('centimeter-value');
            centimeterValue.value = meterValue;
            const centimeter = document.getElementById('centimeter');
            centimeter.innerText = 'm'
        })
    }
})
// rectangle
document.getElementById('rectangle-submit-btn').addEventListener('click', function(){
    const outputList = document.getElementById('output-list');
    const CalculationFieldFirstValue = automatedStringToNumberGivingProgram('rectangle-first-number-calculation-field-value');
    const CalculationFieldSecondValue = automatedStringToNumberGivingProgram('rectangle-first-number-calculation-field-value');
    const areaCalculation = CalculationFieldFirstValue * CalculationFieldSecondValue;
    if(isNaN(areaCalculation)){
        alert('Please put a number!')
    }else{
        const li = document.createElement("li");
        li.className = 'mb-2 ml-10'
        li.innerHTML = `
            <div class='flex justify-between'>
                <div>
                <p class='flex'>Rectangle<span class='ml-2' id='centimeter-value'>${areaCalculation}</span><span id='centimeter'>cm</span>&sup2</p>
                </div>
                <div class='flex'>
                <button id='convert-meter' class="bg-blue-700 text-white py-1 rounded">Convert to m&sup2</button>
                <button class='text-2xl ml-2' onclick="this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode);"><i class="fa-regular fa-circle-xmark"></i></button>
                </div>
            </div>
        `;
        
        // initial output
        outputList.appendChild(li);

        document.getElementById('convert-meter').addEventListener('click', function(){
            const centimeterToMeter = areaCalculation * 0.01;
            const meterValue = centimeterToMeter;
            const centimeterValue = document.getElementById('centimeter-value');
            centimeterValue.value = meterValue;
            const centimeter = document.getElementById('centimeter');
            centimeter.innerText = 'm'
        })
    }
})
// parallelogram
document.getElementById('parallelogram-submit-btn').addEventListener('click', function(){
    const outputList = document.getElementById('output-list');
    const CalculationFieldFirstValue = automatedStringToNumberGivingProgram('parallelogram-first-number-calculation-field-value');
    const CalculationFieldSecondValue = automatedStringToNumberGivingProgram('parallelogram-first-number-calculation-field-value');
    const areaCalculation = CalculationFieldFirstValue * CalculationFieldSecondValue;
    if(isNaN(areaCalculation)){
        alert('Please put a number!')
    }else{
        const li = document.createElement("li");
        li.className = 'mb-2 ml-10'
        li.innerHTML = `
            <div class='flex justify-between'>
                <div>
                <p class='flex'>Parallelogram<span class='ml-2' id='centimeter-value'>${areaCalculation}</span><span id='centimeter'>cm</span>&sup2</p>
                </div>
                <div class='flex'>
                <button id='convert-meter' class="bg-blue-700 text-white py-1 rounded">Convert to m&sup2</button>
                <button class='text-2xl ml-2' onclick="this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode);"><i class="fa-regular fa-circle-xmark"></i></button>
                </div>
            </div>
        `;
        
        // initial output
        outputList.appendChild(li);

        document.getElementById('convert-meter').addEventListener('click', function(){
            const centimeterToMeter = areaCalculation * 0.01;
            const meterValue = centimeterToMeter;
            const centimeterValue = document.getElementById('centimeter-value');
            centimeterValue.value = meterValue;
            const centimeter = document.getElementById('centimeter');
            centimeter.innerText = 'm'
        })
    }
})
// rhombus
document.getElementById('rhombus-submit-btn').addEventListener('click', function(){
    const outputList = document.getElementById('output-list');
    const CalculationFieldFirstValue = automatedStringToNumberGivingProgram('rhombus-first-number-calculation-field-value');
    const CalculationFieldSecondValue = automatedStringToNumberGivingProgram('rhombus-first-number-calculation-field-value');
    const areaCalculation = 0.5 * CalculationFieldFirstValue * CalculationFieldSecondValue;
    if(isNaN(areaCalculation)){
        alert('Please put a number!')
    }else{
        const li = document.createElement("li");
        li.className = 'mb-2 ml-10'
        li.innerHTML = `
            <div class='flex justify-between'>
                <div>
                <p class='flex'>Rhombus<span class='ml-2' id='centimeter-value'>${areaCalculation}</span><span id='centimeter'>cm</span>&sup2</p>
                </div>
                <div class='flex'>
                <button id='convert-meter' class="bg-blue-700 text-white py-1 rounded">Convert to m&sup2</button>
                <button class='text-2xl ml-2' onclick="this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode);"><i class="fa-regular fa-circle-xmark"></i></button>
                </div>
            </div>
        `;
        
        // initial output
        outputList.appendChild(li);

        document.getElementById('convert-meter').addEventListener('click', function(){
            const centimeterToMeter = areaCalculation * 0.01;
            const meterValue = centimeterToMeter;
            const centimeterValue = document.getElementById('centimeter-value');
            centimeterValue.value = meterValue;
            const centimeter = document.getElementById('centimeter');
            centimeter.innerText = 'm'
        })
    }
})
// pentagon
document.getElementById('pentagon-submit-btn').addEventListener('click', function(){
    const outputList = document.getElementById('output-list');
    const CalculationFieldFirstValue = automatedStringToNumberGivingProgram('pentagon-first-number-calculation-field-value');
    const CalculationFieldSecondValue = automatedStringToNumberGivingProgram('pentagon-first-number-calculation-field-value');
    const areaCalculation = 0.5 * CalculationFieldFirstValue * CalculationFieldSecondValue;
    if(isNaN(areaCalculation)){
        alert('Please put a number!')
    }else{
        const li = document.createElement("li");
        li.className = 'mb-2 ml-10'
        li.innerHTML = `
            <div class='flex justify-between'>
                <div>
                <p class='flex'>Pentagon<span class='ml-2' id='centimeter-value'>${areaCalculation}</span><span id='centimeter'>cm</span>&sup2</p>
                </div>
                <div class='flex'>
                <button id='convert-meter' class="bg-blue-700 text-white py-1 rounded">Convert to m&sup2</button>
                <button class='text-2xl ml-2' onclick="this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode);"><i class="fa-regular fa-circle-xmark"></i></button>
                </div>
            </div>
        `;
        
        // initial output
        outputList.appendChild(li);

        document.getElementById('convert-meter').addEventListener('click', function(){
            const centimeterToMeter = areaCalculation * 0.01;
            const meterValue = centimeterToMeter;
            const centimeterValue = document.getElementById('centimeter-value');
            centimeterValue.value = meterValue;
            const centimeter = document.getElementById('centimeter');
            centimeter.innerText = 'm'
        })
    }
})
// ellipse
document.getElementById('ellipse-submit-btn').addEventListener('click', function(){
    const outputList = document.getElementById('output-list');
    const CalculationFieldFirstValue = automatedStringToNumberGivingProgram('ellipse-first-number-calculation-field-value');
    const CalculationFieldSecondValue = automatedStringToNumberGivingProgram('ellipse-first-number-calculation-field-value');
    const areaCalculation = 3.14 * CalculationFieldFirstValue * CalculationFieldSecondValue;
    if(isNaN(areaCalculation)){
        alert('Please put a number!')
    }else{
        const li = document.createElement("li");
        li.className = 'mb-2 ml-10'
        li.innerHTML = `
            <div class='flex justify-between'>
                <div>
                <p class='flex'>Ellipse<span class='ml-2' id='centimeter-value'>${areaCalculation}</span><span id='centimeter'>cm</span>&sup2</p>
                </div>
                <div class='flex'>
                <button id='convert-meter' class="bg-blue-700 text-white py-1 rounded">Convert to m&sup2</button>
                <button class='text-2xl ml-2' onclick="this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode);"><i class="fa-regular fa-circle-xmark"></i></button>
                </div>
            </div>
        `;
        
        // initial output
        outputList.appendChild(li);

        document.getElementById('convert-meter').addEventListener('click', function(){
            const centimeterToMeter = areaCalculation * 0.01;
            const meterValue = centimeterToMeter;
            const centimeterValue = document.getElementById('centimeter-value');
            centimeterValue.value = meterValue;
            const centimeter = document.getElementById('centimeter');
            centimeter.innerText = 'm'
        })
    }
})