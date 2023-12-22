PROJECT_NAME=flag-secops-hub
DOCKER_COMPOSE_FILE=docker-compose.yml
COMPOSE_PROJECT_NAME=$(PROJECT_NAME)

# Main targets
.PHONY: build up down restart status logs logs-api logs-db shell-api shell-db

## build: Build the docker images
build:
	docker-compose -f $(DOCKER_COMPOSE_FILE) build

## up: Start all services
up:
	docker-compose -f $(DOCKER_COMPOSE_FILE) up -d

## down: Stop all services
down:
	docker-compose -f $(DOCKER_COMPOSE_FILE) down

## restart: Restart all services
restart: down up

## status: Show status of containers
status:
	docker-compose -f $(DOCKER_COMPOSE_FILE) ps

## logs: Follow all container logs
logs:
	docker-compose -f $(DOCKER_COMPOSE_FILE) logs -f

# Additional utilities
.PHONY: clean prune

## clean: Remove all containers, networks, volumes, and images created by up
clean:
	docker-compose -f $(DOCKER_COMPOSE_FILE) down --rmi all --volumes --remove-orphans

## prune: Remove all unused containers, networks, images (both dangling and unreferenced), and optionally, volumes.
prune:
	docker system prune -af --volumes

## help: Print this help message
.PHONY: help
help:
	@echo "Makefile commands:"
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

