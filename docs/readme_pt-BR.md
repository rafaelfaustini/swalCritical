 <h1 align="center">SwalCritical</h1>
  <p align="center">
SwalCritical é uma extensão para <a href="https://github.com/sweetalert2/sweetalert2">Sweet Alert</a> que possibilita a fácil criação de confirmações críticas como as do Github ao trocar a visibilidade de um repositório. É criado um método no Sweet Alert para abstrair essa validação, sendo assim mais fácil para reusabilidade (Desta forma não é necessário que toda vez que for usar o mesmo tipo de diálogo, ter que passar vários parametros e fazer a validação) easily create critical confirmations such as the GitHub's when changing repository visibility. Planejo estudar o código fonte original e propor essa 'feature' numa futura versão do sweetalert2.</p>

  <p align="center">
     <a href="https://github.com/rafaelfaustini/swalCritical/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/rafaelfaustini/swalCritical?color=f44336" />
    </a>
     <a href="https://github.com/rafaelfaustini/swalCritical/pulls">
      <img alt="Issues" src="https://img.shields.io/github/issues-pr/rafaelfaustini/swalCritical?color=f44336" />
    </a>
  </p>

  <p align="center">
    ·
    <a href="/docs/readme_pt-BR.md">Português Brasileiro</a>
    ·
  </p>

## Uso

A validação padrão consiste em 'ação alvo', então se você quer deletar o produto1, o código seria simplesmente:

```javascript
Swal.fireCritical({ action: "deletar", target: "produto1" }).then((result) => {
	if (result.isConfirmed) {
		// Checa se confirmado
		Swal.fire("Deletado !", "", "success"); // Code a ser executado ao ser confirmado
	}
});
```

Resultando em:

![Imagem do modal de confirmação](https://i.imgur.com/tLe2yn9.jpg)

O método SweetAlert.fireCritical é apenas uma interface que chama o método SweetAlert.fire, tendo em vista que usa parâmetro ellipsis, é possível passar os mesmos parâmetros do fire para personalizar a caixa de confirmação (ou adicionar em swalcritical.js, variável **defaults** para definir como padrão).

## À fazer

- Parâmetro que sobrepões a validação 'ação alvo' para um personalizado
- Olhar para o código fonte do Sweet Alert e ver se isso se o addon encaixa como um novo método
