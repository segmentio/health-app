ESLINT := node_modules/.bin/eslint
MOCHA := node_modules/.bin/mocha

node_modules: package.json $(wildcard node_modules/*/package.json)
	@npm install
	@touch $@

install: node_modules

clean:
	rm -rf *.log
.PHONY: clean

distclean: clean
	rm -rf node_modules
.PHONY: distclean

fmt: install
	@$(ESLINT) --fix .
.PHONY: fmt

lint: install
	@$(ESLINT) .
.PHONY: lint

test-unit: install
	@$(MOCHA) \
		--timeout 10s \
		--reporter spec
.PHONY: test-unit

test: lint test-unit
.PHONY: test
.DEFAULT_GOAL = test
