#syntax=docker/dockerfile:experimental
FROM maven:latest AS appserver
WORKDIR /usr/src/app
VOLUME [ "/root/.m2" ]
COPY pom.xml .
RUN mvn -B -f pom.xml dependency:resolve
COPY . .
RUN --mount=type=cache,target=/root/.m2 mvn -B package -DskipTests

FROM openjdk:8-jdk-alpine 
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring
#ARG JAR_FILE=target/*.war
#COPY ${JAR_FILE} app.war
COPY --from=appserver /usr/src/app/target/docker-sample-1.0.0.war app.war
ENTRYPOINT ["java","-jar","/app.war"]