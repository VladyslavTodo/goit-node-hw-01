# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"
https://monosnap.com/file/pNy4IQTgVbAE6iiWr9ErLPxzfY1O31

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
https://monosnap.com/file/oBrzkPbdRorjtp8EyOhfbtpB3OuG0G

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/NAU35YTXK0ZMVIHAIDFndSWUzLgCTU

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
https://monosnap.com/file/yj4tHAyag0xN63a5jcfpL6DgqkFFYJ
