mvn clean install
docker build -t k8shello-backend .
docker tag k8shello-backend mehdiz/k8shello-backend:1.0.0
docker push mehdiz/k8shello-backend:1.0.0