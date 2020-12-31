# SwalCritical
Swal critical is a simple addon for [Sweet Alert](https://github.com/sweetalert2/sweetalert2) to easily create critical confirmations such as the GitHub's when changing repository visibility. It creates a method in Sweet Alert to abstract the validation, making it easier for reusability (So that it is not needed to everytime you want the same type of confirmation to pass all the parameters and validation).

## Usage
The default validation is 'action target', so if you want to **delete** the **product1**, the code would be simply:
```javascript
Swal.fireCritical({action:"delete", prop:"product1"}).then((result) => {
  if (result.isConfirmed) { // Check if confirmed
    Swal.fire('Deleted !', '', 'success') // Code to be executed when confirmed
  }
})
```

