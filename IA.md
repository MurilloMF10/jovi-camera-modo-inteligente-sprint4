# Uso de Inteligência Artificial no projeto Codex | Jovi

## Objetivo deste documento

Este arquivo registra como ferramentas de Inteligência Artificial foram utilizadas durante o desenvolvimento do projeto acadêmico **Codex | Jovi — Modo Inteligente da Câmera Jovi**.

Os prompts abaixo são resumos representativos das interações realizadas e não uma transcrição literal das conversas. O grupo participou das decisões, revisou sugestões e autorizou as mudanças implementadas.

## Papel da IA no projeto

A IA foi utilizada como ferramenta de apoio para:

- compreender o contexto e os requisitos do projeto;
- organizar sugestões de estrutura, componentes e pastas;
- explicar decisões técnicas e trechos de código;
- apresentar alternativas de interface e organização visual;
- validar ideias definidas pelo grupo;
- auxiliar na identificação de problemas;
- orientar testes com `npm run dev`, `npm run lint` e `npm run build`.

A IA não substituiu as decisões do grupo. A proposta do produto, as páginas, os conteúdos, as imagens e a identidade visual foram definidos e aprovados pelo grupo.

## Etapa 1 — Prompt base e compreensão do projeto

### Objetivo

Apresentar o contexto geral do trabalho para a IA e definir como ela deveria auxiliar durante a Sprint 4.

### Prompt representativo

> “Este é o contexto do nosso projeto da Sprint 4. Estamos desenvolvendo uma landing page em React para o Modo Inteligente da Câmera Jovi. O projeto precisa seguir os requisitos da disciplina e ser implementado gradualmente, com explicações sobre as decisões técnicas.”

### Como a IA foi utilizada

Inicialmente, o grupo elaborou um prompt-base com o contexto do produto, da Sprint anterior, dos requisitos acadêmicos, das páginas previstas e das tecnologias permitidas.

A IA analisou esse contexto, confirmou a compreensão da proposta e passou a auxiliar na organização do desenvolvimento por fases. Também foi definido que a IA deveria explicar as decisões técnicas, sugerir formas simples de implementar cada parte e aguardar a validação do grupo antes de avançar entre as etapas.

## Etapa 2 — Identidade visual e interface

### Objetivo

Definir uma identidade visual coerente com a marca Jovi e adequada a uma landing page de tecnologia voltada a um público profissional e jovem.

### Prompt representativo

> “O grupo quer uma identidade visual inspirada na Jovi, usando principalmente azul, preto e branco. Queremos um visual profissional, tecnológico e atrativo para o público jovem, sem exagerar em cores neon, gradientes ou efeitos.”

### Como a IA foi utilizada

O grupo definiu previamente a direção visual desejada: cores associadas à marca Jovi, com predominância de azul, preto e branco, além de uma aparência tecnológica e profissional.

A IA apresentou variações de paleta baseadas nessa direção já escolhida pelo grupo. O grupo avaliou as opções e escolheu a alternativa que melhor representava a proposta do produto.

A IA também foi utilizada como uma segunda opinião durante a definição da interface, sugerindo cuidados com contraste, legibilidade, responsividade e equilíbrio entre uma aparência profissional e uma comunicação visual voltada ao público jovem.

A decisão final sobre cores, estilo e aparência do site foi do grupo.

## Etapa 3 — Organização técnica do projeto

### Objetivo

Organizar a aplicação React de forma simples, legível e adequada aos requisitos da Sprint 4.

### Prompt representativo

> “As páginas e funcionalidades já foram definidas pelo grupo. Ajude a sugerir uma organização de pastas, componentes e arquivos de dados para o projeto React, explicando por que cada parte deve ficar separada.”

### Como a IA foi utilizada

O grupo definiu previamente quais páginas seriam necessárias: Home, Avaliações, FAQ, Equipe, Login, Painel e página não encontrada.

