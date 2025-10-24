# React Express Microservice Application

A modern microservices application built with React frontend and Express.js backend services, designed for Kubernetes deployment. This project demonstrates a distributed architecture with separate services for different business domains.

## 🏗️ Architecture

The application follows a microservices architecture with the following components:

- **Frontend Service**: React application with Vite build system
- **Gateway Service**: API Gateway that aggregates data from backend services
- **Inventory Service**: Manages product inventory data
- **Order Service**: Handles order management

## 📁 Project Structure

```
├── react-frontend/          # React frontend application
│   ├── src/                # Source code
│   ├── conf/               # Nginx configuration
│   ├── Dockerfile          # Frontend container
│   └── frontend-*.yaml     # Kubernetes manifests
├── gateway-service/         # API Gateway service
│   ├── index.js            # Gateway logic
│   ├── Dockerfile          # Gateway container
│   └── gateway-*.yaml       # Kubernetes manifests
├── inventory-service/       # Inventory management service
│   ├── index.js            # Inventory logic
│   ├── Dockerfile          # Inventory container
│   └── inventory-*.yaml    # Kubernetes manifests
├── order-service/           # Order management service
│   ├── index.js            # Order logic
│   ├── Dockerfile          # Order container
│   └── order-*.yaml        # Kubernetes manifests
└── docker-compose.yaml     # Local development setup
```

## 🚀 Services Overview

### Frontend Service (React)

- **Port**: 80 (production), 5173 (development)
- **Technology**: React 19, Vite, Axios
- **Features**: Modern UI for displaying order summaries
- **Build**: Optimized production build with Nginx

### Gateway Service

- **Port**: 3000
- **Technology**: Express.js, Axios, CORS
- **Purpose**: API Gateway that aggregates data from backend services
- **Endpoint**: `/summary` - Combines order and inventory data

### Inventory Service

- **Port**: 5001
- **Technology**: Express.js
- **Purpose**: Manages product inventory
- **Endpoint**: `/inventory` - Returns product stock information

### Order Service

- **Port**: 5002
- **Technology**: Express.js
- **Purpose**: Handles order management
- **Endpoint**: `/orders` - Returns order information

## 🛠️ Technology Stack

### Frontend

- **React 19.1.1** - Modern React with latest features
- **Vite 7.1.7** - Fast build tool and dev server
- **Axios 1.12.2** - HTTP client for API calls
- **ESLint** - Code linting and formatting

### Backend

- **Node.js** - Runtime environment
- **Express.js 5.1.0** - Web framework
- **Axios 1.12.2** - HTTP client for service communication
- **CORS 2.8.5** - Cross-origin resource sharing

### DevOps & Deployment

- **Docker** - Containerization
- **Kubernetes** - Container orchestration
- **Docker Compose** - Local development environment
- **Nginx** - Web server for frontend

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose
- Kubernetes cluster (for production deployment)

### Local Development with Docker Compose

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd react-express-microservice-app
   ```

2. **Start all services**

   ```bash
   docker-compose up --build
   ```

3. **Access the application**
   - Frontend: http://localhost:80
   - Gateway API: http://localhost:3000
   - Inventory API: http://localhost:5001
   - Order API: http://localhost:5002

### Individual Service Development

#### Frontend Development

```bash
cd react-frontend
npm install
npm run dev
```

#### Backend Services Development

```bash
# Gateway Service
cd gateway-service
npm install
node index.js

# Inventory Service
cd inventory-service
npm install
node index.js

# Order Service
cd order-service
npm install
node index.js
```

## 🐳 Docker Deployment

### Build Images

```bash
# Build all services
docker-compose build

# Build individual services
docker build -t gateway-service ./gateway-service
docker build -t inventory-service ./inventory-service
docker build -t order-service ./order-service
docker build -t react-frontend ./react-frontend
```

### Run with Docker Compose

```bash
docker-compose up -d
```

## ☸️ Kubernetes Deployment

### Prerequisites

- Kubernetes cluster
- kubectl configured

### Deploy to Kubernetes

```bash
# Deploy all services
kubectl apply -f gateway-service/gateway-deployment.yaml
kubectl apply -f gateway-service/gateway-service.yaml
kubectl apply -f inventory-service/inventory-deployment.yaml
kubectl apply -f inventory-service/inventory-service.yaml
kubectl apply -f order-service/order-deployment.yaml
kubectl apply -f order-service/order-service.yaml
kubectl apply -f react-frontend/frontend-deployment.yaml
kubectl apply -f react-frontend/frontend-service.yaml
```

### Check Deployment Status

```bash
kubectl get pods
kubectl get services
```

## 📊 API Endpoints

### Gateway Service

- `GET /summary` - Returns combined order and inventory data

### Inventory Service

- `GET /inventory` - Returns product inventory list

### Order Service

- `GET /orders` - Returns order list

## 🔧 Configuration

### Environment Variables

The services use default configurations. For production, consider adding:

- Database connection strings
- API keys and secrets
- Logging configurations
- Monitoring endpoints

### CORS Configuration

The gateway service is configured with permissive CORS settings for development. For production, restrict origins appropriately.

## 🧪 Testing

### Manual Testing

1. Start all services using Docker Compose
2. Access the frontend at http://localhost:80
3. Verify the order summary table displays correctly
4. Check individual service endpoints

### API Testing

```bash
# Test Gateway
curl http://localhost:3000/summary

# Test Inventory
curl http://localhost:5001/inventory

# Test Orders
curl http://localhost:5002/orders
```

## 🚀 Production Considerations

### Security

- Implement proper authentication and authorization
- Use HTTPS in production
- Restrict CORS origins
- Add input validation and sanitization

### Monitoring

- Add health check endpoints
- Implement logging and monitoring
- Set up alerting for service failures

### Scalability

- Configure horizontal pod autoscaling
- Use load balancers for high availability
- Implement circuit breakers for resilience

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 🆘 Troubleshooting

### Common Issues

1. **Port conflicts**: Ensure ports 80, 3000, 5001, 5002 are available
2. **CORS errors**: Check gateway service CORS configuration
3. **Service communication**: Verify service names and ports in Kubernetes
4. **Build failures**: Ensure Docker is running and has sufficient resources

### Debug Commands

```bash
# Check Docker containers
docker ps

# View container logs
docker-compose logs [service-name]

# Check Kubernetes pods
kubectl logs [pod-name]

# Test service connectivity
kubectl exec -it [pod-name] -- curl [service-url]
```

## 📞 Support

For issues and questions, please create an issue in the repository or contact the development team.
