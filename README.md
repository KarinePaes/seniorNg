# SeniorNg - Biblioteca de Componentes Angular para Acessibilidade

A biblioteca **SeniorNg** é uma coleção de componentes reutilizáveis para o desenvolvimento em Angular, com foco em acessibilidade e design específico para idosos. Esta biblioteca inclui uma variedade de componentes que priorizam facilidade de uso, legibilidade e simplicidade, garantindo que os usuários idosos possam interagir confortavelmente com aplicativos da web e móveis.

Abaixo, você encontrará informações sobre como instalar a biblioteca usando o npm e uma breve explicação sobre cada um dos componentes disponíveis.

## Instalação

Para utilizar a biblioteca **SeniorNg** em seu projeto Angular, siga os passos abaixo:

1. Abra o terminal e navegue até o diretório do seu projeto.
2. Execute o seguinte comando para instalar a biblioteca usando o npm:

```bash
npm install senior-ng
```
3. Agora você pode importar e usar os componentes da biblioteca em seus arquivos Angular.

## Componentes Disponíveis

A biblioteca **SeniorNg** oferece diversos componentes que foram desenvolvidos com foco na acessibilidade e na experiência de uso de idosos. Abaixo, você encontrará uma lista dos componentes disponíveis juntamente com uma breve explicação de cada um deles:

### ActionWarning

O componente **Action Warning** é uma caixa de diálogo que notifica e confirma ações importantes ou irreversíveis antes de serem executadas. Ele permite personalização do título, mensagem, botões primário e secundário, possibilitando sua adaptação ao contexto específico da aplicação. É útil para evitar ações indesejadas, como excluir itens ou realizar ações críticas sem intenção.

**Instalação:**

```typescript
import { ActionWarningModule } from 'senior-ng';

@NgModule({
  imports: [
    // ...
    ActionWarningModule,
    // ...
  ],
})
export class AppModule { }
```

Agora você está pronto para começar a usar o componente **ActionWarning** da biblioteca **SeniorNg** em seu projeto Angular.
Utilize a chamada da diretiva `action-warning` da seguinte forma:

```html
<button>
    action-warning
    [title]="'Você está saindo da sua conta'"
    [content]="'Você está saindo da sua conta, confirmar ação?'" 
    [buttonPrimary]="'Confirmar'" 
    [buttonSecondary]="'Cancelar'">
        Sair da conta
</button>
```

### DropdownToList

O componente **Dropdown to List** é uma solução que transforma um menu suspenso em uma lista estática com radio buttons para seleção, melhorando a acessibilidade para pessoas com dificuldades motoras. O usuário pode escolher entre o formato de dropdown ou lista, dependendo da preferência. O programador pode definir os itens disponíveis, o placeholder do campo de input e a escrita do botão de alternância entre os componentes, que por padrão exibe **Lista** e **Dropdown**.

**Instalação:**

```typescript
import { DropdownToListModule } from 'senior-ng';

@NgModule({
  imports: [
    // ...
    DropdownToListModule,
    // ...
  ],
})
export class AppModule { }
```

Agora você está pronto para começar a usar o componente **DropdownToList** da biblioteca **SeniorNg** em seu projeto Angular. Faça a chamada do componente `<sng-dropdown-to-list>` utilizando as propriedades `itensList` para passar o array a ser exibido na lista e `labelInput` para definir a mensagem no placeholder do componente.

```html
 <sng-dropdown-to-list [itensList] = "items"  [labelInput]="input"></sng-dropdown-to-list>
```

### HighlightLink

O componente **Highlight Link** foi desenvolvido para melhorar a usabilidade e acessibilidade dos links em páginas da web. Ao posicionar o mouse sobre um link, a cor de fundo é destacada e uma tooltip informativa é exibida, fornecendo uma descrição concisa do destino do link. Isso ajuda os usuários a identificar facilmente os links e compreender o contexto e propósito do link sem a necessidade de clicar. O programador pode personalizar o link de destino, a mensagem de aviso e a label para tornar a experiência mais clara e significativa, especialmente para usuários de leitores de tela.

**Instalação:**

```typescript
import { HighlightLinkModule } from 'senior-ng';

@NgModule({
  imports: [
    // ...
    HighlightLinkModule,
    // ...
  ],
})
export class AppModule { }
```

Agora você está pronto para começar a usar o componente **Highlight Link** da biblioteca **SeniorNg** em seu projeto Angular. Faça a chamada do componente `<sng-highlight-link>` utilizando as propriedades `link` para passar o link de navegação, `textLink` para informar o texto de exibição e `textTooltip` para informar a mensagem da tooltip.

```html
<p>
    Um hiperlink é um elemento interativo comumente utilizado em páginas da web que permite aos usuários navegar de uma página para outra com apenas um clique. Esses links são representados geralmente por texto ou imagens destacadas e possuem uma cor ou estilo diferente para indicar sua interatividade. Ao clicar em um hiperlink, o usuário é direcionado para o destino associado, que pode ser uma página da web, um arquivo, uma imagem, ou até mesmo um endereço de e-mail.Um exemplo popular de hiperlink é o site do Google. Ao acessar a página
    <sng-highlight-link 
    link="https://www.google.com.br"
    textLink="www.google.com.br"
    textTooltip="Este link irá te direcionar ao buscador Google quando clicado">
    </sng-highlight-link>
    é possível notar que o nome "Google" é um hiperlink. Ao clicar nele, o usuário é redirecionado para a página inicial do mecanismo de busca, onde pode realizar pesquisas e encontrar informações na internet.
</p>
```

