# TodoList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
1. Crear una aplicación con el nombre __`todo-list`__:
    - estilos scss
    - sin tests
    - con routing
2. Crear el módulo app.material` con el modificador `--flat`
3. Crear una carpeta __`components`__ con los siguientes componentes:
  - `header`
  - `footer`
  - `item`
  - `error`

4. Crear una carpeta __`display`__ dentro de components con dos componentes: 
   - `list`
   - `card`

5. Crear un componente `message` dentro del componente __`error`__. (Cambiar el selector a `app-error-message` dentro del componente)

6. Crear un servicio _`services/firebase`_.

### AppComponent
Incluir los siguientes componentes en la vista:
    - `<app-header></app-header>`
    - `<app-item></app-item>`
    - `<app-list></app-list>`
    - `<app-error><app-error-message></app-error-message></app-error>`
    - `<app-footer></app-footer>`

### Header
- Contendrá un botón con un binding de evento `click` al método `toogleFooter()`, que mostrará u ocultará el footer.
- `toogleFooter()`: "emitirá" un boolean `showFooter`

### Introducir un binding de propiedades 
Crear la propiedad footerText= "soy un texto" dentro de las etiquetas de app-footer en el app.component.html

### Generar un dato dentro de la colección todos con la estructura siguiente:
```json
id:{orderId: 1, 
    name: 'todolist', description: 'This is todo list app'}
```
### Crear los crud's de acceso a la bd


  setDeletedItems(deletedItem){}
  
  addItems(item) {  }

  get ttlItems() {
     return this.totalItems;
  }

### Crear un formulario reactivo dentro del componente item

Que tenga los siguientes elementos:
- Un control item con un label "Add item", required 
- Un control description con un label "Add description", required
- Botón `submit` asociado a método a `onSubmit()`
