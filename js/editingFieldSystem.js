function automatedEditingFieldSystem(clickingBtnId, editingFieldId){
    document.getElementById(clickingBtnId).addEventListener('click', function(){
        const EditingField = document.getElementById(editingFieldId);
        EditingField.style.display = 'block';
    })
}

automatedEditingFieldSystem('triangle-editing-btn', 'triangle-editing-field');
automatedEditingFieldSystem('rectangle-editing-btn', 'rectangle-editing-field');
automatedEditingFieldSystem('parallelogram-editing-btn', 'parallelogram-editing-field');
automatedEditingFieldSystem('rhombus-editing-btn', 'rhombus-editing-field');
automatedEditingFieldSystem('pentagon-editing-btn', 'pentagon-editing-field');
automatedEditingFieldSystem('ellipse-editing-btn', 'ellipse-editing-field');