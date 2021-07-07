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
