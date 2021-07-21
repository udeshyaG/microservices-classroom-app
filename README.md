# My Microservices Project

### [Click Here](https://lucid.app/lucidchart/invitations/accept/inv_f0ee79fc-296e-4ed6-b33d-ff46a0e353ad) to view the Architecture Diagrams

### Tech Used

- Kubernetes 🕸 (Container Orchestration)
- Docker 🐳 (Containerization)
- Node, Express JS (Backend)
- React ⚛ (Frontend)
- Postgres 🐘 (Database)
- Travis CI (Testing and Continuous Integration)

### Kubernetes Cluster
<img src="screenshots/classroom-k8s-arch.JPG" />

### Explanation
| Service       | Tech Used                                                               | Description                                                                                                                                                                                                              |
|---------------|-------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Client        | React JS Nginx                                                          | This is the frontend of the application. The client container has Nginx installed which serves the built react app from `build` folder.                                                                                  |
| Auth          | Node JS Postgres SQL                                                    | The auth service handles registration and login of users. It handles the requests to `/api/auth`.                                                                                                                        |
| Teachers      | Node JS Postgres SQL                                                    | This services handles all functionality related to teacher `/api/teachers`. It has a DB of its own which stores the student data redundantly. Hence even if the student or service goes down, it can function perfectly  |
| Students      | Node JS Postgres SQL                                                    | This service handles all functionality of a student `/api/students`. It has a DB which stores teachers data redundantly. Hence even if other services go down, it is not affected                                        |
| Ingress Nginx | [Ingress Nginx Controller](https://kubernetes.github.io/ingress-nginx/) | This is the gateway between the outside traffic and our Kubernetes cluster. It routes the traffic to the appropriate routes.                                                                                             |

---

### Microservices Architecture
<img src="screenshots/classroom-k8s-arch.JPG" />