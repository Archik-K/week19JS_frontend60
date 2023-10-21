//Задание 1
//Создайте функцию makeOne, которая выполняет GET-запрос по адресу https://catfact.ninja/fact, используя функцию fetch(). Результат должен быть выведен в консоль. Функция вызывается по нажатию кнопки "Задание 1".

function makeOne() {
	// Используем функцию `fetch`, чтобы выполнить GET-запрос на указанный адрес.
	// `fetch` возвращает промис (объект, представляющий возможное завершение или сбой асинхронной операции).
	fetch("https://catfact.ninja/fact")
		.then((res) => {
			// После того, как промис переходит в состояние "завершено", мы обрабатываем ответ от сервера, преобразующий его в JSON.
			return res.json();
		})
		.then((data) => {
			// Данные, возвращенные предыдущим обработчиком промиса, передаются следующему обработчику.
			// Поскольку данные теперь в формате JSON, мы можем получить доступ к полю `fact`.
			console.log(data.fact);
		})
		.catch((err) => {
			// Если в процессе выполнения промиса произойдет ошибка, она будет обработана в этом блоке кода.
			// Здесь мы просто выводим сообщение об ошибке и сам объект ошибки в консоль.
			console.log("Ошибка. Запрос не выполнен: ", err);
		});
	//Ваш код
}

document.querySelector(".b-1").addEventListener("click", makeOne);

//Задание 2
//Создайте функцию makeTwo, которая выполняет GET-запрос по адресу https://emojihub.yurace.pro/api/random/group/face-positive. Результат запроса - поле htmlCode вставьте в элемент с id result2.

function makeTwo() {
	// Выполнение GET-запроса
	fetch("https://emojihub.yurace.pro/api/random/group/face-positive")
		.then((response) => response.json())
		.then((data) => {
			// Извлечение свойства "htmlCode" из полученного JSON-объекта
			const htmlCode = data.htmlCode;

			// Создание элемента <p>
			const paragraph = document.createElement("p");

			// Установка содержимого созданного элемента <p> равным значению из свойства "htmlCode"
			paragraph.innerHTML = htmlCode;

			// Вставка элемента <p> в элемент с id "result2"
			const resultElement = document.getElementById("result2");
			resultElement.innerHTML = "";
			resultElement.appendChild(paragraph);
		})
		.catch((error) =>
			console.log("Произошла ошибка при выполнении запроса: " + error)
		);
	//Ваш код
}

document.querySelector(".b-2").addEventListener("click", makeTwo);

//Задание 3
//Создайте функцию makeThree, которая выполняет GET-запрос по адресу https://www.boredapi.com/api/activity, используя функцию fetch(). Выведите в консоль ответ с сервера, чтобы убедиться, что получили данные.

function makeThree() {
	fetch("https://www.boredapi.com/api/activity") // Выполняем GET-запрос к указанному адресу
		.then((response) => response.json()) // Конвертируем ответ в формат JSON
		.then((data) => console.log(data.activity)) // Выводим полученные данные в консоль
		.catch((error) => console.log("Error:", error)); // Обрабатываем ошибки и выводим их в консоль, если они возникнут
	//Ваш код
}

document.querySelector(".b-3").addEventListener("click", makeThree);

//Задание 4
//Создайте функцию makeFour, которая делает запрос на адрес https://www.boredapi.com/api/activity. Выведите в консоль полученную активность в формате 'Activity: описание активности'.

function makeFour() {
	// Используем функцию fetch() для отправки HTTP запроса на указанный URL
	fetch("https://www.boredapi.com/api/activity") // fetch возвратит промис, который перейдет в состояние “успешно выполнено” (resolved), когда получит ответ от сервера
		.then((response) => response.json()) // Вызываем метод .json() чтобы преобразовать текст ответа в JSON, который также возвращает промис.
		.then((data) => {
			// когда промис, возвращаемый .json(), перейдет в состояние успешно выполнено, мы получим данные (data) и выполним следующую функцию.
			console.log("Activity: " + data.activity); // В консоль браузера выводится строка, составленная из слова 'Activity: ' и поля 'activity' полученного объекта
		})
		.catch((error) => {
			// в случае, если обнаружится ошибка (будет вызван reject промиса), функция в блоке .catch() позволяет ее обработать и вывести в консоль.
			console.log("Error:", error);
		});
}