Também foram definidos os componentes principais, como Header, Footer, modal de contato, cartões e seções da Home.

Com essas decisões já estabelecidas, a IA auxiliou na organização do projeto em pastas, explicando a responsabilidade de cada uma:

- `pages`: páginas completas da aplicação;
- `components`: partes reutilizáveis da interface;
- `data`: textos, listas e informações estruturadas;
- `routes`: configuração das rotas;
- `hooks`: lógica reutilizável;
- `services`: comunicação com a API;
- `contexts`: informações globais, como autenticação.

Por exemplo, a pasta `data` foi escolhida para separar conteúdo da interface. Em vez de deixar todos os textos e listas dentro do JSX da Home, os dados ficam em arquivos JavaScript e são importados pelos componentes. Isso facilita alterações futuras e reduz repetição de código.

A organização foi apresentada pela IA, discutida pelo grupo e aprovada antes de ser implementada.

## Etapa 4 — Rotas e componentes de layout

### Objetivo

Definir a navegação entre as páginas do projeto e os componentes compartilhados por toda a aplicação.

### Prompt representativo

> “Com base nas páginas que o grupo definiu para o projeto, ajude a organizar quais serão as rotas públicas, quais serão privadas e como podemos estruturar uma navegação comum no site.”

### Como a IA foi utilizada

O grupo já havia definido as páginas necessárias para a aplicação: Home, Avaliações, FAQ, Equipe, Login, Painel e página não encontrada.

A IA auxiliou o grupo a organizar essas páginas em rotas, separando quais poderiam ser acessadas por qualquer visitante e qual rota deveria ser protegida pela autenticação simulada.

Também ajudou a estruturar os componentes compartilhados da aplicação, como Header, Footer e Layout, para que a navegação e a identidade visual sejam mantidas em todas as páginas.

O grupo revisou a estrutura proposta, aprovou as rotas necessárias e definiu que o menu deveria ser responsivo. Os ícones do menu foram escolhidos pelo grupo para utilizar a biblioteca Boxicons.

## Etapa 5 — Construção da Home

### Objetivo

Transformar o conteúdo e as seções já definidos pelo grupo em uma landing page responsiva e organizada.

### Prompt representativo

> “A estrutura da Home já foi definida pelo grupo e aproveita a proposta da Sprint anterior. Ajude a organizar as seções em componentes e dê opiniões sobre a ordem de apresentação do conteúdo.”

### Como a IA foi utilizada

As seções da página inicial já estavam definidas a partir do projeto e da Sprint anterior:

- Hero;
- faixa de números;
- solução;
- público-alvo;
- galeria;
- chamada final.

A IA auxiliou como segunda opinião para organizar a ordem das seções, sugerindo uma sequência que apresenta primeiro a proposta, depois o funcionamento do produto, os públicos atendidos e, por fim, as telas do aplicativo e a chamada de contato.

A IA também ajudou a transformar cada seção em um componente separado, facilitando leitura, manutenção e responsividade. Os textos, imagens e conteúdos foram definidos, revisados e aprovados pelo grupo.

## Boas práticas adotadas

Durante o desenvolvimento, a IA foi usada como apoio técnico e ferramenta de validação. O grupo adotou as seguintes práticas:

- definir decisões antes da implementação;
- avaliar sugestões antes de aplicá-las;
- dividir o desenvolvimento em etapas menores;
- revisar o código antes de registrar alterações no Git;
- testar localmente com `npm run dev`;
- executar `npm run lint` e `npm run build` após alterações relevantes;
- manter componentes, páginas e dados organizados em arquivos separados;
- utilizar imagens e textos relacionados ao escopo do projeto.

## Observação final

O projeto foi desenvolvido com participação ativa do grupo. A IA foi utilizada como apoio para planejamento, explicação, organização técnica, validação de ideias e implementação assistida.

As decisões finais sobre produto, visual, estrutura, conteúdos e evolução do projeto foram discutidas e aprovadas pelo grupo.
