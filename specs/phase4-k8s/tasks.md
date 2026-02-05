# Tasks: Phase IV - Local Kubernetes Deployment

**Input**: Design documents from `/specs/phase4-k8s/`
**Prerequisites**: Phases I, II, III implementation

## Phase 1: Containerization
- [ ] T001 Create `backend/Dockerfile`
- [ ] T002 Create `frontend/Dockerfile`
- [ ] T003 Create `.dockerignore` files for both
- [ ] T004 Build images and verify they run locally

---

## Phase 2: Helm Chart Development
- [ ] T005 Initialize Helm chart structure in `deploy/helm/todo-app`
- [ ] T006 Create K8s Deployment and Service templates for Backend
- [ ] T007 Create K8s Deployment and Service templates for Frontend
- [ ] T008 Setup ConfigMaps and Secrets for environment variables

---

## Phase 3: Minikube Deployment
- [ ] T009 Start Minikube and point shell to Minikube Docker daemon
- [ ] T010 Build images inside Minikube env
- [ ] T011 Run `helm install todo-app ./deploy/helm/todo-app`
- [ ] T012 Verify pods are `Running`

---

## Phase 4: Scaling & Reliability
- [ ] T013 Implement Horizontal Pod Autoscaler (HPA) for backend
- [ ] T014 Test pod restarts and service recovery
- [ ] T015 Verify external access via `minikube service`

---

## Phase 5: Verification (kubectl-ai)
- [ ] T016 Use `kubectl-ai` to inspect the cluster health
- [ ] T017 Document the deployment walkthrough
