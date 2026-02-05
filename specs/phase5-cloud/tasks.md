# Tasks: Phase V - Advanced Cloud Deployment

**Input**: Design documents from `/specs/phase5-cloud/`
**Prerequisites**: Phase IV (Kubernetes & Containerization)

## Phase 1: Dapr Initialization
- [ ] T001 Install Dapr CLI and initialize Dapr in the cluster
- [ ] T002 Create a Redis state store component for Dapr
- [ ] T003 Annotate Backend and Frontend deployments for Dapr sidecars

---

## Phase 2: Event-Driven Logic (Kafka)
- [ ] T004 Deploy Kafka (or use a managed service)
- [ ] T005 Create Dapr PubSub component for Kafka
- [ ] T006 Update Backend to publish events on task creation
- [ ] T007 [NEW] Implement a sample `Analytics` microservice to consume Kafka events

---

## Phase 3: Resiliency & Observability
- [ ] T008 Implement Dapr Resiliency policies (retries/circuit breakers)
- [ ] T009 Setup Jaeger for distributed tracing
- [ ] T010 Verify tracing across Frontend -> Dapr -> Backend -> Dapr -> Kafka

---

## Phase 4: Cloud Deployment
- [ ] T011 Provision AKS/GKE cluster using Terraform
- [ ] T012 Update Helm charts for cloud-specific ingress (LoadBalancer)
- [ ] T013 Deploy all services to the cloud and verify with public URL

---

## Phase 5: Final Evaluation
- [ ] T014 Run load tests to verify HPA and Dapr resiliency
- [ ] T015 Final project walkthrough and documentation cleanup
