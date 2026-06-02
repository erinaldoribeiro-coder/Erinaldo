class Store {
    constructor() {
        this.state = {
            epics: [...seedData.epics],
            issues: [...seedData.issues],
            cycles: [...(seedData.cycles || [])],
            sub_issues: [...(seedData.sub_issues || [])],
            files: [...(seedData.files || [])],
            currentView: 'board' // Default Jira view
        };
        this.listeners = [];
    }

    getState() {
        return this.state;
    }

    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    notify() {
        this.listeners.forEach(listener => listener(this.state));
    }

    // Actions
    navigate(view) {
        this.state.currentView = view;
        this.notify();
    }

    updateIssueStatus(issueId, newStatus) {
        const index = this.state.issues.findIndex(i => i.id === issueId);
        if (index !== -1) {
            this.state.issues[index].status = newStatus;
            this.state.issues[index].updated_at = new Date().toISOString();
            this.notify();
        }
    }

    setFilter(type, value) {
        if (!this.state.filters) {
            this.state.filters = { search: '', assignee: null };
        }
        this.state.filters[type] = value;
        this.notify();
    }

    getFilters() {
        return this.state.filters || { search: '', assignee: null };
    }

    // Selectors
    getIssuesByStatus(status) {
        let filtered = this.state.issues.filter(i => i.status === status);
        const filters = this.getFilters();
        
        if (filters.search) {
            const query = filters.search.toLowerCase();
            filtered = filtered.filter(i => 
                i.summary.toLowerCase().includes(query) || 
                i.issue_key.toLowerCase().includes(query)
            );
        }
        
        if (filters.assignee) {
            filtered = filtered.filter(i => i.assignee.includes(filters.assignee) || i.epic_link.includes(filters.assignee)); // Simplified filter logic for mockup
            // Wait, we map assignee avatars by Owner names in the UI. 
            // We need a better match. Let's just match any field for the mockup or explicitly check assignee/epic_owner.
            // But we don't have epic_owner inside issue easily without joining.
            // Let's just do a loose text match on the whole issue object values.
            const q = filters.assignee.toLowerCase();
            filtered = filtered.filter(i => JSON.stringify(i).toLowerCase().includes(q));
        }

        return filtered;
    }

    // Sub-issues and Epics
    getSubIssuesByIssue(issueId) {
        return this.state.sub_issues.filter(s => s.issue_link === issueId);
    }

    addSubIssue(issueId, summary) {
        const newSub = {
            id: 'sub-' + Date.now(),
            issue_link: issueId,
            summary: summary,
            status: 'A Fazer'
        };
        this.state.sub_issues.push(newSub);
        this.notify();
    }

    toggleSubIssue(subId) {
        const sub = this.state.sub_issues.find(s => s.id === subId);
        if (sub) {
            sub.status = sub.status === 'Concluído' ? 'A Fazer' : 'Concluído';
            this.notify();
        }
    }
}

// Singleton instance
const store = new Store();
