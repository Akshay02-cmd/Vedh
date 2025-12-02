// Sidebar toggle for mobile
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');

sidebarToggle?.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
});

// Logout functionality
document.getElementById('logout-btn')?.addEventListener('click', async (e) => {
    e.preventDefault();
    if (confirm('Are you sure you want to logout?')) {
        // Clear cookies and redirect
        document.cookie.split(";").forEach((c) => {
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        window.location.href = '/login';
    }
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth < 1024) {
        if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
            sidebar.classList.add('-translate-x-full');
        }
    }
});

// Responsive sidebar
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        sidebar.classList.remove('-translate-x-full');
    } else {
        sidebar.classList.add('-translate-x-full');
    }
});

// Initialize sidebar state
if (window.innerWidth < 1024) {
    sidebar.classList.add('-translate-x-full');
}
