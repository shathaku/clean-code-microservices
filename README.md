Install Ingress Controller:
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.5.1/deploy/static/provider/cloud/deploy.yaml

Apply the infra template:
kubectl apply -f infra

Port forwarding:
kubectl port-forward --namespace=ingress-nginx service/ingress-nginx-controller 8080:80

Other Commands:
kubectl get svc --namespace=ingress-nginx
kubectl get ingress 
kubectl describe ingress school-ingresss
kubectl get pods --namespace ingress-nginx 
kubectl get svc
kubectl cluster-info


docker tag school-students:latest shathaku/school-students:v2
docker tag school-teams:latest shathaku/school-teams:v2
docker push shathaku/school-students:v2
docker push shathaku/school-teams:v2