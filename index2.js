// Функция для создания поста
function createPost(title, body) {
	// Если заголовок или тело поста пусты или содержат только пробелы, функция возвращает undefined и дальнейший код не выполняется
	if (!title.trim() || !body.trim()) {
		// Печатает предупреждение в консоли
		console.log("Заполните поля");
		return;
	}
	// создание POST-запроса с помощью Fetch API
	fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST", // метод POST
		body: JSON.stringify({
			// Тело запроса переводится в строку в формате JSON
			title: title, // Заголовок поста
			body: body, // Тело поста
		}),
		headers: {
			// Заголовки запроса указывают, что тело запроса — это JSON
			"Content-type": "application/json; charset=UTF-8",
		},
	}) // Когда получен ответ, он переводится из формата JSON в объект
		.then((response) => response.json())
		// Когда промис завершен, с его результатом вызывается следующая функция
		.then((json) => {
			// Создает новый элемент div
			const postElement = document.createElement("div");
			// Заполняет его HTML кодом поста
			postElement.innerHTML = `
        <h2>${json.title}</h2>
        <p>${json.body}</p>
      `;
			// Добавляет элемент на страницу
			document.getElementById("posts").appendChild(postElement);
		});
}

// Получаем элементы на странице
const postTitle = document.getElementById("input_post_title"); // Введенный заголовок поста
const postBody = document.getElementById("input_the_text_of_the_post"); // Введенное тело поста
const postButton = document.getElementById("button_create_a_post"); // Кнопка для создания поста

// Добавляем обработчик события клика для кнопки "Создать пост". При нажатии на кнопку будут собираться данные и отправлять новый пост
postButton.addEventListener("click", () => {
	// Вызываем функцию createPost с введенными значениями title и body
	createPost(postTitle.value, postBody.value);

	// Очищаем поля ввода после отправки
	postTitle.value = "";
	postBody.value = "";
});
