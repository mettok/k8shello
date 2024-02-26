docker build -t k8shello-frontend .
docker tag k8shello-frontend mehdiz/k8shello-frontend:1.0.0
docker push mehdiz/k8shello-frontend:1.0.0