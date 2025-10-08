# Requisitos e Visão Geral Tecnológica do Sistema de Capoeira

Este documento detalha os requisitos funcionais e não funcionais, bem como a pilha tecnológica proposta para o sistema de cadastro e controle de presença de alunos em um projeto social de capoeira.

## 1. Requisitos Funcionais

O sistema deve permitir as seguintes funcionalidades:

*   **Cadastro de Alunos**: Registro de novos alunos com informações como nome, data de nascimento, contato, nível (corda), etc.
*   **Cadastro de Turmas**: Criação e gerenciamento de turmas, associando alunos a turmas específicas.
*   **Controle de Presença**: Registro da presença dos alunos nas aulas, com a possibilidade de visualizar o histórico de presença.
*   **Autenticação de Usuários**: Sistema de login e senha para acesso seguro às funcionalidades do sistema.
*   **Gerenciamento de Usuários**: Criação e gerenciamento de contas de usuários (administradores, professores) com diferentes níveis de acesso (opcional, a ser refinado).
*   **Visualização de Dados**: Relatórios simples ou listagens para acompanhar alunos, turmas e presença.

## 2. Requisitos Não Funcionais

Os seguintes requisitos não funcionais são cruciais para o sucesso do projeto:

*   **Segurança**: O sistema deve proteger os dados dos usuários e alunos, com autenticação robusta e proteção contra acessos não autorizados.
*   **Responsividade**: A interface do usuário deve ser adaptável a diferentes tamanhos de tela (desktops, tablets, smartphones) para facilitar a utilização em dispositivos móveis.
*   **Confiabilidade**: O sistema deve ser estável e operar sem falhas frequentes.
*   **Gratuidade**: A solução deve ser desenvolvida e hospedada utilizando tecnologias e serviços gratuitos ou de baixo custo.
*   **Usabilidade**: A interface deve ser intuitiva e fácil de usar para os administradores e professores do projeto.

## 3. Pilha Tecnológica Proposta

Para atender aos requisitos acima, a seguinte pilha tecnológica é proposta:

*   **Backend**: **Python** com o framework **Flask**.
    *   **Por que Flask?**: Leve, flexível e ideal para projetos de pequeno a médio porte. Permite um controle maior sobre os componentes e é fácil de aprender e prototipar.
*   **Banco de Dados**: **SQLite** para desenvolvimento e **PostgreSQL** ou **MySQL** para produção (considerando opções de hospedagem gratuita).
    *   **Por que SQLite?**: Facilita o desenvolvimento local sem a necessidade de configurar um servidor de banco de dados separado.
    *   **Por que PostgreSQL/MySQL?**: Bancos de dados relacionais robustos e amplamente suportados por serviços de hospedagem gratuita.
*   **Frontend**: **HTML5**, **CSS3** (com **Bootstrap** para responsividade) e **JavaScript**.
    *   **Por que Bootstrap?**: Facilita a criação de interfaces responsivas e modernas com menos código CSS.
*   **Autenticação**: **Flask-Login** para gerenciamento de sessões de usuário e autenticação.
*   **ORM (Object-Relational Mapper)**: **SQLAlchemy** para interação com o banco de dados, abstraindo as operações SQL.

## 4. Arquitetura Proposta

A arquitetura será baseada no padrão **Model-View-Controller (MVC)**, comum em aplicações web, onde:

*   **Model**: Representa a lógica de negócios e a interação com o banco de dados (SQLAlchemy).
*   **View**: Responsável pela apresentação dos dados ao usuário (templates HTML com Jinja2).
*   **Controller**: Gerencia as requisições do usuário, interage com o Model e seleciona a View apropriada (rotas e funções do Flask).

Esta estrutura permitirá um desenvolvimento modular, facilitando a manutenção e a escalabilidade futura do sistema.