document.querySelector(".b-4").addEventListener("click", makeFour);

//Задание 5
//Создайте функцию makeFive, которая делает запрос на адрес https://www.boredapi.com/api/activity. Выведите в консоль количество участников для активности.

function makeFive() {
	fetch("https://www.boredapi.com/api/activity")
		.then((res) => res.json())
		.then((data) => {
			console.log("Количество участников для активности:" + data.participants);
		})
		.catch((error) => {
			console.log("Error:", error);
		});
	//Ваш код
}

//добавьте слушатель события
document.querySelector(".b-5").addEventListener("click", makeFive);
//Задание 6
//Создайте функцию makeSix, которая делает запрос на адрес https://www.boredapi.com/api/activity. Выведите в консоль свойства из полученного объекта, такие как activity, type, price и accessibility.

function makeSix() {
	fetch("https://www.boredapi.com/api/activity")
		.then((res) => res.json())
		.then((data) => {
			console.log("Activity: " + data.activity);
			console.log("Type: " + data.type);
			console.log("Price: " + data.price);
			console.log("Accessibility: " + data.accessibility);
		})
		.catch((error) => {
			console.log("Error:", error);
		});
	//Ваш код
}

document.querySelector(".b-6").addEventListener("click", makeSix);

//Задание 7
//Создайте функцию makeSeven, которая делает запрос на адрес https://api.agify.io/. Выведите в консоль ответ с сервера, чтобы убедиться, что получили данные.

function makeSeven() {
	fetch("https://api.agify.io/")
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.log("Error:", error);
		});
	//Ваш код
}

//добавьте слушатель события
document.querySelector(".b-7").addEventListener("click", makeSeven);
//Задание 8
//Создайте функцию makeEight, которая отправляет GET-запрос на адрес https://api.agify.io/ с параметром ?name=alice.

function makeEight() {
	fetch("https://api.agify.io/?name=alice")
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.log("Error:", error);
		});
	//Ваш код
}

document.querySelector(".b-8").addEventListener("click", makeEight);

//Задание 9
//Создайте функцию makeNine, которая отправит запрос на адрес `https://api.agify.io/?name=vadim` и выведет полученные данные в элемент с id result9.
//Подсказка: использование JSON.stringify() позволит преобразовать объект в строку.

function makeNine() {
	fetch("https://api.agify.io/?name=vadim")
		.then((response) => response.json())
		.then((data) => {
			const resultElement = document.getElementById("result9");
			resultElement.textContent = JSON.stringify(data);
			//Ваш код
		})
		.catch((error) => {
			console.log("Ошибка:", error);
		});
}

//добавьте слушатель события
document.querySelector(".b-9").addEventListener("click", makeNine);

//Задание 10
//Создайте функцию makeTen, которая делает запрос на адрес https://dog.ceo/api/breeds/image/random. Полученное изображение выведите после элемента с id "result10".

function makeTen() {
	const resultElement = document.getElementById("result10");
	resultElement.innerHTML = ""; // Очищаем содержимое контейнера перед каждым добавлением изображения
	// Выполняем GET-запрос по указанному URL
	fetch("https://dog.ceo/api/breeds/image/random")
		.then((response) => {
			// Преобразуем ответ в формат JSON
			return response.json();
		})
		.then((data) => {
			// Извлекаем ссылку на изображение из JSON-объекта
			const imageUrl = data.message;
			// Создаем элемент <img>
			const imgElement = document.createElement("img");
			// Устанавливаем атрибут "src" равным ссылке на изображение
			imgElement.src = imageUrl;
			// Вставляем созданный элемент <img> в элемент с id "result10"
			resultElement.appendChild(imgElement);
		})
		.catch((error) => {
			// Обрабатываем ошибку
			console.log(error);
		});
	//Ваш код
}

