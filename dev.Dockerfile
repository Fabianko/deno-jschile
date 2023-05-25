# Use the official Deno image from the Docker Hub
FROM denoland/deno:latest

# Set the working directory to /app
WORKDIR /app

# Copy the local file crud-mongo.ts to the container's working directory
COPY crud-mongo.ts .

# The port that the application listens to
EXPOSE 8000

# Run the application using Deno
CMD ["run", "--allow-net", "--allow-read", "--allow-write", "--unstable", "crud-mongo.ts"]
