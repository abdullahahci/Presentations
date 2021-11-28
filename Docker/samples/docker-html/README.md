## Sample demo for a simple html page in a Docker container
Builds the `React` code in a stage then copies the files that is built to an `Nginx` server

Can be accessed via [http://localhost](http://localhost)

###Usage
#### docker build -t nginxdemo .
#### docker run -d -p 80:80 nginxdemo