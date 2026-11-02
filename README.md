# Codex | JOVI — Câmera em Modo Inteligente

Aplicação web da Sprint 4 para apresentar a solução **JOVI MATH**, uma proposta de câmera inteligente que auxilia na leitura e resolução de expressões matemáticas. O site inclui páginas institucionais, avaliações, FAQ, equipe, login simulado, painel e uma tela para importar o histórico gerado pelo aplicativo em Python.

## Links

* **Deploy na Vercel:** <https://jovi-camera-modo-inteligente-sprint.vercel.app/>

## Tecnologias Utilizadas

* **React 19** para a interface;  

* **Vite 8** para desenvolvimento e geração da versão de produção;

* **React Router 8** para as rotas;

* **Tailwind CSS 4** para estilos;

* **Boxicons** para ícones;

* **ESLint** para análise de qualidade do código;

* **Node.js** para executar as ferramentas do projeto;

* **Python / JOVI MATH** como origem do arquivo JSON de histórico importado pelo site;

* **MockAPI** como API remota de mensagens do formulário de contato.

## Pré-requisitos

* Instale uma versão LTS atual do **Node.js**. O Node já inclui o **npm**.

* O site **não exige Python** para iniciar. O Python é necessário somente para executar o aplicativo JOVI MATH original que gera novos arquivos de histórico a serem importados.

## Como Executar o Projeto

Siga o passo a passo detalhado abaixo para clonar, configurar e rodar a aplicação localmente em sua IDE (ex: VS Code):

### Step 1: Clonar e Acessar o Repositório

Abra o terminal e execute os comandos:

```
git clone https://github.com/MurilloMF10/jovi-camera-modo-inteligente-sprint4.git
cd jovi-camera-modo-inteligente-sprint4
```

### Step 2: Instalar as Dependências

Instale as dependências do projeto:

```
npm install
```

*(Para uma instalação idêntica à registrada no `package-lock.json`, você pode usar `npm ci` no lugar de `npm install`).*

### Step 3: Configuração do Arquivo de Ambiente (`.env`)

1. No seu ambiente de desenvolvimento (IDE), crie um novo arquivo chamado `.env` na raiz do repositório.

2. Copie o conteúdo do arquivo de exemplo `.env.example` e cole dentro do seu arquivo `.env`.

3. Adicione a sua chave/URL da API na variável `VITE_API_URL` substituindo a label abaixo:

```
VITE_API_URL='https://6ae64db4877d34ccafc2c4ba.mockapi.io/api/v1'
```

> **Atenção:** Sem essa variável configurada, o projeto utilizará por padrão a URL da MockAPI já contida no código. Nunca envie o arquivo `.env` com dados privados para o repositório.

### Step 4: Iniciar o Servidor de Desenvolvimento

Rode o comando abaixo no terminal:

```
npm run dev
```

Abra o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Como Testar a Importação do Histórico JSON (Integração Python)

Para testar a leitura e exibição de histórico de cálculos no site sem precisar rodar o script em Python:

1. **Baixar o arquivo localmente:** Dentro do próprio repositório, navegue até a pasta `integracaoPython/` e baixe ou localize o arquivo `historico.json`.

2. **Acessar a página no site:** Com a aplicação rodando (`http://localhost:5173`), acesse a rota **JOVI MATH** (`/historico-jovi-math`).

3. **Importar no navegador:** Na tela de histórico, clique na área de seleção de arquivo **"Arquivo de histórico (.json)"** e selecione o arquivo `historico.json` salvo no seu computador.

4. **Visualizar os dados:** Os cálculos validados serão exibidos imediatamente na tela. O arquivo é processado e lido exclusivamente pelo navegador (não é salvo nem enviado a nenhum servidor).

## Comandos Disponíveis

| Comando | Finalidade | 
| ----- | ----- | 
| `npm run dev` | Inicia o site em modo de desenvolvimento. | 
| `npm run build` | Gera a versão de produção na pasta `dist/`. | 
| `npm run preview` | Visualiza localmente a versão gerada por `npm run build`. | 
| `npm run lint` | Verifica problemas de estilo e qualidade com ESLint. | 
| `npm test` | Executa os testes do validador de histórico. | 

> **Recomendação pré-entrega:** Antes de submeter alterações, execute a sequência:
>
> ```
> npm run lint
> npm test
> npm run build
> ```

