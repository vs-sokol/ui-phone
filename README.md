# @malond/ui-phone

Обработчик телефонов  для коррестного отображения в виде:
71234567890 -> +7 123 456-78-90

## Применение

При вызове функции возвращается объект с параметрами:

```javascript
{
    isArray: false,
    telArray: [],
    tel: '+7 123 456-78-90',
    color: 'normal'
}
```

Поле        | Тип           | По умолчанию          | Описание
---         | ---           | ---                   | ---
isArray     | Boolean       |                       | Принят массив строк через запятую
telArray    | Array<object> | []                    | Массив из объектов разобранных строк, если передали телефоны через запятую (tel = <string>, color = <string>)
tel         | String        | ""                    | Если передан один телефон
color       | String        | "normal" / "error"    | Нормальная или ошибочная обработка

## Пример

```javascript
const getTelNumber = require('@malond/ui-phone')

const singleNumber = "+71234567890";
const normalNumbers = "+71234567890,81234567890,71234567890,1234567890,4567890,567890,67890";
const wrongNumbers = "771234567890,881234567890,234567890,1234,123,23,4";

console.log("Single numbers:", getTelNumber(singleNumber));
console.log("Normal numbers:", getTelNumber(normalNumbers));
console.log("Wrong numbers:", getTelNumber(wrongNumbers));

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