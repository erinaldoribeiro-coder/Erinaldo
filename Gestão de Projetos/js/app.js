// Main JS Controller - Jira Clone

function renderSidebar() {
    const sidebar = document.getElementById('sidebar');
    const currentView = store.getState().currentView;
    
    const navItems = [
        { id: 'backlog', icon: 'ph-list-dashes', label: 'Portfólio / Backlog' },
        { id: 'board', icon: 'ph-kanban', label: 'Quadro Kanban' },
        { id: 'reports', icon: 'ph-chart-line-up', label: 'Painel de Indicadores' },
        { id: 'releases', icon: 'ph-rocket-launch', label: 'Ciclos Estratégicos' },
        { id: 'components', icon: 'ph-users', label: 'Unidades Líderes' },
        { id: 'issues', icon: 'ph-table', label: 'Lista de Demandas' },
        { id: 'repository', icon: 'ph-folder-open', label: 'Repositório de Processos' },
        { id: 'settings', icon: 'ph-gear', label: 'Configurações' }
    ];

    sidebar.innerHTML = `
        <div class="brand">
            <div class="brand-icon">
                <i class="ph ph-kanban"></i>
            </div>
            <div>
                <div class="brand-title">Jira Estratégico</div>
                <div style="font-size:0.75rem; color:var(--text-secondary);">PMCE 2026-2030</div>
            </div>
        </div>
        <nav class="nav-menu">
            ${navItems.map(item => `
                <a href="#" class="nav-item ${currentView === item.id ? 'active' : ''}" data-view="${item.id}">
                    <i class="ph ${item.icon}"></i> ${item.label}
                </a>
            `).join('')}
        </nav>
    `;

    // Attach navigation listeners
    const navLinks = sidebar.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const view = link.getAttribute('data-view');
            store.navigate(view);
        });
    });
}

function renderHeader() {
    const topbar = document.getElementById('topbar');
    topbar.innerHTML = `
        <div class="breadcrumb">Projects / Gestão Estratégica PMCE / Board</div>
        <div class="header-top">
            <h1 class="board-title">Sprint 1 - Estratégia 2026</h1>
            <div class="quick-filters">
                <input type="text" class="search-input" placeholder="Search issues...">
                <div class="filter-avatars">
                    <img src="https://ui-avatars.com/api/?name=TC+Sherman&background=0052CC&color=fff" class="filter-avatar" title="TC Sherman">
                    <img src="https://ui-avatars.com/api/?name=TC+Mendes&background=FFAB00&color=fff" class="filter-avatar" title="TC Mendes">
                    <img src="https://ui-avatars.com/api/?name=Maj+Rodrigues&background=00875A&color=fff" class="filter-avatar" title="Maj Rodrigues">
                </div>
            </div>
        </div>
    `;
}

function getPriorityIcon(ranking) {
    if (ranking <= 5) return '<i class="ph-fill ph-arrow-circle-up prio-high"></i>';
    if (ranking <= 12) return '<i class="ph-fill ph-minus-circle prio-medium"></i>';
    return '<i class="ph-fill ph-arrow-circle-down prio-low"></i>';
}

