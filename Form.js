function showAdditionalOptions(selectedOption) {
    const additionalOptions = document.getElementById('additionalOptions');
    if (selectedOption === 'option1') {
      additionalOptions.style.display = 'block';
    } else {
      additionalOptions.style.display = 'none';
    }
  }
  