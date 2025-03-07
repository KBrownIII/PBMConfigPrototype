function startConfig() {
    document.getElementById('landing').style.display = 'none';
    document.getElementById('config').style.display = 'block';
}

function nextStep(currentStep) {
    if (currentStep === 5) {
        document.getElementById('config').style.display = 'none';
        document.getElementById('results').style.display = 'block';
    } else {
        document.getElementById(`step-${currentStep}`).style.display = 'none';
        document.getElementById(`step-${currentStep + 1}`).style.display = 'block';
        document.querySelector(`.step-num[data-step="${currentStep}"]`).classList.remove('active');
        document.querySelector(`.step-num[data-step="${currentStep + 1}"]`).classList.add('active');
    }
}

function startOver() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('landing').style.display = 'block';
    document.querySelectorAll('.step').forEach(step => step.style.display = 'none');
    document.getElementById('step-1').style.display = 'block';
    document.querySelectorAll('.step-num').forEach(num => num.classList.remove('active'));
    document.querySelector('.step-num[data-step="1"]').classList.add('active');
}

function showModal(message) {
    document.getElementById('modal-text').textContent = message;
    document.getElementById('modal').style.display = 'flex';
}

function hideModal() {
    document.getElementById('modal').style.display = 'none';
}