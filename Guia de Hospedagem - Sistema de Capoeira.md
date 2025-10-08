# Guia de Hospedagem - Sistema de Capoeira

Este documento fornece instruções detalhadas para hospedar o Sistema de Capoeira de forma gratuita e confiável.

## Opções de Hospedagem Gratuita

### 1. Render (Recomendado)

**Render** é uma plataforma moderna que oferece hospedagem gratuita para aplicações web com excelente confiabilidade.

#### Vantagens do Render:
- Hospedagem gratuita permanente
- SSL automático (HTTPS)
- Deploy automático via Git
- Banco de dados PostgreSQL gratuito
- Interface amigável
- Suporte nativo ao Python/Flask

#### Passos para Deploy no Render:

1. **Criar conta no Render**
   - Acesse [render.com](https://render.com)
   - Crie uma conta gratuita usando GitHub, GitLab ou email

2. **Preparar o código**
   - Faça upload do código para um repositório GitHub
   - Certifique-se que os arquivos `requirements.txt` e `Procfile` estão na raiz

3. **Criar Web Service**
   - No dashboard do Render, clique em "New +"
   - Selecione "Web Service"
   - Conecte seu repositório GitHub
   - Configure:
     - **Name**: sistema-capoeira
     - **Environment**: Python 3
     - **Build Command**: `pip install -r requirements.txt`
     - **Start Command**: `gunicorn --bind 0.0.0.0:$PORT src.main:app`

4. **Configurar variáveis de ambiente**
   - Adicione as seguintes variáveis:
     - `FLASK_ENV=production`
     - `SECRET_KEY=sua_chave_secreta_aqui`

5. **Deploy**
   - Clique em "Create Web Service"
   - O deploy será feito automaticamente
   - Sua aplicação estará disponível em: `https://sistema-capoeira.onrender.com`

### 2. Railway

**Railway** é outra excelente opção para hospedagem gratuita.

#### Passos para Deploy no Railway:

1. **Criar conta**
   - Acesse [railway.app](https://railway.app)
   - Faça login com GitHub

2. **Novo projeto**
   - Clique em "New Project"
   - Selecione "Deploy from GitHub repo"
   - Escolha seu repositório

3. **Configuração automática**
   - Railway detectará automaticamente que é uma aplicação Flask
   - O deploy será feito automaticamente

### 3. Heroku (Limitado)

**Nota**: Heroku removeu o plano gratuito, mas ainda é uma opção viável para projetos pequenos com planos pagos de baixo custo.

#### Passos para Deploy no Heroku:

1. **Instalar Heroku CLI**
   ```bash
   # No Ubuntu/Debian
   curl https://cli-assets.heroku.com/install.sh | sh
   ```

2. **Login e criar app**
   ```bash
   heroku login
   heroku create sistema-capoeira
   ```

3. **Deploy**
   ```bash
   git add .
   git commit -m "Deploy inicial"
   git push heroku main
   ```

## Configuração de Banco de Dados

### Para Render (PostgreSQL)

1. **Criar banco de dados**
   - No dashboard do Render, clique em "New +"
   - Selecione "PostgreSQL"
   - Configure o nome: `capoeira-db`

2. **Conectar à aplicação**
   - Copie a "External Database URL"
   - Adicione como variável de ambiente `DATABASE_URL` no Web Service

3. **Atualizar código para PostgreSQL**
   - Adicione `psycopg2-binary` ao `requirements.txt`
   - O código já está preparado para usar a variável `DATABASE_URL`

### Para SQLite (Desenvolvimento)

O sistema já vem configurado com SQLite por padrão, ideal para testes e desenvolvimento local.

## Configurações de Segurança

### Variáveis de Ambiente Importantes

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `SECRET_KEY` | Chave secreta para sessões | `sua_chave_muito_secreta_aqui` |
| `DATABASE_URL` | URL do banco de dados | `postgresql://user:pass@host:port/db` |
| `FLASK_ENV` | Ambiente de execução | `production` |

### Configurações de Produção

O arquivo `config.py` já inclui configurações de segurança para produção:
- Cookies seguros (HTTPS)
- Proteção contra CSRF
- Sessões HTTP-only

## Domínio Personalizado (Opcional)

### Render
- Vá em Settings > Custom Domains
- Adicione seu domínio
- Configure os registros DNS conforme instruído

### Railway
- Acesse Project Settings > Domains
- Adicione seu domínio personalizado

## Monitoramento e Manutenção

### Logs da Aplicação
- **Render**: Acesse a aba "Logs" no dashboard
- **Railway**: Visualize logs em tempo real no dashboard
- **Heroku**: Use `heroku logs --tail`

### Backup do Banco de Dados
- Configure backups automáticos na plataforma escolhida
- Para PostgreSQL no Render, backups são automáticos

### Atualizações
- Faça push para o repositório Git
- O deploy será automático na maioria das plataformas

## Custos e Limitações

### Render (Plano Gratuito)
- 750 horas/mês de execução
- Aplicação "dorme" após 15 minutos de inatividade
- 100GB de largura de banda
- PostgreSQL com 1GB de armazenamento

### Railway (Plano Gratuito)
- $5 de crédito mensal
- Aplicação pode "dormir" após inatividade
- 1GB de RAM
- 1GB de armazenamento

## Solução de Problemas

### Aplicação não inicia
1. Verifique os logs da plataforma
2. Confirme se `requirements.txt` está correto
3. Verifique se o comando de start está correto

### Erro de banco de dados
1. Confirme se a variável `DATABASE_URL` está configurada
2. Verifique se as migrações foram executadas
3. Para PostgreSQL, confirme se `psycopg2-binary` está no requirements

### Aplicação lenta
1. Verifique se está no plano gratuito (limitações de recursos)
2. Considere otimizar consultas ao banco
3. Implemente cache se necessário

## Conclusão

O **Render** é a opção mais recomendada para hospedar o Sistema de Capoeira devido à sua facilidade de uso, confiabilidade e recursos gratuitos generosos. A plataforma oferece SSL automático, deploy contínuo e uma interface intuitiva, tornando-a ideal para projetos sociais que precisam de uma solução robusta e gratuita.

Para projetos que crescerem além dos limites gratuitos, tanto Render quanto Railway oferecem planos pagos acessíveis com recursos adicionais.
