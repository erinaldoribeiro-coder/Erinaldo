-- Inserção de Epics
INSERT INTO epics (id, epic_key, epic_name, epic_owner, summary, status) VALUES
('e1000000-0000-0000-0000-000000000001', 'PE-1', 'Indicadores de Segurança Pública, Defesa Social e Ordem Pública', 'TC Sherman', 'Melhorar os indicadores operacionais e a eficiência de resposta nas áreas críticas.', 'In Progress'),
('e2000000-0000-0000-0000-000000000002', 'PE-2', 'Percepção de Segurança e Confiança na Corporação', 'TC Mendes', 'Aumentar a confiança pública através de policiamento de proximidade e transparência.', 'To Do'),
('e3000000-0000-0000-0000-000000000003', 'PE-3', 'Integração, Processos, Inovação, Tecnologia e Inteligência', 'Maj Rodrigues', 'Modernizar processos e integrar inteligência.', 'In Progress'),
('e4000000-0000-0000-0000-000000000004', 'PE-4', 'Pessoal, Equipamentos e Infraestrutura', 'TC Landim', 'Valorização profissional e modernização da estrutura.', 'To Do');

-- Inserção de Issues - Epic 1
INSERT INTO issues (id, issue_key, summary, epic_link, assignee, label_unidade, priority_ranking, status, story_points, attachment_link) VALUES
('iss00000-0000-0000-0000-000000000011', 'PE26-17', 'Flexibilização das Escalas de Serviço Operacional adaptadas aos Hot-Spots', 'e1000000-0000-0000-0000-000000000001', 'Time Operacional', 'COP/CPE', 17, 'EM ANDAMENTO', 5, 'http://repo.local/pe26-17'),
('iss00000-0000-0000-0000-000000000012', 'PE26-07', 'Melhoria dos Equipamentos Tecnológicos da Inteligência para aumento da Predição', 'e1000000-0000-0000-0000-000000000001', 'Analista TI', 'ASINT', 7, 'A FAZER', 8, 'http://repo.local/pe26-07'),
('iss00000-0000-0000-0000-000000000013', 'PE26-13', 'Respostas às Ações Criminosas por Ordem de Desocupação nas Áreas de maior risco', 'e1000000-0000-0000-0000-000000000001', 'Time Tático', 'COPAC/CHOQUE', 13, 'EM ANDAMENTO', 13, 'http://repo.local/pe26-13'),
('iss00000-0000-0000-0000-000000000014', 'PE26-15', 'Criar Capacitações e Treinamento para Conscientização das Métricas Institucionais', 'e1000000-0000-0000-0000-000000000001', 'Instrutor', 'COGEIC/CODIP', 15, 'A FAZER', 3, 'http://repo.local/pe26-15'),
('iss00000-0000-0000-0000-000000000015', 'PE26-20', 'Criar Estruturas de Transportes de Tropas para Atender Hot-Spots', 'e1000000-0000-0000-0000-000000000001', 'Logística', 'COLOG/DPGI', 20, 'CONCLUÍDO', 8, 'http://repo.local/pe26-20');

-- Inserção de Issues - Epic 2
INSERT INTO issues (id, issue_key, summary, epic_link, assignee, label_unidade, priority_ranking, status, story_points, attachment_link) VALUES
('iss00000-0000-0000-0000-000000000021', 'PE26-02', 'PMCE Valoriza – Cuidar de Quem Protege', 'e2000000-0000-0000-0000-000000000002', 'Assistente Social', 'DS/DPGI', 2, 'EM ANDAMENTO', 21, 'http://repo.local/pe26-02'),
('iss00000-0000-0000-0000-000000000022', 'PE26-11', 'Policiamento de Proximidade e Prevenção Ativa', 'e2000000-0000-0000-0000-000000000002', 'Oficial Ligação', 'COPAC', 11, 'A FAZER', 5, 'http://repo.local/pe26-11'),
('iss00000-0000-0000-0000-000000000023', 'PE26-14', 'Gestão e Pronta-Resposta em Comunicação', 'e2000000-0000-0000-0000-000000000002', 'RP', 'ASCOM', 14, 'EM ANDAMENTO', 8, 'http://repo.local/pe26-14'),
('iss00000-0000-0000-0000-000000000024', 'PE26-16', 'Projeto Território Seguro', 'e2000000-0000-0000-0000-000000000002', 'Gestor Projeto', 'DPGO', 16, 'A FAZER', 13, 'http://repo.local/pe26-16'),
('iss00000-0000-0000-0000-000000000025', 'PE26-18', 'PMCE de Portas Abertas', 'e2000000-0000-0000-0000-000000000002', 'Ouvidor', 'OUVIDORIA/ASCOM', 18, 'EM REVISÃO', 5, 'http://repo.local/pe26-18');

