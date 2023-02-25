function informationApplyingSystem(applyBtnId, firstInformationInputId, secondInformationInputId, PreviousFirstInformationInputId, PreviousSecondInformationInputId, CalculationFieldFirstValueId, CalculationFieldSecondValueId){
    document.getElementById(applyBtnId).addEventListener('click', function(){
        const firstInformationInput = document.getElementById(firstInformationInputId);
        const newFirstInformationInput = firstInformationInput.value;
        const secondInformationInput = document.getElementById(secondInformationInputId);
        const newSecondInformationInput = secondInformationInput.value;
        
        const PreviousFirstInformation = document.getElementById(PreviousFirstInformationInputId);
        const PreviousSecondInformation = document.getElementById(PreviousSecondInformationInputId);
        const CalculationFieldFirstValue = document.getElementById(CalculationFieldFirstValueId);
        const CalculationFieldSecondValue = document.getElementById(CalculationFieldSecondValueId);
        
        if(isNaN(newFirstInformationInput) || isNaN(newSecondInformationInput)){
            alert('please do not put words in the input field!! and ')
        }else if(newFirstInformationInput <= -1 || newSecondInformationInput <= -1){
            alert('please do not put negative numbers in the input field!!')
        }else if(newFirstInformationInput === '' || newSecondInformationInput === ''){
            alert('please do not leave the input field empty')
        }else if(CalculationFieldFirstValue.innerText === 'a' && CalculationFieldSecondValue.innerText === 'b'){
            PreviousFirstInformation.innerText = newFirstInformationInput;
            PreviousSecondInformation.innerText = newSecondInformationInput;
            CalculationFieldFirstValue.innerText = newFirstInformationInput + '*';
            CalculationFieldSecondValue.innerText = newSecondInformationInput;
        }
        else{
            PreviousFirstInformation.innerText = newFirstInformationInput;
            PreviousSecondInformation.innerText = newSecondInformationInput;
            CalculationFieldFirstValue.innerText = newFirstInformationInput;
            CalculationFieldSecondValue.innerText = newSecondInformationInput;
        }
    })
}

// Triangle
informationApplyingSystem('triangle-apply-btn', 'triangle-first-number-input', 'triangle-second-number-input', 'triangle-first-number-value', 'triangle-second-number-value', 'triangle-first-number-calculation-field-value', 'triangle-second-number-calculation-field-value')
// Rectangle
informationApplyingSystem('rectangle-apply-btn', 'rectangle-first-number-input', 'rectangle-second-number-input', 'rectangle-first-number-value', 'rectangle-second-number-value', 'rectangle-first-number-calculation-field-value', 'rectangle-second-number-calculation-field-value')
// Parallelogram
informationApplyingSystem('parallelogram-apply-btn', 'parallelogram-first-number-input', 'parallelogram-second-number-input', 'parallelogram-first-number-value', 'parallelogram-second-number-value', 'parallelogram-first-number-calculation-field-value', 'parallelogram-second-number-calculation-field-value')
// Rhombus
informationApplyingSystem('rhombus-apply-btn', 'rhombus-first-number-input', 'rhombus-second-number-input', 'rhombus-first-number-value', 'rhombus-second-number-value', 'rhombus-first-number-calculation-field-value', 'rhombus-second-number-calculation-field-value')
// Pentagon
informationApplyingSystem('pentagon-apply-btn', 'pentagon-first-number-input', 'pentagon-second-number-input', 'pentagon-first-number-value', 'pentagon-second-number-value', 'pentagon-first-number-calculation-field-value', 'pentagon-second-number-calculation-field-value')
// Ellipse
informationApplyingSystem('ellipse-apply-btn', 'ellipse-first-number-input', 'ellipse-second-number-input', 'ellipse-first-number-value', 'ellipse-second-number-value', 'ellipse-first-number-calculation-field-value', 'ellipse-second-number-calculation-field-value')
