.PHONY: docker-up

.docker-up:
	$(env) docker-compose -f "docker-compose.local.yml" up -d