### Hint

O componente **Hint** visa melhorar a acessibilidade para usuários não familiarizados com a navegação na web. Ao clicar no botão de dica, tooltips são ativadas para fornecer informações contextuais e descritivas sobre os elementos interativos do site, como botões e campos de formulário. Isso ajuda os usuários a compreender rapidamente a funcionalidade de cada componente, facilitando a navegação e interação. A abordagem é especialmente útil para pessoas com deficiências visuais ou inexperientes na interface, tornando a informação e funcionalidades mais acessíveis. O programador pode personalizar quais componentes recebem as dicas, a mensagem exibida e o posicionamento do botão flutuante na tela.

**Instalação:**

```typescript
import { HintModule } from 'senior-ng';

@NgModule({
  imports: [
    // ...
    HintModule,
    // ...
  ],
})
export class AppModule { }
```

Agora você está pronto para começar a usar o componente **Hint** da biblioteca **SeniorNg** em seu projeto Angular. Faça a chamada do componente `<sng-hint>` informando o id dos componentes que serão manipulados a partir da propriedade `idHint`:

```html
<sng-hint  [idHint]="'tooltip1'"></sng-hint>
```

Utilize a chamada da propriedade `appControlledTooltip` para marcar o componente e a chamada do `matTooltop` com a informação que será exibida ao usuário.

```html
<button class="button"
    matTooltip="Clique aqui para concluir sua pesquisa"
    appControlledTooltip="tooltip1">
    Pesquisar
</button>
```

### Increase Mouse Sensibility

O componente **Increase Mouse Sensibility** é um recurso interativo que aumenta a área clicável de botões quando o cursor do mouse é colocado sobre eles (hover). Essa ampliação temporária melhora a usabilidade, tornando os botões mais visíveis e convidativos para os usuários, especialmente aqueles com baixa visão ou dificuldades de precisão no uso do mouse. A animação proporciona feedback visual imediato, incentivando a interação e facilitando a identificação e utilização dos botões na interface digital. Essa abordagem visa atender às recomendações de usabilidade e acessibilidade, garantindo que a área sensível aos cliques seja suficientemente grande para uma interação confortável, especialmente para usuários idosos.

**Instalação:**

```typescript
import { IncreaseMouseSensibilityModule } from 'senior-ng';

@NgModule({
  imports: [
    // ...
    IncreaseMouseSensibilityModule,
    // ...
  ],
})
export class AppModule { }
```

Agora você está pronto para começar a usar o componente **Increase Mouse Sensibility** da biblioteca **SeniorNg** em seu projeto Angular. Faça a chamada do componente `<sng-sng-increase-sensibility>` informando a label do componente através da propriedade `label`:

```html
<sng-increase-sensibility label="Pesquisar"></sng-increase-sensibility>
```

### Mouse Controller

O componente **Mouse Controler** possui botões para aumentar e diminuir o tamanho do cursor do mouse, proporcionando uma funcionalidade de acessibilidade. Essa opção visa melhorar a experiência de usuários com dificuldades visuais ou de precisão ao interagir com a interface digital. Ao clicar no botão "aumentar", o cursor do mouse é ampliado, tornando-o mais visível, enquanto o botão "diminuir" restaura o tamanho original. Essa personalização do cursor oferece maior conforto e facilita a navegação para usuários com necessidades específicas.

**Instalação:**

```typescript
import { MouseControllerModule } from 'senior-ng';

@NgModule({
  imports: [
    // ...
    MouseControllerModule,
    // ...
  ],
})
export class AppModule { }
```

Agora você está pronto para começar a usar o componente **Mouse Controler** da biblioteca **SeniorNg** em seu projeto Angular. Faça a chamada do componente através do `<sng-mouse-controler>`.

```html
<sng-mouse-controler> </sng-mouse-controler>
```


### Text Adaptation

O componente **Text Adaptation** é um bloco de texto acessível que permite aos usuários personalizar a exibição do texto de acordo com suas necessidades. Ele oferece funcionalidades como contrastes negativos, ajuste de tamanho da fonte e desativação da justificação no texto. As opções de adaptação estão divididas em novos componentes, permitindo que o programador escolha quais recursos ativar ou desativar. É recomendado o uso completo do componente para garantir maior usabilidade e acessibilidade. O programador também pode definir o posicionamento dos botões e o texto dentro do container.

**Instalação:**

```typescript
import { TextAdaptationModule } from 'senior-ng';

@NgModule({
  imports: [
    // ...
    TextAdaptationModule,
    // ...
  ],
})
export class AppModule { }
```

Agora você está pronto para começar a usar o componente **Mouse Controler** da biblioteca **SeniorNg** em seu projeto Angular. Faça a chamada do componente através do `<sng-mouse-controler>`.

```html
<sng-text-adaptation>
    <p>Este é um texto genérico destinado a preencher uma área de texto em um website ou documento. Ele pode ser usado como uma amostra de conteúdo ou para fins de teste de formatação. O objetivo deste texto é fornecer informações básicas sobre um tópico genérico e preencher espaço na página. Ele pode ser personalizado ou substituído por conteúdo real relevante para o usuário ou o propósito do documento.</p>
</sng-text-adaptation>
```
Você pode escolher quais tipos de adaptações serão permitidas no texto através das propriedades `enableFontSize`, `enableLineHeight` e `enableChangeContrast` que por padrão são marcadas como `true`.



Sinta-se à vontade para explorar e utilizar os demais componentes disponíveis conforme as necessidades do seu projeto.
