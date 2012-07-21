all: touch backup

touch:
	@touch db/

backup:
	@mongoexport -d urlshortener -c users > test/data/users.json

clean:
	@echo 'db.dropDatabase()' | mongo urlshortener

mocha:
	@mocha test
