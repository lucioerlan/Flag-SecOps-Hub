#### Visão Geral

Este documento detalha a abordagem arquitetural adotada para o desenvolvimento do front-end do Flag-SecOps-Hub, centrada no Atomic Design. A decisão de usar o Atomic Design foi baseada na necessidade de criar uma interface consistente, reutilizável e escalável, que pudesse se adaptar às mudanças rápidas. Foi puramente uma decisão técnica, sem qualquer influência de design.

#### O que é Atomic Design?

Atomic Design é uma metodologia que ajuda a construir sistemas de design consistentes, utilizando uma abordagem que se divide em cinco níveis distintos:

**Átomos**: Os blocos de construção mais básicos, como botões, títulos, inputs ou ícones.
**Moléculas**: Conjuntos de átomos funcionando juntos como, por exemplo, um formulário de pesquisa que combina um input e um botão.
**Organismos**: Conjuntos de moléculas que formam partes mais complexas da interface, como um cabeçalho completo que inclui navegação e elementos de busca.
**Templates**: Layouts gerais que demonstram a estrutura do conteúdo, onde os organismos são colocados em um design que define a estrutura da página.
**Páginas**: Instâncias específicas de templates que mostram o que o usuário final verá com o conteúdo real representado.

![atomic](../images/atomic.png)

---

### Por que Atomic Design?

Optei pelo Atomic Design para promover uma melhor eficiência no desenvolvimento e manter a consistência em todo o projeto. Essa metodologia me permitiu reutilizar componentes em diferentes partes do site, de forma descentralizada.
