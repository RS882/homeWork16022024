const employees = [
	{ name: 'Alice', salary: 5000 },
	{ name: 'Bob', salary: 6000 },
	{ name: 'Charlie', salary: 4500 }
];

// 1. Задача: "Удвоение зарплаты" У вас есть массив объектов, представляющих сотрудников 
//с полями "имя" и "зарплата". Используя метод map, удвойте зарплату каждого сотрудника.

const res1 = employees.map(({ salary, ...props }) => ({ salary: salary * 2, ...props }));
console.log(res1);


// 2. Задача: "Фильтрация сотрудников" Используя метод filter, отфильтруйте сотрудников, у 
//которых зарплата выше 5500.
const res2 = employees.filter(({ salary }) => salary > 5500);
console.log(res2);

// 3. Задача: "Общая зарплата" Используя метод reduce, вычислите общую зарплату всех сотрудников.
const res3 = employees.reduce((acc, { salary }) => acc + salary, 0)
console.log(res3);
// 4. Задача: "Имена в верхнем регистре" Используя метод map, преобразуйте имена всех сотрудников
// к верхнему регистру.
const res4 = employees.map(({ name, ...props }) => ({ name: name.toUpperCase(), ...props }))
console.log(res4);