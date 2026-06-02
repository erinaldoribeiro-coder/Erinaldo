const seedData = {
    epics: [
        {
            id: 'e1000000-0000-0000-0000-000000000001',
            epic_key: 'PE-1',
            epic_name: 'Indicadores de Segurança Pública, Defesa Social e Ordem Pública',
            epic_owner: 'TC Sherman',
            summary: 'Melhorar os indicadores operacionais e a eficiência de resposta nas áreas críticas.',
            status: 'In Progress'
        },
        {
            id: 'e2000000-0000-0000-0000-000000000002',
            epic_key: 'PE-2',
            epic_name: 'Percepção de Segurança e Confiança na Corporação',
            epic_owner: 'TC Mendes',
            summary: 'Aumentar a confiança pública através de policiamento de proximidade e transparência.',
            status: 'To Do'
        },
        {
            id: 'e3000000-0000-0000-0000-000000000003',
            epic_key: 'PE-3',
            epic_name: 'Integração, Processos, Inovação, Tecnologia e Inteligência',
            epic_owner: 'Maj Rodrigues',
            summary: 'Modernizar processos e integrar inteligência tecnológica em toda a corporação.',
            status: 'In Progress'
        },
        {
            id: 'e4000000-0000-0000-0000-000000000004',
            epic_key: 'PE-4',
            epic_name: 'Pessoal, Equipamentos e Infraestrutura',
            epic_owner: 'TC Landim',
            summary: 'Valorização profissional e modernização da estrutura física e frota da PMCE.',
            status: 'To Do'
        }
    ],
    issues: [
        // Epic 1
        { id: 'iss00000-0000-0000-0000-000000000011', issue_key: 'PE26-17', summary: 'Flexibilização das Escalas de Serviço Operacional adaptadas aos Hot-Spots', epic_link: 'e1000000-0000-0000-0000-000000000001', assignee: 'Time Operacional', label_unidade: 'COP/CPE', priority_ranking: 17, status: 'EM ANDAMENTO', story_points: 5, attachment_link: '#', updated_at: new Date().toISOString() },
        { id: 'iss00000-0000-0000-0000-000000000012', issue_key: 'PE26-07', summary: 'Melhoria dos Equipamentos Tecnológicos da Inteligência para aumento da Predição', epic_link: 'e1000000-0000-0000-0000-000000000001', assignee: 'Analista TI', label_unidade: 'ASINT', priority_ranking: 7, status: 'A FAZER', story_points: 8, attachment_link: '#', updated_at: new Date().toISOString() },
        { id: 'iss00000-0000-0000-0000-000000000013', issue_key: 'PE26-13', summary: 'Respostas às Ações Criminosas por Ordem de Desocupação nas Áreas de maior risco', epic_link: 'e1000000-0000-0000-0000-000000000001', assignee: 'Time Tático', label_unidade: 'COPAC/CHOQUE', priority_ranking: 13, status: 'EM ANDAMENTO', story_points: 13, attachment_link: '#', updated_at: new Date().toISOString() },
        { id: 'iss00000-0000-0000-0000-000000000014', issue_key: 'PE26-15', summary: 'Criar Capacitações e Treinamento para Conscientização das Métricas Institucionais', epic_link: 'e1000000-0000-0000-0000-000000000001', assignee: 'Instrutor', label_unidade: 'COGEIC/CODIP', priority_ranking: 15, status: 'A FAZER', story_points: 3, attachment_link: '#', updated_at: new Date().toISOString() },
        { id: 'iss00000-0000-0000-0000-000000000015', issue_key: 'PE26-20', summary: 'Criar Estruturas de Transportes de Tropas para Atender Hot-Spots', epic_link: 'e1000000-0000-0000-0000-000000000001', assignee: 'Logística', label_unidade: 'COLOG/DPGI', priority_ranking: 20, status: 'CONCLUÍDO', story_points: 8, attachment_link: '#', updated_at: new Date().toISOString() },

        // Epic 2
        { id: 'iss00000-0000-0000-0000-000000000021', issue_key: 'PE26-02', summary: 'PMCE Valoriza – Cuidar de Quem Protege', epic_link: 'e2000000-0000-0000-0000-000000000002', assignee: 'Assistente Social', label_unidade: 'DS/DPGI', priority_ranking: 2, status: 'EM ANDAMENTO', story_points: 21, attachment_link: '#', updated_at: new Date().toISOString() },
        { id: 'iss00000-0000-0000-0000-000000000022', issue_key: 'PE26-11', summary: 'Policiamento de Proximidade e Prevenção Ativa', epic_link: 'e2000000-0000-0000-0000-000000000002', assignee: 'Oficial Ligação', label_unidade: 'COPAC', priority_ranking: 11, status: 'A FAZER', story_points: 5, attachment_link: '#', updated_at: new Date().toISOString() },
        { id: 'iss00000-0000-0000-0000-000000000023', issue_key: 'PE26-14', summary: 'Gestão e Pronta-Resposta em Comunicação', epic_link: 'e2000000-0000-0000-0000-000000000002', assignee: 'RP', label_unidade: 'ASCOM', priority_ranking: 14, status: 'EM ANDAMENTO', story_points: 8, attachment_link: '#', updated_at: new Date().toISOString() },
        { id: 'iss00000-0000-0000-0000-000000000024', issue_key: 'PE26-16', summary: 'Projeto Território Seguro', epic_link: 'e2000000-0000-0000-0000-000000000002', assignee: 'Gestor Projeto', label_unidade: 'DPGO', priority_ranking: 16, status: 'A FAZER', story_points: 13, attachment_link: '#', updated_at: new Date().toISOString() },
        { id: 'iss00000-0000-0000-0000-000000000025', issue_key: 'PE26-18', summary: 'PMCE de Portas Abertas', epic_link: 'e2000000-0000-0000-0000-000000000002', assignee: 'Ouvidor', label_unidade: 'OUVIDORIA/ASCOM', priority_ranking: 18, status: 'EM REVISÃO', story_points: 5, attachment_link: '#', updated_at: new Date().toISOString() },

        // Epic 3
        { id: 'iss00000-0000-0000-0000-000000000031', issue_key: 'PE26-04', summary: 'Identificação, Aperfeiçoamento e Informatização dos Processos Administrativos Corporativos', epic_link: 'e3000000-0000-0000-0000-000000000003', assignee: 'Analista Proc.', label_unidade: 'CODIP', priority_ranking: 4, status: 'EM ANDAMENTO', story_points: 13, attachment_link: '#', updated_at: new Date().toISOString() },
        { id: 'iss00000-0000-0000-0000-000000000032', issue_key: 'PE26-05', summary: 'Estruturação e Fortalecimento da Assessoria Parlamentar da PMCE', epic_link: 'e3000000-0000-0000-0000-000000000003', assignee: 'Assessor', label_unidade: 'ASSESSORIA PARLAMENTAR', priority_ranking: 5, status: 'A FAZER', story_points: 5, attachment_link: '#', updated_at: new Date().toISOString() },
        { id: 'iss00000-0000-0000-0000-000000000033', issue_key: 'PE26-08', summary: 'Estudos de Prioridades Institucionais em Tecnologia e Capacitação', epic_link: 'e3000000-0000-0000-0000-000000000003', assignee: 'Arquiteto TI', label_unidade: 'COTIC/COGEIC', priority_ranking: 8, status: 'A FAZER', story_points: 8, attachment_link: '#', updated_at: new Date().toISOString() },
        { id: 'iss00000-0000-0000-0000-000000000034', issue_key: 'PE26-10', summary: 'Identificação e Mapeamento de Boas Práticas de Gestão Corporativa e Programa de Visitação', epic_link: 'e3000000-0000-0000-0000-000000000003', assignee: 'Auditor', label_unidade: 'CODIP', priority_ranking: 10, status: 'EM REVISÃO', story_points: 5, attachment_link: '#', updated_at: new Date().toISOString() },
        { id: 'iss00000-0000-0000-0000-000000000035', issue_key: 'PE26-12', summary: 'Estruturação de Setor de Análise Criminal', epic_link: 'e3000000-0000-0000-0000-000000000003', assignee: 'Analista', label_unidade: 'DPGO', priority_ranking: 12, status: 'CONCLUÍDO', story_points: 13, attachment_link: '#', updated_at: new Date().toISOString() },

        // Epic 4
        { id: 'iss00000-0000-0000-0000-000000000041', issue_key: 'PE26-01', summary: 'Aprimoramento do Sistema de Progressão funcional e Capacitação', epic_link: 'e4000000-0000-0000-0000-000000000004', assignee: 'RH', label_unidade: 'CGP/COGEIC', priority_ranking: 1, status: 'EM ANDAMENTO', story_points: 21, attachment_link: '#', updated_at: new Date().toISOString() },
        { id: 'iss00000-0000-0000-0000-000000000042', issue_key: 'PE26-03', summary: 'Valorização do Mérito', epic_link: 'e4000000-0000-0000-0000-000000000004', assignee: 'RH/TI', label_unidade: 'CGP/COTIC', priority_ranking: 3, status: 'A FAZER', story_points: 8, attachment_link: '#', updated_at: new Date().toISOString() },
        { id: 'iss00000-0000-0000-0000-000000000043', issue_key: 'PE26-06', summary: 'Sistematização da Assistência de Saúde e Social', epic_link: 'e4000000-0000-0000-0000-000000000004', assignee: 'Médico', label_unidade: 'Diretoria de Saúde', priority_ranking: 6, status: 'EM ANDAMENTO', story_points: 13, attachment_link: '#', updated_at: new Date().toISOString() },
        { id: 'iss00000-0000-0000-0000-000000000044', issue_key: 'PE26-09', summary: 'Construção dos Mapas de Competências', epic_link: 'e4000000-0000-0000-0000-000000000004', assignee: 'Analista RH', label_unidade: 'CODIP', priority_ranking: 9, status: 'A FAZER', story_points: 5, attachment_link: '#', updated_at: new Date().toISOString(), cycle_link: 'c2026-1' },
        { id: 'iss00000-0000-0000-0000-000000000045', issue_key: 'PE26-19', summary: 'Normatização de Frota, Equipamentos', epic_link: 'e4000000-0000-0000-0000-000000000004', assignee: 'Engenheiro', label_unidade: 'COLOG', priority_ranking: 19, status: 'CONCLUÍDO', story_points: 8, attachment_link: '#', updated_at: new Date().toISOString(), cycle_link: 'c2026-2' }
    ],
    cycles: [
        { id: 'c2026-1', name: 'Ciclo 2026.1', start_date: '2026-01-01', end_date: '2026-06-30' },
        { id: 'c2026-2', name: 'Ciclo 2026.2', start_date: '2026-07-01', end_date: '2026-12-31' }
    ],
    sub_issues: [
        { id: 'sub-1', issue_link: 'iss00000-0000-0000-0000-000000000011', summary: 'Mapeamento de Efetivo', status: 'Concluído' },
        { id: 'sub-2', issue_link: 'iss00000-0000-0000-0000-000000000011', summary: 'Análise Espacial de Criminalidade', status: 'A Fazer' },
        { id: 'sub-3', issue_link: 'iss00000-0000-0000-0000-000000000021', summary: 'Pesquisa de Clima Organizacional', status: 'Em Andamento' }
    ],
    files: [
        { id: 'f-1', issue_link: 'iss00000-0000-0000-0000-000000000011', filename: 'Fluxograma_Escalas.bpm', type: 'application/bpm', upload_date: new Date().toISOString() },
        { id: 'f-2', issue_link: 'iss00000-0000-0000-0000-000000000021', filename: 'Diretriz_Saude.pdf', type: 'application/pdf', upload_date: new Date().toISOString() }
    ]
};

// Adiciona um cycle randômico para as issues no seed (mock)
seedData.issues.forEach(issue => {
    if(!issue.cycle_link) {
        issue.cycle_link = Math.random() > 0.5 ? 'c2026-1' : 'c2026-2';
    }
});
