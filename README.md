 <h1 align="center">SwalCritical</h1>

  <p align="center">
SwalCritical is a simple addon for <a href="https://github.com/sweetalert2/sweetalert2">Sweet Alert</a> to easily create critical confirmations such as the GitHub's when changing repository visibility. It creates a method in Sweet Alert to abstract the validation, making it easier for reusability (So that it is not needed to everytime you want the same type of confirmation to pass all the parameters and validation). I plan to study the original source code and propose this "feature" in a future version of sweetalert2.  </p>

  <p align="center">
     <a href="https://github.com/rafaelfaustini/swalCritical/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/rafaelfaustini/swalCritical?color=f44336" />
    </a>
     <a href="https://github.com/rafaelfaustini/swalCritical/pulls">
      <img alt="Issues" src="https://img.shields.io/github/issues-pr/rafaelfaustini/swalCritical?color=f44336" />
    </a>
  </p>

## Usage
The default validation is 'action target', so if you want to **delete** the **product1**, the code would be simply:
```javascript
Swal.fireCritical({action:"delete", target:"product1"}).then((result) => {
  if (result.isConfirmed) { // Check if confirmed
    Swal.fire('Deleted !', '', 'success') // Code to be executed when confirmed
  }
})
```

Resulting in:

![Confirmation dialog image](https://i.imgur.com/tLe2yn9.jpg)


SweetAlert.fireCritical method is just an interface that calls SweetAlert.fire method, since it uses ellipsis properties, you can pass the same fire arguments to customize it (or add in swalcritical.js, **defaults** variable to set as default).

## To do
- Parameter to override the 'action target' validation to a customized one
- Look up at the Sweet Alert source-code and see if it fits as a new method
