const themeToggle = document.getElementById('themeToggle');
const generateBtn = document.getElementById('generateBtn');
const userGrid = document.getElementById('userGrid');
const loadingState = document.getElementById('loadingState');
const errorState = document.getElementById('errorState');
const emptyState = document.getElementById('emptyState');
const welcomeScreen = document.getElementById('welcomeScreen');
const mainApp = document.getElementById('mainApp');
const enterBtn = document.getElementById('enterBtn');

document.getElementById('year').textContent = new Date().getFullYear();

const themes = ['theme-dark', 'theme-light', 'theme-red', 'theme-blue', 'theme-green'];
const themeIcons = ['🌙', '☀️', '🔥', '💧', '🌿'];
let currentThemeIndex = 0;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    currentThemeIndex = themes.indexOf(savedTheme);
    if (currentThemeIndex === -1) currentThemeIndex = 0;
    document.body.className = themes[currentThemeIndex];
} else {
    document.body.className = themes[0];
}
document.querySelector('.theme-icon').textContent = themeIcons[currentThemeIndex];

themeToggle.addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    document.body.className = themes[currentThemeIndex];
    document.querySelector('.theme-icon').textContent = themeIcons[currentThemeIndex];
    localStorage.setItem('theme', themes[currentThemeIndex]);
});

enterBtn.addEventListener('click', () => {
    welcomeScreen.classList.add('hide');
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
        mainApp.style.display = 'block';
    }, 800);
});

function initCustomSelect(selectId, inputId) {
    const customSelect = document.getElementById(selectId);
    const trigger = customSelect.querySelector('.select-trigger');
    const options = customSelect.querySelectorAll('.select-option');
    const hiddenInput = document.getElementById(inputId);

    trigger.addEventListener('click', () => {
        customSelect.classList.toggle('active');
        document.querySelectorAll('.custom-select').forEach(sel => {
            if (sel !== customSelect) sel.classList.remove('active');
        });
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            const value = option.getAttribute('data-value');
            const text = option.textContent;
            
            trigger.querySelector('span').textContent = text;
            hiddenInput.value = value;
            
            options.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            
            customSelect.classList.remove('active');
        });
    });
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.custom-select')) {
        document.querySelectorAll('.custom-select').forEach(sel => {
            sel.classList.remove('active');
        });
    }
});

initCustomSelect('genderSelect', 'gender');
initCustomSelect('nationalitySelect', 'nationality');

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function createUserCard(user) {
    const fullName = `${user.title} ${user.first_name} ${user.last_name}`;
    
    return `
        <div class="user-card">
            <div class="user-header">
                <img src="${user.picture_large}" alt="${fullName}" class="user-avatar">
                <div class="user-info">
                    <h3>${user.title} ${user.first_name} ${user.last_name}</h3>
                    <span class="user-badge">${user.gender}</span>
                </div>
            </div>
            
            <div class="user-details">
                <div class="detail-row">
                    <div class="detail-item">
                        <div class="detail-label">👤 First Name</div>
                        <div class="detail-value">${user.first_name}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">👤 Last Name</div>
                        <div class="detail-value">${user.last_name}</div>
                    </div>
                </div>
                
                <div class="detail-item full-width">
                    <div class="detail-label email">✉️ Email</div>
                    <div class="detail-value">${user.email}</div>
                </div>
                
                <div class="detail-row">
                    <div class="detail-item">
                        <div class="detail-label phone">📱 Phone</div>
                        <div class="detail-value">${user.phone}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label phone">📞 Cell</div>
                        <div class="detail-value">${user.cell}</div>
                    </div>
                </div>
                
                <div class="detail-row">
                    <div class="detail-item">
                        <div class="detail-label location">🏠 Street</div>
                        <div class="detail-value">${user.street_number} ${user.street_name}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label location">🏙️ City</div>
                        <div class="detail-value">${user.city}</div>
                    </div>
                </div>
                
                <div class="detail-row">
                    <div class="detail-item">
                        <div class="detail-label location">📮 State</div>
                        <div class="detail-value">${user.state}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label location">📬 Zip</div>
                        <div class="detail-value">${user.postcode}</div>
                    </div>
                </div>
                
                <div class="detail-row">
                    <div class="detail-item">
                        <div class="detail-label location">🌍 Country Code</div>
                        <div class="detail-value">${user.nationality}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label location">🗺️ Country</div>
                        <div class="detail-value">${user.country}</div>
                    </div>
                </div>
                
                <div class="detail-row">
                    <div class="detail-item">
                        <div class="detail-label age">🎂 Age</div>
                        <div class="detail-value">${user.age} years old</div>
                        <div style="font-size: 11px; opacity: 0.7; margin-top: 2px;">${formatDate(user.date_of_birth)}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">📅 Registered</div>
                        <div class="detail-value">${user.registered_age} years ago</div>
                        <div style="font-size: 11px; opacity: 0.7; margin-top: 2px;">${formatDate(user.registered_date)}</div>
                    </div>
                </div>
                
                <div class="detail-item full-width">
                    <div class="detail-label username">👤 Username</div>
                    <div class="detail-value" style="font-family: monospace;">${user.username}</div>
                </div>
                
                ${user.id_value ? `
                    <div class="detail-item full-width">
                        <div class="detail-label id">🆔 ID (${user.id_name})</div>
                        <div class="detail-value" style="font-family: monospace;">${user.id_value}</div>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

async function generateUsers() {
    const quantity = document.getElementById('quantity').value;
    const gender = document.getElementById('gender').value;
    const nationality = document.getElementById('nationality').value;
    
    userGrid.style.display = 'none';
    emptyState.style.display = 'none';
    errorState.style.display = 'none';
    loadingState.style.display = 'block';
    
    try {
        const params = new URLSearchParams({ results: quantity });
        if (gender) params.append('gender', gender);
        if (nationality) params.append('nat', nationality);
        
        const response = await fetch(`/api/users?${params.toString()}`);
        const data = await response.json();
        
        if (!data.success) {
            throw new Error(data.error || 'Failed to fetch users');
        }
        
        loadingState.style.display = 'none';
        
        if (data.users.length === 0) {
            emptyState.style.display = 'block';
            return;
        }
        
        userGrid.innerHTML = data.users.map(user => createUserCard(user)).join('');
        userGrid.style.display = 'grid';
        
    } catch (error) {
        loadingState.style.display = 'none';
        errorState.style.display = 'block';
        errorState.querySelector('.error-message').textContent = error.message;
    }
}

generateBtn.addEventListener('click', generateUsers);

document.getElementById('quantity').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') generateUsers();
});
