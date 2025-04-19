# Используем LTS Node.js
FROM node:20

# Устанавливаем Angular CLI
RUN npm install -g @angular/cli

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем всё остальное
COPY . .

# Открываем порт
EXPOSE 4200

# Команда по умолчанию
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
