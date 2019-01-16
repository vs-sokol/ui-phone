# @malond/ui-phone

Обработчик телефонов для коррестного отображения в виде:
71234567890 -> +7 123 456-78-90

## Применение (Node.js)

При вызове функции возвращается объект с параметрами:

```javascript
{
    isArray: false,
    telArray: [],
    tel: '+7 123 456-78-90',
    color: 'normal'
}
```

| Поле     | Тип           | По умолчанию       | Описание                                                                                                  |
| -------- | ------------- | ------------------ | --------------------------------------------------------------------------------------------------------- |
| isArray  | Boolean       |                    | Принят массив строк через запятую                                                                         |
| telArray | Array<object> | []                 | Массив из объектов разобранных строк, если передали телефоны через запятую (tel = string, color = string) |
| tel      | String        | ""                 | Если передан один телефон                                                                                 |
| color    | String        | "normal" / "error" | Нормальная или ошибочная обработка, если передан один телефон                                             |

### Пример

```javascript
const getTelFormatted = require("@malond/ui-phone/getTelFormatted");

const singleNumber = "+71234567890";
const normalNumbers =
  "+71234567890,81234567890,71234567890,1234567890,4567890,567890,67890";
const wrongNumbers = "771234567890,881234567890,234567890,1234,123,23,4";

console.log("Single numbers:", getTelFormatted(singleNumber));
console.log("Normal numbers:", getTelFormatted(normalNumbers));
console.log("Wrong numbers:", getTelFormatted(wrongNumbers));

// output:
// ---------------------------------------------------
//
// Single numbers:
// { isArray: false,
//   telArray: [],
//   tel: '+7 123 456-78-90',
//   color: 'normal' }
//
// Normal numbers:
// { isArray: true,
//   telArray:
//    [ { tel: '+7 123 456-78-90', color: 'normal' },
//      { tel: '+7 123 456-78-90', color: 'normal' },
//      { tel: '+7 123 456-78-90', color: 'normal' },
//      { tel: '+7 123 456-78-90', color: 'normal' },
//      { tel: '456-78-90', color: 'normal' },
//      { tel: '56-78-90', color: 'normal' },
//      { tel: '6-78-90', color: 'normal' } ],
//   tel: '',
//   color: '' }
//
// Wrong numbers:
// { isArray: true,
//   telArray:
//    [ { tel: '771234567890', color: 'error' },
//      { tel: '881234567890', color: 'error' },
//      { tel: '234567890', color: 'error' },
//      { tel: '1234', color: 'error' },
//      { tel: '123', color: 'error' },
//      { tel: '23', color: 'error' },
//      { tel: '4', color: 'error' } ],
//   tel: '',
//   color: '' }
```

## React компонент

### Пример

```javascript
// ...
import { TelPhones } from "@malond/ui-phone";
// ...

// ...
// tel = "71234567890"
<TelPhones className="size-small">{tel}</TelPhones>;
// ...
```
