# k8shello Spring Boot Application 
This is a simple show case for deploying a Hello world spring boot application on kubernetes.


## Prerequisites

- Minikube installed on your local machine. You can install Minikube by following the
  instructions [here](https://minikube.sigs.k8s.io/docs/start/).

## Deployment

### Step 1: Deploy Locally using Minikube

1. Ensure Minikube is running:

   ```bash
   minikube start
   ```

2. Apply the Kubernetes manifest file to create the necessary resources:
   ```bash
   kubectl apply -f kube
   ```

### Step 2: Access the Application

Once deployed, you can access the **k8shello** application running locally using Minikube.

   ```bash
minikube service k8shello --url
   ```
click on the url printed and access the application

## Troubleshooting

If you encounter any issues during deployment or while accessing the application, you can troubleshoot using the
following commands:

- Check the status of application pods:
  ```bash
  kubectl get pods
  ```


