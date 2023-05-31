// const form = document.querySelector(".workspace__input")
const fileInput = document.getElementById("file")
const btn = document.querySelector(".btn");
const status = document.querySelector(".workspace__right")


btn.addEventListener("click", async () => {
    if (fileInput.files.length === 0) {
        alert('Выберите файл');
        return;
    }

    status.textContent = "w8....";

    const file = fileInput.files[0];

    if (file) {
        // Создаем объект FormData и добавляем файл
        const formData = new FormData();
        formData.append('file', file);

        // Отправляем запрос на сервер
        try {
            const response = await fetch('/upload_file', {
                method: 'POST',
                body: formData,
            });

          if (response.ok) {
            // Обработка успешного ответа от сервера
            console.log('Файл успешно загружен');
            status.textContent = "2gether";
            // Здесь вы можете выполнить необходимые действия после успешной загрузки файла
          } else {
            // Обработка ошибки при загрузке файла
            console.error('Ошибка при загрузке файла');
          }
        } catch (error)
        {
            console.error('Ошибка при отправке запроса', error);
        }
    }

})