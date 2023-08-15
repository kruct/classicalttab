function isWindowsOS() {
    return navigator.platform.indexOf('Win') > -1;
}

function showAlert() {
    if (!isWindowsOS()) {
        var alertDiv = document.createElement('div');
        alertDiv.style.position = 'fixed';
        alertDiv.style.top = '50%';
        alertDiv.style.left = '50%';
        alertDiv.style.transform = 'translate(-50%, -50%)';
        alertDiv.style.padding = '20px';
        alertDiv.style.background = '#f8d7da';
        alertDiv.style.border = '1px solid #f5c6cb';
        alertDiv.style.borderRadius = '4px';
        alertDiv.style.textAlign = 'center';
        alertDiv.innerHTML = '<h1>ClassicAltTab is not supported in your system. Please use a Windows environment.</h1>';
        document.body.appendChild(alertDiv);
    }
}

showAlert();
