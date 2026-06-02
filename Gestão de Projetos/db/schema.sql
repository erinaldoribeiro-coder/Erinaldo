-- Tabela: Epics (Substitui Programas)
CREATE TABLE IF NOT EXISTS epics (
    id UUID PRIMARY KEY,
    epic_key VARCHAR(50) NOT NULL UNIQUE,
    epic_name VARCHAR(255) NOT NULL,
    epic_owner VARCHAR(255),
    summary TEXT,
    status VARCHAR(50) DEFAULT 'To Do' CHECK (status IN ('To Do', 'In Progress', 'Done'))
);

-- Tabela: Issues (Substitui Projetos)
CREATE TABLE IF NOT EXISTS issues (
    id UUID PRIMARY KEY,
    issue_key VARCHAR(50) NOT NULL UNIQUE,
    summary VARCHAR(255) NOT NULL,
    epic_link UUID NOT NULL,
    assignee VARCHAR(255),
    label_unidade VARCHAR(100),
    priority_ranking INT CHECK (priority_ranking >= 1 AND priority_ranking <= 20),
    status VARCHAR(50) DEFAULT 'A FAZER' CHECK (status IN ('A FAZER', 'EM ANDAMENTO', 'EM REVISÃO', 'CONCLUÍDO')),
    story_points INT DEFAULT 0,
    attachment_link VARCHAR(500),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (epic_link) REFERENCES epics(id) ON DELETE CASCADE
);

-- Trigger Function para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER trg_issues_updated_at
BEFORE UPDATE ON issues
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
