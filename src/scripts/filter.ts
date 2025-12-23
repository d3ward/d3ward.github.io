/**
 * Filter functionality for ESAE page
 * Handles filtering of items by category/group
 */

export function initFilter() {
    const filterButtons = document.querySelectorAll('[data-group]');
    const filterItems = document.querySelectorAll('[data-groups]');

    if (!filterButtons.length || !filterItems.length) {
        return;
    }

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const group = button.getAttribute('data-group');

            // Update active state
            filterButtons.forEach((btn) => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter items
            filterItems.forEach((item) => {
                const groups = item.getAttribute('data-groups') || '';

                if (group === 'all' || groups.includes(group as string)) {
                    (item as HTMLElement).style.display = '';
                    item.classList.add('_aos-bottom');
                } else {
                    (item as HTMLElement).style.display = 'none';
                    item.classList.remove('_aos-bottom');
                }
            });
        });
    });
}

// Auto-initialize when DOM is ready
if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFilter);
    } else {
        initFilter();
    }
}
