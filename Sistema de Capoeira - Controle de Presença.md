# Sistema de Capoeira - Controle de Presença

Um sistema web completo para gerenciamento de alunos e controle de presença em projetos sociais de capoeira.

## 🥋 Funcionalidades

- **Autenticação Segura**: Sistema de login com sessões protegidas
- **Gestão de Alunos**: Cadastro completo com informações pessoais e nível da corda
- **Gestão de Turmas**: Criação e gerenciamento de turmas com horários e instrutores
- **Controle de Presença**: Registro eficiente de presença por turma e data
- **Dashboard**: Visão geral com estatísticas importantes
- **Interface Responsiva**: Funciona perfeitamente em dispositivos móveis

## 🚀 Tecnologias Utilizadas

### Backend
- **Python 3.11** - Linguagem de programação
- **Flask** - Framework web minimalista e flexível
- **SQLAlchemy** - ORM para gerenciamento do banco de dados
- **Flask-Login** - Gerenciamento de autenticação e sessões
- **SQLite/PostgreSQL** - Banco de dados (SQLite para desenvolvimento, PostgreSQL para produção)

### Frontend
- **HTML5** - Estrutura das páginas
- **CSS3** - Estilização moderna e responsiva
- **JavaScript** - Interatividade e comunicação com API
- **Bootstrap 5** - Framework CSS para responsividade
- **Font Awesome** - Ícones modernos

## 📋 Pré-requisitos

- Python 3.11 ou superior
- pip (gerenciador de pacotes Python)
- Git (para controle de versão)

## 🛠️ Instalação e Configuração

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd capoeira_system
```

### 2. Crie um ambiente virtual
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou
venv\Scripts\activate  # Windows
```

### 3. Instale as dependências
```bash
pip install -r requirements.txt
```

### 4. Execute a aplicação
```bash
python src/main.py
```

### 5. Acesse o sistema
Abra seu navegador e acesse: `http://localhost:5000`

**Credenciais padrão:**
- Usuário: `admin`
- Senha: `admin123`

## 📱 Como Usar

### Login
1. Acesse a página inicial
2. Use as credenciais padrão ou crie um novo usuário
3. Clique em "Entrar"

### Gerenciar Alunos
1. Clique na aba "Alunos"
2. Use "Novo Aluno" para cadastrar
3. Preencha as informações obrigatórias (nome é obrigatório)
4. Selecione o nível da corda apropriado

### Gerenciar Turmas
1. Clique na aba "Turmas"
2. Use "Nova Turma" para criar uma turma
3. Configure horários, dias da semana e instrutor
4. Defina limite máximo de alunos (opcional)

### Controle de Presença
1. Clique na aba "Presença"
2. Selecione a turma desejada
3. Escolha a data (padrão: hoje)
4. Marque presença/falta para cada aluno
5. Adicione observações se necessário
6. Clique em "Salvar Presença"

## 🏗️ Estrutura do Projeto

```
capoeira_system/
├── src/
│   ├── models/          # Modelos do banco de dados
│   │   ├── user.py      # Modelo de usuário
│   │   ├── student.py   # Modelo de aluno
│   │   ├── class_model.py # Modelo de turma
│   │   └── attendance.py # Modelo de presença
│   ├── routes/          # Rotas da API
│   │   ├── auth.py      # Autenticação
│   │   ├── student.py   # Gestão de alunos
│   │   ├── class_routes.py # Gestão de turmas
│   │   └── attendance.py # Controle de presença
│   ├── static/          # Arquivos estáticos
│   │   ├── index.html   # Interface principal
│   │   └── app.js       # Lógica JavaScript
│   ├── database/        # Banco de dados SQLite
│   └── main.py          # Aplicação principal
├── requirements.txt     # Dependências Python
├── Procfile            # Configuração para deploy
├── config.py           # Configurações da aplicação
└── README.md           # Este arquivo
```

## 🌐 Deploy e Hospedagem

O sistema está preparado para deploy em várias plataformas gratuitas. Consulte o arquivo `DEPLOYMENT_GUIDE.md` para instruções detalhadas sobre:

- **Render** (Recomendado)
- **Railway**
- **Heroku**

### Deploy Rápido no Render

1. Faça upload do código para GitHub
2. Conecte sua conta GitHub ao Render
3. Crie um novo Web Service
4. Configure o comando de build: `pip install -r requirements.txt`
5. Configure o comando de start: `gunicorn --bind 0.0.0.0:$PORT src.main:app`
6. Deploy automático!

## 🔒 Segurança

- Senhas são criptografadas com hash seguro
- Sessões protegidas com chave secreta
- Proteção contra acesso não autorizado
- Configurações de segurança para produção
- Cookies seguros em HTTPS

## 🎨 Interface

- **Design Responsivo**: Funciona em desktop, tablet e mobile
- **Tema Capoeira**: Cores inspiradas na cultura da capoeira
- **Navegação Intuitiva**: Interface amigável para usuários não técnicos
- **Feedback Visual**: Alertas e confirmações para todas as ações

## 📊 Funcionalidades Futuras

- Relatórios de frequência por aluno
- Gráficos de presença ao longo do tempo
- Sistema de notificações
- Exportação de dados para Excel/PDF
- Gestão de eventos e apresentações
- Sistema de mensagens

## 🤝 Contribuição

Este projeto foi desenvolvido para projetos sociais de capoeira. Contribuições são bem-vindas!

### Como contribuir:
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 📞 Suporte

Para dúvidas ou problemas:
1. Consulte este README
2. Verifique o arquivo `DEPLOYMENT_GUIDE.md`
3. Abra uma issue no repositório

## 🙏 Agradecimentos

Desenvolvido com ❤️ para a comunidade de capoeira, promovendo a organização e o crescimento dos projetos sociais através da tecnologia.

---

**Axé! 🥋**
