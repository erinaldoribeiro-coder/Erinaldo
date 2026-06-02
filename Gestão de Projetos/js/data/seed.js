// Seed Data - Initial Data for the Application

const seedData = {
    epics: [
        { id: 'EPIC-1', epic_key: 'EPIC-1', epic_name: 'Transformação Digital', description: 'Modernização dos processos' },
        { id: 'EPIC-2', epic_key: 'EPIC-2', epic_name: 'Sustentabilidade', description: 'Implementar práticas sustentáveis' },
        { id: 'EPIC-3', epic_key: 'EPIC-3', epic_name: 'Inovação', description: 'Projetos inovadores' }
    ],
    
    issues: [
        { 
            id: '1', issue_key: 'PMCE-1', summary: 'Implementar Dashboard de KPIs', status: 'A FAZER', 
            label_unidade: 'COPAC', assignee: 'TC Sherman', story_points: 8, priority_ranking: 1, 
            epic_link: 'EPIC-1', cycle_link: 'CYCLE-1'
        },
        { 
            id: '2', issue_key: 'PMCE-2', summary: 'Integração com Power BI', status: 'EM ANDAMENTO', 
            label_unidade: 'COPAC', assignee: 'TC Mendes', story_points: 13, priority_ranking: 2, 
            epic_link: 'EPIC-1', cycle_link: 'CYCLE-1'
        },
        { 
            id: '3', issue_key: 'PMCE-3', summary: 'Documentar Processos BPMN', status: 'EM REVISÃO', 
            label_unidade: 'CODIP', assignee: 'Maj Rodrigues', story_points: 5, priority_ranking: 3, 
            epic_link: 'EPIC-2', cycle_link: 'CYCLE-1'
        },
        { 
            id: '4', issue_key: 'PMCE-4', summary: 'Implementar Sistema de Alertas', status: 'CONCLUÍDO', 
            label_unidade: 'COPAC', assignee: 'TC Sherman', story_points: 8, priority_ranking: 4, 
            epic_link: 'EPIC-1', cycle_link: 'CYCLE-1'
        },
        { 
            id: '5', issue_key: 'PMCE-5', summary: 'Certificação ISO 14001', status: 'A FAZER', 
            label_unidade: 'CODIP', assignee: 'Maj Rodrigues', story_points: 21, priority_ranking: 5, 
            epic_link: 'EPIC-2', cycle_link: 'CYCLE-2'
        },
        { 
            id: '6', issue_key: 'PMCE-6', summary: 'Reestruturar Fluxo de Aprovação', status: 'EM ANDAMENTO', 
            label_unidade: 'COPAC', assignee: 'TC Mendes', story_points: 13, priority_ranking: 6, 
            epic_link: 'EPIC-3', cycle_link: 'CYCLE-2'
        }
    ],
    
    sub_issues: [
        { id: 'SUB-1', issue_link: '1', summary: 'Criar layout de dashboard', status: 'Concluído' },
        { id: 'SUB-2', issue_link: '1', summary: 'Implementar gráficos', status: 'Em Progresso' },
        { id: 'SUB-3', issue_link: '2', summary: 'Configurar conexão com BD', status: 'Concluído' },
        { id: 'SUB-4', issue_link: '2', summary: 'Testar integrações', status: 'Pendente' }
    ],
    
    cycles: [
        { 
            id: 'CYCLE-1', name: 'Sprint 1 - Estratégia 2026', start_date: '2026-01-15', end_date: '2026-01-29'
        },
        { 
            id: 'CYCLE-2', name: 'Sprint 2 - Inovação Q1', start_date: '2026-02-01', end_date: '2026-02-28'
        },
        { 
            id: 'CYCLE-3', name: 'Sprint 3 - Consolidação', start_date: '2026-03-01', end_date: '2026-03-31'
        }
    ],
    
    files: [
        { id: 'FILE-1', filename: 'Processo_Aprovacao.pdf', issue_link: 'PMCE-3' },
        { id: 'FILE-2', filename: 'Fluxo_Dashboard.bpmn', issue_link: 'PMCE-1' },
        { id: 'FILE-3', filename: 'Especificacao_KPIs.pdf', issue_link: 'PMCE-2' }
    ]
};