-- Inserção de Issues - Epic 3
INSERT INTO issues (id, issue_key, summary, epic_link, assignee, label_unidade, priority_ranking, status, story_points, attachment_link) VALUES
('iss00000-0000-0000-0000-000000000031', 'PE26-04', 'Identificação, Aperfeiçoamento e Informatização dos Processos Administrativos Corporativos', 'e3000000-0000-0000-0000-000000000003', 'Analista Proc.', 'CODIP', 4, 'EM ANDAMENTO', 13, 'http://repo.local/pe26-04'),
('iss00000-0000-0000-0000-000000000032', 'PE26-05', 'Estruturação e Fortalecimento da Assessoria Parlamentar da PMCE', 'e3000000-0000-0000-0000-000000000003', 'Assessor', 'ASSESSORIA PARLAMENTAR', 5, 'A FAZER', 5, 'http://repo.local/pe26-05'),
('iss00000-0000-0000-0000-000000000033', 'PE26-08', 'Estudos de Prioridades Institucionais em Tecnologia e Capacitação', 'e3000000-0000-0000-0000-000000000003', 'Arquiteto TI', 'COTIC/COGEIC', 8, 'A FAZER', 8, 'http://repo.local/pe26-08'),
('iss00000-0000-0000-0000-000000000034', 'PE26-10', 'Identificação e Mapeamento de Boas Práticas de Gestão Corporativa e Programa de Visitação', 'e3000000-0000-0000-0000-000000000003', 'Auditor', 'CODIP', 10, 'EM REVISÃO', 5, 'http://repo.local/pe26-10'),
('iss00000-0000-0000-0000-000000000035', 'PE26-12', 'Estruturação de Setor de Análise Criminal', 'e3000000-0000-0000-0000-000000000003', 'Analista', 'DPGO', 12, 'CONCLUÍDO', 13, 'http://repo.local/pe26-12');

-- Inserção de Issues - Epic 4
INSERT INTO issues (id, issue_key, summary, epic_link, assignee, label_unidade, priority_ranking, status, story_points, attachment_link) VALUES
('iss00000-0000-0000-0000-000000000041', 'PE26-01', 'Aprimoramento do Sistema de Progressão funcional e Capacitação', 'e4000000-0000-0000-0000-000000000004', 'RH', 'CGP/COGEIC', 1, 'EM ANDAMENTO', 21, 'http://repo.local/pe26-01'),
('iss00000-0000-0000-0000-000000000042', 'PE26-03', 'Valorização do Mérito', 'e4000000-0000-0000-0000-000000000004', 'RH/TI', 'CGP/COTIC', 3, 'A FAZER', 8, 'http://repo.local/pe26-03'),
('iss00000-0000-0000-0000-000000000043', 'PE26-06', 'Sistematização da Assistência de Saúde e Social', 'e4000000-0000-0000-0000-000000000004', 'Médico', 'Diretoria de Saúde', 6, 'EM ANDAMENTO', 13, 'http://repo.local/pe26-06'),
('iss00000-0000-0000-0000-000000000044', 'PE26-09', 'Construção dos Mapas de Competências', 'e4000000-0000-0000-0000-000000000004', 'Analista RH', 'CODIP', 9, 'A FAZER', 5, 'http://repo.local/pe26-09'),
('iss00000-0000-0000-0000-000000000045', 'PE26-19', 'Normatização de Frota, Equipamentos', 'e4000000-0000-0000-0000-000000000004', 'Engenheiro', 'COLOG', 19, 'CONCLUÍDO', 8, 'http://repo.local/pe26-19');
