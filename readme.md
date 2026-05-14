# 🏥 SISGEVA
### Sistema de Gerenciamento de Vacinação

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

> Sistema web para controle de pacientes e registro de vacinas, desenvolvido como projeto da disciplina de Projeto em Computação Aplicada na Universidade Nove de Julho.

## 📌 Sobre o Projeto

O SISGEVA é um sistema web desenvolvido para simular o controle de vacinação em postos de saúde. Permite cadastrar pacientes, registrar vacinas aplicadas e consultar o histórico de vacinação, tudo sem necessidade de internet ou servidor — os dados são armazenados localmente no navegador.

**Desenvolvido por:** Pedro Faria  
**Curso:** Ciência da Computação — Universidade Nove de Julho  
**Tipo:** Projeto Individual  

---

## 🚀 Funcionalidades

- 🔐 Login com validação de credenciais
- 👤 Cadastro, edição e exclusão de pacientes
- 💉 Registro de vacinas com dose, data, lote e profissional responsável
- 📊 Histórico de vacinação por paciente
- 🌙 Tema claro/escuro com preferência salva
- ✅ Feedback visual em todas as ações (sem alerts do navegador)
- 🔄 Navegação entre telas sem recarregar a página

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — estrutura semântica das telas
- **CSS3** — estilização com variáveis de tema claro/escuro
- **JavaScript Vanilla** — lógica do sistema sem frameworks
- **LocalStorage** — armazenamento dos dados no navegador

---

## 📂 Estrutura do Projeto

```
SISGEVA/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── storage.js   # Gerenciamento de dados (LocalStorage)
    ├── auth.js      # Autenticação
    ├── pacientes.js # Lógica de pacientes
    ├── vacinas.js   # Lógica de vacinas
    └── ui.js        # Controle de navegação e tema
```

---

## ▶️ Como Executar

1. Clone o repositório:

```
git clone https://github.com/PHFaria05/SISGEVA.git
```

2. Abra o arquivo `index.html` no navegador

> Não precisa de servidor, instalação ou internet. Funciona direto no navegador!

---

## 🔐 Acesso ao Sistema

| Campo | Valor |
|-------|-------|
| Usuário | `admin` |
| Senha | `123` |

---

## 📈 Melhorias Futuras

- [ ] Modal para edição de vacinas (substituir o `prompt()`)
- [ ] Sistema de autenticação real com banco de dados
- [ ] Responsividade completa para mobile
- [ ] Relatórios de vacinação em PDF
- [ ] Múltiplos usuários com níveis de acesso

---

## 👨‍💻 Autor

**Pedro Faria**  
Ciência da Computação — Universidade Nove de Julho  

[![GitHub](https://img.shields.io/badge/GitHub-PHFaria05-181717?style=flat&logo=github)](https://github.com/PHFaria05)

---

> Projeto desenvolvido para a disciplina de Projeto em Computação Aplicada — 2025