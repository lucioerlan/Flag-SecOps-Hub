#### Visão Geral

Este documento detalha as decisões relacionadas ao provedor de nuvem escolhido para hospedar e gerenciar os recursos do backend e do frontend do Flag SecOps Hub.

**Escolha do Provedor de Nuvem: Vercel**
**Razões da Escolha:**

- 1. A integração direta com o GitHub é uma das razões pelas quais escolhi a Vercel. Isso me permite um fluxo de trabalho de CI/CD automatizado e eficiente, onde cada push ou pull request pode ser automaticamente construído e implantado, agilizando o ciclo de desenvolvimento e revisão.

- 2. Deploy e Gestão Simplificados: A Vercel simplifica o processo de deploy e gestão de aplicações com sua CLI intuitiva e painel de controle, reduzindo a curva de aprendizado e aumentando a eficiência.

- 3. Suporte a Diferentes Paths do Projeto: A flexibilidade da Vercel permite a configuração de paths diferentes para o projeto, facilitando a organização e o gerenciamento de múltiplos ambientes (desenvolvimento, teste, produção).

- 4. Custo-Eficiência: A Vercel oferece um plano gratuito robusto, perfeito para startups e projetos em fase inicial, permitindo escalar conforme a necessidade sem um investimento inicial significativo.

- 5. Performance e Otimização Automática: A Vercel otimiza automaticamente as aplicações para performance, com recursos como compressão de imagens, cache inteligente e global CDN, garantindo tempos de carregamento rápidos e uma experiência do usuário suave.

- 6. Segurança Proativa: A Vercel implementa práticas de segurança proativas, incluindo HTTPS automático para todos os sites e atualizações de segurança contínuas, assegurando que as aplicações estejam protegidas contra ameaças emergentes.

**Implementação no Projeto:**

- Frontend e Backend Hospedados: Utilizei a Vercel para hospedar tanto o frontend quanto o backend, garantindo um ambiente unificado e coeso para toda a aplicação.

- Ambientes e Domínios: Implementamos vários estágios como dev, test e prod, cada um com seus próprios domínios ou subdomínios, facilitando testes, previews e a transição para produção.

- Escalabilidade Sob Demanda: A Vercel permite escalabilidade automática, ajustando-se ao tráfego e à demanda sem necessidade de intervenção manual, ideal para lidar com picos de acesso ou crescimento contínuo.

- Logs e Monitoramento: Acessamos logs detalhados e insights de performance diretamente do painel da Vercel, permitindo monitorar e otimizar a aplicação continuamente.

![vercel](../images/vercel.png)
