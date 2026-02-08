# Step 1: Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Production stage (using Nginx)
FROM nginx:stable-alpine
# React/Vite default build folder is 'dist'. If using Create-React-App, change 'dist' to 'build'.
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
