// Функция для создания HTML-разметки поста
function createPostHTML(post) {
	return `
	<div class="post">
	<h2>Заголовок: ${post.title}</h2> 
	<p>Статья: ${post.body}</p> 
	</div>
	`;
}

// Функция для добавления разметки в контейнер
function addPostToContainer(postHTML, container) {
	container.innerHTML += postHTML; // Добавляет созданную разметку поста в указанный контейнер
}

// Делаем GET запрос и добавляем посты на страницу
function fetchPosts() {
	const postsContainer = document.getElementById("posts-container"); // Получает контейнер для постов по его ID

	// Делаем GET запрос к JSONPlaceholder API
	fetch("https://jsonplaceholder.typicode.com/posts") // Отправляет GET запрос к API для получения постов
		.then((response) => {
			return response.json(); // Преобразует ответ в формат JSON
		})
		.then((posts) => {
			// Применяем функции для каждого поста
			posts.forEach((post) => {
				const postHTML = createPostHTML(post); // Создает HTML-разметку для каждого поста
				addPostToContainer(postHTML, postsContainer); // Добавляет разметку поста в контейнер
			});
		})
		.catch((error) => console.error("Ошибка получения данных:", error)); // Обрабатывает ошибку, если что-то идет не так при получении данных
}

// Вызываем функцию получения постов при загрузке страницы
window.onload = fetchPosts;
