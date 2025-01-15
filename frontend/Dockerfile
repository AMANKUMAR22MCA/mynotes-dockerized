# Step 1: Use the official Nginx image as the base image
FROM nginx:latest

# Step 2: Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Step 3: Remove the default Nginx HTML files
RUN rm -rf ./*

# Step 4: Copy the Vite build output (dist folder) into the Nginx HTML directory
COPY dist/ .

# Step 5: Copy a custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Step 6: Expose port 80 for HTTP traffic
EXPOSE 80

# Step 7: Start Nginx
CMD ["nginx", "-g", "daemon off;"]