document.querySelector(".b-10").addEventListener("click", makeTen);

//Задание 11
//Создайте функцию makeEleven, которая делает запрос на адрес "https://api.ipify.org?format=json". Полученный результат выведите в элемент с id "result11".

function makeEleven() {
	const resultElement = document.getElementById("result11");
	fetch("https://api.ipify.org?format=json")
		.then((response) => response.json())
		.then((data) => {
			resultElement.textContent = data.ip; //Ваш код
		})
		.catch((error) => {
			console.log("Ошибка:", error);
		});
}

document.querySelector(".b-11").addEventListener("click", makeEleven);

//Задание 12
//Создайте функцию makeTwelve, которая будет получать IP-адрес из поля ввода находить его гео-позицию.

function makeTwelve() {
	const ipAddress = document.querySelector("#ipAddress").value;
	const apiUrl = `https://api.ipgeolocationapi.com/geolocate/${ipAddress}`;
	fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => {
			const geolocation = JSON.stringify(data);
			document.querySelector("#result12").textContent = geolocation;
		})
		.catch((error) => {
			console.log(error);
		});
	//Ваш код
}

document.querySelector(".b-12").addEventListener("click", makeTwelve);

//Задание 13
//Создайте функцию makeThree, которая делает запрос на адрес 	fetch('https://official-joke-api.appspot.com/random_joke'). Выведите в консоль ответ с сервера, чтобы посмотреть, какие поля есть в ответе.

function makeThirteen() {
	fetch("https://official-joke-api.appspot.com/random_joke")
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
		});
	//Ваш код
}

//добавьте слушатель события
document.querySelector(".b-13").addEventListener("click", makeThirteen);
//Задание 14
//Создайте функцию makeFourteen, которая делает запрос на адрес https://official-joke-api.appspot.com/random_joke с помощью функции fetch() . Выведите на страницу информацию о шутке, используя поля "setup" и "punchline" из ответа сервера.

function makeFourteen() {
	fetch("https://official-joke-api.appspot.com/random_joke")
		.then((response) => response.json())
		.then((data) => {
			document.querySelector(
				"#result14"
			).innerHTML = `Setup: ${data.setup} <br/> Punchline: ${data.punchline}`;
			//Ваш код
		})
		.catch((error) => console.log("Ошибка:", error));
}

document.querySelector(".b-14").addEventListener("click", makeFourteen);

//Задание 15
//Создайте функцию makeFifteen, которая выполняет POST-запрос по адресу https://randomuser.me/api/, используя функцию fetch(). Выведите ответ от сервера в консоль.

function makeFifteen() {
	const postData = {
		title: "Книга",
		body: "Это лекарство души",
	};

	fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(postData), // конвертируем наш объект в JSON-строку
		//Ваш код
	})
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((error) => console.log("Ошибка:", error));
}

//добавьте слушатель события
document.querySelector(".b-15").addEventListener("click", makeFifteen);
//Задание 16
//Создайте функцию makeSixteen, которая должна сделать PUT-запрос на адрес https://jsonplaceholder.typicode.com/posts/1 с помощью функции fetch(). Выведите ответ с сервера в консоль.

function makeSixteen() {
	// Выполнение fetch-запроса к указанному URL
	fetch("https://jsonplaceholder.typicode.com/posts/1", {
		method: "PUT", // Запрос типа 'PUT'
		// Заголовки запроса
		headers: {
			// Указываем, что тело запроса будет в формате JSON
			"Content-Type": "application/json",
		},
		// Тело запроса. Здесь мы конвертируем объект в строку в формате JSON.
		body: JSON.stringify({
			title: "Василёк",
			body: "Символ чистоты, приветливости и учтивости",
		}),
	})
		// Используем Promise для обработки ответа от сервера.
		// Метод json() извлекает JSON из ответа.
		.then((response) => response.json())
		// Затем мы обрабатываем данные, полученные от сервера
		.then((data) => console.log(data)); // выводим в консоль
	//Ваш код
}