function getLabelColor(label) {
    const colors = ['var(--label-bg-1)', 'var(--label-bg-2)', 'var(--label-bg-3)', 'var(--label-bg-4)', 'var(--label-bg-5)'];
    let hash = 0;
    for (let i = 0; i < label.length; i++) {
        hash = label.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
}

function renderMainView() {
    const currentView = store.getState().currentView;
    const container = document.getElementById('view-container');

    container.innerHTML = ''; // Limpa a tela

    switch(currentView) {
        case 'board':
            renderBoard(container);
            break;
        case 'backlog':
            renderBacklog(container);
            break;
        case 'reports':
            renderReports(container);
            break;
        case 'releases':
            renderReleases(container);
            break;
        case 'components':
            renderComponents(container);
            break;
        case 'issues':
            renderIssuesList(container);
            break;
        case 'repository':
            renderRepository(container);
            break;
        case 'settings':
            renderSettings(container);
            break;
        default:
            renderConstruction(container, currentView);
    }
}

function renderConstruction(container, viewName) {
    container.innerHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:var(--text-secondary); text-align:center;">
            <i class="ph ph-wrench" style="font-size: 4rem; margin-bottom:16px; color:var(--text-muted);"></i>
            <h2 style="margin-bottom:8px;">Página em Construção</h2>
            <p>O módulo <strong>${viewName.toUpperCase()}</strong> está sendo desenvolvido.</p>
        </div>
    `;
}

function renderBoard(container) {
    const todo = store.getIssuesByStatus('A FAZER');
    const inProgress = store.getIssuesByStatus('EM ANDAMENTO');
    const inReview = store.getIssuesByStatus('EM REVISÃO');
    const done = store.getIssuesByStatus('CONCLUÍDO');

    const generateCards = (issues) => {
        return issues.map(i => {
            const labelColor = getLabelColor(i.label_unidade);
            const prioIcon = getPriorityIcon(i.priority_ranking);
            const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(i.assignee)}&background=DFE1E6&color=172B4D`;
            
            return `
                <div class="kanban-card" draggable="true" data-id="${i.id}">
                    <div class="card-label" style="background-color: ${labelColor}">${i.label_unidade}</div>
                    <div class="card-summary">${i.summary}</div>
                    
                    <div class="card-footer">
                        <div class="card-meta-left">
                            <div class="issue-type-icon"><i class="ph ph-check"></i></div>
                            <div class="priority-icon" title="Ranking: ${i.priority_ranking}º">${prioIcon}</div>
                            <div class="issue-key">${i.issue_key}</div>
                        </div>
                        <div class="card-meta-right">
                            <div class="story-points" title="Story Points">${i.story_points}</div>
                            <img src="${avatarUrl}" class="assignee-avatar" title="${i.assignee}">
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    };

    container.innerHTML = `
        <div class="kanban-board">
            <div class="kanban-column" data-status="A FAZER">
                <div class="kanban-header">
                    <span>A FAZER</span>
                    <span>${todo.length}</span>
                </div>
                <div class="kanban-cards">
                    ${generateCards(todo)}
                </div>
            </div>

            <div class="kanban-column" data-status="EM ANDAMENTO">
                <div class="kanban-header">
                    <span>EM ANDAMENTO</span>
                    <span>${inProgress.length}</span>
                </div>
                <div class="kanban-cards">
                    ${generateCards(inProgress)}
                </div>
            </div>

            <div class="kanban-column" data-status="EM REVISÃO">
                <div class="kanban-header">
                    <span>EM REVISÃO</span>
                    <span>${inReview.length}</span>
                </div>
                <div class="kanban-cards">
                    ${generateCards(inReview)}
                </div>
            </div>

            <div class="kanban-column" data-status="CONCLUÍDO">
                <div class="kanban-header">
                    <span>CONCLUÍDO</span>
                    <span>${done.length}</span>
                </div>
                <div class="kanban-cards">
                    ${generateCards(done)}
                </div>
            </div>
        </div>
    `;

    // Attach Drag and Drop Events
    const cards = container.querySelectorAll('.kanban-card');
    const columns = container.querySelectorAll('.kanban-column');

    cards.forEach(card => {
        card.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', card.getAttribute('data-id'));
            card.style.opacity = '0.5';
        });

        card.addEventListener('dragend', () => {
            card.style.opacity = '1';
        });
    });

    columns.forEach(col => {
        col.addEventListener('dragover', (e) => {
            e.preventDefault();
            col.style.backgroundColor = 'rgba(9, 30, 66, 0.08)';
        });

        col.addEventListener('dragleave', () => {
            col.style.backgroundColor = 'var(--bg-column)';
        });

        col.addEventListener('drop', (e) => {
            e.preventDefault();
            col.style.backgroundColor = 'var(--bg-column)';
            const id = e.dataTransfer.getData('text/plain');
            const newStatus = col.getAttribute('data-status');
            
            if (id && newStatus) {
                store.updateIssueStatus(id, newStatus);
            }
        });
    });
}

// --- NOVAS TELAS (PT-BR) ---

function renderBacklog(container) {
    const epics = store.getState().epics;
    const issues = store.getState().issues;

    let html = '<div style="max-width: 800px; padding-top:20px;"><h2>Portfólio Estratégico (Épicos e Demandas)</h2>';
    
    epics.forEach(epic => {
        const epicIssues = issues.filter(i => i.epic_link === epic.id);
        
        html += `
        <details style="margin-top: 16px; background: white; border: 1px solid var(--border-color); border-radius: 4px; padding: 12px;">
            <summary style="font-weight: 600; cursor: pointer; color: var(--jira-blue); font-size: 1.1rem;">
                [${epic.epic_key}] ${epic.epic_name} <span style="font-size:0.8rem; color:var(--text-muted); float:right;">${epicIssues.length} Demandas</span>
            </summary>
            <div style="padding-top: 16px; display: flex; flex-direction: column; gap: 8px;">
        `;

        epicIssues.forEach(issue => {
            const subIssues = store.getSubIssuesByIssue(issue.id);
            html += `
                <div style="border: 1px solid #DFE1E6; padding: 12px; border-radius: 3px;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                        <strong>[${issue.issue_key}] ${issue.summary}</strong>
                        <span style="font-size: 0.8rem; padding:2px 8px; background:#DFE1E6; border-radius:12px;">${issue.status}</span>
                    </div>
                    <div style="font-size:0.85rem; color:var(--text-secondary); margin-bottom: 8px;">
                        <em>Sub-tarefas:</em>
                    </div>
                    <ul style="list-style-type: none; padding-left: 0; font-size:0.85rem;">
                        ${subIssues.map(sub => `
                            <li style="margin-bottom:4px;">
                                <input type="checkbox" ${sub.status === 'Concluído' ? 'checked' : ''} onchange="store.toggleSubIssue('${sub.id}')"> 
                                <span style="${sub.status === 'Concluído' ? 'text-decoration:line-through; color:var(--text-muted);' : ''}">${sub.summary}</span>
                            </li>
                        `).join('')}
                    </ul>
                    <div style="margin-top: 8px; display:flex; gap:8px;">
                        <input type="text" id="input-sub-${issue.id}" placeholder="Nova sub-tarefa..." style="padding:4px 8px; border:1px solid #DFE1E6; flex:1; font-size:0.85rem;">
                        <button onclick="
                            const val = document.getElementById('input-sub-${issue.id}').value;
                            if(val) { store.addSubIssue('${issue.id}', val); }
                        " style="padding:4px 12px; background:var(--jira-blue); color:white; border:none; border-radius:3px; cursor:pointer;">Adicionar</button>
                    </div>
                </div>
            `;
        });

        html += `</div></details>`;
    });

    html += '</div>';
    container.innerHTML = html;
}

function renderReports(container) {
    const issues = store.getState().issues;
    const total = issues.length;
    const concluido = issues.filter(i => i.status === 'CONCLUÍDO').length;
    const emAndamento = issues.filter(i => i.status === 'EM ANDAMENTO').length;
    
    const percConcluido = total > 0 ? Math.round((concluido / total) * 100) : 0;
    const percAndamento = total > 0 ? Math.round((emAndamento / total) * 100) : 0;
    const percRestante = 100 - percConcluido - percAndamento;

    container.innerHTML = `
        <div style="padding-top:20px; max-width: 800px;">
            <h2>Painel de Indicadores</h2>
            <p style="color:var(--text-secondary); margin-bottom: 24px;">Visão executiva do progresso estratégico. Preparado para extração via API (Power BI).</p>
            
            <div style="display:flex; gap: 32px; background:white; padding:24px; border-radius:4px; border:1px solid var(--border-color);">
                <!-- Gráfico de Rosca Nativo CSS -->
                <div style="width: 200px; height: 200px; border-radius: 50%; background: conic-gradient(
                    var(--label-bg-3) 0% ${percConcluido}%, 
                    var(--jira-blue) ${percConcluido}% ${percConcluido + percAndamento}%, 
                    var(--border-color) ${percConcluido + percAndamento}% 100%
                ); position: relative; display:flex; align-items:center; justify-content:center;">
                    <div style="width:140px; height:140px; background:white; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-direction:column;">
                        <span style="font-size:2rem; font-weight:bold; color:var(--text-primary);">${percConcluido}%</span>
                        <span style="font-size:0.75rem; color:var(--text-secondary);">Concluído</span>
                    </div>
                </div>
                
                <div style="flex:1; display:flex; flex-direction:column; justify-content:center; gap: 16px;">
                    <div>
                        <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
                            <strong>Concluídas</strong> <span>${concluido} demandas</span>
                        </div>
                        <div style="height:12px; background:var(--border-color); border-radius:6px; overflow:hidden;">
                            <div style="height:100%; width:${percConcluido}%; background:var(--label-bg-3);"></div>
                        </div>
                    </div>
                    <div>
                        <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
                            <strong>Em Andamento</strong> <span>${emAndamento} demandas</span>
                        </div>
                        <div style="height:12px; background:var(--border-color); border-radius:6px; overflow:hidden;">
                            <div style="height:100%; width:${percAndamento}%; background:var(--jira-blue);"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderReleases(container) {
    const cycles = store.getState().cycles;
    const issues = store.getState().issues;

    let html = '<div style="padding-top:20px; max-width: 800px;"><h2>Ciclos Estratégicos (Releases)</h2><p style="color:var(--text-secondary); margin-bottom:24px;">Progresso de entregas organizadas por ciclos do Planejamento.</p>';

    cycles.forEach(cycle => {
        const cycleIssues = issues.filter(i => i.cycle_link === cycle.id);
        const totalPoints = cycleIssues.reduce((acc, i) => acc + (i.story_points || 0), 0);
        const donePoints = cycleIssues.filter(i => i.status === 'CONCLUÍDO').reduce((acc, i) => acc + (i.story_points || 0), 0);
        const progress = totalPoints > 0 ? Math.round((donePoints / totalPoints) * 100) : 0;

        html += `
            <div style="background:white; padding:20px; border-radius:4px; border:1px solid var(--border-color); margin-bottom:16px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                    <div>
                        <h3 style="margin:0; color:var(--jira-blue);">${cycle.name}</h3>
                        <span style="font-size:0.8rem; color:var(--text-muted);">${cycle.start_date} a ${cycle.end_date}</span>
                    </div>
                    <div style="text-align:right;">
                        <div style="font-size:1.5rem; font-weight:bold;">${progress}%</div>
                        <div style="font-size:0.8rem; color:var(--text-muted);">${donePoints} / ${totalPoints} Story Points</div>
                    </div>
                </div>
                <div style="height:8px; background:var(--border-color); border-radius:4px; overflow:hidden;">
                    <div style="height:100%; width:${progress}%; background:var(--label-bg-3); transition: width 0.5s;"></div>
                </div>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

function renderComponents(container) {
    const issues = store.getState().issues;
    const unitsSet = new Set(issues.map(i => i.label_unidade));
    const units = Array.from(unitsSet);

    // Mock active component state (we can use local variable for now)
    const activeUnit = window.__activeComponentUnit || units[0];

    let html = `
        <div style="padding-top:20px;">
            <h2>Unidades Líderes (Componentes)</h2>
            <div style="display:flex; gap:8px; margin-top:16px; margin-bottom:24px; flex-wrap:wrap;">
    `;

    units.forEach(unit => {
        const isActive = unit === activeUnit;
        html += `
            <button onclick="window.__activeComponentUnit = '${unit}'; store.notify();" 
                style="padding:8px 16px; border-radius:20px; border:1px solid ${isActive ? 'var(--jira-blue)' : 'var(--border-color)'}; 
                background:${isActive ? 'rgba(0,82,204,0.1)' : 'white'}; 
                color:${isActive ? 'var(--jira-blue)' : 'var(--text-secondary)'}; cursor:pointer; font-weight:600;">
                ${unit}
            </button>
        `;
    });

    html += `</div>`;

    const unitIssues = issues.filter(i => i.label_unidade === activeUnit);
    html += `
        <div style="background:white; border:1px solid var(--border-color); border-radius:4px; padding:16px;">
            <h3>Projetos da Unidade: ${activeUnit}</h3>
            <ul style="list-style:none; padding:0; margin-top:16px;">
                ${unitIssues.map(i => `
                    <li style="padding:12px; border-bottom:1px solid #f0f0f0; display:flex; justify-content:space-between;">
                        <span><strong>[${i.issue_key}]</strong> ${i.summary}</span>
                        <span style="font-size:0.8rem; padding:2px 8px; border-radius:12px; background:#DFE1E6;">${i.status}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    </div>`;

    container.innerHTML = html;
}

function renderIssuesList(container) {
    const issues = store.getState().issues;
    
    window.exportCSV = function() {
        const headers = ["ID", "Chave", "Resumo", "Unidade", "Responsável", "Status", "Story Points"];
        const rows = issues.map(i => [i.id, i.issue_key, `"${i.summary}"`, i.label_unidade, i.assignee, i.status, i.story_points]);
        const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "lista_demandas_pmce.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    let html = `
        <div style="padding-top:20px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                <h2>Lista de Demandas</h2>
                <button onclick="exportCSV()" style="padding:8px 16px; background:var(--jira-blue); color:white; border:none; border-radius:3px; cursor:pointer; font-weight:600;"><i class="ph ph-download-simple"></i> Exportar CSV</button>
            </div>
            
            <table style="width:100%; border-collapse:collapse; background:white; font-size:0.85rem; text-align:left; border:1px solid var(--border-color);">
                <thead style="background:var(--bg-sidebar); color:var(--text-secondary); border-bottom:2px solid var(--border-color);">
                    <tr>
                        <th style="padding:12px;">Chave</th>
                        <th style="padding:12px;">Resumo</th>
                        <th style="padding:12px;">Unidade</th>
                        <th style="padding:12px;">Responsável</th>
                        <th style="padding:12px;">Status</th>
                        <th style="padding:12px;">Story Points</th>
                    </tr>
                </thead>
                <tbody>
                    ${issues.map(i => `
                        <tr style="border-bottom:1px solid var(--border-color);">
                            <td style="padding:12px; color:var(--jira-blue); font-weight:600;">${i.issue_key}</td>
                            <td style="padding:12px;">${i.summary}</td>
                            <td style="padding:12px;">${i.label_unidade}</td>
                            <td style="padding:12px;">${i.assignee}</td>
                            <td style="padding:12px;">${i.status}</td>
                            <td style="padding:12px; text-align:center;">${i.story_points}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = html;
}

function renderRepository(container) {
    const files = store.getState().files;
    
    container.innerHTML = `
        <div style="padding-top:20px; max-width:800px;">
            <h2>Repositório de Processos</h2>
            <p style="color:var(--text-secondary); margin-bottom:24px;">Upload de artefatos PDF e BPMN 2.0 (Bizagi).</p>
            
            <div style="border: 2px dashed var(--border-color); padding:40px; text-align:center; background:white; border-radius:4px; margin-bottom:24px;">
                <i class="ph ph-upload-simple" style="font-size:3rem; color:var(--text-muted); margin-bottom:16px;"></i>
                <h3 style="margin-bottom:8px;">Arraste arquivos PDF ou .BPM aqui</h3>
                <p style="color:var(--text-secondary); font-size:0.85rem;">ou clique para selecionar do computador.</p>
                <input type="file" style="display:none;">
            </div>

            <h3 style="margin-bottom:16px;">Arquivos Recentes</h3>
            <div style="display:flex; flex-direction:column; gap:8px;">
                ${files.map(f => `
                    <div style="display:flex; justify-content:space-between; align-items:center; background:white; padding:12px 16px; border:1px solid var(--border-color); border-radius:4px;">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <i class="ph ${f.filename.endsWith('.pdf') ? 'ph-file-pdf' : 'ph-file-code'}" style="font-size:1.5rem; color:var(--jira-blue);"></i>
                            <div>
                                <div style="font-weight:600;">${f.filename}</div>
                                <div style="font-size:0.75rem; color:var(--text-muted);">Vinculado à demanda: ${f.issue_link.split('-').pop()}</div>
                            </div>
                        </div>
                        <button style="background:transparent; border:none; cursor:pointer; color:var(--text-secondary);"><i class="ph ph-download-simple" style="font-size:1.2rem;"></i></button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderSettings(container) {
    container.innerHTML = `
        <div style="padding-top:20px; max-width:600px;">
            <h2>Configurações do Sistema</h2>
            <p style="color:var(--text-secondary); margin-bottom:24px;">Administração de Parâmetros.</p>

            <div style="background:white; padding:24px; border:1px solid var(--border-color); border-radius:4px; margin-bottom:24px;">
                <h3 style="margin-bottom:16px;">Cores das Unidades Líderes</h3>
                <div style="display:flex; flex-direction:column; gap:12px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span>COPAC</span>
                        <input type="color" value="#0052CC" style="border:none; cursor:pointer;">
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span>CODIP</span>
                        <input type="color" value="#00875A" style="border:none; cursor:pointer;">
                    </div>
                </div>
                <button style="margin-top:16px; padding:8px 16px; background:var(--jira-blue); color:white; border:none; border-radius:3px; cursor:pointer;">Salvar Alterações</button>
            </div>
        </div>
    `;
}

function initHeaderEvents() {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            store.setFilter('search', e.target.value);
        });
    }

    const avatars = document.querySelectorAll('.filter-avatar');
    avatars.forEach(avatar => {
        avatar.addEventListener('click', () => {
            const currentAssignee = store.getFilters().assignee;
            const clickedAssignee = avatar.getAttribute('title');
            
            if (currentAssignee === clickedAssignee) {
                store.setFilter('assignee', null); // toggle off
                avatar.style.border = '2px solid white';
            } else {
                store.setFilter('assignee', clickedAssignee); // toggle on
                avatars.forEach(a => a.style.border = '2px solid white');
                avatar.style.border = '2px solid var(--jira-blue)';
            }
        });
    });
}

function initApp() {
    renderSidebar();
    renderHeader();
    initHeaderEvents();
    renderMainView();
}

store.subscribe(() => {
    // Check if the current view has changed to re-render the sidebar
    // For simplicity, we can just re-render sidebar's active classes explicitly or re-render entirely
    renderSidebar();
    renderMainView();
});

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});
