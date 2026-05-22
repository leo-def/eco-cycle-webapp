# Variables
NPM = npm

.PHONY: all
all: build

# Install dependencies
.PHONY: install
install:
	$(NPM) install

# Build the production bundle
.PHONY: build
build:
	$(NPM) run build

# Start local dev server
.PHONY: dev
dev:
	$(NPM) start

# Run unit tests
.PHONY: test
test:
	$(NPM) run test -- --watchAll=false

# Clean build folders
.PHONY: clean
clean:
	rm -rf build/ dist/