document.querySelector(".b-16").addEventListener("click", makeSixteen);

//Задание 17
//Создайте функцию makeSeventeen, которая должна сделать DELETE-запрос на адрес https://jsonplaceholder.typicode.com/posts/1 с помощью функции fetch(). Полученный ответ с сервера должен быть выведен в консоль.

const makeSeventeen = () => {
	// Выполнение fetch-запроса к указанному URL
	fetch("https://jsonplaceholder.typicode.com/posts/1", {
		// Указание метода запроса DELETE
		method: "DELETE",
	})
		.then((response) => response.json()) // Обработка ответа от сервера в формате JSON
		.then((data) => console.log(data)) // Обработка данных, полученных из JSON
		.catch((error) => console.log("Произошла ошибка:", error)); // Обработка ошибки, если она произошла в процессе запроса
};

//добавьте слушатель события
document.querySelector(".b-17").addEventListener("click", makeSeventeen);

//Задание 18
//Создайте функцию makeEighteen, которая должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/photos с помощью функции fetch(). ыведите ответ с сервера в консоль.

function makeEighteen() {
	const Foto = {
		title: "Бабочка голубая морфа",
		url: "https://web-zoopark.ru/wp-content/uploads/2018/06/1-668.jpg",
	};
	fetch("https://jsonplaceholder.typicode.com/photos", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(Foto),
	})
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((error) => console.log("Ошибка:", error));
	//Ваш код
}

document.querySelector(".b-18").addEventListener("click", makeEighteen);

//Задание 19
//Создайте функцию makeNineteen, которая должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/users с помощью функции fetch(). Выведите ответ с сервера в консоль.

function makeNineteen() {
	// Создаем объект Lion который содержит всю информацию о пользователе
	const Lion = {
		name: "Лев Толстой", // Устанавливаем имя пользователя
		username: "Lion", // Определяем имя пользователя
		email: "lion@example.com", // Задаем адрес электронной почты
		phone: "8-788-870-78-65", // Задаем номер телефона
	};

	fetch("https://jsonplaceholder.typicode.com/users", {
		method: "POST", // Указываем, что это POST-запрос
		headers: {
			"Content-Type": "application/json", // Задаем тип содержимого - JSON
		},
		body: JSON.stringify(Lion), // Преобразуем объект Lion в строку JSON для отправки на сервер
	})
		.then((response) => response.json()) // Обрабатываем полученный от сервера ответ и преобразуем его в JSON
		.then((data) => console.log(data)) // Выводим преобразованные данные в консоль
		.catch((error) => console.log("Ошибка:", error)); // Если произошла ошибка - выводим её в консоль
	//Ваш код
}

document.querySelector(".b-19").addEventListener("click", makeNineteen);

//Задание 20
//Создайте функцию makeTwenty, которая должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/comments с помощью функции fetch(). Выведите ответ с сервера в консоль.

function makeTwenty() {
	// Создаем объект Cat который содержит всю информацию о пользователе
	const Cat = {
		name: "Котёнок Гав", // Имя пользователя
		email: "cat@gmail.com", // Его электронная почта
		body: "Мяу-мяу!", // Текст сообщения
		postId: 1, // Идентификатор поста, к которому относится комментарий
	};
	// Затем выполняется HTTP-запрос с использованием метода fetch
	fetch("https://jsonplaceholder.typicode.com/comments", {
		method: "POST", // Указываем, что это POST-запрос
		headers: {
			// Заголовки, которые будут включены в HTTP-запрос
			"Content-Type": "application/json", // Задаем тип содержимого - JSON
		},
		body: JSON.stringify(Cat), // Преобразуем объект Cat в строку JSON для отправки на сервер
	})
		.then((response) => response.json()) // Обрабатываем ответ сервера и преобразуем его в формат JSON
		.then((data) => console.log(data)) // Выводим преобразованные данные в консоль
		.catch((error) => console.log("Ошибка:", error)); // Если произошла ошибка - выводим её в консоль
	//Ваш код
}

