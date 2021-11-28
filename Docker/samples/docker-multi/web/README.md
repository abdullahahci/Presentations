## Sample demo for a Spring project in a Docker container
Copies the war file to a java image then starts the application

Can be accessed via [http://localhost:8080](http://localhost:8080)

###Usage
#### docker build -t springdemo .
#### docker run -d -p 8080:8080 springdemo