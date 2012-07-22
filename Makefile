all: touch start

start:
	@mongod --dbpath=db/

touch:
	@touch db/

export:
	@mongoexport -d urlshortener -c urls > test/data/urls.json

import:
	@mongoimport -d urlshortener -c urls test/data/urls.json

clean:
	@echo 'db.dropDatabase()' | mongo urlshortener

mocha:
	@mocha test