document.querySelector(".b-20").addEventListener("click", makeTwenty);

//Задание 21
//Создайте функцию makeTwentyOne, которая должна сделать PUT-запрос на адрес https://jsonplaceholder.typicode.com/comments/1 с помощью функции fetch(). Выведите ответ с сервера в консоль.

function makeTwentyOne() {
	const data = {
		name: "Золотая рыбка",
		email: "goldfish@example.com",
		body: "Буль-буль!",
		postId: 1,
	};

	fetch("https://jsonplaceholder.typicode.com/comments/1", {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((json) => console.log(json))
		.catch((error) => console.log(error));
	//Ваш код
}

document.querySelector(".b-21").addEventListener("click", makeTwentyOne);

//Задание 22
//Создайте функцию makePromiseAllOne, которая должна делать два GET-запроса на адреса: https://jsonplaceholder.typicode.com/posts/1, https://jsonplaceholder.typicode.com/comments/1. Используйте `.then()` для обработки результатов.
//Выведите оба ответа с сервера в консоль.

function makePromiseAllOne() {
	// Определение переменной "url1" с адресом для первого запроса.
	const url1 = "https://jsonplaceholder.typicode.com/posts/1";
	// Определение переменной "url2" с адресом для второго запроса.
	const url2 = "https://jsonplaceholder.typicode.com/comments/1";

	//Создание промиса "promise1" для выполнения запроса по адресу из "url1" и преобразования ответа в формат JSON.
	const promise1 = fetch(url1).then((response) => response.json());
	//Создание промиса "promise2" для выполнения запроса по адресу из "url2" и преобразования ответа в формат JSON.
	const promise2 = fetch(url2).then((response) => response.json());

	// Promise.all принимает массив промисов и возвращает новый промис, который выполнится, когда все промисы в массиве будут выполнены.
	Promise.all([promise1, promise2])
		.then((results) => {
			//Обработка успешного выполнения всех промисов в массиве "results".
			console.log(results[0]); // Ответ на первый запрос
			//Вывод в консоль ответа на первый запрос, доступного в "results[0]".
			console.log(results[1]); // Ответ на второй запрос
			//Вывод в консоль ответа на второй запрос, доступного в "results[1]".
		})
		.catch((error) => {
			console.log("Ошибка:", error);
		});
	//Ваш код
}

document.querySelector(".b-22").addEventListener("click", makePromiseAllOne);

//Задание 23
//Создайте функцию makePromiseAllTwo, которая должна делать три GET-запроса на адреса: https://jsonplaceholder.typicode.com/users/1, https://jsonplaceholder.typicode.com/posts/1, https://jsonplaceholder.typicode.com/comments/1.
//Используйте `async/await` для обработки результатов. Выведите все ответы с сервера в консоль.

async function makePromiseAllTwo() {
	// Используем блок try для обработки исключений (ошибок)
	try {
		// Отправляем сетевой запрос на указанный URL с помощью функции fetch
		const response1 = await fetch(
			"https://jsonplaceholder.typicode.com/users/1"
		);
		// Когда ответ получен, преобразуем его в JSON формат
		// fetch возвращает ответ в виде промиса, дожидаемся его выполнения через await
		const data1 = await response1.json();
		console.log(data1); // Выводим результат в консоль

		// Делаем то же самое для второго URL
		const response2 = await fetch(
			"https://jsonplaceholder.typicode.com/posts/1"
		);
		const data2 = await response2.json();
		console.log(data2);

		// И то же самое для третьего URL
		const response3 = await fetch(
			"https://jsonplaceholder.typicode.com/comments/1"
		);
		const data3 = await response3.json();
		console.log(data3);
		//Ваш код
	} catch (error) {
		console.log("Ошибка при выполнении запросов:", error);
	}
}

document.querySelector(".b-23").addEventListener("click", makePromiseAllTwo);

//Задание 24
//Какое имя выведется в консоль?

const makeTwentyFour = () => {
	let name = "Вася";
	function sayHi() {
		console.log(name);
	}

	setTimeout(function () {
		let name = "Петя";
		sayHi();
	}, 1000);
};
//Будет выведено в консоль "Вася".

//Функция sayHi использует значение переменной name, определённой в глобальной области видимости,
//то есть первую переменную name, которая равна "Вася".

//Внутри функции-коллбэка для setTimeout мы определяем ещё одну переменную name со значением "Петя",
//эта переменная является локальной и не имеет отношения к той, что используется в функции sayHi.
//Функция sayHi так и продолжит ссылаться на глобальную переменную name, равную "Вася".

//добавьте слушатель события
document.querySelector(".b-24").addEventListener("click", makeTwentyFour);

//Задание 25
//В каком порядке числа выведутся в консоль?

function makeTwentyFive() {
	console.log(1);

	//Cтавим таймер на 0 миллисекунд
	setTimeout(function () {
		console.log(2);
	}, 0);

	console.log(3);
}

//Внутри функции сначала будет выведено число 1 с помощью console.log(1).
//Затем будет установлен таймер с задержкой 0 миллисекунд (почти мгновенно).
//Переданный коллбэк внутри setTimeout не будет выполнен немедленно, а будет помещён в очередь событий.

//После этого будет выполнена console.log(3), выводящая число 3.

//Когда код будет завершён,то JS проверит, есть ли события в очереди.
//После этого будет выполнен коллбэк внутри setTimeout, который выведет число 2.

// В итоге порядок будет такой: 1, 3, 2

//добавьте слушатель события
document.querySelector(".b-25").addEventListener("click", makeTwentyFive);

//Задание 26
//Создайте функцию makeTwentySix, должна использовать `setTimeout` для отображения в консоли сообщения "Прошло 5 секунд" через 5 секунд. Вызывается функция по кнопке Задание 26.

function makeTwentySix() {
	setTimeout(() => {
		console.log("Прошло 5 секунд");
	}, 5000); //Устанавливаем таймер setTimeout на 5 секунд (5000 миллисекунд)
	//Ваш код
}

document.querySelector(".b-26").addEventListener("click", makeTwentySix);

//Задание 27
//Создайте функцию makeTwentySeven, должна использовать `setTimeout` для отображения в консоли сообщения "Прошло 2 секунды" через 2 секунды. Вызывается функция по кнопке Задание 27.

function makeTwentySeven() {
	setTimeout(function () {
		console.log("Прошло 2 секунды");
	}, 2000); //Устанавливаем таймер setTimeout на 2 секунды (2000 миллисекунд)
	//Ваш код
}

document.querySelector(".b-27").addEventListener("click", makeTwentySeven);

//Задание 28
//Создайте функцию makeTwentyEight, которая использует `setInterval` для отображения в консоли сообщения "Прошло 3 секунды" каждые 3 секунды.

function makeTwentyEight() {
	setInterval(function () {
		console.log("Прошло 3 секунды");
	}, 3000); // Устанавливаем интервал setInterval на 3 секунды (3000 миллисекунд) и выводится сообщение "Прошло 3 секунды" в консоль каждый раз, когда проходит указанное время.
	//Ваш код
}

document.querySelector(".b-28").addEventListener("click", makeTwentyEight);

//Задание 29
//Создайте функцию makeTwentyNine, которая использует `setInterval` для отображения в консоли сообщения "Прошло 2 секунды" каждые 2 секунды.

function makeTwentyNine() {
	setInterval(() => {
		console.log("Прошло 2 секунды");
	}, 2000);
	//Ваш код
}

document.querySelector(".b-29").addEventListener("click", makeTwentyNine);

//Задание 30
//Создайте функцию makeThirty, которая использует `setInterval` для отображения в консоли сообщения "Прошло 5 секунд" каждые 5 секунд.

function makeThirty() {
	setInterval(() => {
		console.log("Прошло 5 секунд");
	}, 5000);
	//Ваш код
}

document.querySelector(".b-30").addEventListener("click", makeThirty);