## Servidores e Back-end

Este repositório contém somente o front-end React; portanto, não há servidor Python ou back-end local para iniciar.

* O front-end é servido pelo Vite com `npm run dev`.

* As mensagens do formulário de contato são enviadas à API configurada em `VITE_API_URL`; se ela estiver vazia, é usado o MockAPI padrão do projeto.

* O histórico do JOVI MATH não é enviado a servidor algum: o arquivo JSON é lido e validado somente no navegador.

## Formato Obrigatório do JSON Gerado pelo Python

O arquivo enviado deve conter **somente** as chaves abaixo. O site rejeita chaves extras, dados fora do formato, arquivos maiores que 5 MiB e históricos com mais de 1.000 registros.

```
{
  "versao_schema": 1,
  "projeto": "JOVI MATH",
  "exportado_em": "2026-11-02T16:20:03-03:00",
  "registros": [
    {
      "id": "calculo-001",
      "expressao": "5/2",
      "resultado_exato": "5/2",
      "resultado_formatado": "2.50",
      "origem": "digitado",
      "data_hora": "2026-11-02T16:16:43-03:00",
      "explicacao": "Divida 5 por 2 para obter 2,50."
    }
  ]
}
```

### Regras dos Campos

| Campo | Regra | 
| ----- | ----- | 
| `versao_schema` | Número inteiro fixo: `1`. | 
| `projeto` | Texto fixo: `JOVI MATH`. | 
| `exportado_em` / `data_hora` | Data ISO 8601 com fuso (ex: `2026-11-02T16:20:03-03:00` ou final `Z`). | 
| `id` | Texto único, com até 80 caracteres; use letras, números, `_` ou `-`. | 
| `expressao` | Expressão sem espaços, usando números, `+`, `-`, `*`, `/` e parênteses, por exemplo `(5+3)*2`. | 
| `resultado_exato` | Inteiro ou fração irredutível, por exemplo `16`, `5/2` ou `-1/8`. | 
| `resultado_formatado` | Resultado exibido: para frações, duas casas decimais e ponto, por exemplo `2.50`. | 
| `origem` | Apenas `camera`, `imagem` ou `digitado`. | 
| `explicacao` | Texto de até 2.000 caracteres ou `null`. | 

## Exemplo de Exportação em Python

O trecho abaixo mostra a formatação esperada. Ele deve ser adaptado ao código do JOVI MATH em Python, mantendo os nomes das chaves e os tipos de dados:

```
import json
from datetime import datetime, timezone, timedelta

fuso_brasil = timezone(timedelta(hours=-3))
historico = {
    "versao_schema": 1,
    "projeto": "JOVI MATH",
    "exportado_em": datetime.now(fuso_brasil).isoformat(timespec="seconds"),
    "registros": [
        {
            "id": "calculo-001",
            "expressao": "5/2",
            "resultado_exato": "5/2",
            "resultado_formatado": "2.50",
            "origem": "digitado",
            "data_hora": datetime.now(fuso_brasil).isoformat(timespec="seconds"),
            "explicacao": None,
        }
    ],
}

with open("historico.json", "w", encoding="utf-8") as arquivo:
    json.dump(historico, arquivo, ensure_ascii=False, indent=2)
```

* `ensure_ascii=False` preserva caracteres acentuados.

* `indent=2` deixa o arquivo formatado para leitura humana.

* No JSON gerado, o `None` do Python é convertido automaticamente para `null`.

## Uso de Inteligência Artificial

A IA foi utilizada como apoio ao planejamento, à organização de componentes, à explicação de decisões técnicas, à revisão de ideias de interface e à orientação de testes. As decisões de produto, identidade visual, conteúdos e aprovação das mudanças foram realizadas pelo grupo. O registro detalhado de prompts representativos e das etapas está em [`IA.md`](IA.md).

## Integrantes

* **Isaac Pongelli Ambrozevicius** — RM 569166

* **João Lucca Marenov Santos** — RM 569562

* **Murillo Marim Farias** — RM 569045

* **Thalles Almeida Angelini** — RM 569925

## Licença

Este projeto utiliza a licença MIT. Consulte o arquivo [`LICENSE`](LICENSE) para mais detalhes.